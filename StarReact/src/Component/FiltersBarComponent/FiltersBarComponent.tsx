import React, { useState, useEffect } from "react";

const FilterCheckbox = ({ label, checked, onChange }) => (
  <label className="flex items-center my-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2 w-5 h-5"
    />
    {label}
  </label>
);

const FiltersBarComponent = () => {
  const [categories, setCategories] = useState({
    wholeBean: false,
    reserve: false,
    via: false,
    origami: false,
    teavana: false,
    syrup: false,
    blonde: false,
    medium: false,
    dark: false,
    decaf: false,
    regular: false,
  });

  const [isCategoryVisible, setCategoryVisible] = useState(false);
  const [isRoastVisible, setRoastVisible] = useState(false);
  const [isCaffeineVisible, setCaffeineVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setCategoryVisible(true);
        setRoastVisible(true);
        setCaffeineVisible(true);
      } else {
        setCategoryVisible(false);
        setRoastVisible(false);
        setCaffeineVisible(false);
      }
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleCategoryChange = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const categoryFilters = [
    { label: "Whole Bean", key: "wholeBean" },
    { label: "Starbucks Reserve", key: "reserve" },
    { label: "Starbucks VIA", key: "via" },
    { label: "Starbucks Origami", key: "origami" },
    { label: "Teavana", key: "teavana" },
    { label: "Syrup", key: "syrup" },
  ];

  const roastFilters = [
    { label: "Blonde", key: "blonde" },
    { label: "Medium", key: "medium" },
    { label: "Dark", key: "dark" },
  ];

  const caffeineFilters = [
    { label: "Decaf", key: "decaf" },
    { label: "Regular", key: "regular" },
  ];

  const ArrowIcon = ({ isOpen }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`ml-2 transition-transform duration-200 ${
        isOpen ? "transform rotate-180" : ""
      }`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <div className="mt-20 inline-flex px-48 w-full sm:mt-6 sm:px-0">
        <h2 className="font-medium text-2xl text-center font-mulish sm:hidden">
          Filters
        </h2>
        <div className="ml-32 mr-8 sm:ml-2 sm:mr-2">
          <button className="px-4 py-1 border rounded-3xl inline-flex border-[#067655] hover:bg-emerald-800 sm:hidden">
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
            <p className="mx-1 font-light text-lg text-[#067655] font-mulish">
              Clear
            </p>
          </button>
        </div>

        <form className="flex items-center mx-auto">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  fill="black"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[50rem] ps-[45px] p-2.5 pl-40 text-left sm:w-[17rem] sm:w-[15rem]"
              placeholder="Search branch name..."
              required
            />
          </div>
          <div className="ml-[20px] mr-8 sm:ml-[10px] sm:mr-4">
            <button className="px-4 py-2 rounded-3xl inline-flex bg-gray-300 hover:bg-emerald-800 sm:px-2">
              <p className="mx-1 font-light text-lg text-white tracking-wide font-light sm:font-thin">
                Search
              </p>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 mx-48 w-80 h-[400px] sm:mx-10 sm: mt-4">
        <h2
          className="font-medium text-xl font-mulish cursor-pointer sm:text-base sm:mt-2 flex items-center justify-between"
          onClick={() => setCategoryVisible(!isCategoryVisible)}
        >
          Categories
          <ArrowIcon isOpen={isCategoryVisible} />
        </h2>
        <div className="w-full h-[2px] bg-[#D9D9D9] my-2" />
        {isCategoryVisible && (
          <div className="flex flex-col">
            {categoryFilters.map(({ label, key }) => (
              <FilterCheckbox
                key={key}
                label={label}
                checked={categories[key]}
                onChange={() => handleCategoryChange(key)}
              />
            ))}
          </div>
        )}

        <h2
          className="font-medium text-xl mt-4 font-mulish cursor-pointer sm:text-base sm:mt-2 flex items-center justify-between"
          onClick={() => setRoastVisible(!isRoastVisible)}
        >
          Roast
          <ArrowIcon isOpen={isRoastVisible} />
        </h2>
        <div className="w-full h-[2px] bg-[#D9D9D9] my-2" />
        {isRoastVisible && (
          <div className="flex flex-col">
            {roastFilters.map(({ label, key }) => (
              <FilterCheckbox
                key={key}
                label={label}
                checked={categories[key]}
                onChange={() => handleCategoryChange(key)}
              />
            ))}
          </div>
        )}

        <h2
          className="font-medium text-xl mt-4 font-mulish cursor-pointer sm:text-base sm:mt-2 flex items-center justify-between"
          onClick={() => setCaffeineVisible(!isCaffeineVisible)}
        >
          Caffeine
          <ArrowIcon isOpen={isCaffeineVisible} />
        </h2>
        <div className="w-full h-[2px] bg-[#D9D9D9] my-2" />
        {isCaffeineVisible && (
          <div className="flex flex-col">
            {caffeineFilters.map(({ label, key }) => (
              <FilterCheckbox
                key={key}
                label={label}
                checked={categories[key]}
                onChange={() => handleCategoryChange(key)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FiltersBarComponent;
