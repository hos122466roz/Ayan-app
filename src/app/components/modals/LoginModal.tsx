"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../common/input/Input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

interface LoginModalProps {
  active: string;
  handleActive: (text: string) => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ active, handleActive }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    console.log(data);
    try {
      const res = await axios.post("/api/login", data);
      console.log("user ", res);
      if (res) {
        window.location.reload();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div
        className={`${
          active === "login" ? "translate-x-0" : "-translate-x-[100%]"
        } login-form absolute  h-[100%] w-full  top-0   `}
      >
        <h1 className="text-center text-white text-2xl py-4 font-bold">ورود</h1>
        <form action="" className="md:py-5 py-2 px-3 md:px-8 space-y-6">
          <Input
            id="email"
            label="ایمیل"
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

          <a
            href=""
            className="text-gray-100  inline-block  hover:text-gray-900"
          >
            رمز عبور خود را فراموش کردم؟
          </a>
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className=" 
          w-full
          p-4
          font-bold
          bg-green-800
          text-white
          border-2
          border-bg-menu/50
          rounded-xl
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:bg-green-600"
          >
            {isLoading ? "Loading..." : "ورود"}
          </button>
        </form>
        <div className=" px-3 md:px-8 pb-5">
          <button
            onClick={() => handleActive("rigster")}
            className=" 
              
          w-full
          p-4
          font-bold
          bg-zinc-400
          text-white
          border-2
          border-bg-menu/50
          rounded-xl
          font-Dana
          outline-none
          transition
          bg-green-800
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:bg-green-600"
          >
            ثبت نام
          </button>
        </div>
      </div>
      {/* <div
        onClick={() => loginModal.onClose()}
        className={`${
          loginModal.isOpen ? "flex" : " hidden"
        } z-20  h-[100vh] w-full fixed top-0 right-0 bgtext-primary/70`}
      ></div> */}
    </>
  );
};
export default LoginModal;
