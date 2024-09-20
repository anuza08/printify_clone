import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sideBarStyle } from "../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ isOpen, close }) => {
  const styles = sideBarStyle();
  return (
    <>
      {isOpen && <div style={styles.backdrop} onClick={close}></div>}
      <Sidebar
        toggled={isOpen}
        breakPoint="md"
        transitionDuration={100}
        style={styles.sidebar}
      >
        <Menu
          menuItemStyles={{
            button: {
              fontSize: "20px",
              padding: "10px 20px",
              color: "#333",
              fontWeight: "bold",
            },
          }}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#ff4e88", cursor: "pointer" }}
              onClick={close}
            />
          </div>

          <h2 style={{ textAlign: "center" }}>Menu</h2>
          <hr />
          <MenuItem> Catalog </MenuItem>
          <SubMenu label="How it works">
            <MenuItem style={styles.menuItem}>How Printify Works</MenuItem>

            <MenuItem style={styles.menuItem}> Print on demand </MenuItem>
          </SubMenu>
          <MenuItem> Pricing </MenuItem>
          <MenuItem> Blog </MenuItem>
          <SubMenu label="Services">
            <MenuItem style={styles.menuItem}>Prinitfy studio</MenuItem>
            <MenuItem style={styles.menuItem}>Order in bluk</MenuItem>
          </SubMenu>
          <SubMenu label="Use-cases">
            <MenuItem style={styles.menuItem}>Merch for fans</MenuItem>
            <MenuItem style={styles.menuItem}>Grow your store</MenuItem>
          </SubMenu>
          <SubMenu label="Need help?">
            <MenuItem style={styles.menuItem}>Help centre</MenuItem>
            <MenuItem style={styles.menuItem}>Contact</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
