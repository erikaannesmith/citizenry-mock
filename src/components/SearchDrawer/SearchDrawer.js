import "./SearchDrawer.css";
import { useState } from "react";
import { Search } from "../../icons/Search";

export const SearchDrawer = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search-drawer">
      <input
        placeholder="Search ..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <a href={`/pages/search-results?findify_q=${inputValue}`}>
        <Search />
      </a>
    </div>
  );
};
