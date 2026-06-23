import { createRequire } from "module";
const require = createRequire(import.meta.url);
const areas = require("./areas.json");

// L3: (prefecture, city, area) のフラット配列 → /journal/area/{pref}/{city}/{area}/
export default areas.flatMap(prefecture =>
  (prefecture.cities || []).flatMap(city =>
    (city.areas || []).map(area => ({ prefecture, city, area }))
  )
);
