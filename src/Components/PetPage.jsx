import React, { useEffect, useState } from "react";

const PetPage = () => {
  const [petData, setPetData] = useState([]);

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
  return (
    <>
      <div className="w-[84%]  mx-auto p-[20px_40px] gap-4  text-black flex flex-row flex-wrap">
        {petData.map((pet) => {
          return (
            <div
              className="shadow-md border-2 rounded-lg p-[20px_20px] flex w-[12rem]  flex-col"
              key={pet.id}
            >
              <div>
                <img
                  className="w-[10rem] rounded-md"
                  src={pet.images[0]}
                  alt="pet image"
                />
              </div>
              <span className="text-[1.2rem] font-semibold">{pet.name}</span>
              <span>
                {pet.animal.charAt(0).toUpperCase()}
                {pet.animal.slice(1)}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PetPage;
