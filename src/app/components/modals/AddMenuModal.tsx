"use client";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../common/input/Input";
import toast from "react-hot-toast";
import { UploadButton } from "@/app/utils/uploadthing";
import { GiKnifeFork } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";

import useAddMenuMenu from "@/app/hooks/useAddMenuModal";
import axios from "axios";
import Button from "../common/button/Buttton";
import { useRouter } from "next/navigation";

const categorys = [
  { id: 1, icon: <GiKnifeFork size={22} />, title: "غذا", category: "food" },
  {
    id: 2,
    icon: <LuDessert size={22} />,
    title: "دسر",
    category: "dessert",
  },
  {
    id: 3,
    icon: <RiDrinks2Line size={22} />,
    title: "نوشیدنی",
    category: "drink",
  },
];
enum STEPS {
  INFO = 0,
  IMAGS = 1,
  CATEGOTY = 2,
}
const AddMenuModal = () => {
  const [step, setStep] = useState(STEPS.INFO);

  const useAddMenu = useAddMenuMenu();
  const [isLoading, setIsLoading] = useState(false);
  const route=useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      imageSrc: "",
      Categorys: "",
      price: "",
    },
  });
  const imageSrc = watch("imageSrc");
  const price = watch("price");
  const priceNum = +price;

  const category = watch("Categorys");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    if (step <= 0) {
      return;
    }
    setStep((value) => value - 1);
  };
  const onNext = () => {
    if (step === STEPS.IMAGS) {
      if (!imageSrc) {
        return;
      }
    }
    setStep((value) => value + 1);
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post("/api/menu", data).then(() => {
      setIsLoading(false);
      setStep(STEPS.INFO)
      reset()
      toast.success('محصول شما با موفقیت ثبت گردید!')
    }).catch((err:any)=>{
      throw new Error(err)
    }).finally(()=>{
      route.refresh()
    })
  };

  let bodyContent = (
    <div>
      <h4 className="font-Dana py-4  text-zinc-700 ">اطلاعات محصول</h4>

      <form action="" className="py-5 md:px-8 space-y-6">
        <Input
          id="title"
          label="نام محصول"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="description"
          label="توضیحات "
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="price"
          label="قمیت "
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {priceNum ? (
          <span className="text-gray-700 font-Dana text-[14px]">
            {priceNum.toLocaleString()} تومان
          </span>
        ) : null}
      </form>
    </div>
  );
  if (step === STEPS.IMAGS) {
    bodyContent = (
      <>
        <h4 className="font-Dana py-4  text-zinc-700">کاور محصول</h4>
        <div>
          {imageSrc ? (
            <img
              src={imageSrc}
              className="w-full max-h-48 object-cover"
              alt="covere"
            />
          ) : null}
        </div>
        <div className="">
          <UploadButton
            className="mt-4 mx-5  block ut-button:py-3  ut-button:px-1 ut-button:text-nowrap ut-button:bg-blue-600 ut-button:ut-readying:bg-white/50"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setCustomValue("imageSrc", res[0]?.appUrl);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
            content={{
              button({ ready }) {
                if (ready) return <div>انتخاب کاور </div>;
                return "Getting ready...";
              },
              allowedContent({ ready, fileTypes, isUploading }) {
                if (!ready) return "Checking what you allow";
                if (isUploading) return "Seems like stuff is uploading";
                return `Stuff you can upload: ${fileTypes.join(", ")}`;
              },
            }}
          />
        </div>
      </>
    );
  }
  if (step === STEPS.CATEGOTY) {
    bodyContent = (
      <>
        <h4 className="font-Dana py-4  text-zinc-700">دسته بندی </h4>
        <div className=" flex gap-6 mb-6">
          {categorys.map((item) => (
            <div
              onClick={() => setCustomValue("Categorys", item.category)}
              className={`flex ${
                category === item.category
                  ? "text-blue-600 border-blus-600 border-2 bg-blue-300/10"
                  : "text-zinc-600 border-zinc-600"
              } items-center gap-x-3 p-3 border font-Dana rounded-[1rem] cursor-pointer  hover:text-blue-600 hover:border-blue-600`}
              key={item.id}
            >
              <span>{item.icon}</span>
              <span className="text-md font-Dana-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <section
      className={`
               ${useAddMenu.isOpen ? "flex" : "hidden"}        
              items-center justify-center   h-[100vh] w-full fixed top-0 z-50 right-0 bg-black/70 `}
    >
      <div className=" content rounded-xl mx-4 md:mx-0 bg-white relative z-30 p-8 w-full max-w-[510px] transition ">
        {/*  Button close Modal  */}
        <div
          onClick={() => useAddMenu.onClose()}
          className=" transition-all p-1 bg-white z-10
           cursor-pointer top-4 absolute right-4 border-2  hover:text-white
            hover:bg-zinc-400  rounded-full "
        >
          <IoCloseOutline className="" size={20} />
        </div>
        <div>
          <div className={`   h-[100%] w-full translate-x-0 top-0    `}>
            <h1 className="text-center text-2xl py-4  font-Dana">ثبت محصول</h1>

            {bodyContent}

            {step === STEPS.CATEGOTY ? (
              <div className="flex">
                <Button clicked={onBack} label={"قبلی"} />
                <Button
                  clicked={handleSubmit(onSubmit)}
                  style
                  label={isLoading ? "Loading" : "ثبت محصول"}
                />
              </div>
            ) : (
              <div className="flex">
                <Button clicked={onBack} label={"قبلی"} />
                <Button clicked={onNext} label={"بعدی"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMenuModal;
