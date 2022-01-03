import "./Footer.css";
import { useState } from "react";

export const Footer = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  return (
    <div className="footer">
      <div className="left-panel">
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0438/1069/files/NYC_Flagship_Header_Image_Option_2-v1603472283238_700x.jpg?v=1603756473" />
        </div>
        <div className="contact-details">
          <div className="section-header">The NYC Flagship</div>
          <p>
            22 Crosby Street <br /> New York, NY 10013
          </p>
          <p>1.917.265.8731</p>
          <p>Visit Us →</p>
        </div>
      </div>
      <div className="right-panel">
        <div className="section-header">Get on the List</div>
        <p>Sign up for first dibs on new collections and much more.</p>
        <div className="section-header">Get in Touch</div>
        <p>
          Monday - Thursday: 11AM - 3PM CST <br />
          Dec. 31 - Jan. 2: Closed
        </p>
      </div>
    </div>
  );
};
