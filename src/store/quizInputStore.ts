import { create } from "zustand";
import { Quiz } from "../types/quiz";

interface QuizInputStore {
  quizInputs: Quiz[] | null;
  nextIndex: number;
  setQuizInputs: (quizes: Quiz[]) => void;
  incrementIndex: () => void;
}

const useQuizInputStore = create<QuizInputStore>((set) => ({
  quizInputs: null,
  nextIndex: 0,
  setQuizInputs: (quizes: Quiz[]) => set({ quizInputs: quizes }),
  incrementIndex: () =>
    set((state) => {
      console.log("incrementIndex called", state.nextIndex);
      const quizInputs = state.quizInputs || [];
      const nextIndex = state.nextIndex + 1;
      // 配列サイズとインデックスが等しい場合(オーバーしている場合)は0にリセット
      return { nextIndex: nextIndex >= quizInputs.length ? 0 : nextIndex };
    }),
}));

export default useQuizInputStore;
