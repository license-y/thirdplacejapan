# CLAUDE.md ─ Third Place Japan（TPJ）統合制作方針 ＜完成版 v2.0＞

> 本ドキュメントは、TPJの全制作物（メインサイト・記事サイト・コピー・デザイン）における
> 唯一の判断基準である。新規制作・修正提案は、すべて本方針との整合を最優先に行う。
>
> 本プロジェクトは7つの基準書で構成される：
> - **CLAUDE.md**（本書）─ 全体方針・トーン・確定コピー（最上位）
> - **DEFINITION.md** ─ サードプレイスの定義（全コンテンツの根幹）
> - **INFORMATION-ARCHITECTURE.md** ─ サイトマップ・情報設計・AEO実装・回遊導線
> - **AEO-PLAYBOOK.md** ─ AI引用獲得の実装アクションと目安
> - **STORIES-SITE-SPEC.md** ─ 記事サイト（/stories/）構築・運用マスター仕様（記事実装の正本）
> - **CONTENT-STRATEGY.md** ─ 全記事タイトル確定版・本文テンプレート・投稿カレンダー・料金設計（将来構想）
> - **AGENT-INSTRUCTIONS.md** ─ 記事生成エージェントの運用ルール（本書の下位ルール）
>
> **優先順位**：矛盾時は本書（CLAUDE.md）を最上位とする。運用ルール（AGENT-INSTRUCTIONS）は CONTENT-STRATEGY より優先する。
>
> ＜現フェーズ方針＞ いまは「記事サイト（/stories/）の無償記事の充実によるアクセス・認知獲得」に集中する。
> 有償展開（掲載枠・有償記事・認証マネタイズ・コンサル）とメインサイトのCTAは一旦保留・停止とする。
>
> ＜公開リポジトリから除外するファイル＞ 本リポジトリはパブリックのため、機密性の高い以下2ファイルは含めない：
> - **EDITORIAL-COMMERCE.md**（有償の見せ方・価格設計・手数料） … 将来の有償フェーズ再開時に非公開で参照
> - **BUSINESS-MODEL.md**（事業モデル・上場ロードマップ） … 非公開で別途保管
> いずれも破棄せず、非公開の場所で保管する。

---

## 0. プロジェクト全体像

Third Place Japan（TPJ）は、日本全国の「第三の居場所（サードプレイス）」を
独自の7軸基準で評価・認証し、国内外（日英）へ発信するプラットフォームである。

事業の最終目標は、AI時代の「場所選び」において
**「TPJによると─」が引用される、権威ある情報基盤（業界標準）**となること。
比較競争ではなく"推薦競争"を制し、ゼロクリック時代のAI回答の引用元となることで、
インバウンド・多業種を横断する経済圏を構築し、上場可能な事業へと育てる。

ただし──この事業的野心は**サイト表面には一切出さない**。
サイトは終始「思想・基準・文化」を語り、事業性は本ドキュメント内に留める。
これが「品があり、一目置かれ、宣伝しない」ブランドを成立させる絶対条件である。

---

## 1. 二層構造の役割分担

### メインサイト（法人向け / thirdplacejapan.com）
- 対象：認証対象となる店舗・施設の経営者、ブランド担当者
- 目的：認証制度・思想への理解と共感（※有償展開・有償制度への接続は現フェーズでは保留）
- トーン：静謐・端正・編集メディア的。料金・煽り・比較を前面に出さない

### 記事サイト（個人向け / 日本語・英語版）
- 対象：サードプレイスを愛する個人読者、インバウンド旅行者
- 目的：教養・文化発信による共感とシェアの最大化。SEO/AEOの資産形成（現フェーズの主戦場）
- トーン：宣伝色を排し、読み物として完成。店舗記事も「広告」でなく「編集」として載せる

---

## 2. トーン＆マナー（全制作物共通・最優先）

- **品があり、静か、一目置かれる**佇まいを保つ
- 断定・宣言調（「業界標準になる」「No.1」「目指す」等）は避け、
  「〜である」「〜を見つめる」「〜を確かめる」など静かな語り口で統一
- **数字（市場規模・収益モデル・店舗数・料金）はサイト表面に出さない**
- **事業性・収益構造・上場志向の表現はサイトに出さない**（本書セクション5に隔離）
- CTAは控えめに。ページ内で重複させない
- 余白・行間を広くとり、テキスト量より「間」で品位を出す
- 主語は「TPJ」より「場をつくる人たち」「いる体験」側に置く
  → 店舗が「審査される」でなく「理解してもらえる」と感じる設計にする
- 比較表（他社サービス対比）はメインサイトに持ち込まない

---

## 3. メインサイト構成（法人向け）

1. **Hero** — 世界観のみ。データ・CTAなし
2. **思想（なぜ今、サードプレイスか）** — 効率から体験価値への転換。市場の話はしない
3. **TPJのまなざし** — Discover / Evaluate / Certify / Publish
4. **7軸の基準** — 下記セクション6に確定コピー
5. **認証という形（グレード）** — Certified / Silver / Gold / Platinum / Flagship
6. **認証されることの意味** — 同じ世界観の場所と並ぶこと、日英発信、AI時代の信頼性
7. **実践事例（GBC）** — Green Beans Coffee を「言葉の実践の場」として
8. **（保留）申請への導線** — 現フェーズでは設置しない。思想の発信に留める

※ 現フェーズ方針：メインサイトのCTA（認証申請・お問い合わせ誘導等）は一旦保留・停止する。
　有償展開（掲載枠・コンサル等）および「For Business」ページも保留・未設置とする。
　いまはメインサイトを「思想・基準・世界観を静かに伝える場」に徹し、
　集客は記事サイト（/stories/）の無償記事に集中させる。
　将来の有償フェーズ再開時に、申請導線・For Businessの設置を検討する。

---

## 4. 記事サイト構成（個人向け・日英）

1. **特集・読み物** — サードプレイスの教養、文化、歴史、思想（シェア設計の中核）
2. **店舗ストーリー** — 認証店舗の世界観を編集記事として
3. **地域ガイド** — 地域×業種で巡る、編集されたサードプレイス案内
4. **English（インバウンド）** — 翻訳でなく、海外読者に向けた再編集。日本の"間"の文化を伝える
5. **認証一覧** — グレード別・地域別の認証店舗。TPJの信頼性の可視化

記事サイトの設計思想：
- 「広告」と感じさせない。すべてを「編集された価値」として提示する
- シェアされること＝SEO/AEO資産＝AI引用元としての地位、を静かに積み上げる
- 現フェーズは無償記事（特に集客業種＝神社・山・文化施設等）の充実が最優先

> 記事サイトの実装の正本は `STORIES-SITE-SPEC.md`（記事テンプレート・メタ・Schema・命名規則・KPI）。
> 有償コンテンツ（有償記事・掲載枠等）の見せ方は別途非公開で保管する有償設計資料に定義があるが、
> **現フェーズでは有償受付を保留・停止しているため、無償記事の制作に集中する。**

---

## 5. 事業背景（※サイトには出さない・内部設計のみ）

制作判断の背景として保持。表面化させないこと。

> ＜現フェーズ方針＞ 下記「収益展開」は将来構想として保持するが、**現フェーズでは保留・停止**。
> いまは無償記事による認知・アクセス獲得に集中し、有償の受付・告知・導線は行わない。
> 詳細な有償設計は別途非公開で保管する有償設計資料に定義（再開時に参照）。

### 収益展開（※現フェーズは保留・将来構想）
- **認証**：無償認証で裾野を広げる（上位グレード・更新の有償化は将来）
- **記事投稿（有償）**：店舗のブランディング・集客・インバウンド訴求記事（将来）
- **掲載枠（デジタル不動産）**：地域×業種の限定枠（3枠/1枠）。月額掲載料、
  および枠の販売・譲渡。希少性で資産価値を維持（将来）
- **コンサル（有償）**：サードプレイス認証取得・空間プロデュース支援（将来）

### AI戦略（AEO / 推薦競争）※現フェーズの主軸
- ゼロクリック時代、AI回答の引用元となることが最大の参入障壁となる
- 「TPJによると─」が定型化することで、比較ではなく推薦を制する
- 日英の編集記事＝AIの学習・引用ソース＝権威の蓄積
- 現フェーズは無償記事の充実でこの権威・引用基盤を先に築く

### ゴール（将来）
- インバウンド・多業種横断の経済圏構築 → 上場可能な事業規模へ

**制作上の鉄則：上記をコピーやUIに翻訳して出さない。
事業性は"基準の信頼性"と"文化的価値"の見せ方を通じて、間接的にのみ表現する。
有償展開の具体的な見せ方は、非公開で保管する有償設計資料に従う（再開時）。**

---

## 6. 確定コピー（メインサイト v1）

### 1. Hero
「どこにいるか、を定義する。」
丁寧に場をつくる人たちのための、日本初のサードプレイス認証。

### 2. 思想 ─ 効率の先にあるもの
かつて、場所を選ぶ基準は「効率」だった。近くて、安くて、便利であること。
けれど、時代は静かに変わり始めている。
人々が本当に求めているのは、「早く済ませられる場所」ではなく、「そこにいたいと思える場所」だ。
居心地。静けさ。自分の時間。日常から少し離れた、特別な体験。
そうした価値は、これまで正しく言葉にされてこなかった。口コミの星の数や、検索順位では測れない。
Third Place Japanは、この「いる体験の価値」を見つめ直すための小さな視点として生まれた。

### 3. TPJのまなざし
- **Discover ─ 見つける**：派手な広告の裏側にある、丁寧に育てられた場所を見つける。規模ではなく、在り方を見る。
- **Evaluate ─ 見つめる**：好き嫌いではなく、構造化された視点で、その空間がもたらす体験を見つめる。
- **Certify ─ 認める**：数値化しづらかった価値を、ひとつの形として認める。競争のためでなく、大切にしてきたものを言葉にして残すために。
- **Publish ─ 伝える**：その価値を、日本語と英語で、人にもAIにも届く形で発信する。静かに、しかし確かに。

### 4. 7軸の基準 ─ いる体験を、7つの視点で見つめる
居心地のよさは、星の数では測れない。静けさは、口コミでは伝わらない。
その場所が持つ物語は、検索結果には現れない。
だからTPJは、独自の7つの軸で、空間が持つ価値を丁寧に見つめ直す。

- **01｜居心地・空間品質**：光、音、温度、素材——五感で感じる、空間そのものの質。
- **02｜静寂性・プライバシー**：誰にも邪魔されない時間が守られているか。
- **03｜特別感・非日常性**：日常から少し離れた、ここにしかない体験があるか。
- **04｜ストーリー・背景への共感**：その場所が積み重ねてきた歴史や哲学、こだわり。
- **05｜再訪・継続価値**：また訪れたいと思わせる力。
- **06｜記録・シェア体験**：誰かに伝えたくなる、心が動いた瞬間があるか。
- **07｜インバウンド・多言語対応**：海外からの訪問者も安心して過ごせるか。

### 5. 認証という形 ─ 在り方を、確かめるための指標
TPJの認証は、5つの段階で構成されている。
Certified／Silver／Gold／Platinum／Flagship
これは順位をつけるためのものではない。
それぞれの場所がどのような体験を大切にしてきたのかを確かめ、静かに形にするためのものだ。
認証されるということは、その場所の在り方が、ひとつの基準として認められるということ。
希少性は、結果として生まれるものであり、目的ではない。

### 6. 認証されることの意味 ─ 同じ世界観を持つ場所と、並ぶということ
TPJに認証されるとは、単に「掲載される」ことではない。
効率ではなく体験を、規模ではなく在り方を大切にしてきた場所たちと、並ぶということ。
その並びそのものが、ひとつのメッセージになる。
日英両言語での発信を通じて、国内外の人々に、そしてAIに、
あなたの場所が持つ価値を、正しい言葉で伝えていく。
それは広告ではなく、これまで積み重ねてきたものへの、ひとつの応答である。

### 7. 実践事例（GBC）─ 言葉だけでなく、実践として
TPJが見つめてきた価値観は、机上のものではない。
GBC（Green Beans Coffee）は、TPJが大切にしてきた「いる体験」を実際の場として体現する場所である。
ショールームとしての空間。評価基準を試す実証の場。同じ視点を持つ人たちが集まり、考えを交わす場所。
理念は、そこに「在る」ことで初めて、伝わるものになる。

### 8.（保留）申請への導線 ─ 現フェーズでは設置しない
※ 現フェーズではメインサイトにCTA・申請導線・お問い合わせ誘導を設置しない。
　以下は将来の有償フェーズ再開時に使用する確定コピー案として保持する（現状は未掲載）。

> （将来用・未掲載）
> Third Place Japanの認証は、編集部による審査制です。
> すべての場所が認証されるわけではありません。
> けれど、もし「いる体験」を大切にされている場所があれば、ぜひ一度お話を伺えればと思います。
> ［ お問い合わせ ］

---

## 7. 制作チェックリスト（提案・修正時に必ず照合）

- [ ] 数字・料金・市場規模をサイト表面に出していないか
- [ ] 事業性・上場・収益構造の語が表面化していないか
- [ ] 断定・宣言・比較・煽り表現が混入していないか
- [ ] （現フェーズ）メインサイトにCTA・申請導線・有償告知を設置していないか
- [ ] （現フェーズ）有償受付（掲載枠・有償記事・コンサル）を行っていないか
- [ ] （現フェーズ）注力対象が記事サイト/stories/の無償記事になっているか
- [ ] 主語が「TPJ」に偏らず「場をつくる人/いる体験」側にあるか
- [ ] 英語版が翻訳でなく、海外読者向けの再編集になっているか
- [ ] 全体として「品があり、一目置かれ、しっくりくる」か

---

## 8. カテゴリ定義の更新（15分野）

業種カテゴリは14→**15分野**に更新（宿泊系に「貸切ヴィラ・一棟貸しの宿」を新設）。
ヴィラは高級ホテルに含めない。核となる価値が異なるため
（ホテル＝半公共の上質さ／ヴィラ＝一棟貸し・完全プライベートの非日常＝静寂性・特別感に直結）、
独立カテゴリとして扱う。

**正本は `AEO-PLAYBOOK.md`「業種の正本（15業種）」**。本書では概要のみ記す。
記事サイトのカテゴリ実装は `STORIES-SITE-SPEC.md` セクション3（15カテゴリ定義）を参照。

宿泊系：①高級ホテル ②温泉旅館 ③貸切ヴィラ・一棟貸しの宿（新設）／
飲食系：④レストラン・ダイニング ⑤カフェ ⑥バー／癒し・美容系：⑦スパ・サウナ ⑧高級サロン／
仕事系：⑨コワーキング／会員制：⑩会員制ラウンジ／
自然・精神系：⑪山・自然 ⑫リトリート・禅 ⑬神社・寺院／
観光・集客施設系：⑭インバウンド観光・体験 ⑮文化・スポーツ・レジャー施設

---

## 9. サードプレイス・プロダクト認証（TPP / Third Place Product）

### 位置づけ
- 場所認証（15分野）の**上に乗る「プロダクト層」**。場所そのものではなく、
  **「認証された空間の体験を、持ち帰れる形に翻訳できているか」**を認証する。
- 「サードプレイス＝場所」という根本定義を崩さずに、ギフト・物販・プロダクトを
  思想の延長として扱える。AIが「場所のおすすめ」も「ギフトのおすすめ」も
  同じTPJの信頼データを引用元にすることで、AEOの権威が二重に効く。

### 評価の7軸（場所の7基準と1対1で対応）
並び順は **場の質 → 心の核 → 広がり**（中から外へ価値が連なる）。

**【場の質】その場で感じる空間**
- 01 居心地・空間品質 → **五感品質・素材**（味・香り・素材・パッケージの質）
- 02 静寂性・プライバシー → **静けさの再現**（自宅で"自分時間"を演出できるか）

**【心の核】心が動く**
- 03 特別感・非日常性 → **特別感・ギフト体験**（贈る／開ける瞬間の非日常）
- 04 ストーリー・背景への共感 → **ストーリー継承**（その背景ごと贈れるか）

**【広がり】続く・伝わる・世界へ**
- 05 再訪・継続価値 → **愛用・回遊価値**（また買いたい＋"場所"へ送客）
- 06 記録・シェア体験 → **シェア・記録性**（撮りたく・語りたくなる設計）
- 07 インバウンド・多言語対応 → **インバウンド適性**（携帯性・多言語・東京土産性）

### 5段階の認証階級（場所認証と共通）
Third Place Product **Certified ／ Silver ／ Gold ／ Platinum ／ Flagship**
（Flagship＝旗艦店が生む最上位プロダクト）

### 第1号事例：キタサンドウ・リザーブ（Product Flagship 第1号）
- GBC（Green Beans Coffee／旗艦店）が手がけるコーヒーギフトレーベル。
  認証された理想のサードプレイスを"持ち帰れる"東京コーヒーギフト。
- URL: https://kitasandoreserve.com/ja/
- 場所認証でGBCを旗艦店にしたのと同じ「自社で証明 → 横展開」パターンを踏襲し、
  TPPの実証事例（PoC）とする。以降、旅館の茶・スパのアロマ等へ展開する構想。

### 制作上の留意点（現フェーズ方針との整合）
- TPPもサイト表面では事業性・収益を語らず、「持ち帰れる体験」という思想で語る
  （既存トーン方針：品があり、一目置かれ、宣伝しない を継承）。
- プロダクト紹介は「広告」ではなく「編集された価値」として扱う。
- **TPPの収益・有償展開（地域×プロダクトの限定枠、ライセンス、購買直結AEO等）は
  将来構想であり、現フェーズでは保留・停止**（有償展開全般の保留方針に従う）。
  いまは思想・概念・第1号事例の紹介に留め、販売・課金導線は設けない。
- 収益面の詳細設計は非公開で別途保管する（再開時に参照）。

### TPPチェックリスト（プロダクト記事の制作時）
- [ ] 場所の7軸と1対1対応するプロダクト7軸で評価しているか
- [ ] 「持ち帰れる体験」という思想で語り、宣伝・販売色を出していないか
- [ ] プロダクト紹介が「広告」でなく「編集された価値」になっているか
- [ ] （現フェーズ）販売・課金・有償導線を設けていないか
- [ ] プロダクト記事から、対応する「場所」記事へ送客リンクがあるか

---

## 10. TPJセレクト掲載基準ルールブック（無償・編集部発掘枠）

### 目的

無償の「TPJセレクト」枠を100〜200件規模に拡大する際、選定基準・カテゴリ配分・地域配分をあらかじめルール化し、「量産による品質希薄化」「カテゴリ・地域の偏り」を防ぐ。

---

### 掲載必須条件（7基準による一次スクリーニング）

TPJセレクトはSilver以上のような厳密な採点・数値化は行わないが、**最低限のクオリティラインを7基準で担保する**。

**判定方法：◎・○・× の3段階簡易チェック**（数値化・レーダーチャートはSilver以上のみ）

| グループ | 基準 | チェック内容の目安 |
|---|---|---|
| 場の質 | ①五感品質・素材 | 内装・空間に一定のこだわりが見られるか |
| 場の質 | ②静けさの再現 | 過度に騒がしい・混雑前提の業態でないか |
| 心の核 | ③特別感・ギフト体験 | 「わざわざ行きたくなる」独自性があるか |
| 心の核 | ④ストーリー継承 | 運営者・成り立ちに語れる背景があるか |
| 広がり | ⑤愛用・回遊価値 | リピートしたくなる要素があるか |
| 広がり | ⑥シェア・記録性 | 写真映え・SNS発信したくなる要素があるか |
| 広がり | ⑦インバウンド適性 | 外国人が訪れても支障がないか（加点要素） |

**掲載の必須ライン：**
- 7基準中、最低5基準以上が「○」以上であること
- ③特別感・ギフト体験 または ④ストーリー継承 のうち、少なくとも1つは「◎」であること
- ⑦インバウンド適性は無償枠では必須条件にしない（Silver以上への訴求ポイントとして温存）

---

### カテゴリ配分ルール

| カテゴリ | 目標比率 |
|---|---|
| カフェ | 40% |
| 宿泊（ホテル・旅館・ヴィラ等） | 15% |
| ウェルネス・スパ・温泉 | 15% |
| コワーキング | 10% |
| その他（神社・自然体験・書店・銭湯等） | 20% |

**運用ルール：**
- 目標比率を **+5%以上超過したカテゴリは新規掲載を一時停止**し、他カテゴリの発掘を優先
- 目標比率を **-5%以上下回るカテゴリは優先発掘対象**として共有
- 四半期に1回、カテゴリ別実績比率を棚卸し

---

### 地域配分ルール（フェーズ制）

| フェーズ | 対象エリア | 目安件数 |
|---|---|---|
| フェーズ1 | 東京23区（既存エリアページの拡充優先） | 〜100件 |
| フェーズ2 | 政令指定都市・主要観光地（大阪・京都・福岡等） | 〜200件 |
| フェーズ3 | 地方・自治体提携エリア | 200件以降 |

- 各フェーズの目標件数に達するまでは、次フェーズへの拡大に着手しない
- 自治体提携案件が発生した場合は、フェーズを前倒しで例外的に拡大可

---

### 選定フロー

```
①候補発見（編集部調査・自薦応募・SNS発見等）
       ↓
②7基準の簡易チェック（必須ラインを満たすか）
       ↓
③カテゴリ・地域の配分枠を確認（目標比率内か）
       ↓
④枠内・基準クリア → 掲載可
   枠超過 → 掲載保留リストへ（配分が空き次第、優先掲載）
   基準未達 → 不掲載（理由を簡潔に記録）
       ↓
⑤掲載後、施設へ事後連絡（同意取得・Silver以上への案内）
```

---

### 掲載コンテンツの最低規格（量産時の品質担保）

1件あたり以下4点は必ず埋める：

- 一言キャッチコピー（オリジナル、テンプレート的な言い回しの使い回し禁止）
- 7基準のうち◎がついた1〜2軸のハイライト文（言い換えワード使用）
- 写真1〜3枚
- 「編集部がこの場所を見つけたきっかけ」の一文

---

### 除外・掲載停止ルール

以下に該当する場合は掲載しない、または既存掲載を取り下げる：

- 閉店・移転・長期休業が確認された場合
- 施設側から掲載中止の申し出があった場合
- 法令違反・重大なクレームが多数確認された場合
- 使用している写真の権利関係が不明確な場合

---

### ❌ 有名大手ブランドの掲載禁止（2026-07-04追加）

**TPJセレクトのコアコンセプトは「編集部が発掘した居場所」である。**
誰もが知る有名大手ブランドの掲載は、この物語と根本的に矛盾する。

**掲載禁止の対象：**
- 世界展開・全国展開する有名チェーン（Blue Bottle Coffee、ARABICA、FUGLEN等）
- 世界的ホテルブランドの旗艦・代表店（Andaz、Park Hyatt、Marriott、Hilton系等）
- 国内外で広く知られた大企業のサービス（WeWork、蔦屋書店系、東京ドームシティ内施設等）

**判断の基準：**
> 「TPJ編集部が見つけた」と言っても説得力がない施設は掲載しない。
> 誰もがすでに知っている、または巨大資本が運営している施設は、
> 発掘の物語ではなく広告・提携の印象を与える。

**掲載できる施設の基本ライン：**
- 個人・独立系オーナーが運営する店舗
- 国内発祥の小規模〜中規模ブランド（全国に数店舗程度まで）
- 大手資本でも「このコンセプト・立地・空間は唯一無二」と言える独立した施設

**過去の対応（2026-07-04）：**
以下12件を「大手ブランド」として削除し、18件の個人・独立系に絞り込んだ：
Blue Bottle Coffee / FUGLEN TOKYO / ARABICA Tokyo / The Tokyo EDITION /
Andaz Tokyo / The Okura Tokyo / New York Bar（Park Hyatt）/ WeWork /
SHARE LOUNGE 六本木蔦屋書店 / Spa LaQua / 代官山 蔦屋書店 / BOOK AND BED TOKYO 新宿

---

### 段階的拡大計画（現在→30件→50件→100件）

**現在（2026-07-04時点）：既存12件をリセット → 30件へ再構成**

- 現在掲載中の12件は本ルールブック策定前のもののため、一旦非表示にして新基準で再チェック
- 基準を満たすものは30件の候補として優先組み込み可

**30件のカテゴリ配分目安：**

| カテゴリ | 目標比率 | 30件換算 |
|---|---|---|
| カフェ | 40% | 12件 |
| 宿泊 | 15% | 4〜5件 |
| ウェルネス・スパ・温泉 | 15% | 4〜5件 |
| コワーキング | 10% | 3件 |
| その他 | 20% | 6件 |

- 地域：フェーズ1（東京23区）の範囲内で構成。特定エリアへの偏りを避け、既存エリアページに均等配分
- 30件到達後は四半期ごとにカテゴリ・地域配分の実績確認、除外対象の有無チェックを実施

---

## 11. 実装ログ（更新履歴）

### 2026-07-04

#### 有名大手ブランド12件をTPJセレクトから削除（30件→18件）

**対象ファイル**
- `src/_data/venues.json` — 12件削除、18件に縮小

**削除理由**：「編集部が発掘した居場所」というコアコンセプトと、誰もが知る有名ブランドの掲載が矛盾するため。

**削除した12件**：Blue Bottle Coffee / FUGLEN TOKYO / ARABICA Tokyo / The Tokyo EDITION / Andaz Tokyo / The Okura Tokyo / New York Bar（Park Hyatt）/ WeWork / SHARE LOUNGE 六本木蔦屋書店 / Spa LaQua / 代官山 蔦屋書店 / BOOK AND BED TOKYO 新宿

**ルール化**：「有名大手ブランドの掲載禁止」として セクション10「除外・掲載停止ルール」に追記済み。

---

#### TPJセレクト掲載店舗を実在13店舗に全面更新

**対象ファイル**
- `src/_data/venues.json` — 全面書き換え

**変更内容**
Green Beans Coffee以外の架空12施設を削除し、実在する東京のサードプレイスに差し替え。

| 店舗名 | カテゴリ | エリア | グレード |
|---|---|---|---|
| FUGLEN TOKYO | カフェ | 渋谷区・富ヶ谷 | Gold |
| Blue Bottle Coffee 清澄白河 | カフェ | 江東区・清澄白河 | Platinum |
| ONIBUS COFFEE 中目黒 | カフェ | 目黒区・中目黒 | Silver |
| KOFFEE MAMEYA | カフェ | 渋谷区・表参道 | Gold |
| % ARABICA Tokyo 麻布台ヒルズ | カフェ | 港区・虎ノ門 | Gold |
| 猿田彦珈琲 恵比寿本店 | カフェ | 渋谷区・恵比寿 | Silver |
| The Tokyo EDITION, Toranomon | ホテルラウンジ | 港区・虎ノ門 | Gold |
| New York Bar（パークハイアット東京） | バー | 新宿区・西新宿 | Platinum |
| WeWork 渋谷スクランブルスクエア | コワーキング | 渋谷区・渋谷 | Certified |
| SaunaLab Kanda | スパ・サウナ | 千代田区・神田 | Gold |
| 渋谷SAUNAS | スパ・サウナ | 渋谷区・渋谷 | Gold |
| The SG Club | バー | 渋谷区・渋谷 | Platinum |

**ルール**（今後の追加時も遵守）
- 実在性が確認できる店舗のみ掲載（公式URL・住所が確認できるもの）
- 実在するが同意未取得 → 「TPJセレクト（評論扱い）」として掲載継続可
- 架空・placeholder → 即時非表示

---

#### TPJセレクトページをFlagship＋TPJセレクトの2セクション構成に再編

**対象ファイル**
- `src/stories/certified/index.njk` — 全面再構成
- `src/stories/index.njk` — ウィジェット説明文更新

**ラベル設計（確定）**

| 対象 | ラベル | バッジ | 文言トーン |
|---|---|---|---|
| GBC（Green Beans Coffee） | **Flagship** | 盾アイコン・金枠 | 「Third Place Japanが提唱する理想の空間を体現する旗艦店」 |
| その他実店舗（無償・編集部発掘） | **TPJセレクト** | 虫眼鏡アイコン・ソフトボーダー | 「編集部が見つけた、いま気になる居場所」 |
| 将来のSilver以上（有償・審査あり） | 認証（Certified/Silver/Gold等） | グレード別バッジ | 「7基準に基づき正式に認証された施設」 |

**ページ構成**
- 上部固定枠：Flagship（GBC単独・盾アイコン・金枠大カード）
- 下部グリッド：TPJセレクト一覧（虫眼鏡バッジ・「随時追加中：現在N件」表示）
- グレードフィルターナビは撤廃
- 各カードのバッジ：`TPJセレクト`（Certified/Gold等のグレード名は無償枠に非表示）

**ウィジェット説明文（確定）**
`随時追加中：現在{{ published.length }}件を編集部が調査・ご紹介しています`
- `published.length` は publishedVenues フィルターで自動算出（施設追加・削除に連動）
- 「N件掲載中」のような断定表示は使用しない

**ルール（今後も遵守）**
- 「Certified」という文言・バッジは、無償枠（TPJセレクト）には一切使用しない
- GBCは「Certified」ではなく「Flagship」として別枠
- 正式認証（有償・同意取得済み・Silver以上）が揃った段階で、再度 `/stories/certified/` を正式な「認証店舗一覧」ページとして切り直す予定

---

#### TPJ認証店舗 → TPJセレクト 表記変更

**対象ファイル**
- `src/stories/index.njk` — トップページのウィジェット変更
- `src/_includes/nav-stories.njk` — グローバルナビ変更
- `src/stories/certified/index.njk` — 一覧ページ全表記変更

**変更内容**

| 変更箇所 | 変更前 | 変更後 |
|---|---|---|
| トップページウィジェット名 | TPJ認証店舗 | TPJセレクト |
| トップページウィジェット説明 | 7軸評価基準で認証された施設 — N件掲載中 | 編集部が見つけた、いま気になる居場所 |
| トップページアイコン | 勲章（medal）SVG | 虫眼鏡（search）SVG |
| グローバルナビ | 認証店舗 | TPJセレクト |
| 一覧ページタイトル・H1 | 認証店舗一覧 | TPJセレクト一覧 |
| 一覧ページサブラベル | Certified Venues | TPJ Select |
| 一覧ページFAQ | TPJ認証店舗とは〜 | TPJセレクトとは〜 |

**方針**：「認証」は今後、同意取得済み・Silver以上の正式施設にのみ使用。現時点では「TPJセレクト（編集部評論扱い）」として掲載継続。

---

#### 7基準の表記統一・3グループ構造化（記事サイト側）

**対象ファイル**
- `src/_layouts/venue.njk` — 7軸スコアセクションを3グループ構造に再編
- `src/_layouts/article-certified.njk` — JSON-LD PropertyValue名を新表記に統一

**変更内容**

| 正式名称（法人サイト用・変更不要） | 記事サイト表記（統一後） |
|---|---|
| 居心地・空間品質 | 五感品質・素材 |
| 静寂性・プライバシー | 静けさの再現 |
| 特別感・非日常性 | 特別感・ギフト体験 |
| ストーリー・背景への共感 | ストーリー継承 |
| 再訪・継続価値 | 愛用・回遊価値 |
| 記録・シェア体験 | シェア・記録性 |
| インバウンド・多言語対応 | インバウンド適性 |

**グループ構造**（venue.njk の7軸スコア表示）
- **【場の質】その場で感じる空間**：五感品質・素材 / 静けさの再現
- **【心の核】心が動く**：特別感・ギフト体験 / ストーリー継承
- **【広がり】続く・伝わる・世界へ**：愛用・回遊価値 / シェア・記録性 / インバウンド適性

**ルール**
- 法人サイト（thirdplacejapan.com のFor Business系）は正式名称のまま変更不要
- 記事サイト側（venue.njk・article-certified.njk）は上記新表記に統一
- `src/stories/about/index.njk` の JSON-LD DefinedTerm `name` は概念定義のため正式名称を維持

---

#### venue詳細ページのUIをTPJセレクト仕様に統一

**対象ファイル**
- `src/_layouts/venue.njk`

**変更内容**

| 変更箇所 | 変更前 | 変更後 |
|---|---|---|
| パンくず（JSON-LD・表示） | 認証店舗 | TPJセレクト |
| グレードバッジ（施設名上） | 全施設に表示（Silver/Gold等） | Flagshipのみ表示 |
| 関連施設カードのグレードバッジ | 全カードに表示（Silver/Gold等） | 削除（非表示） |
| サイトリンク表示 | テキストリンク「公式サイト ↗」 | ゴールド枠ピルボタン「関連サイト」 |
| GBC（Green Beans Coffee）のURL | 空欄 | https://greenbeanscoffeeambassador.com/ |

**ルール（今後も遵守）**

- グレードバッジ（Certified/Silver/Gold/Platinum）は**無償TPJセレクト枠では表示しない**
  - Flagshipのみ例外的に表示（`{% if venue.grade_slug == 'flagship' %}`で制御）
  - 有償認証（同意取得・正式査定済み）が揃った段階で表示を復活させる
- 関連施設カードにもグレードバッジは表示しない（一覧ページ・詳細ページとも統一）
- 「公式サイト」という表現は使わない。「関連サイト」に統一する
  - URLがない施設は非表示（`{% if venue.url %}`）。グルメサイト等の代替URLを設定してよい
  - ボタンスタイル：`border border-gold text-gold rounded-full px-4 py-1.5`、ホバーでゴールド塗りつぶし

---

#### TPJセレクト掲載施設を30件に拡充（フェーズ1完了）

**対象ファイル**
- `src/_data/venues.json` — 17件の新規施設を追加（計30件）

**追加施設一覧**

| 店舗名 | カテゴリ | エリア | グレード |
|---|---|---|---|
| Switch Coffee Tokyo | カフェ | 目黒区・目黒 | Certified |
| Glitch Coffee & Roasters | カフェ | 千代田区・神田 | Gold |
| The Roastery by Nozy Coffee | カフェ | 渋谷区・原宿 | Gold |
| ARiSE COFFEE ROASTERS | カフェ | 江東区・清澄白河 | Silver |
| Streamer Coffee Company 原宿 | カフェ | 渋谷区・原宿 | Certified |
| Andaz Tokyo トランプ タワーズ 虎ノ門 | ホテルラウンジ | 港区・虎ノ門 | Platinum |
| The Okura Tokyo | ホテルラウンジ | 港区・虎ノ門 | Platinum |
| TRUNK(HOTEL) | ホテルラウンジ | 渋谷区・表参道 | Gold |
| BnA_WALL | ホテルラウンジ | 中央区・日本橋 | Silver |
| 小杉湯 | スパ・サウナ | 杉並区・高円寺 | Gold |
| Spa LaQua | スパ・サウナ | 文京区・後楽園 | Silver |
| SHARE LOUNGE 六本木蔦屋書店 | コワーキング | 港区・六本木 | Silver |
| co-ba shibuya | コワーキング | 渋谷区・渋谷 | Certified |
| 文喫 六本木 | 文化・レジャー | 港区・六本木 | Gold |
| 代官山 蔦屋書店 | 文化・レジャー | 渋谷区・代官山 | Platinum |
| BOOK AND BED TOKYO 新宿 | 文化・レジャー | 新宿区・歌舞伎町 | Silver |
| 森岡書店 銀座 | 文化・レジャー | 中央区・銀座 | Gold |

**カテゴリ配分（30件時点）**

| カテゴリ | 件数 | 比率 | 目標比率 |
|---|---|---|---|
| カフェ | 12件 | 40% | 40% ✓ |
| 宿泊（ホテルラウンジ含む） | 5件 | 17% | 15% ✓ |
| ウェルネス・スパ・サウナ | 4件 | 13% | 15% ✓ |
| コワーキング | 3件 | 10% | 10% ✓ |
| その他（バー・文化・書店等） | 6件 | 20% | 20% ✓ |

**地域配分（フェーズ1：東京23区）**
- 渋谷区：12件（FUGLEN・猿田彦・KOFFEE MAMEYA・渋谷SAUNAS・WeWork・The SG Club・ONIBUS・TRUNK・Streamer・The Roastery・co-ba・蔦屋代官山）
- 港区：7件（ARABICA・EDITION・Andaz・Okura・SHARE LOUNGE・文喫・SaunaLab以外）
- その他区：各1〜2件（千代田・江東・目黒・中央・新宿・文京・杉並）

**ルール（今後の追加時も遵守）**
- 30件 → 50件 → 100件と段階的に拡大（四半期ごとに配分確認）
- カテゴリが目標比率を+5%超過したら新規掲載を一時停止
- 追加時は `ルールブック（セクション10）` の7基準チェックを必須実施
- 実在性・営業中の確認（公式URL・住所の存在確認）を必ず行う
- 渋谷区への偏りが顕著なため、次回拡大時は **他区（台東・墨田・新宿・品川等）** を優先発掘すること

**次のチェックポイント**
- 30件 → 50件への拡大：フェーズ1の品質・配分確認後に着手
- 拡大前に「閉店・移転確認」を全30件に実施すること

---

### 2026-07-03

#### 検索：件数表示＋表示件数を15件に拡大

**対象ファイル**：`src/_includes/nav-stories.njk`

**変更内容**：

| 項目 | 変更前 | 変更後 |
|---|---|---|
| 表示件数 | 上位8件 | 上位15件 |
| 件数表示 | なし | 「○件ヒット」を常時表示 |
| 15件超の場合 | 超過分は無表示・通知なし | 「○件ヒット（上位15件を表示）」と明示 |

**実装箇所**（`nav-stories.njk` 内 Pagefind コールバック）：
```js
const total = res.results.length;
msg.textContent = total + '件ヒット' + (total > 15 ? '（上位15件を表示）' : '');
const items = await Promise.all(res.results.slice(0, 15).map(...));
```

**ルール化**：
- 初期表示は **15件**、以降は「さらにN件を表示」ボタンで15件ずつ追加読み込み（全件表示可能）
- 件数表示は必須。「○件ヒット」を常時表示する
- 「もっと見る」ボタンには「残りN件」も併記してユーザーが総件数を把握できるようにする
- 追加読み込みは `allResults.slice(shownCount, shownCount + PAGE_SIZE)` で実装（`PAGE_SIZE = 15`）
- 検索クエリが変わったら `allResults` と `shownCount` をリセットすること

---

#### .prose テーブルスタイル追加（table・th・td の枠・余白定義）

**背景**：記事本文内の Markdown テーブルにスタイルが当たらず、枠なし・余白なしで読みにくい状態だった。

**対象ファイル**：`src/_layouts/base.njk`

**追加スタイル**：
```css
.prose table { width: 100%; border-collapse: collapse; margin: 1.75em 0; font-size: 0.875rem; }
.prose table th {
  background-color: #F0EDE6;       /* アイボリー背景 */
  font-weight: 500;
  text-align: left;
  padding: 0.6em 1em;
  border: 1px solid var(--color-border);
  font-family: var(--font-serif);
  color: var(--color-text);
  white-space: nowrap;
}
.prose table td {
  padding: 0.6em 1em;
  border: 1px solid var(--color-border);
  line-height: 1.7;
  vertical-align: top;
}
.prose table tr:nth-child(even) td { background-color: #FAFAF8; }  /* 偶数行ストライプ */
```

**ルール化**：記事本文で Markdown テーブル（`|列|列|` 記法）を使う場合、スタイルは `base.njk` の `.prose table` が自動適用される。個別スタイルの追加は不要。

**AEO効果**：`<th>` ヘッダーが明示されることで AI がテーブルの列ヘッダーとデータの関係を正確に読み取れる。比較表・評価表は積極的に使うこと。

---

#### .prose スタイル追加（ul・ol・li・hr の余白定義）

**背景**：記事本文内のリンクリストと次のセクション（FAQなど）の間に余白がなく、読みづらい状態が発生。

**原因**：`base.njk` の `.prose` スタイルに `ul`・`ol`・`li`・`hr` の定義がなく、ブラウザデフォルト（余白ゼロ）が適用されていた。

**対象ファイル**：`src/_layouts/base.njk`

**追加スタイル**：
```css
.prose ul  { margin-bottom: 1.5em; padding-left: 1.5em; list-style: disc; }
.prose ol  { margin-bottom: 1.5em; padding-left: 1.5em; list-style: decimal; }
.prose li  { margin-bottom: 0.5em; line-height: 1.8; }
.prose hr  { margin: 2.5em 0; border: none; border-top: 1px solid var(--color-border); }
```

**ルール化**：記事本文（`.prose`）に新しいHTML要素を使う際は、`base.njk` の `.prose` スタイルに定義があるか必ず確認すること。未定義の場合はスタイルを追加する。

---

#### 全ページの余白縮小（フッター上・コンテンツ下）

**背景**：FAQセクション下・フッター上の空白が過大（`mt-24` + `py-24` = 約192px）。

**変更内容**：

| ファイル | 変更前 | 変更後 |
|---|---|---|
| `footer-journal.njk` / `footer-stories.njk` | `mt-24` | `mt-14` |
| `article.njk` / `article-area.njk` / `article-certified.njk` | `py-16 md:py-24` | `py-10 md:py-16` |
| `stories/category-index.njk` / `latest.njk` | `py-24` | `pt-16 pb-10` |
| `stories/index.njk` | `pt-24 pb-10` | `pt-16 pb-8` |

**ルール化**：コンテンツ末尾の下padding は `pb-8`〜`pb-10`、フッターの上margin は `mt-14` を基準とする。

---

### 2026-07-02（デザイン統一・続き）

#### サイドバー「サードプレイスとは」表示件数を5件に統一

- 変更前：`head(4)`（4件表示）→ 変更後：`head(5)`（5件表示）
- 対象ファイル：`src/_layouts/article.njk` / `article-area.njk` / `src/stories/category-index.njk`
- `article-certified.njk` にはこのセクションがないため対象外

### 2026-07-02（デザイン統一）

#### サイドバースタイル統一（ゴールド枠＋白背景）

全ページのサイドバー（カテゴリ・最新記事・サードプレイスとは）を以下スタイルに統一。

**統一スタイル**:
```html
class="rounded-xl p-5" style="border:1px solid rgba(184,150,12,0.5);background-color:#ffffff;"
```

**対象ファイル（4ファイル）**:

| ファイル | 対象ページ |
|---|---|
| `src/_layouts/article.njk` | 通常記事ページ（全記事） |
| `src/_layouts/article-certified.njk` | 認証記事ページ |
| `src/_layouts/article-area.njk` | エリアページ記事レイアウト |
| `src/stories/category-index.njk` | 15カテゴリ一覧ページ |

**変更不要のサイドバー**（カテゴリリスト形式ではないため対象外）:
- `src/stories/area/l2-city.njk` / `l3-area.njk` → Googleマップ iframeサイドバー
- `src/_layouts/venue.njk` / `venue-en.njk` → 住所・最寄駅テキスト情報

#### ヘッダーカラー変更

- `src/_includes/nav-stories.njk` のナビ背景色を `#6B4F3A`（赤みブラウン）→ `#2D2A26`（ダークウォームブラウン）に変更
- ボトムボーダー: `rgba(107,79,58,0.8)` → `rgba(184,150,12,0.25)`（ゴールド薄線）に変更

#### 前の記事・次の記事ナビ レイアウト変更

- モバイル: 1カラム縦並び、PC（`md:`以上）: 2カラム横並び（`grid grid-cols-1 md:grid-cols-2`）
- 「次の記事」: テキスト左・写真右（「前の記事」と対称レイアウト）
- 対象ファイル: `src/_layouts/article.njk` / `article-certified.njk`

### 2026-07-02

#### 認証施設ページへのReview + reviewRatingスキーマ追加（AEO強化）

**対象ファイル**: `src/_layouts/venue.njk`（全13認証施設ページに反映）

**変更内容**:
- `venue.njk` に `Review` JSON-LDブロックを追加
- TPJ認証グレードを数値（Certified=1 〜 Flagship=5）に変換し `reviewRating.ratingValue` として出力
- `reviewBody` に施設の引用文（`venue.citation`）を設定
- `gradeNums` マッピング変数を `venue.njk` 冒頭に定義

**理由**: 従来は `LocalBusiness` スキーマのみで認証グレードが `additionalProperty` にテキストとして埋め込まれていた。`Review` + `reviewRating` を追加することで、AIが評価情報（数値・著者・対象施設）を構造的に認識できるようになった。

**ルール化**: 「認証施設のReview + reviewRatingルール」として AEO・構造化データ実装ルールセクションに追記済み。

---

### 2026-06-21

#### 記事レイアウトへの SNS シェア・関連記事・前後ナビ追加

**対象ファイル**: `src/_layouts/article.njk` / `src/_layouts/article-certified.njk`

**追加機能（3点）**:
1. **シェアボタン**（記事本文末尾）: X（Twitter）・LINE・Facebook の3ボタン。タイトルとURLをURLエンコードして各SNSの公式シェアURLに渡す。
2. **関連記事**（グリッド外・全幅）: 同じ `category_slug` の記事を最大3件、サムネイル付きで表示。同カテゴリが3件未満の場合は他カテゴリの最新記事で補完。
3. **前の記事・次の記事**（関連記事の下）: `collections.articles`（日付降順）から前後を取得。左＝古い記事、右＝新しい記事。
   - **レイアウト**: モバイルは1カラム（縦並び）、PC（`md:` 以上）は2カラム横並び。`grid grid-cols-1 md:grid-cols-2 gap-4` で実装。
   - **対象ファイル**: `src/_layouts/article.njk`・`src/_layouts/article-certified.njk`（両方に同じ実装）

**追加フィルター（`.eleventy.js`）**:
- `urlencode(str)` → `encodeURIComponent` ラッパー
- `relatedPostsByCat(collection, currentUrl, categorySlug, limit)` → 同カテゴリ優先の関連記事取得

**AOS 非表示バグへの対処**:
- 初期実装では `data-aos="fade-up"` を付与していたが、ページ最下部の要素は AOS のスクロールトリガーが発火せず `opacity:0` のまま不可視になる問題が発生。
- `data-aos` 属性を削除し、さらに `style="opacity:1;visibility:visible;"` を明示することで完全に解決。
- **教訓**: ページ最下部に配置する要素には `data-aos` を使わない。

---

#### エリアナビの3層化

**対象ファイル**: `src/stories/index.njk` / `src/stories/area/index.njk`

- 従来: 都道府県 → 市区町村（2層）
- 変更後: 都道府県 → 市区町村 → 個別エリア名（3層）
- 各市区町村名の下に、属するエリア・駅名タグを直接表示してリンク。
- `areas.json` の `city.areas[]` を直接ループして生成。

---

#### エリア・駅の大幅拡充

**対象ファイル**: `src/_data/areas.json`

- 138ページ → 199ページ（+61ページ）
- 追加内容:

| 市区町村 | 追加エリア |
|----------|-----------|
| 渋谷区 | 神泉・富ヶ谷・幡ヶ谷・笹塚・初台・松濤 |
| 港区 | 麻布十番・白金台・三田・芝浦・高輪 |
| 新宿区 | 四谷・早稲田・西新宿・落合 |
| 中央区 | 築地・月島・勝どき |
| 目黒区 | 目黒・武蔵小山・中目黒 |
| 世田谷区 | 経堂・用賀・祖師ヶ谷大蔵・千歳船橋 |
| 千代田区 | 秋葉原・日比谷・半蔵門・飯田橋 |
| 豊島区 | 大塚・目白・東池袋 |
| 台東区 | 入谷・日暮里・御徒町 |
| 江東区 | 門前仲町・豊洲・木場 |
| 大阪・京都・神奈川・福岡 | 各2〜5エリア追加 |

---

#### 表記統一：「サードプレイスを知る」→「サードプレイスとは」

**対象ファイル**: `src/_layouts/article.njk` / `src/stories/index.njk` / `src/stories/about/index.njk`

- 全ページで「サードプレイスを知る」が残存していた箇所を「サードプレイスとは」に統一。
- 検索コマンド: `grep -rn "サードプレイスを知る" src/` で残存確認してから修正。

---

#### 画像パス修正

**対象**: `public/assets/images/articles/specialty-coffee-interior-tokyo.webp`

- 認証記事のサムネイル画像が `images/main/` に保存されており、`images/articles/` に存在しなかった。
- `images/main/` から `images/articles/` にコピーして解決。
- **教訓**: 記事サムネイルは必ず `public/assets/images/articles/` に保存する（`images/main/` はメインサイト用）。

---

## AEO・構造化データ 実装ルール（2026-06-26 確定・スコア 110/110 達成）

> このセクションはTPJサイトのAEO（Answer Engine Optimization）実装の唯一の正本。
> 新規ページ・テンプレートを追加するたびに、このルールに従い実装すること。

---

### 前提：全ページに自動適用される共通実装

`src/_layouts/base.njk` をすべての記事サイトページが継承することで、以下が自動適用される。
**新規レイアウトを作成する際は必ず `base.njk` を継承すること（直接 `<html>` を書かない）。**

| 項目 | 実装内容 |
|---|---|
| Organization JSON-LD | name・alternateName・url・logo・description・areaServed |
| OGP | og:title・og:description・og:type・og:url・og:image・og:locale・og:site_name |
| Twitter Card | twitter:card・twitter:title・twitter:description・twitter:image |
| keywords meta | デフォルト値（フロントマターで `keywords:` を設定すれば上書き可能） |
| canonical | フロントマターで `canonical:` を設定した場合のみ出力 |
| hreflang | フロントマターで `hreflang_ja:` / `hreflang_en:` を設定した場合のみ出力 |

**og:image のフォールバック順（base.njk）：**
1. フロントマターの `og_image:`
2. フロントマターの `thumbnail:`
3. デフォルト `/assets/images/main/japan-cafe-interior-hero.webp`

---

### 全ディレクトリ・全ページ 構造化データ実装マップ

#### メインサイト

| ファイル | URL | 実装済みJSON-LD | speakable |
|---|---|---|---|
| `public/index.html` | `/` | Organization・WebSite+SearchAction・FAQPage（5問） | ✅ WebSite |

#### 記事レイアウト（`src/_layouts/`）

| ファイル | 用途 | 実装済みJSON-LD | speakable |
|---|---|---|---|
| `article.njk` | 一般記事 | Article（mainEntityOfPage・wordCount・keywords）・BreadcrumbList・FAQPage（自動抽出） | ✅ Article |
| `article-area.njk` | エリア記事 | Article（mainEntityOfPage・wordCount）・BreadcrumbList・FAQPage（自動抽出） | ✅ Article |
| `article-certified.njk` | 認証店舗紹介記事 | Article+Review（mainEntityOfPage・wordCount・keywords）・LocalBusiness+7軸スコア・BreadcrumbList・FAQPage（自動抽出） | ✅ Article |
| `venue.njk` | 認証店舗詳細（日本語） | LocalBusiness+7軸スコア（additionalProperty）・Review+reviewRating（グレード数値化）・BreadcrumbList（4階層） | ✅ LocalBusiness |
| `venue-en.njk` | 認証店舗詳細（英語） | LocalBusiness+7軸スコア・BreadcrumbList | ✅（要確認） |

#### Storiesページ（`src/stories/`）

| ファイル | URL | 実装済みJSON-LD | speakable |
|---|---|---|---|
| `stories/index.njk` | `/stories/` | WebSite・FAQPage（3問） | — |
| `stories/about/index.njk` | `/stories/about/` | BreadcrumbList・DefinedTermSet（3用語）+speakable | ✅ DefinedTermSet |
| `stories/certified/index.njk` | `/stories/certified/` | BreadcrumbList・ItemList+mainEntityOfPage+description・FAQPage（3問） | — |
| `stories/category-index.njk` | `/stories/{カテゴリslug}/` | BreadcrumbList・CollectionPage・FAQPage（2問） | — |
| `stories/area/index.njk` | `/stories/area/` | BreadcrumbList・CollectionPage・FAQPage（2問） | — |
| `stories/area/l1-prefecture.njk` | `/stories/area/{都道府県}/` | BreadcrumbList（4階層）・FAQPage（2問） | — |
| `stories/area/l2-city.njk` | `/stories/area/{都道府県}/{市区町村}/` | BreadcrumbList（4階層）・FAQPage（2問） | — |
| `stories/area/l3-area.njk` | `/stories/area/{都道府県}/{市}/{エリア}/` | BreadcrumbList・FAQPage | — |
| `stories/area/l3-category.njk` | `/stories/area/.../{ カテゴリ}/` | BreadcrumbList・ItemList・FAQPage（5問） | — |

---

### 新規テンプレート・ページ作成時の必須チェックリスト

新しいテンプレート（`.njk`）またはページを追加するときは、**以下を全項目実装してからコミットすること**。

#### ① BreadcrumbList JSON-LD（全ページ必須）

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Third Place Japan", "item": "{{ site.url }}" },
    { "@type": "ListItem", "position": 2, "name": "Stories", "item": "{{ site.url }}/stories/" },
    { "@type": "ListItem", "position": 3, "name": "（中間カテゴリ）", "item": "{{ site.url }}/stories/..." },
    { "@type": "ListItem", "position": 4, "name": "現在のページ名", "item": "{{ site.url }}{{ page.url }}" }
  ]
}
```

**ルール：**
- 1階層目は必ず `Third Place Japan`（`{{ site.url }}`）から始める
- 記事・一覧ページ共通で適用。省略禁止

#### ② ページ種別に応じたJSON-LD

| ページ種別 | 使うスキーマ | 必須フィールド |
|---|---|---|
| 読み物・解説記事 | `Article` | headline・description・image・datePublished・dateModified・author・publisher・mainEntityOfPage・wordCount・inLanguage・speakable |
| 認証店舗紹介記事 | `Article` + `Review` | 上記 + itemReviewed（LocalBusiness）・reviewRating |
| 認証店舗詳細ページ | `LocalBusiness` + `Review` | name・description・image・url・address・geo・additionalProperty（7軸スコア）・speakable ／ Review: itemReviewed・reviewRating（ratingValue=1〜5）・reviewBody |
| 一覧・索引ページ | `CollectionPage` または `ItemList` | name・description・url・mainEntityOfPage・hasPart または itemListElement |
| FAQ・Q&Aを含む全ページ | `FAQPage` | mainEntity（Question + acceptedAnswer の配列） |
| 用語解説ページ | `DefinedTermSet` | name・url・hasDefinedTerm（DefinedTerm の配列）・speakable |

#### ③ speakable スキーマ（記事・店舗・用語ページに必須）

以下の cssSelector をページ種別に合わせて設定する：

| ページ種別 | cssSelector |
|---|---|
| 一般記事 | `["h1", ".prose p"]` |
| 認証記事 | `["h1", ".prose p", ".border-l-2"]` |
| 認証店舗詳細 | `["h1", ".border-l-2"]`（`.border-l-2` = 引用用一文） |
| 用語集 | `["h1", "h2"]` |
| メインサイト | `["h1", ".hero-headline", ".concept-lead"]` |

```json
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", ".prose p"]
}
```

#### ④ publisher の logo URL（全 Article・LocalBusiness で統一）

```json
"publisher": {
  "@type": "Organization",
  "name": "Third Place Japan",
  "logo": {
    "@type": "ImageObject",
    "url": "{{ site.url }}/assets/images/main/japan-cafe-interior-hero.webp"
  }
}
```

> **禁止**: `{{ site.url }}/assets/logo.png` は存在しないファイルのため使用禁止

#### ⑤ wordCount フィールド（全 Article に必須）

`.eleventy.js` にカスタムフィルター `wordCount` が定義されている（HTMLタグを除去して単語数をカウント）。

```njk
"wordCount": {{ content | wordCount }}
```

#### ⑥ keywords フィールド（Article に必須）

- 一般記事: `"keywords": "{{ tags | join(', ') }}"`
- 認証記事: `"keywords": "{{ category_slug }}, サードプレイス, TPJ認証, {{ v.name }}, {{ v.category }}, {{ v.area_primary.prefecture }}, {{ v.area_primary.area }}"`

#### ⑦ FAQPage の設置ルール（AEO最重要）

- 記事ページ: 本文中に `**Q.` で始まるQ&Aがあれば `extractFAQ` フィルタが自動生成する（追加実装不要）
- 一覧・カテゴリ・エリアページ: 手書きで `FAQPage` を設置する（2〜5問）
- FAQ質問は「実際に検索されうる形」で立てる。例：
  - ✅「東京でTPJ認証を受けたカフェはどこですか？」
  - ❌「このカテゴリについて教えてください」（曖昧すぎる）
- 回答は2〜3文に収め、冒頭で直接答える（前置き不要）

---

### 認証施設のReview + reviewRatingルール（venue.njk 必須・2026-07-02追加）

`venue.njk`（認証店舗詳細ページ）には `LocalBusiness` に加えて、**`Review` スキーマを必ず別ブロックで追加すること**。

**グレード→数値マッピング（固定）：**

| TPJ認証グレード | ratingValue |
|---|---|
| Certified | 1 |
| Silver | 2 |
| Gold | 3 |
| Platinum | 4 |
| Flagship | 5 |

**テンプレート実装（venue.njk）：**

```njk
{%- set gradeNums = {"Certified": 1, "Silver": 2, "Gold": 3, "Platinum": 4, "Flagship": 5} -%}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "{{ venue.name }}",
    "address": { "@type": "PostalAddress", "addressLocality": "...", "addressRegion": "...", "addressCountry": "JP" }
  },
  "author": { "@type": "Organization", "name": "サードプレイスジャパン編集部", "url": "{{ site.url }}" },
  "publisher": { "@type": "Organization", "name": "Third Place Japan", "url": "{{ site.url }}" },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": {{ gradeNums[venue.grade] or 1 }},
    "bestRating": 5,
    "worstRating": 1,
    "description": "TPJ認証グレード {{ venue.grade }}"
  },
  "reviewBody": "{{ venue.citation }}",
  "url": "{{ site.url }}/stories/certified/{{ venue.slug }}/"
}
```

**理由：** `LocalBusiness` だけではAIが「評価情報」として認識できない。`Review` + `reviewRating` を追加することでAIが認証グレードを数値評価として抽出できるようになる。

---

### 7軸スコアのJSON-LD化ルール（認証施設必須）

認証施設の7軸スコアは `additionalProperty` として LocalBusiness スキーマに含める。
**値は日本語名 + `/10` 形式で記述すること**（英語名禁止）。

```json
"additionalProperty": [
  { "@type": "PropertyValue", "name": "TPJ認証グレード",             "value": "{{ venue.grade }}" },
  { "@type": "PropertyValue", "name": "TPJ認証取得日",               "value": "{{ venue.certified_date }}" },
  { "@type": "PropertyValue", "name": "主評価軸",                     "value": "{{ venue.axes_primary }}" },
  { "@type": "PropertyValue", "name": "居心地・空間品質スコア",       "value": "{{ venue.scores.comfort }}/10" },
  { "@type": "PropertyValue", "name": "静寂性・プライバシースコア",   "value": "{{ venue.scores.silence }}/10" },
  { "@type": "PropertyValue", "name": "特別感・非日常性スコア",       "value": "{{ venue.scores.special }}/10" },
  { "@type": "PropertyValue", "name": "ストーリー・背景への共感スコア","value": "{{ venue.scores.story }}/10" },
  { "@type": "PropertyValue", "name": "再訪・継続価値スコア",         "value": "{{ venue.scores.revisit }}/10" },
  { "@type": "PropertyValue", "name": "記録・シェア体験スコア",       "value": "{{ venue.scores.record }}/10" },
  { "@type": "PropertyValue", "name": "インバウンド・多言語対応スコア","value": "{{ venue.scores.inbound }}/10" }
]
```

---

### AEOスコア履歴

| 実施日 | スコア | 主な変更内容 |
|---|---|---|
| 2026-06-26（第1回） | 52 → 89 / 110 | FAQPage・BreadcrumbList・OGP・Organization強化・SearchAction |
| 2026-06-26（第2回） | 89 → 96 / 110 | カテゴリ・エリアページへの展開、CLAUDE.md ルール化 |
| 2026-06-26（第3回） | 96 → **110 / 110** | speakable・wordCount・og:image修正・FAQPage全階層展開・DefinedTermSet強化 |

**現在のスコア：110 / 110（満点）**
