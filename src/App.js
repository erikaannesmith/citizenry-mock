import { useState, useContext } from "react";
import { Header } from "./components/Header/Header";
import { PromoBar } from "./components/PromoBar/PromoBar";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchDrawer } from "./components/SearchDrawer/SearchDrawer";
import { SearchBarContext } from "./contexts/SearchBarContext";

function App() {
  const [promoBarOpen, setPromoBarOpen] = useState(true);
  const [searchBarOpen] = useContext(SearchBarContext);

  return (
    <>
      {promoBarOpen && <PromoBar handleClose={() => setPromoBarOpen(false)} />}
      <Header />
      {searchBarOpen && <SearchDrawer />}
      <NavBar />

      <WhateverElse />
    </>
  );
}

const WhateverElse = () => {
  const [searchBarOpen, setSearchBarOpen] = useContext(SearchBarContext);
  return (
    <div
      style={{
        height: "100vh",
        boxShadow: searchBarOpen ? "inset 0 0 0 1000px rgba(0,0,0,.2)" : "none",
        cursor: searchBarOpen ? "pointer" : "auto",
      }}
      onClick={searchBarOpen ? () => setSearchBarOpen(false) : undefined}
    >
      hello! iz me
    </div>
  );
};

export default App;
