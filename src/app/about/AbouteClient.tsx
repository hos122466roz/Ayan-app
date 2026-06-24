import Image from "next/image";
import img from "../../../public/image/about/Picsart_25-04-22_14-10-28-137.png";
import { FaRegSquareCheck } from "react-icons/fa6";

const AbouteClient = () => {
  return (
    <section className="py-40 flex flex-col-reverse md:flex-row container ">
      <div className=" mt-8 md:mt-0 ">
        <Image
          src={img}
          className=" w-full  rounded-[10px]"
          alt="about"
          height={600}
        />
      </div>
      <div className="font-Dana mad:max-w-2/3  text-white">
        <div className="">
          <h1 className="text-xl md:text-4xl  font-DanaDemiBold mb-8 border-b-3 border-b-primary inline-block pb-4 ">
            مدیریت مجموعه اعیان
          </h1>
          <p
            className=" text-justify  tracking-[5px] text-base/6


"
          >
            مجموعه اعیان با بیش از یک دهه سابقه در زمینه تهیه و ارائه غذا، با
            هدف خلق تجربه‌ای متفاوت از کیفیت، طعم و رضایت مشتری فعالیت خود را
            آغاز کرده و امروز به یکی از مجموعه‌های مورد اعتماد مشتریان خود تبدیل
            شده است. این مجموعه با بهره‌گیری از بیش از ۱۵ سال تجربه تخصصی در
            حوزه آشپزی و مدیریت آشپزخانه، همواره تلاش کرده است تا با استفاده از
            مواد اولیه باکیفیت، رعایت استانداردهای بهداشتی و ارائه خدماتی
            شایسته، رضایت مشتریان را در بالاترین سطح ممکن حفظ کند. اعیان امروز
            با تکیه بر تیمی متعهد و متخصص، متشکل از نیروهای مستقیم و غیرمستقیم،
            در مسیر ارائه بهترین طعم‌ها و خدمات گام برمی‌دارد. باور ما این است
            که هر وعده غذایی تنها یک غذا نیست، بلکه تجربه‌ای است که باید با
            کیفیت، احترام و حس خوب همراه باشد. اعتماد و همراهی شما سرمایه
            ارزشمند ماست و انگیزه‌ای است تا هر روز با تلاش بیشتر، کیفیتی درخور
            نام اعیان ارائه کنیم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 *:*:flex *:*:items-center *:*:gap-x-5 *:*:text-xl space-y-8 [&_p]:mt-3 [&_p]:text-[14px] [&_p]:text-white/90">
          <div className="flex items-start gap-2">
            <FaRegSquareCheck className="text-primary" />
            <div className="flex flex-col gap-1 justify-start !items-start">
              <span>مشتری مداری</span>
              <p>داشتن اخلاق کار حرفه ای برای نهایت احترام به مشتری</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FaRegSquareCheck className="text-primary" />
            <div className="flex flex-col gap-1 justify-start !items-start">
              <span> متریال تازه و اورجینال</span>
              <p> تهیه بهترین متریال برای تهیه غذا و دسر بدون انبار کردن</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FaRegSquareCheck className="text-primary" />
            <div className="flex flex-col gap-1 justify-start !items-start">
              <span> کاملا بهداشتی</span>
              <p> توجه به دستور های بهداشتی و رعایت آن حین آماده سازی</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
              <FaRegSquareCheck className="text-primary" />
            <div className="flex flex-col gap-1 justify-start !items-start">
              <span> آشپزخانه قابل رویت</span>
            <p>
              {" "}
              تمام مراحل تهیه مواد اولیه و پخت غذا کاملا قابل مشاهده میباشد
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AbouteClient;
