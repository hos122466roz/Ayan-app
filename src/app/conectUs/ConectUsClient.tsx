import { IoCallOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa";
const ContactUsClient = () => {
  return (
    <section className="container my-24  ">
      <div className="text-center">
        <h2 className="text-4xl font-DanaDemiBold">تماس با ما</h2>
        <p className="font-Dana text-gray-600 mt-4"> آدرس و اطلاعات تماس ما</p>
      </div>
      <div className=" my-12 flex md:flex-row flex-col-reverse ">
        <div className="md:w-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1940.8364253595817!2d51.714089733163746!3d32.64001968623498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc49a2d3e85ce7%3A0x4d6f87c9dd9c0c27!2sAyan%20Kitchen!5e0!3m2!1sen!2sus!4v1745181297252!5m2!1sen!2sus"
            className="w-full  h-98 md:h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" md:mt-6 font-Dana mr-8 [&_p]:">
          <h1 className="text-xl md:text-4xl font-DanaMedium text-zinc-800">
            منتظر تماس شما در ساعات تعیین شده هستیم
          </h1>
          <div className=" [&_h2]:text-xl mt-8 *:flex *:items-center space-y-8  *:border-b-2 *:pb-4 *:border-b-zinc-500/20 *:border-dashed">
            <div>
              <IoCallOutline size={50} className="text-red-800  " />
              <div className="mr-6 [&_p]:pt-2 [&_p]:text-zinc-700">
                <h2>شماره های تماس</h2>
                <p className="*:inline-block">
                  <a href="tel: 03132620291"> تلفن 1 : 03132620291</a>
                  <a href="tel:03132620292" className="md:pr-8">
                    {" "}
                    تلفن 2 : 03132620292
                  </a>
                </p>
              </div>
            </div>
            <div>
              <FaBusinessTime size={50} className="text-red-800" />
              <div className="mr-6 [&_p]:pt-2 [&_p]:text-zinc-700">
                <h2> ساعت کاری </h2>
                <p>هفت روز هفته - از ساعت 12:00 تا 16:00 و 18:30 تا 23:30</p>
              </div>
            </div>
            <div>
              <RiMapPinLine size={50} className="text-red-800" />
              <div className="mr-6 [&_p]:pt-2 [&_p]:text-zinc-700">
                <h2> آدرس ما </h2>
                <p>اصفهان - پل غدیر - خیابان علامه امینی شرقی - نبش بن بست 9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUsClient;
