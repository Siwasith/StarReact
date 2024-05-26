import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductImage from "../../Component/product/ProductImage";
import ProductInformation from "../../Component/product/ProductInformation";
import Footer from "../../Component/footer/Footer";

export interface Product {
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
        const productData = response.data[0];
        setProduct(productData);
      } catch (error) {
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error || !product) {
    return (
      <div className="text-white">Error: {error || "Product not found"}</div>
    );
  }

  return (
    <>
      <div className="flex items-start mx-52 mt-8 p-4 mt-28 laptop:mx-10 laptop:flex-wrap laptop:justify-center tablet:mx-0 tablet:flex-wrap tablet:justify-center">
        <ProductImage imageUrl={product.image_url} name={product.name} />
        <ProductInformation product={product} />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
