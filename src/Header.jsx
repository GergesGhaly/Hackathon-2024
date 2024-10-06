import { Link } from "react-router-dom";
import logo from "../src/assets/image/logo.png";
const Header = () => {

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        padding: "5px 20px",
        backgroundColor: "transparent",
        zIndex: 8,
        color: "#FCFFFF",
        gap: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80px",
          // width: "40px",
          height: "80px",
          cursor: "pointer",
        }}
      >
        <Link to="/">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/share">Share</Link>
        <Link to="/about">ِAbout</Link>
      </div>
    </div>
  );
};

export default Header;
