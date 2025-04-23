import Logo from "../../../../../public/image/logo/IMG_20250224_014354_555-removebg-preview.png";
import { FaInstagram, FaWhatsapp, FaBusinessTime } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 container  bg-black/80 backdrop-blur-[6px] ">
      <div
        className="font-Dana grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 [&_h2]:text-2xl [&_h2]:font-bold
     [&_h2]:mb-6"
      >
        <div>
          <Image src={Logo} alt="" className="size-20" />
          <p className="mt-6 text-white">
            ما در این مجموعه با بیش از 9 سال سابقه خدمت به مردم عزیز توانسته ایم
            امروزه با یک کیفیت عالی و تازه در لحظات شاد شما سهیم باشیم
          </p>
          <div className="mt-6 flex justify-center gap-8 items-center text-white *:hover:text-red-800 ">
            <a href="">
              <FaInstagram size={24} />
            </a>
            <a href="">
              <FaWhatsapp size={24} />
            </a>
            <a href="">
              <IoCallOutline size={24} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white">لینک های مهم</h2>
          <ul className="space-y-4 *:text-zinc-300 *:hover:text-black">
            <li>
              <a href="">منو</a>
            </li>
            <li>
              <a href="">درباره ما</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white">تماس بگیرید</h2>
          <div className="space-y-4 *:flex *:items-center *:gap-5 *:text-zinc-300">
            <div>
              <span>
                <FaLocationDot />
              </span>
              <span>
                {" "}
                اصفهان - پل غدیر - خیابان علامه امینی شرقی - نبش بن بست 9{" "}
              </span>
            </div>
            <div>
              <span>
                <IoCallOutline />
              </span>
              <a href="tel:03132620291" dir="ltr">
                03132620291
              </a>
            </div>
            <div>
              <span>
                <MdOutlineAttachEmail />
              </span>
              <span>hoesin122466@gmail.com </span>
            </div>
            <div>
              <span>
                <FaBusinessTime />
              </span>
              <span>
                هفت روز هفنه - از ساعت 12:00 تا 16:00 و 18:30 تا 23:30
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full text-center mt-12 text-zinc-300 ">
        <h1 className=" flex items-center justify-center">
          کلیه حقوق این سایت محفوظ است - ساخته شده توسط
          <span className="black mx-3 text-red-600 animate-ping">
            <FaHeart />
          </span>
          حسین روزدار
        </h1>
      </div>
    </footer>
  );
};
export default Footer;
