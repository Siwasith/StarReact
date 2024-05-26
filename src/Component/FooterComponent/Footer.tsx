import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#303030] text-gray-300 py-2 w-full mt-44  ">
      <div className="mx-auto px-4 max-w-7xl tablet:px-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold my-1">
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
