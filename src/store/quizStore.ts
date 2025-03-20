import { create } from "zustand";
import { Quiz } from "../const/quiz";

interface QuizStore {
  quiz: Quiz | null;
  userAnswer: string;
  setQuiz: (quiz: Quiz) => void;
  setUserAnswer: (userAnswer: string) => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  quiz: null,
  userAnswer: "",
  setQuiz: (quiz: Quiz) => set({ quiz }),
  setUserAnswer: (userAnswer: string) => set({ userAnswer }),
}));

export default useQuizStore;
