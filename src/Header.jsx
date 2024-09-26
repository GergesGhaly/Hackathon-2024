import { Link } from "react-router-dom";

const Header = () => {
  const scrollToNextSection = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    window.scrollTo({
      top: window.innerHeight, // Scroll the page down by the height of the screen (100vh)
      behavior: "smooth", // Smooth scrolling
    });
  };
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    window.scrollTo({
      top: 0, // Scroll the page to the top (100vh upwards)
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "70px",
        padding: "5px 20px",
        backgroundColor: "transparent",
        zIndex: 8,
        color: "#FCFFFF",
        gap: "15px",
      }}
    >
      <Link to="/about">?</Link>
    </div>
  );
};

export default Header;
