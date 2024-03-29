module.exports = [
  {
    description: "カードを出すとカウントが1減る。0になると達成。",
    id: 1,
    title: "CARD_COUNT",
    type: "card_count",
  },
  {
    description:
      "・条件と同じ数字\n・条件と同じ色\n・条件の数字以上のコンボ数\n\n上記のいずれかを満たすと達成。",
    id: 2,
    title: "CARD",
    type: "card",
  },
  {
    description: "条件の数字ピッタリのコンボ数になると達成。",
    id: 3,
    title: "COMBO",
    type: "combo",
  },
  {
    description:
      "カードを出すとカードの数値分だけカウントが減る。0になると達成。",
    id: 4,
    title: "COUNT",
    type: "count",
  },
  {
    description:
      "直前に出したカードと今出したカードの差の分だけカウントが減る。0になると達成。",
    id: 5,
    title: "DIFF",
    type: "diff",
  },
  {
    description:
      "直前に出したカードと今出したカードの差がちょうど条件の数字になる場合に達成。",
    id: 6,
    title: "DISTANCE",
    type: "distance",
  },
  {
    description: "条件の数字 プラスマイナス1以下の数字を出すと達成。",
    id: 7,
    title: "NEAR",
    type: "near",
  },
  {
    description: "条件の数字を出すと達成。",
    id: 8,
    title: "EXACT",
    type: "exact",
  },
];
