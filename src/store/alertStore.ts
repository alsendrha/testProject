import { create } from "zustand";

type AlertOpenType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useAlertOpen = create<AlertOpenType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
