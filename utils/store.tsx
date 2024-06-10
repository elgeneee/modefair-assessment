import { create } from "zustand";

type HasStickyFooterStore = {
  hasStickyFooter: boolean;
  setHasStickyFooter: (stickyFooter: boolean) => void;
};

type ConfiguraitonBannerStore = {
  // hasBannerConfig: boolean;
  bannerConfig: string;
  setBannerConfig: (bannerConfig: string) => void;
  // setHasBannerConfig: (hasBannerConfig: boolean) => void;
};

export const useHasStickyFooterStore = create<HasStickyFooterStore>((set) => ({
  hasStickyFooter: false,
  setHasStickyFooter: (hasStickyFooter: boolean) => set({ hasStickyFooter }),
}));

export const useConfigurationBannerStore = create<ConfiguraitonBannerStore>(
  (set) => ({
    bannerConfig: "",
    setBannerConfig: (bannerConfig: string) => set({ bannerConfig }),
  }),
);
