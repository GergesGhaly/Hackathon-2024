const PageContantTwo = () => {
  // Function to scroll the page up by 100vh
  const scrollToNextSection = (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.scrollBy({
      top: window.innerHeight, // التمرير لأسفل بمقدار ارتفاع العرض (100vh)
      behavior: "smooth", // التمرير بسلاسة
    });
  };
  
  return (
    <div
      id="section-2"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        color: "#FCFFFF",
        // scrollSnapAlign: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "5px 50px",
          height: "100%",
          width: "100%",
          color: "white",
          zIndex: 50,
          gap: "30px",
        }}
      >
        <h6
          style={{
            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          Hello World From Earth Planet
        </h6>
        <p
          style={{
            padding: "10px 0",
            lineHeight: "2",
            fontSize: "17px",
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
          onClick={scrollToNextSection} // Call the scroll function to the top when clicked
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          To Next
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default PageContantTwo;
