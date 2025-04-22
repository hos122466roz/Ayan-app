"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../common/input/Input";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("با موفقیت وارد شدید!");
        router.refresh();
        loginModal.onClose();
        setIsLoading(false);
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <>
      <div
        className={`${
          active === "login" ? "translate-x-0" : "-translate-x-[100%]"
        } login-form absolute  h-[100%] w-full  top-0   `}
      >
        <h1 className="text-center text-2xl py-4 font-bold">ورود</h1>
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
            id="password"
            label="رمز عبور"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <a
            href=""
            className="text-gray-600  inline-block  hover:text-gray-900"
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
          bg-zinc-800
          text-white
          border-2
     
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:bg-green-800"
          >
            {isLoading ? "Loading..." : "ورود"}
          </button>
        </form>
        <div className="px-8 pb-5">
          <button
            onClick={() => handleActive("rigster")}
            className=" peer
              
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
            ثبت نام
          </button>
        </div>
      </div>
      {/* <div
        onClick={() => loginModal.onClose()}
        className={`${
          loginModal.isOpen ? "flex" : " hidden"
        } z-20  h-[100vh] w-full fixed top-0 right-0 bg-red-800/70`}
      ></div> */}
    </>
  );
};
export default LoginModal;
