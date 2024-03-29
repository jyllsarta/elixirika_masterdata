module.exports = [
  {
    challenge_ids: [1, 2, 3, 4],
    character_id: 1,
    description:
      "妖精力を込めた魔法盤、スターパレット作りを手伝おう！\n[前以上の数値で][色の違う]カードを重ね、[ ^ ]で刻印だ！\n1 ~ 8枚に対応するパネル全てに刻印ができたらクリアだ。",
    extra_effect_description:
      "スターパレット： [1, 2, 3, 4, 5, 6, 7, 8+]\n何にでも重ねられる万能札[ ◇ ] 2枚と[ ^ ] 2枚を持つ",
    id: 1,
    index: 1,
    title: "妖精魔法盤",
  },
  {
    challenge_ids: [5, 6, 7, 8],
    character_id: 1,
    description:
      "スターパレット第二弾も作っちゃおう！\n今度は15枚以上条件の大きな枠があるぞ。\n[ ◇ ]カードをうまく使って大物を作ってみよう。",
    extra_effect_description:
      "スターパレット： [1, 2, 3, 4, 5, 15+]\n何にでも重ねられる万能札[ ◇ ] 2枚と[ ^ ] 2枚を持つ",
    id: 2,
    index: 2,
    title: "大黒柱仕様",
  },
  {
    challenge_ids: [9, 10, 11, 12],
    character_id: 1,
    description:
      "デッキに紫のお宝カードがたくさん入り込んだ！\n紫のカードは高得点だ。なるべく刻印に混ぜていこう。\nかなり難易度の高いスコアチャレンジがある。狙ってみよう！",
    extra_effect_description:
      "スターパレット： [1, 2, 3, 4, 5, 6, 7, 8+]\nすべてのカードを使い切るまで終了しない\n紫色のお宝カードをデッキに追加。1枚につき10点ボーナス\n出現する数値の範囲が 1 ~ 7 に変更",
    id: 3,
    index: 3,
    title: "豪華魔法盤",
  },
  {
    challenge_ids: [13, 14, 15, 16],
    character_id: 1,
    description:
      "より純度の高いハイグレードな魔法盤作りをしてみよう！\n以前より数段厳しい条件での挑戦になる。心して挑め！",
    extra_effect_description:
      "スターパレット： [2, 3, 4, 5, 6, 7, 8, 9+]\n何にでも重ねられる万能札[ ◇ ] 1枚と[ ^ ] 2枚を持つ\n[ ◇ ] 1枚がデッキに混ざっている",
    id: 4,
    index: 4,
    title: "上級魔法盤",
  },
  {
    challenge_ids: [17, 18, 19, 20],
    character_id: 2,
    description:
      "アリティは天界の工業妖精。今日も納品依頼に答えます。\nアリティの盤は4枚か8枚きっかりで出すと評価される。\n彼女は4枚までカードをポケットに保持できる。うまく使おう。",
    extra_effect_description:
      "スターパレット: 4枚で+1, 8枚で+3, +12でクリア\n任意のカードをホールドできるポケットを4つ持つ",
    id: 5,
    index: 1,
    title: ".initialize()",
  },
  {
    challenge_ids: [21, 22, 23, 24],
    character_id: 2,
    description:
      "ルール違反は即インシデントだ。途中で強制終了してしまう！\n2枚か3枚、中途半端な枚数で出すとアウトだ。\n安全に業務をやり遂げよう！",
    extra_effect_description:
      "スターパレット: 4枚で+1, 8枚で+3, +12でクリア\n「2枚か3枚でスターパレットに送るべからず」",
    id: 6,
    index: 2,
    title: "assert(length)",
  },
  {
    challenge_ids: [25, 26, 27, 28],
    character_id: 2,
    description:
      "さらなる品質改善命令がやってきた！今度は捨て札禁止だ。\n以前のルールも含め、全て守る必要があるぞ。\nゼロ災でいこう！(でもノルマは守ってね)",
    extra_effect_description:
      "スターパレット: 4枚で+1, 8枚で+3, +12でクリア\n「2枚か3枚でスターパレットに送るべからず」\n「1枚たりとも捨札にするべからず」",
    id: 7,
    index: 3,
    title: "refute(discards)",
  },
  {
    challenge_ids: [29, 30, 31, 32],
    character_id: 2,
    description:
      "品質改善命令がどんどん課されていく！\n同じ数字を重ねるのも禁止されてしまった。\n細心の注意を払って進めていこう。",
    extra_effect_description:
      "「2枚か3枚でスターパレットに送るべからず」\n「1枚たりとも捨札にするべからず」\n「同じ数値のカードを重ねるべからず」",
    id: 8,
    index: 4,
    title: "assert(gap)",
  },
  {
    challenge_ids: [33, 34, 35, 36],
    character_id: 3,
    description:
      "ラズもスターパレット職人の一人。\n人間との交流に慣れてないみたい。優しく接してあげてね。\nラズは [数値が1小さいカード] も重ねられるぞ。",
    extra_effect_description:
      "スターパレット： [1, 2, 3, 4, 5, 6, 7, 8+]\n数値が1小さいカードも重ねられる\nシャッフル 6回",
    id: 9,
    index: 1,
    title: "なんですか人間",
  },
  {
    challenge_ids: [37, 38, 39, 40],
    character_id: 3,
    description:
      "ラズのご機嫌取りに成功した。\n第二弾も触らせてもらえるみたいだ。今度は大物2つだ！\nマイナス積みを全力で使って10+の山を2つ作ってみよう。",
    extra_effect_description:
      "スターパレット：[10+, 10+]\n数値が1小さいカードも重ねられる\nシャッフル 6回",
    id: 10,
    index: 2,
    title: "少しはできますね",
  },
  {
    challenge_ids: [41, 42, 43, 44],
    character_id: 3,
    description:
      "どうやら、わりと人間によるサポートが気に入ったみたいだ。\n(ちょっと 図々しくなってきた...)\n素数だらけのボードで埋めにくそうだ。付き合ってあげよう。",
    extra_effect_description:
      "スターパレット：[2, 3, 5, 7, 11]\n数値が1小さいカードも重ねられる\nシャッフル 6回",
    id: 11,
    index: 3,
    title: "手伝いなさい人間",
  },
  {
    challenge_ids: [45, 46, 47, 48],
    character_id: 3,
    description:
      "キラキラした眼差しでクソむずボードを持ってきた！\n本人の信頼と期待に応えてあげよう。\nなお、ラズはやる気でいろんな能力を習得している。",
    extra_effect_description:
      "スターパレット：[7+,7+,7+,7+,7+,7+,7+]\n数値が *2* 小さいカードも重ねられる\n[ ◇ ] 2枚 / ポケット2つ / シャッフル 6回",
    id: 12,
    index: 4,
    title: "こっち来なさい人間",
  },
  {
    challenge_ids: [49, 50, 51, 52],
    character_id: 4,
    description:
      "ケモミミくのいちアヤメちゃんの冒険のお手伝いをしよう！\n[ ^ ]で束の枚数に等しいダメージを与え、MPを回復できるぞ。\n敵を全部倒したらクリアだ。",
    extra_effect_description:
      "敵を全部倒したらクリア\n忍法帖：\n| MP70 / 5ダメージ | MP50 /  [ ^ ]2枚生成  | MP4 / 1ドロー |",
    id: 13,
    index: 1,
    title: "アヤメの大冒険",
  },
  {
    challenge_ids: [53, 54, 55, 56],
    character_id: 4,
    description:
      "シールド持ちの敵とのボス戦だ！\n盾があるとダメージが通らず、ドローで盾は復活する。\n手札補充を全て忍法で済ませるか、一気に叩くか選択だ...!",
    extra_effect_description:
      "敵を全部倒したらクリア\n忍法帖：\n| MP70 / 5ダメージ | MP50 /  [ ^ ]2枚生成  | MP4 / 1ドロー |",
    id: 14,
    index: 2,
    title: "ボスとの戦い",
  },
  {
    challenge_ids: [57, 58, 59, 60],
    character_id: 4,
    description:
      "あたらしい忍法帖を持ってウッキウキのアヤメちゃん！\n試し打ちに付き合ってあげよう。\n大振りの必殺忍法は [ ◇ ] が2枚も手に入る！工夫して使おう。",
    extra_effect_description:
      "敵を全部倒したらクリア\n忍法帖：\n| MP80 / [ ◇ ]2枚生成 | MP15 / 1ダメージ  | MP6 / 2ドロー |",
    id: 15,
    index: 3,
    title: "あたらしい巻物",
  },
  {
    challenge_ids: [61, 62, 63, 64],
    character_id: 4,
    description:
      "反則的な能力を持った妖精ハンター二人との戦いだ！\nこの二人を倒せなければ妖精たちに平和は訪れない。\n忍法帖は使い慣れたものに戻してもらった。本気の一戦だ！",
    extra_effect_description:
      "スピカ：3より大きいダメージを3にする\nチロル：シールド10\n| MP70 / 5ダメージ | MP50 /  [ ^ ]2枚生成  | MP4 / 1ドロー |",
    id: 16,
    index: 4,
    title: "スピカとチロル",
  },
];
