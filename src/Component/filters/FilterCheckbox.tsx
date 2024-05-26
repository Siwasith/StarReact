import React from "react";

const FilterCheckbox = ({ label, checked = false, onChange }) => (
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

export default FilterCheckbox;
