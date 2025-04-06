import { create } from "zustand";
import { Quiz } from "../types/quiz";

interface QuizStore {
  quiz: Quiz | null;
  userAnswer: string;
  pushPoint: string;
  setQuiz: (quiz: Quiz) => void;
  setUserAnswer: (userAnswer: string) => void;
  setPushPoint: (pushPoint: string) => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  quiz: null,
  userAnswer: "",
  setQuiz: (quiz: Quiz) => set({ quiz }),
  setUserAnswer: (userAnswer: string) => set({ userAnswer }),
  pushPoint: "",
  setPushPoint: (pushPoint: string) => set({ pushPoint: pushPoint + "/" }),
}));

export default useQuizStore;
