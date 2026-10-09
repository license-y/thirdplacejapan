# 次回タスク：サードプレイスガイド新記事「もう一つの我が家」

## 合言葉（次回これだけ言えば伝わります）

> 「NEXT-ACTION.mdを進めて」

## タスク概要

`/stories/about/`（サードプレイスガイド）に、オルデンバーグ8条件のうち
未着手の「もう一つの我が家（Home away from home）」を扱う新規記事を1本追加する。

## 背景・経緯（2026-10-08の会話で決定）

既存15本のサードプレイスガイド記事のうち、「8条件を深く読む」グループは
8条件中4条件（中立性・常連・会話・アクセス）しか個別の深掘り記事がなく、
残り4条件（**平等性・控えめな佇まい・遊び心・もう一つの我が家**）は
`third-place-8-conditions.md`等の総論記事でしか触れられていない、という
全体バランスの偏りを発見した。

次の1本として「もう一つの我が家」をユーザーと合意済み。理由：
オルデンバーグの8条件の中でも最も引用される象徴的なフレーズで、
TPJの「居場所」というブランド軸と直結するため。

**代替候補（ユーザーが気を変えた場合の控え）**：
- 遊び心（TPJ7軸「特別感・非日常性」と接続しやすい）
- 控えめな佇まい（タグマスターの「隠れ家」と接続しやすい）

## 執筆仕様（既存4本と同じ型を踏襲）

参照する既存記事（構成・分量・トーンをそのまま踏襲する）：
- `src/stories/concept/third-place-accessibility.md`
- `src/stories/concept/third-place-neutrality.md`
- `src/stories/concept/third-place-regulars.md`
- `src/stories/concept/third-place-conversation-silence.md`

### 保存先
`src/stories/concept/third-place-home-away-from-home.md`
（ディレクトリは`concept/`のままでよい。`category_slug: about`で
`collections.aboutArticles`に自動的に含まれる。`src/stories/about/`配下への
移動は不要）

### frontmatter
```yaml
layout: article.njk
title: サードプレイスとは"もう一つの我が家"である：Home away from homeの意味
description: （110〜120字、TPJ編集部の説明文体。既存4本のdescription文体を参照）
date: （次回、公開日を決める）
category_slug: about
area_name: 東京
thumbnail: "/assets/images/articles/（新規画像ファイル名）"
snippet: （1文要約）
tags:
  - articles
```

### 本文構成（既存4本を踏襲、area pillar記事とは別の型）
1. 太字リード（概念の定義を1〜2文で完結）
2. H2見出し複数で、概念をいくつかの次元・側面に分解して深掘り
   （例：`third-place-accessibility.md`は「物理的アクセス」「心理的アクセス」
   「時間的アクセス」の3次元構成）
3. 「TPJの評価と〜」セクション（TPJ7軸との接続を1段落で）
4. まとめ（既存姉妹記事への内部リンクを文中に2本程度）
5. FAQ：**3問**（area pillar記事の5問とは異なるので注意）

### 文字数目安
**2,300〜2,700字**（既存4本の実測値：2,341〜2,669字）。
area pillar記事の4,000〜4,300字ルールとは別物なので混同しないこと。

### 差別化（重複回避）
既存の`third-place-ibasho-difference.md`（サードプレイスと「居場所」の
**用語上の使い分け**を解説する記事）とは切り口が異なることを本文中で
明示する。あちらは言葉の整理、新記事はオルデンバーグの条件そのもの
（温かみ・自分の場所だと感じる感覚・パーソナルスペースの主張のしやすさ等）
の深掘りである。

### 内部リンク（AEO対策・毎回必須ルールに準拠）
- 新記事→既存3〜4本：`third-place-8-conditions.md`・`ray-oldenburg-third-place.md`・
  `third-place-ibasho-difference.md`・`what-is-third-place.md`等へ
- 既存→新記事の逆リンクも2〜3本追加する

## 公開後の追加作業（忘れやすいので明記）
- `src/stories/about/index.njk`の`group2`配列（55行目付近）に新記事の
  `fileSlug`を追加しないと「8条件を深く読む」セクションに表示されない
  （aboutArticlesコレクションに入るだけでは自動反映されない、手動追加が必要）
- `/stories/`トップページのピラーグリッドには自動反映される（`aboutArticles`を
  そのままループしているため、`index.njk`側の対応は不要）
- DefinedTermSet JSON-LD（`about/index.njk`内）への追加は任意。既存は
  7軸用語中心の構成のため、追加するかどうかは次回判断する

## マス表について
`data/TPJ_東京ピラーマス表.csv`は地域×業種記事専用の管理台帳であり、
`about`カテゴリ記事は対象外。更新不要。

## 未決定事項（次回最初に確認する）
- [ ] 公開日（`date`フィールド）
- [ ] thumbnail画像の検索キーワード・取得（Unsplash、既存4本と似た画像に
      ならないよう要確認）
- [ ] ファイル名・URLスラッグの最終確定（候補：`third-place-home-away-from-home`）
