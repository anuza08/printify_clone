export const getNavbarStyles = () => ({
  navLinkStyle: {
    color: "gray",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
    padding: "10px",
  },

  btn: {
    backgroundColor: "#FF4E88",
    color: "white",
    border: "none",
    height: "5vh",
    fontWeight: "bold",
    borderRadius: "5px",
    margin: "0px 150px",
  },
  navContainer: {
    height: "5vh",
    width: "100%",
    color: "white",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  logoTxt: {
    color: "#FF4E88",
    display: "flex",
    textAlign: "center",
    marginLeft: "10px",
  },
  menuLogo:{ color: "#ff4e88", margin: "0px 10px" }
});

export const getInfoStyles = () => ({});

export const getFooterStyles = () => ({
  headingsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    marginTop: "40px",
    textAlign: "left",
  },
  heading: {
    color: "#333",
    marginBottom: "10px",
    fontSize: "18px",
  },
  listContainer: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    marginBottom: "8px",
    color: "#555",
    fontSize: "14px",
  },
  textBelow: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#555",
  },
});
