import "./Footer.css";
import { useState } from "react";
import { RightArrow, Phone, Email } from "../../icons";

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
          <a href="/pages/the-citizenry-flagship">Visit Us →</a>
        </div>
      </div>
      <div className="right-panel">
        <div>
          <div className="section-header">Get on the List</div>
          <p>Sign up for first dibs on new collections and much more.</p>
          <div className="email-input">
            <input
              placeholder="Enter email address"
              value={emailInputValue}
              onChange={(e) => setEmailInputValue(e.target.value)}
            />
            <a href={"/"}>
              <RightArrow />
            </a>
          </div>
        </div>
        <div className="quick-links">
          <div className="section">
            <div className="section-header">Get in Touch</div>
            <div className="section-body">
              <div>
                Monday - Thursday: 11AM - 3PM CST <br />
                Dec. 31 - Jan. 2: Closed
              </div>
              <div className="contact-method">
                <a href="tel:866-356-4284">
                  <Phone /> 1.866.356.4284
                </a>
              </div>
              <div className="contact-method">
                <a href="mailto:assistant@the-citizenry.com">
                  <Email /> assistant@the-citizenry.com
                </a>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-header">Help</div>
            <div className="section-body">
              <div>Shipping & Returns</div>
              <div>Gift Cards</div>
              <div>Exchanges</div>
              <div>Care & Assembly</div>
            </div>
          </div>
          <div className="section">
            <div className="section-header">About</div>
            <div className="section-body">
              <div>Our Story</div>
              <div>Artisan Partners</div>
              <div>Press</div>
              <div>We're Hiring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
