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
    padding: "5px 10px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "5px",
    width: "100px",
    transition: "background-color 0.3s ease",
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
    marginLeft: "15px",
  },

  menuLogo: {
    color: "#ff4e88",
    margin: "0px 10px",
  },
});

export const landingPageStyle = () => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5vh 3%",
    width: "100%",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  mainTxt: {
    marginTop: "50px",
    fontSize: "1.5rem",
    height: "auto",
    width: "auto",
  },
  btn: {
    margin: "10px",
    backgroundColor: "#FF4E88",
    color: "white",
    height: "8vh",
    border: "none",
    fontSize: "1.3rem",
    width: "18vh",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
  },
  btn2: {
    margin: "10px",
    backgroundColor: "white",
    color: "#FF4E88",
    height: "8vh",
    border: "2px solid #FF4E88",
    borderColor: "#FF4E88",
    borderRadius: "5px",
    width: "18vh",
    fontWeight: "bold",
    fontSize: "1.3rem",
    transition: "background-color 0.3s, color 0.3s",
    cursor: "pointer",
  },
  subTxt: { fontWeight: "bold", color: "#FF4E88", fontSize: "18px" },
  gifStyle: { width: "40%", height: "auto", margin: "5px" },
});

export const getInfoStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: "2vh 2%",
    boxSizing: "border-box",
    margin: 0,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  imgSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
    width: "30%",
    textAlign: "center",
    padding: "1%",
  },
  imgStyle: {
    width: "100px",
    height: "auto",
    gap: "20px",
  },
  txt: {
    margin: 0,
    color: "#FF4E88",
    textAlign: "center",
    fontSize: "1rem",
  },
  subTxt: {
    margin: 0,
    textAlign: "center",
    color: "gray",
  },
});

export const getReviewStyles = () => ({
  ctn: { padding: "5vh 5%", maxWidth: "1200px", margin: "0 auto" },
  txtContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "5vh",
  },
  mainTxt: { color: "black", fontSize: "2.5rem", margin: 0 },
  subTxt: { fontSize: "1.2rem", color: "gray", maxWidth: "800px" },
  imgStyle: {
    width: "100%",
    height: "auto",
    maxHeight: "300px",
    objectFit: "cover",
  },
  reviewTxt: { fontSize: "1.5rem", margin: "10px 0" },
  userName: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FF4E88",
  },
});

export const getFooterStyles = () => ({
  ctn: {
    backgroundColor: "#f5f5f5",
    padding: "40px 5%",
    textAlign: "center",
  },
  footerLogo: { color: "#FF4E88", margin: "0" },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  subLinks: { flex: "1 1 200px", minWidth: "150px", margin: "10px 0" },
  endFooter: { marginTop: "20px", fontSize: "14px", color: "#666" },
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

export const sideBarStyle = () => ({
  sidebar: {
    position: "fixed",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: "white",
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    zIndex: 999,
  },
  menuItem: { fontSize: "18px", fontWeight: "normal" },
});
