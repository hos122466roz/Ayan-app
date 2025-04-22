"use client";
import axios from "axios";
import Input from "../common/input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

interface RegisterModalProps {
  active: string;
  handleActive: (text: string) => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  active,
  handleActive,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("با موفقیت وارد شدید");
        handleActive("login");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div
      className={`${
        active === "rigster" ? "translate-x-0" : "translate-x-[100%]"
      } rigster-form  h-[100%] w-full   top-0 `}
    >
      <h1 className="text-center text-2xl py-4 font-bold">ثبت نام</h1>
      <form action="" className="py-5 px-8 space-y-6">
        <Input
          id="email"
          label="ایمیل"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="name"
          label="نام"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="رمز عبور"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <button
          onClick={handleSubmit(onSubmit)}
          className=" 
          w-full
          p-4
          font-bold
          bg-zinc-800
          text-white
          border-2
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:bg-green-800"
        >
          {isLoading ? "Loading...":"ثبت نام"  }
        </button>
      </form>
      <div className="px-8 pb-5">
        <button
          onClick={() => handleActive("login")}
          className=" 
              
          w-full
          p-4
          font-bold
          bg-zinc-400
          text-white
          border-2
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:bg-green-800"
        >
          ایا حساب کاربری دارید؟
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
