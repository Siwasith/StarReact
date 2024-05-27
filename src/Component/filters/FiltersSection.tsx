import React from "react";
import FilterCheckbox from "./FilterCheckbox";

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
      className="font-medium text-xl mt-4 font-mulish cursor-pointer tablet:text-base tablet:mt-2 flex items-center justify-between"
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

export default FiltersSection;
