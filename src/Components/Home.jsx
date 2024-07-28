import { useState } from "react";
import img from "../Utils/HeroImage.png";
import Marquee from "react-fast-marquee";
const Home = () => {
  const [date] = useState(new Date().toLocaleDateString());

  return (
    <>
      <div className="w-full flex flex-row  bg-[#dfdfdf]   p-[0px_50px_0px_200px]  transition-all max-2md:p-[0px_50px_0px_100px] max-lg:p-[0px_50px_0px_50px] max-mTab:flex-col max-mTab:p-[0px] max-mTab:justify-center max-mTab:items-center max-mTab:pt-[50px] ">
        <div
          className="w-[70%]  text-black flex flex-col gap-2 font-bold justify-center text-[3rem]   leading-[50px]  max-xl:w-[80%]  max-2md:w-[110%]  max-2sm:text-[2.6rem] max-mTab:justify-center 
        max-mTab:items-center   max-mTab:w-auto "
        >
          <div className="w-full flex flex-col max-mobile:text-center max-mobile:text-[2.3rem] max-mobile:leading-[35px] max-mTab:items-center max-mTab:text-[4rem]  max-sm:text-[3rem]">
            <span>The Kind of Care</span>
            <span>Your Pets Deserve</span>
          </div>
          <div
            className="text-[1rem] font-[500] w-[80%] leading-[22px]  text-gray-400 max-mTab:w-[100%] max-mTab:text-center 
          max-mTab:text-[1.3rem] max-mTab:bg-[#dfdfdf] max-maxMobile:text-[1rem] max-mobile:w-[75%] "
          >
            Discover your next furry, feathered, or scaly friend! At Pet
            Paradise, we connect you with adorable pets looking for a loving
            home.
          </div>
          <div className=" flex mt-[20px] gap-5 max-mTab:bg-[#dfdfdf]  max-maxMobile:w-full max-maxMobile:justify-center max-maxMobile:items-center">
            <button
              className="shadow-lg text-[1.2rem] w-[10rem] p-[0px_30px] font-light rounded bg-purple-950 text-white
            max-maxMobile:w-[7rem] max-maxMobile:p-[0px_20px] "
            >
              See Pets
            </button>
            <span
              className="shadow-lg text-[1.2rem] flex justify-center w-[10rem] p-[0px_30px] font-light rounded bg-red-600
             text-white max-maxMobile:w-[7rem] max-maxMobile:p-[0px_20px] "
            >
              {date}
            </span>
          </div>
        </div>
        <div className="max-mTab:flex max-mTab:justify-center max-mTab:w-full ">
          <img src={img} className="w-[63rem] max-mTab:w-[40rem]" alt="img" />
        </div>
      </div>
      <div className="bg-[#f8f9fb] py-[20px]">
        <Marquee>
          {/* <img className="size-[25rem]" src={img} alt="" />
          <img className="size-[25rem]" src={img} alt="" />
          <img className="size-[25rem]" src={img} alt="" />
          <img className="size-[25rem]" src={img} alt="" />
          <img className="size-[25rem]" src={img} alt="" />
          <img className="size-[25rem]" src={img} alt="" /> */}
        </Marquee>
      </div>
    </>
  );
};

export default Home;
