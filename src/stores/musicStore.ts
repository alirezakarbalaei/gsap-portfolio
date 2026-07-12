import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MusicStore {
  musicEnabled: boolean;
  showModal: boolean;
  toggleMusic: (enabled: boolean) => void;
  handleAllowMusic: () => void;
  handleDenyMusic: () => void;
}

/**
 * Music Store
 * 
 * Manages music state and preferences using Zustand with persist middleware.
 */
export const useMusicStore = create<MusicStore>()(
  persist(
    (set) => ({
      musicEnabled: false,
      showModal: true,

      toggleMusic: (enabled: boolean) => {
        set({ musicEnabled: enabled });
      },

      handleAllowMusic: () => {
        set({ musicEnabled: true, showModal: false });
      },

      handleDenyMusic: () => {
        set({ musicEnabled: false, showModal: false });
      },
    }),
    {
      name: "portfolio-music-preference",
      partialize: (state) => ({ musicEnabled: state.musicEnabled }),
    }
  )
);