import { create } from "zustand";

interface AddMenuMenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useAddMenuMenu = create<AddMenuMenuStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
export default useAddMenuMenu;
