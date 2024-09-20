import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getNavbarStyles } from "../styles/styles";

const Navbar = () => {
  const isMobile = window.innerWidth <= 768;
  const styles = getNavbarStyles(isMobile);

  return (
    <div style={styles.navContainer}>
      <FontAwesomeIcon icon={faBars} size="2xl" style={styles.menuLogo} />
      <h1 style={styles.logoTxt}>Printify</h1>
      <div style={{ marginLeft: "12%" }}>
        <a href="#" style={styles.navLinkStyle}>
          Catalog
        </a>
        <a href="#" style={styles.navLinkStyle}>
          How it Works
        </a>
        <a href="#" style={styles.navLinkStyle}>
          Pricing
        </a>
        <a href="#" style={styles.navLinkStyle}>
          Blog
        </a>
        <a href="#" style={styles.navLinkStyle}>
          Services
        </a>
        <a href="#" style={styles.navLinkStyle}>
          Use Cases
        </a>
        <a href="#" style={styles.navLinkStyle}>
          Need Help?
        </a>
      </div>
      <button style={styles.btn}>My Store</button>
    </div>
  );
};

export default Navbar;
