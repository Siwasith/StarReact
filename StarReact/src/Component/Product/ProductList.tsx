import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FiltersBarComponent from "../FiltersBarComponent/FiltersBarComponent";

// Define the type for a product
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

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 12; // Set the number of items per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fake-coffee-api.vercel.app/api");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page whenever the search query changes
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
    <FiltersBarComponent />
    <div className="absolute w-[900px] h-auto ml-[550px] -mt-[500px] p-4 mb-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search product name..."
          className="border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {displayedProducts.map((product) => (
          <Link to={`/${product.id}`} key={product.id} className="block">
            <div className="bg-white shadow-md flex flex-col h-[500px]">
              <p className="absolute text-gray-800 font-bold ml-4 mt-[465px] font-light">
                Price : ${product.price}
              </p>
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-60 bg-[#1b4332] object-cover"
              />
              <div className="flex-grow m-4">
                <h2 className="text-xl text-gray-800 font-mulish font-bold tracking-wide mb-2">
                  Starbucks® {product.name}
                </h2>

                <div className="product-options">
                  <div className="flex flex-wrap gap-2">
                    {product.flavor_profile.map((option, index) => (
                      <p
                        className="border-black border-2 flex items-left justify-center rounded-3xl text-sm px-2 py-0.5 bg-black text-white"
                        key={index}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(filteredProducts.length / itemsPerPage)).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            className={`mt-10 mx-2 py-1 px-3 rounded-md rounded-full ${
              page + 1 === currentPage ? "bg-emerald-700 text-white " : "bg-gray-200 text-gray-800"
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>

    </div>
    </>
  );
};

export default ProductList;
