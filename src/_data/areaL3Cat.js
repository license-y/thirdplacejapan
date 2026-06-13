import { createRequire } from "module";
const require = createRequire(import.meta.url);
const areas = require("./areas.json");
const venues = require("./venues.json");

// L3×業種: 実際に店舗が存在するエリア×カテゴリの組み合わせのみ生成
// → /journal/area/{pref}/{city}/{area}/{category}/
export default areas.flatMap(prefecture =>
  (prefecture.cities || []).flatMap(city =>
    (city.areas || []).flatMap(area => {
      const areaVenues = venues.filter(v =>
        v.published !== false &&
        v.area_primary.prefecture_slug === prefecture.slug &&
        v.area_primary.city_slug === city.slug &&
        v.area_primary.area_slug === area.slug
      );
      const categoryMap = new Map();
      for (const v of areaVenues) {
        if (!categoryMap.has(v.category_slug)) {
          categoryMap.set(v.category_slug, {
            slug: v.category_slug,
            name_ja: v.category,
          });
        }
      }
      return [...categoryMap.values()].map(category => ({
        prefecture,
        city,
        area,
        category,
        venues: areaVenues.filter(v => v.category_slug === category.slug),
      }));
    })
  )
);
