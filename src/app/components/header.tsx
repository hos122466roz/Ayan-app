"use client";
import Image from "next/image";
import img from "../../../public/image/logo/IMG_20250224_014354_555-removebg-preview.png";
import { IoCallOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { IoIosLogIn } from "react-icons/io";
import useLoginModal from "../hooks/useLoginModal";
import { SafeUser } from "../types";
import { FaList } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { signOut } from "next-auth/react";
import useAddMenuMenu from "../hooks/useAddMenuModal";
import Li from "./Li/Li";
import { exportMenu } from "../utils/exportMenu";

interface HeaderProps {
  currentUser: SafeUser | null;
}
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const loginModal = useLoginModal();
  const useAddMenu = useAddMenuMenu();
  const [showHeader, setShowHeader] = useState(true);
  const activeHandler = (value: string) => {
    router.push(value);
    setShow(!show);
  };
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`     ${showHeader ? "translate-y-0" : "-translate-y-40"}
 md:flex hidden  z-40 transition-all  fixed py-3 right-9 left-9  items-center 
      justify-between mt-8 px-8 bg-black/50 backdrop-blur-[6px] rounded-2xl`}
      >
        <div className="flex justify-center items-center">
          <Image src={img} alt="logo" className="size-20  object-cover" />
          <nav>
            <ul
              className="flex justify-center items-center
             text-white gap-x-8 mr-15 *:font-Dana *:hover:text-primary *:cursor-pointer *:transition-all"
            >
              <Li
                title="صفحه اصلی"
                clicked={() => router.push("/")}
                active={pathName == "/"}
              />
              <Li
                title=" منو"
                clicked={() => router.push("/menu")}
                active={pathName == "/menu"}
              />
              <Li
                title="  درباره ما"
                clicked={() => router.push("/about")}
                active={pathName == "/about"}
              />
              <Li
                title="  تماس با ما"
                clicked={() => router.push("/conectUs")}
                active={pathName == "/conectUs"}
              />
            </ul>
          </nav>
        </div>
        <div className="text-white text-md flex  font-Dana  *:border  *:rounded-md">
          <a
            href="tel: 03132620291"
            className="flex ml-8  px-4 py-1 items-center justify-center gap-x-4"
          >
            <span>031-3262-0291</span>
            <span>
              <IoCallOutline />
            </span>
          </a>
          {currentUser ? (
            <div className="hover:border-hidden hover:[&_span]:text-primary transition-all relative flex cursor-pointer group  px-4 py-1 items-center justify-center gap-x-4">
              <span> پروفایل</span>
              <span>
                <FaList />
              </span>
              <ul
                className="top-8 rounded-2xl  right-0 *:text-nowrap transition-all invisible 
                group-hover:visible min-w-40  group-hover:translate-x-0 -translate-x-8          
                   border-t-4 border-t-primary   absolute space-y-6
                    bg-zinc-800 backdrop-blur-[6px] 
                text-right px-4 py-4 *:hover:text-primary *:transition-all *:text-[14px] font-Dana"
              >
                <li onClick={() => router.push("/management")}> مدیریت</li>
                <li onClick={exportMenu}> دانلود منو</li>
                <li onClick={() => signOut()}> خروج</li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => loginModal.onOpen()}
              className="flex cursor-pointer  px-4 py-1 items-center justify-center gap-x-4"
            >
              <span>ورود</span>
              <span>
                <IoIosLogIn />
              </span>
            </button>
          )}
        </div>
      </header>
      {/* menu mobaile */}
      <header
        className={`md:hidden flex
       w-full z-40 fixed py-3 right-0   
       items-center justify-between mt-0 
       transition-all
       h-22
z-50
       px-8 bg-black/50 
       backdrop-blur-[6px] `}
      >
        <div
          className="flex justify-center items-center"
          onClick={() => router.push("/")}
        >
          <Image src={img} alt="logo" className="size-15  object-cover" />
        </div>
        <div className="flex justify-between items-center text-white text-md  font-Dana    ">
          <a
            href="tel: 03132620291"
            className="flex  px-4 py-1 items-center border rounded-md justify-center gap-x-4"
          >
            <span>تماس</span>
            <span>
              <IoCallOutline />
            </span>
          </a>

          <div onClick={() => setShow(!show)} className="mr-4">
            {show ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </header>
      <div
        className={`${
          show ? "translate-x-0" : "translate-x-[100%]"
        } w-1/2 h-full fixed top-0 right-0 transition-all z-40 bg-zinc-800 `}
      >
        <nav className="mt-24">
          <ul
            className="flex *:gap-x-2 justify-center gap-y-5 items-start flex-col text-white 
           mr-10 *:font-Dana *:hover:text-primary *:cursor-pointer *:transition-all *:flex *:justify-center *:items-center"
          >
            <li
              className={`${pathName == "/" ? "text-primary" : ""}`}
              onClick={() => activeHandler("/")}
            >
              <IoHomeOutline />
              <span>صفحه اصلی</span>
            </li>
            <li
              className={`${pathName == "/menu" ? "text-primary" : ""}`}
              onClick={() => activeHandler("/menu")}
            >
              <MdOutlineRestaurantMenu />
              <span> منو</span>
            </li>
            <li
              className={`${pathName == "/about" ? "text-primary" : ""}`}
              onClick={() => activeHandler("/about")}
            >
              <GrContactInfo />
              <span> درباره ما </span>
            </li>
            <li
              className={`${pathName == "/conectUs" ? "text-primary" : ""}`}
              onClick={() => activeHandler("/conectUs")}
            >
              <IoCallOutline />
              <span> تماس با ما </span>
            </li>
            {currentUser?.role === "Admin" ? (
              <li onClick={() => router.push("/management")}>
                {" "}
                <IoMdAdd />
                <span> مدیریت </span>
              </li>
            ) : null}
            {currentUser ? (
              <div className="hover:border-hidden hover:[&_span]:text-primary transition-all relative flex cursor-pointer group  px-4 py-1 items-center justify-center gap-x-4">
                <span>
                  <FaList />
                </span>
                <span> پروفایل</span>
                <ul
                  className="top-8 rounded-2xl  right-0 *:text-nowrap transition-all invisible 
                group-hover:visible  group-hover:translate-x-0 -translate-x-8          
                   border-t-4 border-t-primary   absolute space-y-6
                    bg-zinc-800 backdrop-blur-[6px] 
                text-right px-4 py-4 *:hover:text-primary *:transition-all *:text-[14px] font-Dana"
                >
                  <li onClick={() => activeHandler("/management")}> مدیریت</li>
                  <li onClick={() => signOut()}> خروج</li>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => loginModal.onOpen()}
                className="flex cursor-pointer flex-row-reverse px-4 py-1 items-center justify-center gap-x-4"
              >
                <span>ورود</span>
                <span>
                  <IoIosLogIn />
                </span>
              </button>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
