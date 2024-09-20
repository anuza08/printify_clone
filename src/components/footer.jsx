import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFooterStyles } from "../styles/styles";
import { footerSections, socialIcons } from "../constants";

const Footer = () => {
  const styles = getFooterStyles();

  return (
    <footer style={styles.ctn}>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={styles.footerLogo}>Printify</h1>
        <p style={styles.textBelow}>Your go-to platform for print on demand</p>

        <div style={styles.iconDiv}>
          {socialIcons.map(({ icon, label }, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              style={{ color: "#ff4e88", fontSize: "30px" }}
              aria-label={label}
            />
          ))}
        </div>
      </div>

      <div style={styles.links}>
        {Object.entries(footerSections).map(([sectionKey, items]) => (
          <div key={sectionKey} style={styles.subLinks}>
            <h4 style={styles.heading}>
              {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
            </h4>
            <ul style={styles.listContainer}>
              {items.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.endFooter}>
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
