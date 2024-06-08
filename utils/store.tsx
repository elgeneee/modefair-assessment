import { create } from "zustand";

type HasStickyFooterStore = {
  hasStickyFooter: boolean;
  setHasStickyFooter: (stickyFooter: boolean) => void;
};

export const useHasStickyFooterStore = create<HasStickyFooterStore>((set) => ({
  hasStickyFooter: false,
  setHasStickyFooter: (hasStickyFooter: boolean) => set({ hasStickyFooter }),
}));
