import React from "react";

interface RoastLevelProps {
  level: number;
}

const RoastLevel: React.FC<RoastLevelProps> = ({ level }) => {
  const totalCircles = 5;
  return (
    <div className="flex space-x-1 my-3">
      {[...Array(totalCircles)].map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${
            index < level ? "bg-[#067655]" : "bg-[#D9D9D9]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default RoastLevel;
