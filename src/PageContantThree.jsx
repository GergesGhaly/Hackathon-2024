const PageContantThree = () => {
  // Function to scroll the page up by 100vh
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    window.scrollTo({
      top: 0, // Scroll the page to the top of the viewport (100vh to the top)
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div
      id="section-3"
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        color: "#FCFFFF",
        padding: "20px",
        // scrollSnapAlign: "start"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          width: "50%",
          padding: "5px 50px",
          color: "white",
          zIndex: 999999999,
        }}
      >
        <p
          style={{
            padding: "15px 0",
            lineHeight: "1.5",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
          reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
          reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
          reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
        </p>
        <a
          href="#"
          onClick={scrollToTop} // Call the scroll function to the top when clicked
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Back To Top
        </a>
      </div>
    </div>
  );
};

export default PageContantThree;
