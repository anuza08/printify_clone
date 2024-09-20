import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { getFooterStyles } from "../styles/styles";

const Footer = () => {
  const { heading, headingsContainer, listContainer, listItem, textBelow } =
    getFooterStyles();

  return (
    <footer style={{ backgroundColor: "#f5f5f5", padding: "40px 10%" }}>
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#FF4E88", margin: "0" }}>Printify</h1>
        <p style={textBelow}>Your go-to platform for print on demand</p>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ff4e88", fontSize: "30px" }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ff4e88", fontSize: "30px" }}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "#ff4e88", fontSize: "30px" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#ff4e88", fontSize: "30px" }}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#ff4e88", fontSize: "30px" }}
          />
          <FontAwesomeIcon
            icon={faTiktok}
            style={{ color: "#ff4e88", fontSize: "30px" }}
          />
        </div>
      </div>

      <div style={headingsContainer}>
        <div>
          <h4 style={heading}>Integrations</h4>
          <ul style={listContainer}>
            <li style={listItem}>Shopify</li>
            <li style={listItem}>Etsy</li>
            <li style={listItem}>eBay</li>
            <li style={listItem}>Amazon</li>
            <li style={listItem}>TikTok Shop</li>
            <li style={listItem}>PrestaShop</li>
            <li style={listItem}>BigCommerce</li>
            <li style={listItem}>Wix</li>
            <li style={listItem}>WooCommerce</li>
            <li style={listItem}>Squarespace</li>
            <li style={listItem}>Printify API</li>
            <li style={listItem}>Printify Pop-Up Store</li>
            <li style={listItem}>Shutterstock</li>
          </ul>
        </div>

        <div>
          <h4 style={heading}>Discover</h4>
          <ul style={listContainer}>
            <li style={listItem}>Blog</li>
            <li style={listItem}>Guides</li>
            <li style={listItem}>Products</li>
            <li style={listItem}>Etsy print-on-demand</li>
            <li style={listItem}>Shopify print-on-demand</li>
            <li style={listItem}>Woocommerce print-on-demand</li>
            <li style={listItem}>Wix print-on-demand</li>
            <li style={listItem}>Squarespace print-on-demand</li>
            <li style={listItem}>Make Your Own Shirt</li>
            <li style={listItem}>Brands</li>
            <li style={listItem}>Pricing</li>
            <li style={listItem}>Shipping Rates</li>
            <li style={listItem}>Mockup Generator</li>
          </ul>
        </div>

        <div>
          <h4 style={heading}>Start Selling</h4>
          <ul style={listContainer}>
            <li style={listItem}>Custom T-shirts</li>
            <li style={listItem}>Custom Hoodies</li>
            <li style={listItem}>Custom Mugs</li>
            <li style={listItem}>Custom Socks</li>
            <li style={listItem}>Custom Backpacks</li>
            <li style={listItem}>Custom Branding</li>
            <li style={listItem}>Sell on Etsy</li>
            <li style={listItem}>Sell on Social Media</li>
            <li style={listItem}>Free T-shirt Designs</li>
            <li style={listItem}>Custom Products</li>
            <li style={listItem}>Custom All-Over-Print Hoodies</li>
            <li style={listItem}>Start a Clothing Line</li>
            <li style={listItem}>Start POD Business</li>
            <li style={listItem}>Bulk Orders</li>
            <li style={listItem}>Transferring To Printify</li>
          </ul>
        </div>

        <div>
          <h4 style={heading}>Printify</h4>
          <ul style={listContainer}>
            <li style={listItem}>Print on Demand</li>
            <li style={listItem}>Print Providers</li>
            <li style={listItem}>Experts Program</li>
            <li style={listItem}>Printify Express Delivery</li>
            <li style={listItem}>Become a Partner</li>
            <li style={listItem}>About</li>
            <li style={listItem}>Printify Quality Promise</li>
            <li style={listItem}>Jobs</li>
            <li style={listItem}>Webinars</li>
            <li style={listItem}>Printing Profits Podcast</li>
            <li style={listItem}>Contact Us</li>
            <li style={listItem}>Affiliate</li>
            <li style={listItem}>Contact Sales</li>
            <li style={listItem}>POD Glossary</li>
            <li style={listItem}>Network Fulfillment Status</li>
            <li style={listItem}>Merchant Protection</li>
            <li style={listItem}>Security</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <p>© 2024 Printify, Inc. All rights reserved.</p>
        <p>
          Intellectual Property Policy | Terms of Service | Privacy Policy |
          Security | Sitemap
        </p>
      </div>
    </footer>
  );
};

export default Footer;
