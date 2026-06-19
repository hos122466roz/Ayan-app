import useAddMenuMenu from "@/app/hooks/useAddMenuModal";
import useDeleteMenuModal from "@/app/hooks/useDeleteMenuModal";
import useEditMenuModal from "@/app/hooks/useEditMenuModal";
import { SafeMenu } from "@/app/types";
import React, { useMemo, useState } from "react";

interface MenuProps {
  itemMenu?: SafeMenu[];
  onEdit?: (item: SafeMenu) => void;
  onDelete?: (id: string) => void;
}
const ListMenu: React.FC<MenuProps> = ({ itemMenu = [] }) => {
  const { onOpen } = useAddMenuMenu();
  const editModal = useEditMenuModal();
  const deleteModal = useDeleteMenuModal();
const [selectedCategory, setSelectedCategory] = useState("all");

const categories = useMemo(() => {
  return ["all", ...new Set(itemMenu.map((item) => item.Categorys))];
}, [itemMenu]);

const filteredItems = useMemo(() => {
  if (selectedCategory === "all") return itemMenu;

  return itemMenu.filter((item) => item.Categorys === selectedCategory);
}, [itemMenu, selectedCategory]);
  return (
    <div className="container my-10 md:my-20">
      {/* ADD BUTTON */}
     
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg border bg-zinc-800 text-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "all" ? "همه دسته‌بندی‌ها" : category}
            </option>
          ))}
        </select>

        <button
          onClick={onOpen}
          className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium shadow-sm hover:bg-green-700 transition"
        >
          افزودن محصول
        </button>
      </div>
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-hidden rounded-xl border bg-zinc-800">
        <table className="w-full text-sm text-right">
          <thead className="bg-zinc-700 text-gray-100">
            <tr>
              <th className="p-3">تصویر</th>
              <th className="p-3">عنوان</th>
              <th className="p-3">توضیحات</th>
              <th className="p-3">دسته‌بندی</th>
              <th className="p-3">قیمت</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-zinc-700 transition"
              >
                <td className="p-3">
                  <img
                    src={item.imageSrc}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                </td>

                <td className="p-3 text-white">{item.title}</td>
                <td className="p-3 text-white">{item.description}</td>

                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-zinc-700 text-xs text-white">
                    {item.Categorys}
                  </span>
                </td>

                <td className="p-3 text-white">
                  {item.price.toLocaleString()} تومان
                </td>

                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => editModal.onOpen(item)}
                      className="px-3 py-1 text-xs rounded-md bg-yellow-400 text-white"
                    >
                      ویرایش
                    </button>

                    <button
                      onClick={() => deleteModal.onOpen(item)}
                      className="px-3 py-1 text-xs rounded-md bg-red-500 text-white"
                    >
                      حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-zinc-800 rounded-xl p-4 shadow">
            <div className="flex gap-3">
              <img
                src={item.imageSrc}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="text-white font-medium">{item.title}</h3>

                <p className="text-sm text-gray-300">{item.description}</p>

                <div className="flex justify-between mt-2">
                  <span className="text-xs text-white bg-zinc-700 px-2 py-1 rounded-full">
                    {item.Categorys}
                  </span>

                  <span className="text-white text-sm">
                    {item.price.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>

            {/* actions */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => editModal.onOpen(item)}
                className="flex-1 py-2 text-xs rounded-md bg-yellow-400 text-white"
              >
                ویرایش
              </button>

              <button
                onClick={() => deleteModal.onOpen(item)}
                className="flex-1 py-2 text-xs rounded-md bg-red-500 text-white"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* empty state */}
      {itemMenu.length === 0 && (
        <div className="text-center p-6 text-gray-500">
          هیچ آیتمی وجود ندارد
        </div>
      )}
    </div>
  );
};
export default ListMenu;
