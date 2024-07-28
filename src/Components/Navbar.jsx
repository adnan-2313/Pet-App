import { SiAnimalplanet } from "react-icons/si";
import { MdOutlinePets } from "react-icons/md";
import { MdHome } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex py-[20px] items-center justify-center bg-[#dfdfdf] ">
        <nav className="w-[70%] shadow-md bg-purple-100 justify-between text-[1.2rem]  text-purple-900  rounded-md px-[20px] flex  h-[3.5rem]">
          <div className=" w-[30%]   flex flex-row items-center  font-semibold">
            <span>
              {" "}
              <SiAnimalplanet className="size-10" />
            </span>
            PetApp{" "}
          </div>
          <div className="w-[30%] flex items-center ">
            <ul className="flex flex-row items-center  gap-[4rem] font-semibold justify-center ">
                <li className="flex items-center cursor-pointer hover:text-gray-400 transition-colors delay-75 flex-row"><MdHome className="size-6"/>Home</li>
                <li className="flex items-center cursor-pointer hover:text-gray-400 transition-colors delay-75 flex-row"><MdOutlinePets className="size-6"/>Pets</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
