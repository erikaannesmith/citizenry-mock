import "./SearchDrawer.css";
import { useState } from "react";

export const SearchDrawer = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search-drawer">
      <input
        placeholder="Search ..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
