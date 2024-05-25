import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        const response = await axios.get(`https://fake-coffee-api.vercel.app/api/${id}`);
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
    <div className="absolute bg-slate-50 w-[900px] h-auto ml-[550px] -mt-[400px] p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <img src={product.image_url} alt={product.name} className="w-64 h-64 object-cover mb-4" />
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold mb-2">Price: ${product.price}</p>
      <p className="text-gray-600 mb-2">Region: {product.region}</p>
      <p className="text-gray-600 mb-2">Weight: {product.weight}g</p>
      <p className="text-gray-600 mb-2">Roast Level: {product.roast_level}</p>
      <div className="mb-2">
        <p className="text-gray-600 font-semibold">Flavor Profile:</p>
        <ul className="list-disc list-inside text-gray-700">
          {product.flavor_profile.map((flavor, index) => (
            <li key={index}>{flavor}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-gray-600 font-semibold">Grind Options:</p>
        <ul className="list-disc list-inside text-gray-700">
          {product.grind_option.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
