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

const FiltersSection = ({
  title,
  filters,
  isVisible,
  toggleVisibility,
  categories,
  handleCategoryChange,
}) => (
  <>
    <h2
      className="font-medium text-xl mt-4 font-mulish cursor-pointer sm:text-base sm:mt-2 flex items-center justify-between"
      onClick={toggleVisibility}
    >
      {title}
      <ArrowIcon isOpen={isVisible} />
    </h2>
    <div className="w-full h-[2px] bg-[#D9D9D9] my-2" />
    {isVisible && (
      <div className="flex flex-col">
        {filters.map(({ label, key }) => (
          <FilterCheckbox
            key={key}
            label={label}
            checked={categories[key]}
            onChange={() => handleCategoryChange(key)}
          />
        ))}
      </div>
    )}
  </>
);

const FiltersBarComponent = () => {
  const initialCategoriesState = {
    wholeBean: false,
    Cafetiere: false,
    Filter: false,
    Espresso: false,
    FrenchPress: false,
    PourOver: false,
    darkChocolate: false,
    blackCherry: false,
    citrus: false,
    toastedNuts: false,
    caramel: false,
    cocoa: false,
    hazelnut: false,
    molasses: false,
    nutty: false,
    smooth: false,
    spicy: false,
    earthy: false,
    cinnamon: false,
    clove: false,
    blueberry: false,
    blackcurrant: false,
    vanilla: false,
    floral: false,
    honey: false,
    smoke: false,
    milkChocolate: false,
    tropicalFruit: false,
    cardamom: false,
    fruit: false,
    toffee: false,
    coconut: false,
    espresso: false,
    centralAmerica: false,
    africa: false,
    southAmerica: false,
    asiaPacific: false,
    middleEast: false,
  };

  const [categories, setCategories] = useState(initialCategoriesState);
  const [isCategoryVisible, setCategoryVisible] = useState(false);
  const [isRoastVisible, setRoastVisible] = useState(false);
  const [isCaffeineVisible, setCaffeineVisible] = useState(false);

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

  const handleCategoryChange = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const handleClearFilters = () => {
    setCategories(initialCategoriesState);
  };

  const GrindOption = [
    { label: "Whole Bean", key: "wholeBean" },
    { label: "Cafetiere", key: "reserve" },
    { label: "Filter", key: "via" },
    { label: "Espresso", key: "origami" },
    { label: "French Press", key: "teavana" },
    { label: "Pour Over", key: "syrup" },
  ];

  const FlavorProfile = [
    { label: "Dark Chocolate", key: "dark_chocolate" },
    { label: "Black Cherry", key: "black_cherry" },
    { label: "Citrus", key: "citrus" },
    { label: "Toasted Nuts", key: "toasted_nuts" },
    { label: "Caramel", key: "caramel" },
    { label: "Cocoa", key: "cocoa" },
    { label: "Hazelnut", key: "hazelnut" },
    { label: "Molasses", key: "molasses" },
    { label: "Nutty", key: "nutty" },
    { label: "Smooth", key: "smooth" },
    { label: "Spicy", key: "spicy" },
    { label: "Earthy", key: "earthy" },
    { label: "Cinnamon", key: "cinnamon" },
    { label: "Clove", key: "clove" },
    { label: "Blueberry", key: "blueberry" },
    { label: "Blackcurrant", key: "blackcurrant" },
    { label: "Vanilla", key: "vanilla" },
    { label: "Floral", key: "floral" },
    { label: "Honey", key: "honey" },
    { label: "Smoke", key: "smoke" },
    { label: "Milk Chocolate", key: "milk_chocolate" },
    { label: "Tropical Fruit", key: "tropical_fruit" },
    { label: "Cardamom", key: "cardamom" },
    { label: "Fruit", key: "fruit" },
    { label: "Toffee", key: "toffee" },
    { label: "Coconut", key: "coconut" },
    { label: "Espresso", key: "espresso" },
  ];

  const regionFilters = [
    { label: "Central America", key: "central_america" },
    { label: "Africa", key: "africa" },
    { label: "South America", key: "south_america" },
    { label: "Asia Pacific", key: "asia_pacific" },
    { label: "Middle East", key: "middle_east" },
  ];

  return (
    <>
      <div className="mt-20 inline-flex px-48 w-full sm:mt-6 sm:px-0">
        <h2 className="font-medium text-2xl text-center font-mulish sm:hidden">
          Filters
        </h2>
        <div className="ml-32 mr-8 sm:ml-2 sm:mr-2">
          <button
            className="px-4 py-1 border rounded-3xl inline-flex border-[#067655] hover:bg-emerald-800 sm:hidden"
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
            <p className="mx-1 font-light text-lg text-[#067655] font-mulish">
              Clear
            </p>
          </button>
        </div>
      </div>

      <div className="mt-10 mx-48 w-80 h-[400px] sm:mx-10 sm:mt-4">
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
          filters={regionFilters}
          isVisible={isCaffeineVisible}
          toggleVisibility={() => setCaffeineVisible(!isCaffeineVisible)}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
    </>
  );
};

export default FiltersBarComponent;
