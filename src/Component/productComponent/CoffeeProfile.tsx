import React from "react";
import { Product } from "../../Pages/ProductPage/ProductDetail";
import RoastLevel from "./RoastLevel";

interface CoffeeProfileProps {
  product: Product;
}

const CoffeeProfile: React.FC<CoffeeProfileProps> = ({ product }) => {
  const renderList = (title: string, items: string[]) => (
    <div className="text-gray-800  font-mulish">
      <p className="my-2 text-lg font-semibold">{title}</p>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <p className="text-lg text-gray-600 mb-2" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 gap-2 font-mulish">
      <RoastLevel level={product.roast_level} />
      {renderList("Weight", [`${product.weight} g`])}
      {renderList("Complementary Flavors", product.flavor_profile)}
      {renderList("Grind Options", product.grind_option)}
      {renderList("Region", [product.region])}
      {renderList("Price", [`$${product.price}`])}
    </div>
  );
};

export default CoffeeProfile;
