import { createRequire } from "module";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const areasData = JSON.parse(readFileSync(join(__dirname, "src/_data/areas.json"), "utf-8"));

// 15業種スラッグ（AEO-PLAYBOOK 正本）
const CATEGORY_SLUGS = {
  "高級ホテル・ホテルラウンジ": "hotel-lounge",
  "温泉旅館・高級旅館": "onsen-ryokan",
  "貸切ヴィラ・一棟貸しの宿": "villa-rental",
  "レストラン・ダイニング": "restaurant-dining",
  "カフェ・スペシャルティコーヒー": "cafe-specialty-coffee",
  "バー・ウイスキー・カクテル": "bar-whiskey",
  "スパ・サウナ・ウェルネス施設": "spa-sauna-wellness",
  "高級サロン・プライベート": "premium-salon",
  "コワーキング・シェアオフィス": "coworking",
  "会員制ラウンジ・クラブ": "members-lounge",
  "山・自然体験・グランピング": "nature-glamping",
  "リトリート・禅体験": "retreat-zen",
  "神社・寺院・パワースポット": "shrine-temple",
  "インバウンド観光・体験施設": "inbound-experience",
  "文化・スポーツ・レジャー施設": "culture-sports-leisure",
};

const GRADE_SLUGS = {
  "Certified": "certified",
  "Silver": "silver",
  "Gold": "gold",
  "Platinum": "platinum",
  "Flagship": "flagship",
};

const AXES_SLUGS = {
  "居心地・空間品質": "comfort",
  "静寂性・プライバシー": "silence",
  "特別感・非日常性": "special",
  "再訪・継続価値": "revisit",
  "インバウンド・多言語対応": "inbound",
  "記録・シェア体験": "record",
  "ストーリー・背景への共感": "story",
};

const GRADE_ORDER = ["Certified", "Silver", "Gold", "Platinum", "Flagship"];

// 記事カテゴリ（CLAUDE.md 固定8種）
const ARTICLE_TAG_ORDER = [
  "カフェ", "ホテル", "スパ・サウナ", "コワーキング",
  "レストラン", "ウェルネス", "認証レポート", "AEO・メディア戦略",
];

export default function (eleventyConfig) {

  // ==== Passthrough ====
  eleventyConfig.addPassthroughCopy("src/assets");

  // ==== Slug filters ====
  eleventyConfig.addFilter("categorySlug", (cat) => CATEGORY_SLUGS[cat] || cat);
  eleventyConfig.addFilter("gradeSlug", (grade) => GRADE_SLUGS[grade] || grade.toLowerCase());
  eleventyConfig.addFilter("axisSlug", (axis) => AXES_SLUGS[axis] || axis);
  eleventyConfig.addFilter("tagSlug", (tag) => CATEGORY_SLUGS[tag] || tag); // backward compat

  // ==== Global slug maps ====
  eleventyConfig.addGlobalData("gradeOrder", GRADE_ORDER);
  eleventyConfig.addGlobalData("categorySlugs", CATEGORY_SLUGS);

  // ==== Grade utilities ====
  eleventyConfig.addFilter("gradeOrder", (grade) => GRADE_ORDER.indexOf(grade));

  // ==== Venue filters ====
  eleventyConfig.addFilter("venuesByArea", (venues, prefSlug, citySlug, areaSlug) => {
    return (venues || []).filter(v => {
      if (v.published === false) return false;
      const a = v.area_primary;
      if (!a) return false;
      if (prefSlug && a.prefecture_slug !== prefSlug) return false;
      if (citySlug && a.city_slug !== citySlug) return false;
      if (areaSlug && a.area_slug !== areaSlug) return false;
      return true;
    });
  });

  eleventyConfig.addFilter("venuesByCategory", (venues, categorySlug) =>
    (venues || []).filter(v => v.category_slug === categorySlug && v.published !== false)
  );

  eleventyConfig.addFilter("venuesByGrade", (venues, gradeSlug) =>
    (venues || []).filter(v => v.grade_slug === gradeSlug && v.published !== false)
  );

  eleventyConfig.addFilter("publishedVenues", (venues) =>
    (venues || []).filter(v => v.published !== false)
  );

  eleventyConfig.addFilter("venuesWithEn", (venues) =>
    (venues || []).filter(v => v.has_en && v.published !== false)
  );

  eleventyConfig.addFilter("sortByGrade", (venues) =>
    [...(venues || [])].sort((a, b) =>
      GRADE_ORDER.indexOf(b.grade) - GRADE_ORDER.indexOf(a.grade)
    )
  );

  // 現在のslugを除外（同エリア・関連店舗一覧用）
  eleventyConfig.addFilter("rejectSlug", (venues, slug) =>
    (venues || []).filter(v => v.slug !== slug)
  );

  // 配列から指定プロパティの値を取り出す
  eleventyConfig.addFilter("mapProp", (array, prop) =>
    (array || []).map(item => item[prop]).filter(Boolean)
  );

  // 重複排除
  eleventyConfig.addFilter("uniqueValues", (array) =>
    [...new Set(array || [])]
  );

  // プロパティ値でグルーピング → [{key, items}] の配列を返す
  eleventyConfig.addFilter("groupByProp", (array, prop) => {
    const groups = new Map();
    for (const item of (array || [])) {
      const key = item[prop] || "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    }
    return [...groups.entries()].map(([key, items]) => ({ key, items }));
  });

  // エリア×業種で絞り込む（ハブ → 同面の店舗取得用）
  eleventyConfig.addFilter("venuesByHub", (venues, prefSlug, citySlug, areaSlug, categorySlug) =>
    (venues || []).filter(v =>
      v.published !== false &&
      v.area_primary.prefecture_slug === prefSlug &&
      v.area_primary.city_slug === citySlug &&
      v.area_primary.area_slug === areaSlug &&
      v.category_slug === categorySlug
    )
  );

  // スコア軸の最低値でフィルタ（FAQの軸別回答生成用）
  eleventyConfig.addFilter("venuesByMinScore", (venues, axis, minScore) =>
    (venues || []).filter(v => v.scores && v.scores[axis] >= minScore)
  );

  // 「名前（グレード）」形式のカンマ区切り文字列を生成（JSON-LD内テキスト用）
  eleventyConfig.addFilter("venuesToAnswerText", (venues) =>
    (venues || []).map(v => `${v.name}（${v.grade}認証）`).join("、")
  );

  // 軸別スコア付き回答テキスト
  eleventyConfig.addFilter("venuesToScoreText", (venues, axis, axisName) =>
    (venues || []).map(v => `${v.name}（${axisName}${v.scores ? v.scores[axis] : ""}点・${v.grade}）`).join("、")
  );

  // ==== 記事フィルター ====
  eleventyConfig.addFilter("relatedPosts", (collection, currentUrl, currentTags) => {
    const tags = (currentTags || []).filter(t => t !== "articles");
    return (collection || [])
      .filter(p => p.url !== currentUrl)
      .map(p => {
        const pTags = (p.data.tags || []).filter(t => t !== "articles");
        const score = pTags.filter(t => tags.includes(t)).length;
        return { post: p, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || b.post.date - a.post.date)
      .slice(0, 3)
      .map(({ post }) => post);
  });

  eleventyConfig.addFilter("prevPost", (collection, currentUrl) => {
    const idx = (collection || []).findIndex(p => p.url === currentUrl);
    return idx < collection.length - 1 ? collection[idx + 1] : null;
  });

  eleventyConfig.addFilter("nextPost", (collection, currentUrl) => {
    const idx = (collection || []).findIndex(p => p.url === currentUrl);
    return idx > 0 ? collection[idx - 1] : null;
  });

  // ==== 日付フィルター ====
  eleventyConfig.addFilter("dateJa", (date) => {
    const d = new Date(date);
    const jst = new Date(d.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
    return `${jst.getFullYear()}年${jst.getMonth() + 1}月${jst.getDate()}日`;
  });

  eleventyConfig.addFilter("dateISO", (date) => {
    const d = new Date(date);
    const jst = new Date(d.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
    const y = jst.getFullYear();
    const m = String(jst.getMonth() + 1).padStart(2, "0");
    const day = String(jst.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  });

  eleventyConfig.addFilter("dateToRfc2822", (date) => new Date(date).toUTCString());

  eleventyConfig.addFilter("head", (array, n) => (array || []).slice(0, n));

  eleventyConfig.addFilter("rejectLang", (array, lang) =>
    (array || []).filter(item => item.data && item.data.lang !== lang)
  );

  eleventyConfig.addFilter("selectLang", (array, lang) =>
    (array || []).filter(item => item.data && item.data.lang === lang)
  );

  eleventyConfig.addFilter("rejectCategory", (array, categorySlug) =>
    (array || []).filter(item => item.data && item.data.category_slug !== categorySlug)
  );

  eleventyConfig.addFilter("imageDimensions", (thumbnailPath) => {
    const fallback = { width: 800, height: 450 };
    if (!thumbnailPath) return fallback;
    try {
      const filePath = join(__dirname, "public", thumbnailPath.replace(/^\//, ""));
      const buf = readFileSync(filePath);
      if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return fallback;
      const fourcc = buf.toString("ascii", 12, 16);
      if (fourcc === "VP8 ") {
        return { width: buf.readUInt16LE(26) & 0x3FFF, height: buf.readUInt16LE(28) & 0x3FFF };
      }
      if (fourcc === "VP8L") {
        const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
        return {
          width: 1 + (((b1 & 0x3F) << 8) | b0),
          height: 1 + (((b3 & 0xF) << 10) | (b2 << 2) | ((b1 & 0xC0) >> 6)),
        };
      }
      if (fourcc === "VP8X") {
        return {
          width: 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16)),
          height: 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16)),
        };
      }
      return fallback;
    } catch (e) {
      return fallback;
    }
  });

  eleventyConfig.addFilter("extractFAQ", (content) => {
    if (!content) return [];
    const items = [];
    const regex = /<strong>(Q\.[^<]+)<\/strong><br\s*\/?>([\s\S]*?)<\/p>/gi;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const q = match[1].trim();
      const a = match[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      if (q && a) items.push({ q, a });
    }
    return items;
  });

  eleventyConfig.addFilter("jsonify", (obj) => JSON.stringify(obj));

  eleventyConfig.addFilter("findCategoryBySlug", (categories, slug) =>
    (categories || []).find(c => c.slug === slug) || null
  );

  eleventyConfig.addFilter("findVenueBySlug", (venues, slug) =>
    (venues || []).find(v => v.slug === slug) || null
  );

  eleventyConfig.addFilter("urlencode", (str) => encodeURIComponent(str || ""));

  // エリア階層情報取得（area_slug → 都道府県・市区町村・エリア情報）
  eleventyConfig.addFilter("areaInfo", (areaSlug) => {
    if (!areaSlug) return null;
    for (const pref of areasData) {
      for (const city of pref.cities) {
        const area = city.areas.find(a => a.slug === areaSlug);
        if (area) {
          return {
            prefSlug: pref.slug, prefName: pref.name,
            citySlug: city.slug, cityName: city.name,
            areaSlug: area.slug, areaName: area.name,
            prefUrl: `/stories/area/${pref.slug}/`,
            cityUrl: `/stories/area/${pref.slug}/${city.slug}/`,
            areaUrl: `/stories/area/${pref.slug}/${city.slug}/${area.slug}/`,
          };
        }
      }
    }
    return null;
  });

  // 市区町村名から階層情報取得（area_slugなしのエリアピラー記事用）
  eleventyConfig.addFilter("cityInfo", (cityName) => {
    if (!cityName) return null;
    for (const pref of areasData) {
      const city = pref.cities.find(c => c.name === cityName);
      if (city) {
        return {
          prefSlug: pref.slug, prefName: pref.name,
          citySlug: city.slug, cityName: city.name,
          prefUrl: `/stories/area/${pref.slug}/`,
          cityUrl: `/stories/area/${pref.slug}/${city.slug}/`,
        };
      }
    }
    return null;
  });

  eleventyConfig.addFilter("wordCount", (content) => {
    if (!content) return 0;
    const text = content.replace(/<[^>]*>/g, "");
    const cjkChars = (text.match(/[\u3040-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/g) || []).length;
    const latinWords = text.replace(/[\u3040-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/g, " ").split(/\s+/).filter(Boolean).length;
    return cjkChars + latinWords;
  });

  eleventyConfig.addFilter("cleanKeywords", (tags) => {
    const systemTags = ["articles", "feature", "story"];
    return [...new Set(tags || [])].filter(t => !systemTags.includes(t)).join(", ");
  });

  eleventyConfig.addFilter("relatedPostsByCat", (collection, currentUrl, categorySlug, limit) => {
    const n = limit || 3;
    const sameCat = (collection || [])
      .filter(p => p.url !== currentUrl && p.data.category_slug === categorySlug);
    if (sameCat.length >= n) return sameCat.slice(0, n);
    const others = (collection || [])
      .filter(p => p.url !== currentUrl && p.data.category_slug !== categorySlug);
    return [...sameCat, ...others].slice(0, n);
  });

  eleventyConfig.addFilter("articlesByCategory", (collection, categorySlug) =>
    (collection || [])
      .filter(p => p.data.category_slug === categorySlug)
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("articlesByArea", (collection, areaSlug) =>
    (collection || [])
      .filter(p => p.data.area_slug === areaSlug)
      .sort((a, b) => b.date - a.date)
  );

  // 都道府県レベルの記事取得（都道府県内の全エリアslug・市区町村名に一致する記事を最新順で返す）
  eleventyConfig.addFilter("articlesByPrefecture", (collection, prefSlug, limit) => {
    if (!collection) return [];
    const n = limit || 6;
    const areaSlugs = new Set();
    const cityNames = new Set();
    for (const pref of areasData) {
      if (pref.slug !== prefSlug) continue;
      for (const city of pref.cities) {
        cityNames.add(city.name);
        (city.areas || []).forEach(a => areaSlugs.add(a.slug));
      }
      break;
    }
    return collection
      .filter(p =>
        (p.data.area_slug && areaSlugs.has(p.data.area_slug)) ||
        (p.data.area_name && cityNames.has(p.data.area_name))
      )
      .sort((a, b) => b.date - a.date)
      .slice(0, n);
  });

  // 市区町村レベルの記事取得（area_slugが市内エリアに一致、またはarea_nameが市区町村名に一致）
  eleventyConfig.addFilter("articlesByCity", (collection, prefSlug, citySlug) => {
    if (!collection) return [];
    // 対象市区町村内の全エリアslugを収集
    const areaSlugs = new Set();
    let cityName = "";
    for (const pref of areasData) {
      if (pref.slug !== prefSlug) continue;
      const city = pref.cities.find(c => c.slug === citySlug);
      if (!city) break;
      cityName = city.name;
      (city.areas || []).forEach(a => areaSlugs.add(a.slug));
      break;
    }
    return collection
      .filter(p =>
        (p.data.area_slug && areaSlugs.has(p.data.area_slug)) ||
        (p.data.area_name && p.data.area_name === cityName)
      )
      .sort((a, b) => b.date - a.date);
  });

  // ==== Collections ====
  eleventyConfig.addCollection("articles", (api) =>
    api.getFilteredByTag("articles").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("features", (api) =>
    api.getFilteredByTag("feature").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("stories", (api) =>
    api.getFilteredByTag("story").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("aboutArticles", (api) =>
    api.getAll()
      .filter(p => p.data.category_slug === "about" && (p.data.tags || []).includes("articles"))
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("tagList", (api) => {
    const tagSet = new Set();
    api.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (!["articles", "feature", "story"].includes(tag)) tagSet.add(tag);
      });
    });
    return [...tagSet].sort((a, b) => {
      const ai = ARTICLE_TAG_ORDER.indexOf(a);
      const bi = ARTICLE_TAG_ORDER.indexOf(b);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
  });

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
