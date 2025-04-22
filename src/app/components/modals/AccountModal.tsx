"use client";
import { useState } from "react";
import RegisterModal from "./RegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { IoCloseOutline } from "react-icons/io5";
import LoginModal from "./LoginModal";
const AccountModal = () => {
  const [active, setActive] = useState("rigster");
  const loginModal = useLoginModal();
  
  const handleActive = (show: string) => {
    return setActive(show);
  };
  return (
    <section
      className={`
               ${loginModal.isOpen ? "flex" : "hidden"}        
              items-center justify-center h-[100vh] w-full fixed top-0 z-50 right-0 bg-black/70 `}
    >
      <div className=" content  bg-white relative z-30 p-8 w-full max-w-[510px] transition ">
        {/*  Button close Modal  */}
        <div
          onClick={() => loginModal.onClose()}
          className=" transition-all p-1 bg-white z-10 cursor-pointer top-4 right-4 border-2  hover:text-white hover:bg-zinc-400 absolute rounded-full "
        >
          <IoCloseOutline className="" size={20} />
        </div>
        <div className=" border  relative h-[100%] overflow-hidden ">
          {/* login */}
          <LoginModal active={active} handleActive={handleActive} />
          {/* register */}
          <RegisterModal active={active} handleActive={handleActive} />
        </div>
      </div>
    </section>
  );
};

export default AccountModal;
