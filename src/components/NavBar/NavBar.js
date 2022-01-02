import "./NavBar.css";

const navItems = [
  "What's New",
  "Rugs",
  "Bedding",
  "Pillows",
  "Throws & Blankets",
  "Furniture",
  "Baskets & Decor",
  "Bath",
  "Kitchen",
];
export const NavBar = () => (
  <div className="nav-bar">
    {navItems.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
);
