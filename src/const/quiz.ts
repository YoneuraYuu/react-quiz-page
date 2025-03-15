//クイズのtype
export type Quiz = {
  id: number;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  description: string;
};

//クイズ配列
const quizList: Quiz[] = [
  {
    id: 1,
    correct_answer: "マロリー",
    incorrect_answers: ["ヒラヤマ", "スミスミ", "ロウロウ"],
    question:
      "「なぜ山に登るのか」と問われ「そこに山があるから」と答えた、有名な登山家は誰でしょう？",
    description:
      "ジョージ・マロリーは、1924年にエベレスト登頂を目指し、行方不明になったことで有名です。",
  },
  {
    id: 2,
    correct_answer: "アンタレス",
    incorrect_answers: ["ウルナイル", "デネボラス", "イルタイル"],
    question:
      "ギリシャ語で「火星に対抗するもの」という意味の名を持つ、さそりの心臓に赤く輝くさそり座のアルファ星は何でしょう？",
    description: "",
  },
];

export default quizList;
