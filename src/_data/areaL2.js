import { createRequire } from "module";
const require = createRequire(import.meta.url);
const areas = require("./areas.json");

// L2: (prefecture, city) のフラット配列 → /journal/area/{pref}/{city}/
export default areas.flatMap(prefecture =>
  (prefecture.cities || []).map(city => ({ prefecture, city }))
);
