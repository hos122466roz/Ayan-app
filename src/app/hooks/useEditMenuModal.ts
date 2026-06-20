import { create } from "zustand";
import { SafeMenu } from "@/app/types";

interface EditMenuStore {
  isOpen: boolean;
  data?: SafeMenu | null;

  onOpen: (data: SafeMenu) => void;
  onClose: () => void;
}

const useEditMenuModal = create<EditMenuStore>((set) => ({
  isOpen: false,
  data: null,

  onOpen: (data) =>
    set({
      isOpen: true,
      data,
    }),

  onClose: () =>
    set({
      isOpen: false,
      data: null,
    }),
}));

export default useEditMenuModal;
