import { createRequire } from "module";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const require = createRequire(import.meta.url);
const areas = require("./areas.json");
const venues = require("./venues.json");
const matter = require("gray-matter");

const __dirname = dirname(fileURLToPath(import.meta.url));

// エリア情報の逆引きマップを構築（area_slug → { prefecture, city }）
const areaMap = new Map();
for (const prefecture of areas) {
  for (const city of (prefecture.cities || [])) {
    for (const area of (city.areas || [])) {
      areaMap.set(area.slug, { prefecture, city });
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

// 記事の city_slug × category_slug の組み合わせを収集（area_slugからcity_slugを逆引き）
const articleCombos = new Map(); // key: "pref_slug::city_slug::cat_slug"
for (const filePath of mdFiles) {
  try {
    const { data } = matter(readFileSync(filePath, "utf-8"));
    if (data.area_slug && data.category_slug && data.category_slug !== "about") {
      const info = areaMap.get(data.area_slug);
      if (!info) continue;
      const key = `${info.prefecture.slug}::${info.city.slug}::${data.category_slug}`;
      if (!articleCombos.has(key)) {
        articleCombos.set(key, {
          prefSlug: info.prefecture.slug,
          citySlug: info.city.slug,
          catSlug: data.category_slug,
          prefecture: info.prefecture,
          city: info.city,
        });
      }
    }
  } catch (e) {
    // 読み込みエラーはスキップ
  }
}

// 会場ベースのエントリを生成（city × category）
const venueEntries = areas.flatMap(prefecture =>
  (prefecture.cities || []).flatMap(city => {
    const cityVenues = venues.filter(v =>
      v.published !== false &&
      v.area_primary.prefecture_slug === prefecture.slug &&
      v.area_primary.city_slug === city.slug
    );
    const categoryMap2 = new Map();
    for (const v of cityVenues) {
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
      category,
      venues: cityVenues.filter(v => v.category_slug === category.slug),
    }));
  })
);

// 既存エントリのキーセット
const existingKeys = new Set(
  venueEntries.map(e => `${e.prefecture.slug}::${e.city.slug}::${e.category.slug}`)
);

// 記事ベースのエントリを追加（venueエントリが存在しない組み合わせのみ）
const articleEntries = [];
for (const [key, { catSlug, prefecture, city }] of articleCombos) {
  if (existingKeys.has(key)) continue;
  const cat = categoryMap.get(catSlug);
  if (!cat) continue;
  articleEntries.push({
    prefecture,
    city,
    category: { slug: cat.slug, name_ja: cat.name_ja },
    venues: [],
  });
}

export default [...venueEntries, ...articleEntries];
