import "./styles/App.scss";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import TestimonialSection from "./components/TestimonialSection";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Backdrop from "./components/Backdrop";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <main>
      <AnimatePresence>
        {openMobileMenu && (
          <>
            <Backdrop key="backdrop" setOpenMobileMenu={setOpenMobileMenu} />
            <MobileMenu
              key="mobileMenu"
              setOpenMobileMenu={setOpenMobileMenu}
            />
          </>
        )}
      </AnimatePresence>

      <HeaderSection setOpenMobileMenu={setOpenMobileMenu} />
      <AboutSection />
      <FeaturesSection />
      <TestimonialSection />
      <FooterSection />

      <div className="floatingContactIcon">
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1.2 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          className="floatingIconPulse"
        />
        <svg
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V14C30 19.5228 25.5228 24 20 24H0V10Z"
            fill="#9C69E2"
          />
          <circle cx="9" cy="12" r="2" fill="white" />
          <circle cx="15" cy="12" r="2" fill="white" />
          <circle cx="21" cy="12" r="2" fill="white" />
          <path
            d="M10 23H0V25.4676C0 27.0222 1.69594 27.9824 3.02899 27.1826L10 23Z"
            fill="#9C69E2"
          />
        </svg>
      </div>
    </main>
  );
}

export default App;
