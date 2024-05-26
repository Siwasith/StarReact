import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RoastLevel from "./RoastLevel/RoastLevel";
import Footer from "../Footer/Footer";

interface Product {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fake-coffee-api.vercel.app/api/${id}`
        );
        const productData = response.data[0]; // Get the first item from the array
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-white">Product not found</div>;
  }
  return (
    <>
      <div className="flex items-start mx-52 mt-8 p-4 mt-28 laptop:mx-10 laptop:flex-wrap laptop:justify-center tablet:mx-0 tablet:flex-wrap tablet:justify-center">
        <div className="relative bg-[#081c15] p-4 pb-0 laptop:mb-20 tablet:mb-10 tablet:mt-[70px]">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-[28rem] h-[28rem] object-cover mb-4 bg-[#1b4332] tablet:w-[18rem] tablet:h-[18rem] "
          />
          <div className="absolute bottom-0 left-[390px] right-0 text-white py-2 text-center">
            <button className="m-4">
              <svg
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FFFFFF"
                className="w-10 h-10"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12H20M20 12L16 8M20 12L16 16"
                    stroke="#FFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>

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

          <h2 className="text-2xl text-gray-800 font-mulish tracking-wide mb-2 max-w-[700px] break mt-8 mb-2">
            Coffee Profile
          </h2>
          <div className="grid grid-cols-2 gap-2 font-mulish">
            <div className="text-gray-800 font-semibold">
              <p className="my-2">Roast Level</p>
              <RoastLevel level={product.roast_level} />
            </div>

            <div className="text-gray-800 font-semibold">
              <p className="my-2">Weight</p>
              <p className="text-gray-600 mb-2">{product.weight} g</p>
            </div>

            <div className="text-gray-800 font-semibold">
              <p className="my-2 text-lg">Complementary Flavors</p>
              <div className="flex flex-wrap">
                <p className="text-sm text-gray-600 mb-2">
                  {product.flavor_profile.join(", ")}
                </p>
              </div>
            </div>

            <div className="text-gray-800 font-semibold">
              <p className="my-2 text-lg">Grind Options</p>
              <div className="flex flex-wrap">
                <p className="text-sm text-gray-600 mb-2">
                  {product.grind_option.join(", ")}
                </p>
              </div>
            </div>

            <div className="text-gray-800 font-semibold">
              <p className="my-2 text-lg">Region</p>
              <div className="flex flex-wrap">
                <p className="text-sm text-gray-600 mb-2">{product.region}</p>
              </div>
            </div>

            <div className="text-gray-800 font-semibold">
              <p className="my-2 text-lg">Price</p>
              <div className="flex flex-wrap">
                <p className="text-sm text-gray-600 mb-2">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;


