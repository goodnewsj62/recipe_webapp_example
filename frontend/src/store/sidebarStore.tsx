import { createWithEqualityFn } from "zustand/traditional";

type sideBarStoreI = {
  isOpen: boolean;
  toggle: (value?: boolean) => void;
};

const useSideBarStore = createWithEqualityFn<sideBarStoreI>((set) => ({
  isOpen: false,
  toggle: (value) => {
    value === undefined
      ? set((state) => ({ isOpen: !state.isOpen }))
      : set({ isOpen: value });
  },
}));
export default useSideBarStore;
