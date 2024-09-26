import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Model3D from "./Model3D";

const HomePgaeSlider = () => {
  const navigae = useNavigate();
  const sliderContainerStyle = {
    width: "100%",
    margin: "auto",
    position: "relative",
  };

  const sliderItemsStyle = {
    height: "45vw",
    margin: "50px 0 0",
    position: "relative",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
  };

  const sliderItemStyle = {
    position: "absolute",
    width: "30%",
    height: "50%",
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    transition: "transform 1.4s cubic-bezier(0.19, 1, 0.22, 1)",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    marginTop: "55%",
    transition: "0.25s",
    transform: "scale(1.3)",
  };

  const [selectedItem, setSelectedItem] = useState(0);

  const sliderItems = [
    "https://4kwallpapers.com/images/walls/thumbs_2t/14974.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_2t/14974.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_2t/14974.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_2t/14974.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_2t/14974.jpg",
  ];

  const handleNext = () => {
    setSelectedItem(
      (prevSelectedItem) => (prevSelectedItem + 1) % sliderItems.length
    );
  };

  const handlePrev = () => {
    setSelectedItem(
      (prevSelectedItem) =>
        (prevSelectedItem - 1 + sliderItems.length) % sliderItems.length
    );
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const getTransformStyle = (index) => {
    const totalItems = sliderItems.length;
    const offset = (index - selectedItem + totalItems) % totalItems;

    if (offset === 0) {
      return {
        ...sliderItemStyle,
        zIndex: 2,
        transform: "scale(1.5) translateX(-40%) translate3d(0, 0, 0)",
      };
    } else if (offset === 1 || offset === totalItems - 1) {
      return {
        ...sliderItemStyle,
        zIndex: 1,
        transform: `scale(0.7) translateX(-50%) translate3d(${
          offset === 1 ? 240 : -240
        }%, -10%, 0)`,
      };
    } else if (offset === 2 || offset === totalItems - 2) {
      return {
        ...sliderItemStyle,
        zIndex: 0,
        transform: `scale(0.5) translateX(-50%) translate3d(${
          offset === 2 ? 180 : -180
        }%, -31%, 0)`,
      };
    }
    return sliderItemStyle;
  };

  const handelVist = () => {
    navigae("/details");
  };

  return (
    <div style={sliderContainerStyle}>
      <ul style={sliderItemsStyle}>
        {sliderItems.map((item, index) => (
          <div key={index}>
            <li
              style={{
                ...{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  alignItems: "center",
                },
                ...getTransformStyle(index),
              }}
            >
              <h5>planet</h5>
              <h1>EARTH</h1>
              <button onClick={handelVist}>Vist planet</button>
              <img style={imgStyle} src={item} alt={`Slider ${index}`} />
              <Model3D />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HomePgaeSlider;
