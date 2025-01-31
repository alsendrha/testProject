import { create } from "zustand";

type AlertOpenType = {
  isOpen: boolean | number;
  setIsOpen: (isOpen: boolean | number) => void;
};

export const useAlertOpen = create<AlertOpenType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean | number) => set({ isOpen }),
}));
