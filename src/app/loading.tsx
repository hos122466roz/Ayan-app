"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <>
      <div className=" fixed w-full h-[100vh] bg-black/90 z-50 flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/cdc3ddd7-030e-42e3-bedb-3691464f02ac/LotkW3F6R5.lottie"
          loop
          autoplay
          className="zise-24  text-red-800"
        />
      </div>
    </>
  );
};
export default Loading;
