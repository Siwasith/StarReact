import React from "react";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, name }) => {
  return (
    <div className="relative bg-[#081c15] p-4 pb-0 laptop:mb-20 tablet:mb-10 tablet:mt-[70px]">
      <img
        src={imageUrl}
        alt={name}
        className="w-[28rem] h-[28rem] object-cover mb-4 bg-[#1b4332] tablet:w-[18rem] tablet:h-[18rem] "
      />
      <div className="absolute bottom-0 left-[400px] right-0 text-white py-2 text-cente tablet:left-[250px]">
        <button className="m-4">
          <svg
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#FFFFFF"
            className="w-8 h-8"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill="#000"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="#FFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
