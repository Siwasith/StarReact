import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductImage from "../../Component/productComponent/ProductImage";
import ProductInformation from "../../Component/productComponent/ProductInformation";
import Footer from "../../Component/FooterComponent/Footer";
import Loading from "../../Component/LoadingComponent/CenteredSpinner";

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
  const [productPic, setProductPic] = useState([
    "https://iili.io/H8Y7j3J.webp",
    "https://iili.io/H8Y7Opp.webp",
    "https://iili.io/H8Y7ckQ.webp",
  ]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fake-coffee-api.vercel.app/api/${id}`
        );
        const productData = response.data[0];
        setProduct(productData);
        setProductPic([...productPic, productData?.image_url]);
      } catch (error) {
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, productPic]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productPic.length - 1
        ? 0
        : prevIndex < 4
        ? prevIndex + 1
        : 4
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? productPic.length > 4
          ? 4
          : productPic.length - 1
        : prevIndex - 1
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error || !product) {
    return (
      <div className="text-white">Error: {error || "Product not found"}</div>
    );
  }

  return (
    <>
      <div className="flex items-start mx-52 mt-28 p-4 mt-32 laptop:mx-10 laptop:flex-wrap laptop:justify-center tablet:mx-0 tablet:flex-wrap tablet:justify-center">
        <ProductImage
          imageUrl={productPic[currentImageIndex]}
          name={product.name}
          onNextImage={handleNextImage}
          onPrevImage={handlePrevImage}
        />
        <ProductInformation product={product} />
      </div>
      <Footer />
    </>
  );
};
export default ProductDetail;
