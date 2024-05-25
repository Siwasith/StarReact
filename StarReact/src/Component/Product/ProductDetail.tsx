import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import RoastLevel from "./RoastLevel/RoastLevel";

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

  //   const description2 =
  //     "Due to the unique geography and climate conditions of the southeastern region of carmo de minas, the most prominent processing method is sun-dried, which intrinsically carries the least amount of impact to the environment by using very little water. This coffee has a subtle acidity and a softer profile that highlights tropical fruits and sweet hazelnuts with a smooth caramelly texture that is best paired with caramel and chocolate.";

  return (
    <>
      <div className="flex items-start lg:justify-start mx-52 mt-8 p-4 mt-36">
        <div className="bg-[#081c15] p-4 pb-0">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-[28rem] h-[28rem] object-cover mb-4 bg-[#1b4332]"
          />
        </div>

        <div className="lg:flex-1 ml-8">
          <h2 className="text-3xl text-gray-800 font-mulish tracking-wide mb-2 max-w-[700px] break">
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
      <div className="-mt-[1500px]">
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
