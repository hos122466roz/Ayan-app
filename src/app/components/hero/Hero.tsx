
const Hero=()=>{
    return (
      <section className="px-6 md:px-24 hero w-full h-[100vh] relative flex justify-start items-center">
        <span className="z-10 w-full top-0 right-0 absolute h-full bg-black/50"></span>
        <div className="z-20 text-white  md:mt-40">
          <h1 className=" pb-4 text-sm md:text-2xl  font-MorabbaMedium">
            کباب و جوجه زغالی اعیان
          </h1>
          <h2
            className=" font-MorabbaBold md:leading-23 leading-15 text-2xl
           md:text-6xl"
          >
            حس های چشایی خود را
            <br className="" /> با
            <strong className=" text-red-800 mr-3">اعیان</strong> ، تقویت کنید
          </h2>
          <p className="w-full md:w-1/2 mt-8 md:text-[16px] text-[14px]  leading-10 border-r-4 pr-5 border-r-red-800 font-Dana ">
            ما در این مجموعه با بیش از 9 سال سابقه خدمت به مردم عزیز توانسته ایم
            امروزه با یک کیفیت عالی و تازه در لحظات شاد شما سهیم باشیم
          </p>
        </div>  
      </section>
    );}
export default Hero