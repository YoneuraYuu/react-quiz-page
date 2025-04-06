//クイズのtype
export type Quiz = {
  id: number;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  description: string;
};
