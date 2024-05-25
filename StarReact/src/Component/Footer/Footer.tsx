import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="absulote bg-[#303030] text-gray-300 py-2 px-full mt-[1800px]">
      <div className="mx-auto px-4 px-full">
        <div className="flex justify-between items-center gap-8 mx-36">
          <div>
            <p className="text-xs font-semibold my-1 ">
              ©2024 Coffee Concepts Retail Co.,Ltd. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold my-1">StarReact Thailand</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
