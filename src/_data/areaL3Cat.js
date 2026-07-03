import { createRequire } from "module";
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const require = createRequire(import.meta.url);
const areas = require("./areas.json");
const venues = require("./venues.json");
const matter = require("gray-matter");

const __dirname = dirname(fileURLToPath(import.meta.url));

// エリア情報の逆引きマップを構築
const areaMap = new Map(); // area_slug → { prefecture, city, area }
for (const prefecture of areas) {
  for (const city of (prefecture.cities || [])) {
    for (const area of (city.areas || [])) {
      areaMap.set(area.slug, { prefecture, city, area });
    }
  }
}

// カテゴリ情報の取得
const categories = require("./categories.json");
const categoryMap = new Map(categories.map(c => [c.slug, c]));

// src/stories/ 配下の全mdファイルを再帰的に取得
function getMdFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getMdFiles(fullPath));
    } else if (entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

const storiesDir = join(__dirname, "../stories");
const mdFiles = getMdFiles(storiesDir);

// 記事のarea_slug × category_slug の組み合わせを収集
const articleCombos = new Map(); // key: "area_slug::cat_slug" → { areaSlug, catSlug }
for (const filePath of mdFiles) {
  try {
    const { data } = matter(readFileSync(filePath, "utf-8"));
    if (data.area_slug && data.category_slug && data.category_slug !== "about") {
      const key = `${data.area_slug}::${data.category_slug}`;
      if (!articleCombos.has(key)) {
        articleCombos.set(key, { areaSlug: data.area_slug, catSlug: data.category_slug });
      }
    }
  } catch (e) {
    // 読み込みエラーはスキップ
  }
}

// 会場ベースのエントリを生成（従来ロジック）
const venueEntries = areas.flatMap(prefecture =>
  (prefecture.cities || []).flatMap(city =>
    (city.areas || []).flatMap(area => {
      const areaVenues = venues.filter(v =>
        v.published !== false &&
        v.area_primary.prefecture_slug === prefecture.slug &&
        v.area_primary.city_slug === city.slug &&
        v.area_primary.area_slug === area.slug
      );
      const categoryMap2 = new Map();
      for (const v of areaVenues) {
        if (!categoryMap2.has(v.category_slug)) {
          categoryMap2.set(v.category_slug, {
            slug: v.category_slug,
            name_ja: v.category,
          });
        }
      }
      return [...categoryMap2.values()].map(category => ({
        prefecture,
        city,
        area,
        category,
        venues: areaVenues.filter(v => v.category_slug === category.slug),
      }));
    })
  )
);

// 既存エントリのキーセット
const existingKeys = new Set(
  venueEntries.map(e => `${e.area.slug}::${e.category.slug}`)
);

// 記事ベースのエントリを追加（venueエントリが存在しない組み合わせのみ）
const articleEntries = [];
for (const [key, { areaSlug, catSlug }] of articleCombos) {
  if (existingKeys.has(key)) continue;
  const areaInfo = areaMap.get(areaSlug);
  if (!areaInfo) continue;
  const cat = categoryMap.get(catSlug);
  if (!cat) continue;
  articleEntries.push({
    prefecture: areaInfo.prefecture,
    city: areaInfo.city,
    area: areaInfo.area,
    category: { slug: cat.slug, name_ja: cat.name_ja },
    venues: [], // 記事ベースのエントリは店舗なし
  });
}

export default [...venueEntries, ...articleEntries];
