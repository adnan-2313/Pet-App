import React from "react";

const PetDetailCard = ({ pet }) => {
  return (
    <>
      <div
        className="bg-[#f3e8ff] shadow-md rounded-lg flex w-[12rem] flex-col"
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
            </p>
            <button
              onClick={() => toggleShowMore(pet.id)}
              className="mt-2 text-blue-500 hover:underline focus:outline-none"
            >
              {showMore[pet.id] ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetDetailCard;
