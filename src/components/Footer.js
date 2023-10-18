import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">
            <strong>Get to Know Us</strong>
          </li>
          <li className="fListItem">About Us</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Press Releases</li>
          <li className="fListItem">E-commerce Science</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">
            <strong>Connect With Us</strong>{" "}
          </li>
          <li className="fListItem">Facebook </li>
          <li className="fListItem">Twitter </li>
          <li className="fListItem">Instagram</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">
            <strong>Products</strong>
          </li>
          <li className="fListItem">Unique places to service </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Products </li>
          <li className="fListItem">Office communities </li>
          <li className="fListItem">Seasonal and holiday Offer </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">
            <strong>Make Money With Us</strong>{" "}
          </li>
          <li className="fListItem">sell on E-commerce</li>
          <li className="fListItem">sell under E-commerce Accelerator </li>
          <li className="fListItem">Protect and Build Your Brand </li>
          <li className="fListItem">E-commerce Global Selling </li>
          <li className="fListItem">Become an Affiliate</li>
          <li className="fListItem">Advertise your Products</li>
          <li className="fListItem">E-commerce pay on Merchants</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">
            <strong>Let Us Help You</strong>
          </li>
          <li className="fListItem">COVID-19 and E-commerce</li>
          <li className="fListItem">Your Account</li>
          <li className="fListItem">Returns Center</li>
          <li className="fListItem">100% Purchase Protection</li>
          <li className="fListItem">Help</li>
        </ul>
      </div>
      <div className="fText">
        <b>Copyright © 2023 E_Commerce_Shopping.</b>
      </div>
    </div>
  );
};

export default Footer;
