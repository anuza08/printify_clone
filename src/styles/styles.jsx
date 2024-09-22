export const getNavbarStyles = () => ({
  navLinkContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "12%",
    flexWrap: "wrap",
    width: "100%",
  },
  navLinkStyle: {
    color: "gray",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
    padding: "10px",
    margin: "0 10px",
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
    height: "8vh",
    width: "100%",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    boxSizing: "border-box",
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

export const landingPageStyle = (screenWidth) => {
  const isMobile = screenWidth <= 768;

  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5vh 3%",
      width: "100%",
      boxSizing: "border-box",
      overflowX: "hidden", // Prevent horizontal overflow
    },
    textAndGifContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap", // Prevent content overflow
    },
    textContainer: {
      flex: 1,
      textAlign: isMobile ? "center" : "left",
    },
    heading: {
      color: "black",
      fontSize: isMobile ? "2rem" : "3.5rem",
      margin: 0,
    },
    mainTxt: {
      marginTop: isMobile ? "20px" : "50px",
      fontSize: "1.5rem",
      marginLeft: isMobile ? "0" : "20px",
    },
    ulStyle: {
      color: "gray",
      listStyleType: "none",
      padding: 0,
    },
    liTxt: { fontSize: isMobile ? "15px" : "20px" },
    btnContainer: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      margin: "20px",
      justifyContent: isMobile ? "center" : "flex-start",
      flexWrap: "wrap", // Ensure buttons wrap on smaller screens
    },
    btn: {
      margin: "10px",
      backgroundColor: "#FF4E88",
      color: "white",
      height: isMobile ? "4vh" : "8vh",
      border: "none",
      fontSize: isMobile ? "0.8rem" : "1.3rem",
      width: isMobile ? "15vh" : "18vh",
      fontWeight: "bold",
      borderRadius: "5px",
      cursor: "pointer",
    },
    btn2: {
      margin: "10px",
      backgroundColor: "white",
      color: "#FF4E88",
      height: isMobile ? "4vh" : "8vh",
      border: "2px solid #FF4E88",
      borderRadius: "5px",
      fontSize: isMobile ? "0.8rem" : "1.3rem",
      width: isMobile ? "15vh" : "18vh",
      fontWeight: "bold",
      cursor: "pointer",
    },
    subTxt: {
      fontWeight: "bold",
      color: "#FF4E88",
      fontSize: isMobile ? "14px" : "18px",
    },
    gifStyle: {
      flex: 1,
      width: isMobile ? "80%" : "50%",
      height: "auto",
      margin: isMobile ? "20px 0" : "5px",
    },
  };
};

export const getInfoStyles = (screenWidth) => {
  const isMobile = screenWidth <= 768;

  return {
    container: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      padding: "2vh 2%",
      justifyContent: "center",
    },
    imgSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      width: isMobile ? "100%" : "30%",
      textAlign: "center",
      marginBottom: "20px",
    },
    imgStyle: {
      width: isMobile ? "80px" : "100px",
    },
  };
};

export const getReviewStyles = (screenWidth) => {
  const isMobile = screenWidth <= 768;

  return {
    ctn: {
      padding: isMobile ? "3vh 3%" : "5vh 5%",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    txtContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: isMobile ? "3vh" : "5vh",
    },
    mainTxt: {
      color: "black",
      fontSize: isMobile ? "2rem" : "2.5rem",
      margin: 0,
    },
    subTxt: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "gray",
      maxWidth: "800px",
    },
    imgStyle: {
      width: "100%",
      height: "auto",
      maxHeight: isMobile ? "200px" : "300px",
      objectFit: "cover",
    },
  };
};

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
