# 次回タスク：サードプレイスガイド「8条件を深く読む」完結（残り2本）

## 合言葉（次回これだけ言えば伝わります）

> 「NEXT-ACTION.mdを進めて」

---

## 完了事項（2026-10-08〜2026-10-09）

オルデンバーグ8条件のうち、個別の深掘り記事が未着手だった条件を2本公開した。

| 公開日 | 条件 | 記事 | 本番URL |
|---|---|---|---|
| 2026-10-08 | もうひとつの家（Home away from home） | `src/stories/concept/third-place-home-away-from-home.md` | `/stories/about/third-place-home-away-from-home/` |
| 2026-10-09 | 遊び心（A Playful Mood） | `src/stories/concept/third-place-playful-mood.md` | `/stories/about/third-place-playful-mood/` |

両記事とも以下を実施済み：
- `src/stories/about/index.njk` の `group2`（8条件を深く読む）に `fileSlug` を追加
- 既存記事側からの逆リンクを2〜3本追加（`third-place-8-conditions.md` の該当条件セクション、関連する既存姉妹記事のまとめ段落）
- `npm run build` 後、JSON-LD構文エラー0件・内部リンク切れ0件を確認
- コミット・プッシュ済み。本番URLをWebFetch（cachebustクエリでツール自体の15分キャッシュを回避）で実際に確認し、記事・内部リンクとも正常反映を確認済み

これで「8条件を深く読む」グループは6/8（中立性・常連・会話と沈黙・アクセス性・もう一つの我が家・遊び心）。

---

## 次回タスク概要

残り2条件の個別記事を追加し、「8条件を深く読む」グループを**8/8で完結**させる。

| # | 条件（英語） | 記事案（仮タイトル） | TPJ7軸との接続候補 |
|---|---|---|---|
| 1 | 平等性（Leveler） | サードプレイスとは"身分が関係なくなる場所"である：Levelerの意味 | 居心地・空間品質／インバウンド適性 |
| 2 | 目立たない佇まい（Low Profile） | サードプレイスとは"控えめな佇まい"である：Low Profileの意味 | ストーリー・背景への共感（タグマスター「隠れ家」と接続） |

**この2本をもって「8条件を深く読む」グループの完結とし、それ以降は新しい検索意図・獲得根拠が明確でない限り当グループへの追加記事は作らない**（CLAUDE.md 11-4・11-14「量より構造」の方針に従う）。

### 差別化（重複回避・必ず本文中で明示する）

- **平等性 vs 中立性**：既存の `third-place-neutrality.md` は「招待不要」「立場の解放」「義務からの自由」の3要素を扱っており、"立場の解放"が平等性と意味が近く見える。新記事では、中立性が「場への出入りの自由（誰でも来られるか）」を扱うのに対し、平等性（Leveler）は「場の内部に入った後、身分・地位が機能しなくなるプロセスそのもの」に焦点を当てる違いを明示すること。`third-place-8-conditions.md` の条件2の記述（銭湯の例：裸になることで社会的記号が剥ぎ取られる）を参照しつつ、新記事では別の具体例で深掘りする
- **目立たない佇まい**：既存記事との直接的な重複はない。タグマスターリストの「隠れ家」との接続を本文中で言及してよい

---

## ペース制限の注意（必ず確認する・重要）

CLAUDE.md「新規記事の投稿ペース制限」（2026-08-17〜、週2〜3件程度）は主にエリアピラー記事向けに新設されたものだが、クロール頻度変化を避ける趣旨は新規URL全般に当てはまる。2026-10-08・10-09の2日間で既に3本（もう一つの我が家・遊び心・関連編集）を投稿済みのため、**残り2本は同日中にまとめて公開せず、数日〜1週間程度空けて1本ずつ公開すること**。2本を先に執筆だけ済ませておき、公開日（`date`フィールド）だけ分散させる進め方でもよい。

---

## 執筆仕様（既存6本と同じ型を踏襲）

参照する既存記事（構成・分量・トーンをそのまま踏襲する）：
- `src/stories/concept/third-place-accessibility.md`
- `src/stories/concept/third-place-neutrality.md`
- `src/stories/concept/third-place-regulars.md`
- `src/stories/concept/third-place-conversation-silence.md`
- `src/stories/concept/third-place-home-away-from-home.md`
- `src/stories/concept/third-place-playful-mood.md`

### 保存先
`src/stories/concept/third-place-equality.md`（平等性）
`src/stories/concept/third-place-low-profile.md`（目立たない佇まい）
※スラッグは着手時にユーザーへ確認すること（候補は上記）

### frontmatter
```yaml
layout: article.njk
title: （既存6本と同じ「サードプレイスとは"〇〇"である：△△の意味」型）
description: （110〜120字、TPJ編集部の説明文体）
date: （次回、公開日を決める。ペース制限に従い分散させる）
category_slug: about
area_name: 東京
thumbnail: "/assets/images/articles/（新規画像ファイル名）"
snippet: （1文要約）
tags:
  - articles
```

### 本文構成（既存6本を踏襲）
1. 太字リード（概念の定義を1〜2文で完結）
2. H2見出し複数で、概念をいくつかの要素に分解して深掘り（3〜4要素が目安）
3. 「TPJの評価と〜」セクション（TPJ7軸との接続を1段落で）
4. まとめ（既存姉妹記事への内部リンクを文中に3〜4本程度）
5. FAQ：3問

### 文字数目安
**2,300〜2,700字**が目安（今回公開した2本の実測値は2,495〜2,893字、姉妹4本の実測値は2,650〜3,024字）。area pillar記事の4,000〜4,300字ルールとは別物なので混同しないこと。

### サムネイル
Unsplashで検索。既存23記事・今回追加した2枚と被らない画像を選定し、必ず目視確認（他社ブランド名・看板の写り込み、無関係な地域の写真混入がないか）してから採用する。

### 内部リンク（AEO対策・毎回必須ルールに準拠）
- 新記事→既存3〜4本：`third-place-8-conditions.md`・`what-is-third-place.md`・平等性なら`third-place-neutrality.md`、目立たない佇まいなら`third-place-ibasho-difference.md`または`third-place-examples.md`等、内容が近い記事へ
- 既存→新記事の逆リンクも2〜3本追加する（`third-place-8-conditions.md`の該当条件セクションは必須）

---

## 公開後の追加作業（忘れやすいので明記）
- `src/stories/about/index.njk`の`group2`配列に新記事の`fileSlug`を追加しないと「8条件を深く読む」セクションに表示されない
- `/stories/`トップページのピラーグリッドには自動反映される（`aboutArticles`をそのままループしているため、`index.njk`側の対応は不要）
- `npm run build`後、JSON-LDパースエラー0件・内部リンク切れ0件を機械確認してからコミットする
- コミット・プッシュ後、新規URLのため本番URLをWebFetch（cachebustクエリ必須）で実際に確認する

## マス表について
`data/TPJ_東京ピラーマス表.csv`は地域×業種記事専用の管理台帳であり、`about`カテゴリ記事は対象外。更新不要。

## 未決定事項（次回最初に確認する）
- [ ] 2本のうち、どちらから着手するか（平等性 or 目立たない佇まい）
- [ ] 公開日（`date`フィールド）2本分。ペース制限に従い分散させる
- [ ] thumbnail画像の検索キーワード・取得（Unsplash）
- [ ] ファイル名・URLスラッグの最終確定（候補：`third-place-equality`・`third-place-low-profile`）
