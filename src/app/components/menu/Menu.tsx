"use client";
import { useEffect, useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import { SafeMenu } from "@/app/types";
import Image from "next/image";
import { exportMenu } from "@/app/utils/exportMenu";
const Category = [
  {
    title: "غذا ",
    label: "food",
    icon: GiKnifeFork,
  },
  {
    title: "نوشیدنی ",
    label: "drink",
    icon: RiDrinks2Line,
  },
  {
    title: "دسر ",
    label: "dessert",
    icon: LuDessert,
  },
];
interface MenuProps {
  itemMenu?: SafeMenu[];
}
const Menu: React.FC<MenuProps> = ({ itemMenu }) => {
  const [category, setCategory] = useState("food");

  useEffect(() => {}, [itemMenu]);
  if (itemMenu?.length == 0) {
    return (
      <h1 className="container my-24 text-center text-2xl text-gray-500">
        محصولی هنوز اضافه نشده!
      </h1>
    );
  }
  const dataItem = itemMenu?.filter((e) => e.Categorys == category);
  return (
    <section className=" relative  " id="menu">
      {/* <div className=" absolute z-[-1]  top-0 left-0 w-2/3 h-full">
        <Image
          alt="منو اعیان"
          className="animation-bg-menu"
          fill
          src="/image/bg-5.png"
        />
      </div> */}
      <div className="container mx-auto content-menu  my-24">
        <div className="text-center">
          <h2 className="text-5xl text-primary font-DanaDemiBold">منو</h2>
          <p className="font-Dana text-white mt-4">محصولات ما</p>
        </div>{" "}
        <div className=" category-menu  ">
          {Category?.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                onClick={() => setCategory(item.label)}
                className={`group  ${
                  category === item.label ? " active" : null
                }`}
              >
                <Icon
                  className={`group-hover:text-primary  ${
                    category === item.label ? "text-primary" : "text-white"
                  }`}
                />
                <span className="text-white text-xl">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2  gap-10">
          {dataItem?.map((item) => (
            <div
              key={item.id}
              className="flex  items-start w-full md:flex-row gap-x-6 md:gap-x-8"
            >
              <div className="   ">
                <Image
                  src={item.imageSrc}
                  alt={item.title || "menu image"}
                  width={100}
                  height={100}
                  className="size-[100px] rounded-[10px] object-cover"
                />
              </div>
              <div className=" grow-1">
                <div className=" relative w-full flex flex-col md:flex-row  justify-start  items-start md:mt-4 md:mt-0 md:justify-between md:items-center md:mb-4 md:text-xl font-DanaDemiBold">
                  <h2 className="text-white  text-[16px] text-nowrap  ">
                    {item.title}
                  </h2>
                  <span className="h-2 hidden border-t border-b border-boder border-solid  grow-1 md:block w-full mx-3 text-gray-500 "></span>
                  <h2 className=" text-primary">
                    {item.price.toLocaleString()}
                    <span className="mr-1 text-[14px] text-primary">تومان</span>
                  </h2>
                </div>
                <p className="text-gray-500 md:text-[16px] text-[14px] font-Dana">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Menu;
