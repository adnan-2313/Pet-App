import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";
import { CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";

const PetPage = () => {
  const [petData, setPetData] = useState([]);
  const [showMore, setShowMore] = useState({});
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async (searchParams = {}) => {
    try {
      const query = new URLSearchParams(searchParams).toString();
      const api = await fetch(`http://pets-v2.dev-apis.com/pets?${query}`);
      const apiJson = await api.json();
      setPetData(apiJson.pets);
    } catch (err) {
      console.log("API is not fetched:", err.message);
    }
  };

  const toggleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSearch = () => {
    fetchApi({ animal, location, breed });
  };

  const handleClearSearch = () => {
    setAnimal("");
    setLocation("");
    setBreed("");
    fetchApi();
  };

  return (
    <>
      <div className="bg-[#dfdfdf]">
        <div className="w-[84%] mx-auto p-[20px_40px] text-black">
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            <input
              type="text"
              placeholder="Animal"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              className="p-2 border-none outline-none  rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2  border-none outline-none rounded"
            />
            <input
              type="text"
              placeholder="Breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="p-2 border-none outline-none rounded"
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-purple-900 text-white rounded hover:bg-purple-400 flex items-center gap-2"
            >
              <CiSearch className="text-[30px]" />
            </button>
            <button
              onClick={handleClearSearch}
              className="p-2 bg-purple-900 text-white rounded hover:bg-purple-400"
            >
              Clear All
            </button>
          </div>
          {petData.length === 0 ? (
            <Shimmer />
          ) : (
            <div className="justify-center gap-4 flex flex-row flex-wrap">
              {petData.map((pet) => (
                <div
                  className="bg-[#f3e8ff] shadow-md rounded-lg flex w-[18rem] flex-col"
                  key={pet.id}
                >
                  <div className="flex flex-row overflow-hidden">
                    {pet.images.map((img, index) => (
                      <img
                        key={index}
                        className="w-full rounded-t-md"
                        src={img}
                        alt="pet image"
                      />
                    ))}
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
                        {showMore[pet.id]
                          ? pet.description
                          : `${pet.description.substring(0, 100)}...`}
                      <button
                        onClick={() => toggleShowMore(pet.id)}
                        className="mt-2 text-purple-900 hover:underline focus:outline-none"
                      >
                        {showMore[pet.id] ? "Show Less" : "Show More"}
                      </button>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PetPage;
