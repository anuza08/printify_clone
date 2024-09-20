import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getNavbarStyles } from "../styles/styles";
import SideBar from "./sideBar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1204);
  const styles = getNavbarStyles(isMobile);
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar((prev) => !prev);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 || window.innerWidth <= 1204);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          ...styles.navContainer,
          display: "flex",
          alignItems: "center",
          filter: sideBar ? "blur(5px)" : "none",
          justifyContent: isMobile ? "space-between" : "flex-start",
        }}
      >
        {isMobile ? (
          <>
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              style={styles.menuLogo}
              onClick={handleSideBar}
            />
            <h1 style={styles.logoTxt}>Printify</h1>
          </>
        ) : (
          <>
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
          </>
        )}
        <button style={{ ...styles.btn, margin: isMobile ? "0 20%" : "0 10%" }}>
          My Store
        </button>
      </div>

      {sideBar && <SideBar isOpen={sideBar} close={closeSideBar} />}
    </>
  );
};

export default Navbar;
