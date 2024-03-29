import { container } from "assets/jss/material-kit-react.jsx";

const successStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    textAlign: "center"
  },
  subtitle: {
    fontSize: "1.913rem",
    //maxWidth: "500px",
    margin: "5px 0 0",
    textAlign: "center"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center"
  }
};

export default successStyle;