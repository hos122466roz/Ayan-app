"use client";
import { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import { SafeMenu } from "@/app/types";


interface MenuProps {
  itemMenu?: SafeMenu[];
}
const Menu: React.FC<MenuProps> = ({ itemMenu }) => {
  const [category, setCategory] = useState("food");
  if (itemMenu?.length == 0) {
    return (
      <h1 className="container my-24 text-center text-2xl text-gray-500">
        محصولی هنوز اضافه نشده!
      </h1>
    );
  }
  const dataItem = itemMenu?.filter((e) => e.Categorys == category);

  return (
    <section className=" container mx-auto  my-24 ">
      <div className="text-center">
        <h2 className="text-4xl font-DanaDemiBold">منو</h2>
        <p className="font-Dana text-gray-600 mt-4">محصولات ما</p>
      </div>
      <div className="my-12 gap-x-2 md:gap-x-8 flex justify-center w-full items-center *:md:px-10 *:px-5 *:py-5  *:flex *:items-center *:justify-center *:cursor-pointer *:flex-col *:gap-y-4 md:text-2xl font-Dana ">
        <div
          onClick={() => setCategory("food")}
          className={`group hover:bg-black/20 ${
            category === "food" ? "bg-black/20" : null
          }`}
        >
          <GiKnifeFork
            className={`group-hover:text-red-800 ${
              category === "food" ? "text-red-800 " : null
            }`}
          />
          <span>غذا</span>
        </div>
        <div
          onClick={() => setCategory("drink")}
          className={`group hover:bg-black/20 ${
            category === "drink" ? "bg-black/20" : null
          }`}
        >
          <RiDrinks2Line
            className={`group-hover:text-red-800 ${
              category === "drink" ? "text-red-800 " : null
            }`}
          />
          <span>نوشیدنی</span>
        </div>
        <div
          onClick={() => setCategory("dessert")}
          className={`group hover:bg-black/20 ${
            category === "dessert" ? "bg-black/20" : null
          }`}
        >
          <LuDessert
            className={`group-hover:text-red-800 ${
              category === "dessert" ? "text-red-800 " : null
            }`}
          />
          <span>دسر</span>
        </div>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2  gap-10">
        {dataItem?.map((item) => (
          <div
            key={item.id}
            className="flex justify-center w-full items-start flex-col md:flex-row md:gap-x-8"
          >
            <div className=" md:w-1/3 w-full shrink-0  ">
              <img
                src={item.imageSrc}
                alt="cover"
                className="w-full md:h-auto max-h-40 object-cover"
              />
            </div>
            <div className="w-full">
              <div className="w-full flex mt-4 md:mt-0 justify-between items-center mb-4 md:text-xl font-DanaDemiBold">
                <h2 className="shrink-0">{item.title}</h2>
                <span className="border-1 border-dashed  block w-full mx-3 text-gray-500 "></span>
                <h2 className=" ">
                  {item.price.toLocaleString()}
                  <span className="mr-1 text-[14px] text-gray-600">تومان</span>
                </h2>
              </div>
              <p className="text-gray-500 md:text-[16px] text-[14px] font-Dana">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Menu;
