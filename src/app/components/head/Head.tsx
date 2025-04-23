import Image, { StaticImageData } from "next/image"
interface HeadProps{
    cover:string |StaticImageData;
    title:string
}
const Head:React.FC<HeadProps>=({cover,title})=>{
    return (
      <div className="flex justify-start items-center w-full h-[50vh] relative">
        <span className="w-full absolute h-full top-0 right-0 z-20 bg-black/40"></span>
        <div className="z-10 absolute w-full h-full">
          <Image
            src={cover}
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-30 container">
          <h2 className="text-5xl font-MorabbaBold text-white mt-15 border-r-3 pr-4 border-r-red-800 inline-block pb-4">
            {title}
          </h2>
        </div>
      </div>
    );
}
export default Head