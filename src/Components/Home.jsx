import { useState } from "react";
import img from "../Utils/HeroImage.png";

const Home = () => {
  const [date] = useState(new Date().toLocaleDateString());

  return (
    <>
      <div className="bg-no-repeat bg-cover w-full flex flex-row bg-[#dfdfdf]   p-[0px_50px_0px_200px] ">
        <div className="w-[60%] text-black flex flex-col gap-2 font-bold justify-center text-[3rem] leading-[50px]">
          <div className="w-full flex flex-col">
            <span>The Kind of Care</span>
            <span>Your Pets Deserve</span>
          </div>
          <div className="text-[1rem] font-[500] w-[100%] leading-[22px] text-gray-400">
            Discover your next furry, feathered, or scaly friend! At Pet
            Paradise, we connect you with adorable pets looking for a loving
            home.
          </div>
          <div className="flex mt-[20px] gap-5">
            <button className="shadow-lg text-[1.2rem] w-[10rem] p-[0px_30px] font-light rounded bg-purple-950 text-white">
              See Pets
            </button>
            <span className="shadow-lg text-[1.2rem] flex justify-center w-[10rem] p-[0px_30px] font-light rounded bg-red-600 text-white">
              {date}
            </span>
          </div>
        </div>
        <div className="">
          <img src={img} className="w-[1000px]" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Home;
