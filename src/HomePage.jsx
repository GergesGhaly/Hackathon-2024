import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { OrbitControls } from "@react-three/drei";
import Model3D from "./Model3D";
import { useNavigate } from "react-router-dom";
import HomePgaeSlider from "./HomePgaeSlider";
import TransitionPage from "./TransitionPage";

const ScrollSwiper = () => {
  const swiper = useSwiper();

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [swiper]);

  return null; // لا تحتاج لإعادة أي مكون
};

const HomePage = () => {
  const navigae = useNavigate();

  const handelDetails = () => {
    navigae("/details");
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [planetData, setPlanetData] = useState([]);

  // إنشاء البيانات الخاصة بكل كوكب بناءً على موضعه في الدائرة
  useEffect(() => {
    const numPlanets = 5; // عدد الكواكب
    const radius = 200; // نصف قطر الدائرة
    const angleStep = (2 * Math.PI) / numPlanets; // زاوية كل كوكب

    const planets = [...Array(numPlanets)].map((_, index) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle); // حساب الإحداثيات السينية
      const y = radius * Math.sin(angle); // حساب الإحداثيات الصادية
      const scale = 1.5 + Math.sin(angle); // مقياس العنصر بناءً على موقعه

      return { x, y, scale };
    });

    setPlanetData(planets);
  }, []);

  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    onSlideChange: (swiper) => {
      setActiveIndex(swiper.activeIndex);
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/857/643/582/space-universe-stars-wallpaper-preview.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HomePgaeSlider />
      {/* <Swiper {...params} className="mySwiper">
        <ScrollSwiper />
        {planetData.map((_, index) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                zIndex: "999999",
              }}
            >
              <button onClick={handelDetails}>viste </button>
            </div>
            <SwiperSlide
              key={index}
              style={{
                width: "100%",
                height: "100%",
                // transform: index === activeIndex ? "scale(2)" : "scale(1)",
                //   transform: index === activeIndex ? "(3)" : "scale(1)",
                //   zIndex: index === activeIndex ? "99" : "1",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <Model3D />
            </SwiperSlide>
          </>
        ))}
      </Swiper> */}
    </div>
  );
};

export default HomePage;
// export default TransitionPage(HomePage);
