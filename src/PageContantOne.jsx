const PageContantOne = () => {
  // Function to scroll the page down by 100vh
  const scrollToNextSection = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    window.scrollTo({
      top: window.innerHeight, // Scroll the page down by the height of the viewport (100vh)
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div
      id="section-1"
      style={{
        position: "relative",
        width: "100%",
        height: `calc(100vh - 70px)`,
        overflow: "hidden",
        color: "#FCFFFF",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 50,
        }}
      >
        <h1
          style={{
            fontSize: "130px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Earth Planet
        </h1>
        <h6
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Hello World From Earth Planet
        </h6>
        <p
          style={{
            padding: "15px 0",
            lineHeight: "1.5",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          reprehenderit cumque, modi voluptates earum doloremque aliquid saepe
          ab necessitatibus architecto similique consequuntur laudantium
        </p>
        <a
          href="#"
          onClick={scrollToNextSection} // Call the scroll function when clicked
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          Planet Details
        </a>
      </div>
    </div>
  );
};
export default PageContantOne;
