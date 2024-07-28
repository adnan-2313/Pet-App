import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <PetPage></PetPage> */}
    </>
  );
};

export default App;
