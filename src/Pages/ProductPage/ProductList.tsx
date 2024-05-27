import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../../Component/heroComponent/HeroSection";
import Footer from "../../Component/FooterComponent/Footer";
import FiltersSection from "../../Component/filters/FiltersSection";
import { Product } from "../../constants/ProductInterfaceFile";
import { initialCategoriesState } from "../../constants/initialCategoriesState";
import { FlavorProfile } from "../../constants/FlavorProfile";
import { RegionFilters } from "../../constants/RegionFilters";
import { GrindOption } from "../../constants/GrindOption";
import Loading from "../../Component/LoadingComponent/CenteredSpinner";

const ProductList: React.FC = () => {
  const [categories, setCategories] = useState(initialCategoriesState);
  const [isCategoryVisible, setCategoryVisible] = useState(false);
  const [isRoastVisible, setRoastVisible] = useState(false);
  const [isCaffeineVisible, setCaffeineVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 12;
  const [filteredProduct, setFilteredProducts] = useState<Product[]>([]);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleMediaQueryChange = (e) => {
      const isWideScreen = e.matches;
      setCategoryVisible(isWideScreen);
      setRoastVisible(isWideScreen);
      setCaffeineVisible(isWideScreen);
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleCategoryChange = (category: string) => {
    setCategories((prevCategories) => {
      const isChecked = !prevCategories[category];
      const updatedCategories = { ...prevCategories, [category]: isChecked };

      const activeFilters = getActiveFilters(updatedCategories);

      const filteredProductsActivated = activeFilters.length
        ? filterProducts(products, activeFilters)
        : [];

      setFilteredProducts(filteredProductsActivated);

      return updatedCategories;
    });
  };

  const getActiveFilters = (categories: typeof initialCategoriesState) =>
    Object.keys(categories).filter((key) => categories[key]);

  const filterProducts = (products: Product[], activeFilters: string[]) =>
    products.filter((product) => {
      return activeFilters.every((filter) => {
        const filterLabel = getFilterLabel(filter);

        switch (filterLabel.type) {
          case "flavor":
            return product.flavor_profile.includes(filterLabel.label);
          case "region":
            return product.region === filterLabel.label;
          case "grind":
            return product.grind_option.includes(filterLabel.label);
          default:
            return false;
        }
      });
    });

  const getFilterLabel = (filter: string) => {
    const flavor = FlavorProfile.find((fp) => fp.key === filter);
    if (flavor) return { type: "flavor", label: flavor.label };

    const region = RegionFilters.find((rf) => rf.key === filter);
    if (region) return { type: "region", label: region.label };

    const grind = GrindOption.find((go) => go.key === filter);
    if (grind) return { type: "grind", label: grind.label };

    return { type: "unknown", label: "" };
  };

  const handleClearFilters = () => {
    setCategories(initialCategoriesState);
    setFilteredProducts([]);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const isFilterisCategoryVisible = isCategoryVisible;
  const isFilterisRoastVisible = isRoastVisible;
  const isFilterisCaffeineVisible = isCaffeineVisible;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeroSection />
      <div
        className={`mt-10 mx-48 w-80 h-[400px] tablet:mt-4 laptop:mx-4 laptop:w-64 tablet:mx-12`}
      >
        <div className="mt-4 inline-flex w-10 tablet:mt-6 tablet:px-0">
          <h2 className="font-medium text-2xl text-center font-mulish">
            Filters
          </h2>
          <div className="ml-36 mr-8 tablet:mr-2 text-[#067655] laptop:ml-20 tablet:ml-36">
            <button
              className="px-4 py-1 border rounded-3xl inline-flex border-[#067655] hover:bg-gray-100"
              onClick={handleClearFilters}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-2"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="#067655"
                />
              </svg>
              <p className="mx-1 font-light text-lg font-mulish">Clear</p>
            </button>
          </div>
        </div>
        <FiltersSection
          title="Grind Option"
          filters={GrindOption}
          isVisible={isCategoryVisible}
          toggleVisibility={() => setCategoryVisible(!isCategoryVisible)}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
        <FiltersSection
          title="Flavor Profile"
          filters={FlavorProfile}
          isVisible={isRoastVisible}
          toggleVisibility={() => setRoastVisible(!isRoastVisible)}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
        <FiltersSection
          title="Region"
          filters={RegionFilters}
          isVisible={isCaffeineVisible}
          toggleVisibility={() => setCaffeineVisible(!isCaffeineVisible)}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
      <div
        className={`w-[900px] h-auto ml-[550px] -mt-[400px] p-4 mb-4 laptop:ml-[300px] laptop:w-auto tablet:ml-[30px] tablet:w-[350px] ${
          isFilterisCategoryVisible ||
          isFilterisRoastVisible ||
          isFilterisCaffeineVisible
            ? "tablet:mt-[50px]"
            : "tablet:-mt-[200px]"
        }`}
      >
        <div className="mb-4 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Starbucks Product"
            className="font-mulish z-10 border border-gray-300 text-gray-900 text-base rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 tracking-wider font-extralight "
          />
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 ml-1"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <>
          {filteredProduct.length > 0 && (
            <>
              <div className="bg-[#067655] rounded-3xl text-base py-0.5 w-full flex">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  className="w-6 h-6 mx-3"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#FFFFF"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <h2 className="text-white text-center">Filtered</h2>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-4 laptop:grid-cols-2 tablet:grid-cols-1">
                {filteredProduct.map((product) => (
                  <Link
                    to={`/${product.id}`}
                    key={product.id}
                    className="block"
                  >
                    <div className="bg-white drop-shadow flex flex-col h-[500px] hover:drop-shadow-xl ease-in-out duration-100">
                      <p className="absolute text-gray-800  ml-4 mt-[465px] font-light">
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
            </>
          )}
          {filteredProduct.length === 0 && (
            <>
              <div className="grid grid-cols-3 gap-6 mt-12 laptop:grid-cols-2 tablet:grid-cols-1">
                {displayedProducts.map((product) => (
                  <Link
                    to={`/${product.id}`}
                    key={product.id}
                    className="block"
                  >
                    <div className="bg-white drop-shadow flex flex-col h-[450px] hover:drop-shadow-md ease-in-out duration-100">
                      <p className="absolute text-gray-800 ml-4 mt-[415px] font-light">
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
            </>
          )}
        </>
        {filteredProduct.length === 0 && (
          <>
            <div className="flex justify-center mt-4]">
              {[
                ...Array(
                  Math.ceil(filteredProducts.length / itemsPerPage)
                ).keys(),
              ].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page + 1)}
                  className={`mt-10 mx-2 py-1 px-3 rounded-md rounded-full ${
                    page + 1 === currentPage
                      ? "bg-emerald-700 text-white "
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      {displayedProducts.length && filteredProduct.length == 0 && <Footer />}
    </>
  );
};

export default ProductList;
