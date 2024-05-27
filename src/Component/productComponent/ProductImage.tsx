import React from "react";

interface ProductImageProps {
  imageUrl: string;
  name: string;
  onNextImage: () => void;
  onPrevImage: () => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  imageUrl,
  name,
  onNextImage,
  onPrevImage,
}) => {
  return (
    <div className="relative bg-[#081c15] p-4 pb-0 laptop:mb-20 tablet:mb-10 tablet:mt-[70px]">
      <img
        src={imageUrl}
        alt={name}
        className="w-[28rem] h-[28rem] object-cover mb-4 bg-[#1b4332] tablet:w-[18rem] tablet:h-[18rem] "
      />
      <div className="absolute bottom-0 top-[200px] h-[2rem] text-white py-2 text-center tablet:h-[2rem] tablet:w-[18rem] tablet:top-[270px]">
        <button onClick={onPrevImage}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 tablet:h-5 tablet:w-5 "
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M15 6L9 12L15 18" stroke="#FFFFFF"></path>{" "}
            </g>
          </svg>
        </button>
        <button className="ml-[370px] tablet:ml-[0px]" onClick={onNextImage}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(180)"
            className="h-10 w-10 tablet:h-5 tablet:w-5"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M15 6L9 12L15 18" stroke="#FFFFFF"></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductImage;
