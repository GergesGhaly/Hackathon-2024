import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import wall1 from "../src/assets/wall1.jpg";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PlanetDetails from "./PlanetDetails";
import NotAvailable from "./NotAvailable";
import Intro from "./Intro";
import "./App.css";
import TransitionPage from "./TransitionPage";
import { AnimatePresence } from "framer-motion";
import PageContantFour from "./PageContantFour";

function App() {
  const [showIntro, setShowIntro] = useState(false); // Controls showing or hiding the Intro component
  // const [isLoading, setIsLoading] = useState(true); // Tracks loading state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // حالة لتحديد ما إذا كان الفيديو قيد التشغيل
  const location = useLocation();
  useEffect(() => {
    if (isVideoPlaying) {
      const timerd = setTimeout(() => {
        setShowIntro(true);
      }, 16000); // ظهور الرسالة بعد 10 ثواني من بدء الفيديو (تعديل حسب طول الفيديو)

      return () => clearTimeout(timerd);
    }
  }, [setShowIntro, isVideoPlaying]);
  return (
    <>
      {!showIntro ? (
        <Intro
          setShowIntro={setShowIntro}
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />
      ) : (
        <div
          className="Home"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100%",
            boxShadow: "inset 0px 0px 100px 50px rgba(0, 0, 0, 0.8)",
            overflow: "hidden",
            // zIndex: 99999999999,
          }}
        >
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/4"
                element={
                  <TransitionPage>
                    <PageContantFour />
                  </TransitionPage>
                }
              />
              <Route
                path="/"
                element={
                  <TransitionPage>
                    <HomePage />
                  </TransitionPage>
                }
              />
              <Route
                path="/details"
                element={
                  <TransitionPage>
                    <PlanetDetails />
                  </TransitionPage>
                }
              />
              <Route
                path="/about"
                element={
                  <TransitionPage>
                    <AboutPage />
                  </TransitionPage>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      )}
      <NotAvailable />
    </>
  );
}

export default App;
