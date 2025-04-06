import { create } from "zustand";

interface ControllStore {
  inputFlag: boolean;
  setInputFlag: (inputFlag: boolean) => void;
}

const useControllStore = create<ControllStore>((set) => ({
  inputFlag: false,
  setInputFlag: (inputFlag: boolean) => set({ inputFlag }),
}));

export default useControllStore;
