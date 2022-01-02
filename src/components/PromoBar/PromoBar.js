import "./PromoBar.css";
import { Close } from "../../icons";

export const PromoBar = ({ handleClose }) => (
  <div className="promo-bar">
    <a href="https://www.the-citizenry.com/pages/help#shipping">
      Free U.S. Shipping & Easy Returns &#8250;
    </a>
    <button onClick={handleClose}>
      <Close />
    </button>
  </div>
);
