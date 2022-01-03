import "./SectionDrawer.css";
import navItems from "../../data/navItems";

export const SectionDrawer = ({ sectionOpen }) => {
  const sectionDetails = navItems.find((item) => item.title === sectionOpen);
  const { items, link, promos } = sectionDetails;
  return (
    <div className="nav-section">
      <div className="left-panel">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
        <button href={link}>Shop All</button>
      </div>
      <div className="vertical-divider" />
      <div className="right-panel">
        {promos.map((promo) => (
          <div className="promo">
            <a href={promo.link}>
              <img src={promo.image} />
              <p>{promo.text}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
