import { createContext, useState } from "react";

export const SearchBarContext = createContext();

export const SearchBarProvider = ({ children }) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  return (
    <SearchBarContext.Provider value={[searchBarOpen, setSearchBarOpen]}>
      {children}
    </SearchBarContext.Provider>
  );
};
