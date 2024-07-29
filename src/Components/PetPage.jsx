import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";

const PetPage = () => {
  const [petData, setPetData] = useState([]);
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const api = await fetch("http://pets-v2.dev-apis.com/pets");
      const apiJson = await api.json();
      setPetData(apiJson.pets);
    } catch (err) {
      console.log("api is not fetched : ", err.message);
    }
  };

  const toggleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className="bg-[#dfdfdf]">
        <div className="w-[84%] border-2 mx-auto justify-center p-[20px_40px] gap-4 text-black flex flex-row flex-wrap">
          {petData.map((pet) => {
            return (
              <div
                className="bg-[#f3e8ff] shadow-md rounded-lg flex w-[18rem] flex-col"
                key={pet.id}
              >
                <div className="flex flex-row overflow-hidden">
                  {pet.images.map((img, index) => {
                    return (
                      <img
                        key={index}
                        className="w-full rounded-t-md"
                        src={img}
                        alt="pet image"
                      />
                    );
                  })}
                </div>
                <div className="p-[5px_10px_30px_10px] leading-5 flex flex-col">
                  <div className="text-[1.2rem] font-semibold">{pet.name}</div>
                  <span>
                    {pet.animal.charAt(0).toUpperCase() + pet.animal.slice(1)}
                  </span>
                  <span>{pet.city}</span>
                  <div className="flex flex-col">
                    <p className="text-gray-700">
                      <span className="font-semibold">About:</span>
                      {pet.description.substring(0, 50)}

                      <span
                        onClick={() => toggleShowMore(pet.id)} 
                        className="mt-2 text-blue-500 hover:underline cursor-pointer focus:outline-none"
                      >
                        {" "}show More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PetPage;
