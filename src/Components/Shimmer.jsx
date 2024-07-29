const Shimmer = () => {
    const shimmerCards = Array(6).fill(0); // Creating an array to generate multiple shimmer cards
  
    return (
      <div className="bg-[#dfdfdf] animate-pulse">
        <div className="w-[84%] mx-auto justify-center p-[20px_40px] gap-4 text-black flex flex-row flex-wrap">
          {shimmerCards.map((_, index) => (
            <div
              key={index}
              className="bg-[#f3e8ff] shadow-md rounded-lg flex w-[18rem] flex-col mb-4"
            >
              <div className="flex flex-row overflow-hidden">
                <div className="w-full h-40 bg-gray-300 rounded-t-md"></div>
              </div>
              <div className="p-[5px_10px_30px_10px] leading-5 flex flex-col gap-2">
                <div className="h-6 bg-gray-300 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
                <div className="flex flex-col gap-2">
                  <div className="h-3 bg-gray-300 rounded-md"></div>
                  <div className="h-3 bg-gray-300 rounded-md"></div>
                  <div className="h-3 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  