import "./NavBar.css";
import { useState } from "react";
import navItems from "../../data/navItems";
import { SectionDrawer } from "../SectionDrawer/SectionDrawer";

export const NavBar = () => {
  const [sectionOpen, setSectionOpen] = useState(undefined);
  return (
    <div className="nav-bar" onMouseLeave={() => setSectionOpen(undefined)}>
      <div className="nav-bar-items">
        {navItems.map((item) => (
          <span
            key={item.title}
            onMouseEnter={() => setSectionOpen(item.title)}
          >
            {item.title}
          </span>
        ))}
      </div>
      {sectionOpen && <SectionDrawer sectionOpen={sectionOpen} />}
    </div>
  );
};
