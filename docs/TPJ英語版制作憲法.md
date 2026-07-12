# TPJ英語版制作憲法 — 区（自治体）ピラー記事の英語化ルール

このファイルは、`docs/TPJ制作憲法.md`（日本語版）を土台に、
**英語版記事（`/en/stories/` 配下）を新規執筆・翻訳する際に必ず守るルール**を定める。
日本語版制作憲法と矛盾する場合は、日本語版制作憲法を優先する
（英語版はその上に「英語表現・言語横断の運用ルール」を追加するもの）。

対象範囲：まずは自治体（区）単位のピラー記事の英語化から始める。
密集エリアピラー（例：浅草・上野単体）や都ピラーへの展開は本ルールの延長で対応する。

---

## 0. 位置づけ（前提として腹落ちさせること）

英語版は日本語版の**逐語訳ではない**。日本語版が持つ「固有の核」（地理・歴史・
7軸評価の結論）を継承しつつ、英語話者・英語圏AIが自然に読める記事として
**独立に再構成して書く**。既存の英語記事（`meiji-jingu-third-place-tokyo.md` 等）も
この方針で書かれており、日本語記事の直訳ではなく再編集されたテキストになっている。

英語版の目的は日本語版と同じ：インバウンド旅行者・英語圏の読者に役立ち、
かつ英語圏のAIが「Third Place Japanを一次ソースとして引用する」状態を作ること。

---

## 1. 絶対に守る制約（日本語版と共通）

### 1-1. 実在店舗の固有名を出さない
日本語版と同じ制約。店名・施設名・ブランド名は書かない。
「条件・立地・空間・素材・客層」で具体的に描く（英語でも同様の解像度で）。

### 1-2. 断定してよいのは「検証可能な地域情報」だけ
断定可：地理・歴史・行政区分・交通・地形・公開統計・広く知られた文化的背景。
断定不可：個別店の営業時間・価格・混雑・評判・現在の営業有無
（"a small entry fee — confirm current rates before visiting" のように
条件付き表現に留める。日本語版の8-1・8-2ルールがそのまま適用される）。

### 1-3. 7軸の語彙（英語表記・固定）
TPJ独自の7軸は英語版で以下の訳語に**統一**する（記事ごとに訳をぶれさせない）。

| 日本語 | 英語（固定訳） |
|---|---|
| 居心地・空間品質（五感品質・素材） | Comfort & Sensory Quality |
| 静寂性・プライバシー（静けさの再現） | Quietness & Privacy |
| 特別感・非日常性（ギフト体験） | Specialness & Non-daily Experience |
| ストーリー・背景への共感（物語の継承） | Story & Empathy for Background |
| 再訪・継続価値（また来たくなるか） | Revisit & Continuity Value |
| 記録・シェア体験（記録性） | Record & Share Experience |
| インバウンド・多言語対応（外国人適性） | Inbound & Multilingual Compatibility |

（2026-07-12改訂：台東区インバウンド親ピラー英語化の際に確定した表記に統一。以降すべての記事でこの表記を使う）

`venue.njk` の `axes_primary_slug` 等（comfort / silence / special / story /
revisit / record / inbound）と対応させ、英語記事内でもこのslug語彙系に揃える。

---

## 2. 日本語版との紐付け（hreflang・相互リンク必須）

### 2-1. 新規に英語版を作ったら、必ず日本語版側にも `hreflang_en` を追記する
現状、既存の英語記事3本（meiji-jingu等）は**英語側にのみ** `hreflang_ja` が
設定されており、対応する日本語記事側に `hreflang_en` が設定されていない
片方向リンクになっている（2026-07-12確認・既知の未修正事項）。
**今後新規に英語版を作る記事については、日本語ソース側のfrontmatterにも
`hreflang_en` を追記し、双方向にする**（過去分の是正は別タスク）。

### 2-2. frontmatter規約（英語記事）

```markdown
---
layout: article.njk
title: "英語タイトル（下記4章のルールに従う）"
description: "115〜160字相当の英語meta description。一文目で結論を完結させる"
date: 2026-07-01
tags:
  - articles
category_slug: inbound-experience   # 日本語版と同じslugを流用する
area_name: Taito-ku                 # areas.json の name_en を使う（日本語表記にしない）
lang: en
hreflang_ja: /stories/inbound-experience/taito/
thumbnail: /assets/images/articles/xxx-en.webp   # 日本語版と共有禁止・専用画像
---
```

- `category_slug` は日本語版と同一のslugをそのまま使う（カテゴリ体系は言語共通）
- `area_name` は **`src/_data/areas.json` の `name_en`**（例：`Taito-ku`）を使う。
  日本語表記（「台東区」）をそのまま英語記事に入れない
  （既存3記事の `area_name: 原宿` は先例だが、英語記事内で日本語表記が浮く問題があり、
  今後の新規記事では `name_en` 表記に統一する）
- `hreflang_ja` に日本語版の絶対パスを設定する
- ファイル配置：`src/en/stories/{category_slug}/{同じslug}.md`
  （日本語版 `src/stories/{category_slug}/taito.md` に対して
  `src/en/stories/inbound-experience/taito.md`。URL自動生成は
  `/en/stories/inbound-experience/taito/` になり、追加のpermalink指定は不要）
- サムネイル画像は日本語版と共有しない・他記事からの流用もしない
  （日本語版制作憲法 8-5 と同じ理由）

---

## 3. AIに引用される記事の条件（AEO設計・日本語版と共通の考え方）

- **結論先出し**：各見出し直下の1〜2文で結論を完結させる。リード文一文目と
  FAQ各回答は単体引用に耐える密度にする（日本語版3-1と同じ）
- **構造化**：見出しに疑問文を混ぜる（英語圏の実クエリに寄せる。
  例："What makes Taito-ku's temples feel like a genuine retreat?"）
- FAQを5問前後置く。読者が実際に英語で検索・AIに尋ねそうな形にする
- 7軸は小見出しで分解し、軸ごとに結論を持たせる
- 一次性：「TPJの7軸で読み解くとこの区の◯◯はこう評価される」という
  TPJにしかない視点を必ず1つ以上含める

---

## 4. タイトル・見出しの英語表現ルール

### 4-1. タイトル
日本語版の型（`{地域}で{分野}をサードプレイスにする`）をそのまま英訳せず、
英語圏で自然な検索意図に合わせて再構成する。基本パターン：

```
{Area/Ward} as a Third Place: {分野・体験の要約} in Tokyo
```

例：`Taito-ku's Temples and Retreats: Finding Zen Stillness in Old Tokyo`

- 地名（Taito-ku / Tokyo等）を必ず含める
- 「Third Place」または「third place」を1回以上含める
  （日本語版の「サードプレイス」必須ルールの英語版対応）
- 誇大表現（"No.1" "best in Tokyo" 等、裏付けのない優劣表現）は禁止。
  日本語版の誇大表現禁止ルールと同じ

### 4-2. 見出し
日本語版の標準構成（制作憲法5章）に対応する英語見出しの型：

1. H1タイトル
2. リード（太字・2〜3文）
3. Why {Area} Is {分野的文脈}（地理・歴史・街の性格）
4. How {分野} Functions as a Third Place in {Area}
5. Reading {Area}'s {分野} Through TPJ's 7 Axes（7軸を小見出しで分解）
6. What to Look for in a Good {分野} in {Area}（見分ける条件）
7. The Neighborhood Context（季節・イベント・周辺、軸3・4接続）
8. For International Visitors（インバウンド視点・軸7）
9. Frequently Asked Questions（FAQ・5問前後）
10. In Summary（3文、TPJ認証への自然な言及で締める）
11. 関連する日本語版・他エリアへの内部リンク

---

## 5. 文字数の目安

日本語版の「本文2,800〜4,000字」をそのまま英語のワード数に換算しない
（日本語1文字あたりの情報密度は英語1単語より高いため）。
既存の英語コンセプト記事（都ピラー相当）の実測値は以下の通り：

| 記事 | ワード数（frontmatter込み） |
|---|---|
| meiji-jingu-third-place-tokyo.md | 約1,030語 |
| tokyo-third-place-guide-travelers.md | 約1,230語 |
| what-is-third-place-japan.md | 約1,180語 |

**区（自治体）ピラーは都ピラーより情報量が多いため、本文1,500〜2,200語
（frontmatter・FAQ含む）を目安にする。** 文字数を優先して水増ししない
（日本語版と同じく、地域固有の核が薄い場合は文字数を削ってでも密度を保つ）。

---

## 6. 文体ガイド（英語のAI臭排除リスト）

日本語版4章の禁止表現リストの英語版。以下の表現・パターンは使わない。

### 6-1. 禁止する定型フレーズ
- "In today's fast-paced world" / "In recent years"
- "Whether you're a [X] or a [Y]"（対句の量産パターン）
- "It's important to note that" / "It's worth noting that"
- "Nestled in" / "Steeped in history" / "A tapestry of"
  （AI生成英文でよく使われる紋切り型比喩）
- "In conclusion" / "To sum up" / "Overall"（まとめの機械的な合図）
- "delve into" / "boasts" / "a testament to"
- 疑問形の連発による導入（"Have you ever wondered..."）
- 全段落が同じ文長・同じ構文リズムになる均質化
- FAQの全回答を同じ定型文で締める
  （例：全問を "Third Place Japan evaluates this highly on..." で終える。
  言及する軸・語彙・締め方を設問ごとに変える）

### 6-2. 推奨する文体
- 一文目から地域の具体に入る。前置きの一般論を置かない
- 断定できることは断定する（地理・歴史・交通は言い切る。個別店の状況は
  "tends to" "often" 等の留保表現に留める）
- 短い断定文の後に、長めの描写文を続けてリズムを作る
- 三人称の観察として書く（"I" を主語にしない。"This neighborhood..." と書く）
- 比喩は地域に根ざしたものを一つだけ。多用しない
- トーンは知的・落ち着いている・気取らない。オルデンバーグ理論への
  敬意を保ちつつ、現代日本の生活実感に接続する（日本語版4-3と同じ）

---

## 7. 出力前セルフチェック（全項目クリアで合格）

- [ ] 店名・固有施設名を一つも書いていない
- [ ] 断定した固有事実はすべて検証可能な地域情報のみ（価格・混雑を断定していない）
- [ ] 7軸の英語固定訳（2章の表）を使い、軸ごとに結論がある
- [ ] この地域×分野でしか書けない核が3つ以上ある（日本語版の核を継承しているか）
- [ ] タイトルに地名＋"third place"を含み、誇大表現がない
- [ ] `hreflang_ja` を設定し、対応する日本語版frontmatterに `hreflang_en` を追記した
- [ ] `area_name` に日本語表記ではなく `areas.json` の `name_en` を使っている
- [ ] サムネイルが日本語版・他記事と共有されていない専用画像である
- [ ] 6章の禁止フレーズリストの語が一つもない
- [ ] リード文一文目とFAQ各回答が単体引用で意味が通る
- [ ] 見出しに疑問文（実クエリ形）が混ざっている
- [ ] ワード数が1,500〜2,200語（区ピラーの場合）の範囲に収まっている
- [ ] Markdown構文が正しい（H2の`##`漏れなし・JSON-LDの`<script>`タグが正常に閉じている）
