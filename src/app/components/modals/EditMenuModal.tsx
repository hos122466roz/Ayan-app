"use client";

import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Input from "../common/input/Input";
import Button from "../common/button/Buttton";
import { UploadButton } from "@/app/utils/uploadthing";
import useEditMenuModal from "@/app/hooks/useEditMenuModal";

enum STEPS {
  INFO = 0,
  IMAGE = 1,
  CATEGORY = 2,
}

const categorys = [
  { id: 1, title: "غذا", category: "food" },
  { id: 2, title: "دسر", category: "dessert" },
  { id: 3, title: "نوشیدنی", category: "drink" },
];

const EditMenuModal = () => {
  const editModal = useEditMenuModal();
  const router = useRouter();

  const [step, setStep] = useState(STEPS.INFO);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      id: "",
      title: "",
      description: "",
      imageSrc: "",
      Categorys: "",
      price: "",
    },
  });

  const imageSrc = watch("imageSrc");
  const category = watch("Categorys");
  const priceNum = watch("price");

  // ✅ وقتی modal باز شد دیتا رو پر کن
  useEffect(() => {
    if (editModal.data) {
      reset({
        id: editModal.data.id,
        title: editModal.data.title,
        description: editModal.data.description,
        imageSrc: editModal.data.imageSrc,
        Categorys: editModal.data.Categorys,
        price: editModal.data.price,
      });
    }
  }, [editModal.data, reset]);

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => setStep((s) => Math.max(s - 1, 0));
  const onNext = () => setStep((s) => Math.min(s + 1, 2));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .patch(`/api/menu/${data.id}`, data)
      .then(() => {
        toast.success("محصول ویرایش شد");
        editModal.onClose();
        router.refresh();
      })
      .catch(() => toast.error("خطا در ویرایش"))
      .finally(() => setIsLoading(false));
  };

  if (!editModal.isOpen) return null;

  return (
    <section className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-[520px] rounded-xl p-6 relative">
        {/* close */}
        <button
          onClick={editModal.onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-200"
        >
          <IoCloseOutline size={22} />
        </button>

        <h2 className="text-center text-xl font-bold mb-4">ویرایش محصول</h2>

        {/* STEP 1 */}
        {step === STEPS.INFO && (
          <div className="space-y-4">
            <Input
              id="title"
              label="نام محصول"
              register={register}
              errors={errors}
            />

            <Input
              id="description"
              label="توضیحات"
              register={register}
              errors={errors}
            />

            <Input
              id="price"
              label="قیمت"
              type="number"
              register={register}
              errors={errors}
            />
            {priceNum ? (
              <span className="text-gray-700 font-Dana text-[14px]">
                {Number(priceNum).toLocaleString()} تومان
              </span>
            ) : null}
          </div>
        )}

        {/* STEP 2 IMAGE */}
        {step === STEPS.IMAGE && (
          <div>
            {imageSrc && (
              <img
                src={imageSrc}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setCustomValue("imageSrc", res[0]?.appUrl);
              }}
            />
          </div>
        )}

        {/* STEP 3 CATEGORY */}
        {step === STEPS.CATEGORY && (
          <div className="flex gap-3 flex-wrap">
            {categorys.map((item) => (
              <div
                key={item.id}
                onClick={() => setCustomValue("Categorys", item.category)}
                className={`p-3 border rounded-lg cursor-pointer ${
                  category === item.category
                    ? "border-blue-600 text-blue-600"
                    : ""
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}

        {/* buttons */}
        <div className="flex gap-2 mt-6">
          <Button label="قبلی" clicked={onBack} />

          {step < 2 ? (
            <Button label="بعدی" clicked={onNext} />
          ) : (
            <Button
              label={isLoading ? "در حال ذخیره..." : "ذخیره تغییرات"}
              clicked={handleSubmit(onSubmit)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default EditMenuModal;
