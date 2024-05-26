import React from "react";

interface RoastLevelProps {
  level: number;
}

const RoastLevel: React.FC<RoastLevelProps> = ({ level }) => {
  const totalCircles = 5;
  return (
    <>
      <div className="flex flex-col space-y-3 my-2">
        <h1 className="text-lg font-semibold">Roast Level</h1>
        <div className="flex space-x-1">
          {[...Array(totalCircles)].map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index < level ? "bg-[#067655]" : "bg-[#D9D9D9]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoastLevel;
