import React from "react";
import { Product } from "../../Pages/ProductPage/ProductDetail";
import CoffeeProfile from "./CoffeeProfile";

interface ProductInformationProps {
  product: Product;
}

const ProductInformation: React.FC<ProductInformationProps> = ({ product }) => {
  return (
    <div className="lg:flex-1 ml-8">
      <h2 className="text-3xl text-gray-800 font-mulish tracking-wide mb-2 max-w-[700px] break tablet:absolute tablet:top-[100px]">
        Starbucks® {product.name}
      </h2>
      <div className="flex flex-wrap gap-2 my-4">
        {product.flavor_profile.map((option, index) => (
          <p
            className="border-black border-2 flex items-left justify-center rounded-3xl text-sm px-2 py-0.5 bg-black text-white"
            key={index}
          >
            {option}
          </p>
        ))}
        {product.grind_option.map((option, index) => (
          <p
            className="border-[#067655] border-2 flex items-left justify-center rounded-3xl text-sm px-2 py-0.5 bg-[#067655] text-white"
            key={index}
          >
            {option}
          </p>
        ))}
      </div>
      <div className="my-4">
        <p className="max-w-[700px] break">{product.description}</p>
      </div>
      <CoffeeProfile product={product} />
    </div>
  );
};

export default ProductInformation;
