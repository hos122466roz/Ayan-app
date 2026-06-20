"use client";

import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useDeleteMenuModal from "@/app/hooks/useDeleteMenuModal";

const DeleteMenuModal = () => {
  const deleteModal = useDeleteMenuModal();
  const router = useRouter();

  const onDelete = () => {
    if (!deleteModal.data?.id) return;

    axios
      .delete(`/api/menu/${deleteModal.data.id}`)
      .then(() => {
        toast.success("محصول حذف شد");
        deleteModal.onClose();
        router.refresh();
      })
      .catch(() => {
        toast.error("خطا در حذف");
      });
  };

  if (!deleteModal.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl relative">
        {/* close */}
        <button
          onClick={deleteModal.onClose}
          className="absolute top-3 right-3"
        >
          <IoCloseOutline size={22} />
        </button>

        <h2 className="text-lg font-bold text-center mb-4">حذف محصول</h2>

        <p className="text-center text-gray-600 mb-6">
          آیا مطمئن هستی که می‌خوای این محصول حذف بشه؟
        </p>

        <div className="flex gap-3">
          <button
            onClick={deleteModal.onClose}
            className="flex-1 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            لغو
          </button>

          <button
            onClick={onDelete}
            className="flex-1 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMenuModal;
