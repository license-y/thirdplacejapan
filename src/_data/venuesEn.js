import { createRequire } from "module";
const require = createRequire(import.meta.url);
const venues = require("./venues.json");

// 英語版ページを生成する店舗のみ
export default venues.filter(v => v.has_en && v.published !== false);
