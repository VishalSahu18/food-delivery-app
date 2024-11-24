import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et totam
            sed eum sit dolore praesentium recusandae quaerat nostrum culpa esse
            perspiciatis quasi accusantium eius animi iusto, a nobis? Delectus,
            perspiciatis? Delectus, illo odio? Enim, nostrum dolorem laboriosam
            numquam incidunt ad aliquam neque! Veritatis ipsa illum accusantium
            consectetur, nam aliquam cupiditate.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright2024 @Tomato.com All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
