import { createRequire } from "module";
const require = createRequire(import.meta.url);
const areas = require("./areas.json");

// L3: (prefecture, city, area) のフラット配列 → /journal/area/{pref}/{city}/{area}/
const flat = areas.flatMap(prefecture =>
  (prefecture.cities || []).flatMap(city =>
    (city.areas || []).map(area => ({ prefecture, city, area }))
  )
);

// 区境をまたいで同名のエリアが複数存在する場合、title/H1で区名を併記して重複を避けるためのフラグ
const nameCounts = {};
for (const item of flat) {
  nameCounts[item.area.name] = (nameCounts[item.area.name] || 0) + 1;
}

export default flat.map(item => ({
  ...item,
  areaNameDuplicate: nameCounts[item.area.name] > 1,
}));
