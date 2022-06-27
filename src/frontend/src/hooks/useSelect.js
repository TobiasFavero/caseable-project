import { useState } from "react";

export const useSelect = (initialValue) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  return [selectedValue, handleChange];
};
