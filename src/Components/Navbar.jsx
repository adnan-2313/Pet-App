import { SiAnimalplanet } from "react-icons/si";
import { MdOutlinePets } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex py-[20px] max-lg:py-[10px]  items-center justify-center bg-[#dfdfdf] ">
        <nav className="w-[70%]   max-lg:w-[80%] max-mTab:w-[90%] transition-all shadow-md bg-purple-100 justify-between  max-sm:pr-[100px] max-mobile:pr-[20px] text-[1.2rem] 2xl:text-[2rem]  text-purple-900  rounded-md px-[20px] flex 2xl:h-[5rem] h-[3.5rem]">
          <div className=" w-[30%]   flex flex-row items-center  font-semibold">
            <span>
              {" "}
              <SiAnimalplanet className="size-10 2xl:size-12" />
            </span>
            PetApp{" "}
          </div>
          <div className="w-[30%] flex items-center max-mobile:justify-center max-mobile:w-[50%] ">
            <ul className="flex flex-row items-center max-md:gap-[2rem]      gap-[4rem] font-semibold justify-center ">
              <NavLink to="/">
                <li className="flex items-center cursor-pointer max-mobile:hidden hover:text-gray-400 transition-colors delay-75 flex-row">
                  <MdHome className="size-6 2xl:size-8" />
                  Home
                </li>
              </NavLink>
              <NavLink to="/pets">
                <li className="flex items-center cursor-pointer max-mobile:hidden hover:text-gray-400 transition-colors delay-75 flex-row">
                  <MdOutlinePets className="size-6 2xl:size-8" />
                  Pets
                </li>
              </NavLink>
              <NavLink to="/">
                <li className="flex items-center cursor-pointer mobile:hidden hover:text-gray-400 transition-colors delay-75 flex-row">
                  <MdHome className="size-9" />
                </li>
              </NavLink>
              <NavLink to="/pets">
                <li className="flex items-center cursor-pointer mobile:hidden hover:text-gray-400   transition-colors delay-75 flex-row">
                  <MdOutlinePets className="size-9" />
                </li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
