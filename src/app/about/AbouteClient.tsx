import Image from "next/image";
import img from "../../../public/image/about/Picsart_25-04-22_14-10-28-137.png";
import { FaRegSquareCheck } from "react-icons/fa6";

const AbouteClient = () => {
  return (
    <section className="py-40 flex flex-col-reverse md:flex-row container bg-zinc-800">
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image src={img} className=" w-full"alt="about" height={600} />
      </div>
      <div className="font-Dana  text-white">
        <div className="">
          <h1 className="text-4xl  font-DanaDemiBold mb-8 border-b-3 border-b-red-800 inline-block pb-4 ">
            مدیریت مجموعه اعیان
          </h1>
          <p className="">
           مسعود حسینی هستم مدیر مجموعه اعیان 
          </p>
          <p>بیش از 15 سال سابقه کار در زمینه آشپزخانه و طبخ غذا </p>
          <p>مجموعه اعیان به لطف شما مردم نازنین با افتخار یک دهه سابقه خدمت دارد </p>
          <p>من به همراه پنج نیرو به به طور مستقیم و ده نیرو به طور غیر مقسیم در تلاش هستیم تا بهترین ارایه وکیفیت </p>
         
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 *:*:flex *:*:items-center *:*:gap-x-5 *:*:text-xl space-y-8 [&_p]:mt-3 [&_p]:text-[14px] [&_p]:text-zinc-300">
          <div className="">
            <div>
              <FaRegSquareCheck className="text-red-800" />
              <span>مشتری مداری</span>
            </div>
            <p>داشتن اخلاق کار حرفه ای برای نهایت احترام به مشتری</p>
          </div>
          <div>
            <div>
              <FaRegSquareCheck className="text-red-800" />
              <span> متریال تازه و اورجینال</span>
            </div>
            <p> تهیه بهترین متریال برای تهیه غذا و دسر بدون انبار کردن</p>
          </div>
          <div>
            <div>
              <FaRegSquareCheck className="text-red-800" />
              <span> کاملا بهداشتی</span>
            </div>
            <p> توجه به دستور های بهداشتی و رعایت آن حین آماده سازی</p>
          </div>
          <div>
            <div>
              <FaRegSquareCheck className="text-red-800" />
              <span> آشپزخانه قابل رویت</span>
            </div>
            <p>
              {" "}
              تمام مراحل تهیه مواد اولیه و پخت غذا کاملا قابل مشاهده میباشد
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AbouteClient;
