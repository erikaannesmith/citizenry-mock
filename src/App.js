import { useState, useContext } from "react";
import { Header } from "./components/Header/Header";
import { PromoBar } from "./components/PromoBar/PromoBar";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchDrawer } from "./components/SearchDrawer/SearchDrawer";
import { Footer } from "./components/Footer/Footer";
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

      <PageContent>
        <Footer />
      </PageContent>
    </>
  );
}

const PageContent = ({ children }) => {
  const [searchBarOpen, setSearchBarOpen] = useContext(SearchBarContext);
  return (
    <div
      style={{
        boxShadow: searchBarOpen ? "inset 0 0 0 1000px rgba(0,0,0,.2)" : "none",
        cursor: searchBarOpen ? "pointer" : "auto",
      }}
      onClick={searchBarOpen ? () => setSearchBarOpen(false) : undefined}
    >
      {children}
    </div>
  );
};

export default App;
