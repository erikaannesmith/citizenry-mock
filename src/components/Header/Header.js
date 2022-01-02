import "./Header.css";
import { useState, useContext } from "react";
import { Cart, Search, Logo, Close } from "../../icons";
import { SearchBarContext } from "../../contexts/SearchBarContext";

export const Header = () => {
  const [searchOpen, setSearchOpen] = useContext(SearchBarContext);

  return (
    <>
      <div className="header">
        {searchOpen ? (
          <button onClick={() => setSearchOpen(false)}>
            <Close />
          </button>
        ) : (
          <button onClick={() => setSearchOpen(true)}>
            <Search />
          </button>
        )}
        <a href="/">
          <Logo />
        </a>
        <Cart />
      </div>
      {searchOpen && <SearchDrawer />}
    </>
  );
};

const SearchDrawer = () => {
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
