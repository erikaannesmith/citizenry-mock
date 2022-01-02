import "./Header.css";
import { useContext } from "react";
import { Cart, Search, Logo, Close } from "../../icons";
import { SearchBarContext } from "../../contexts/SearchBarContext";

export const Header = () => {
  const [searchBarOpen, setSearchBarOpen] = useContext(SearchBarContext);

  return (
    <div className="header">
      {searchBarOpen ? (
        <button onClick={() => setSearchBarOpen(false)}>
          <Close />
        </button>
      ) : (
        <button onClick={() => setSearchBarOpen(true)}>
          <Search />
        </button>
      )}
      <a href="/">
        <Logo />
      </a>
      <Cart />
    </div>
  );
};
