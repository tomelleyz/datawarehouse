import styles from "../styles/TestimonialSection.module.scss";
import johnFangImg from "../assets/images/john_fang_rounded_img.jpg";
import jenyDoeImg from "../assets/images/jeny_doe_rounded_img.jpg";
import williamWongImg from "../assets/images/william_wong_rounded_img.jpg";
import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

export default function TestimonialSection() {
  const [activeItem, setActiveItem] = useState(1);

  const handleNextBtnClick = () => {
    if (activeItem === 3) {
      setActiveItem(1);
    } else {
      setActiveItem(activeItem + 1);
    }
  };

  const handlePrevBtnClick = () => {
    if (activeItem === 1) {
      setActiveItem(3);
    } else {
      setActiveItem(activeItem - 1);
    }
  };

  const handleFirstItemFlexOrder = () => {
    if (activeItem === 1) {
      return "-1";
    } else if (activeItem === 2) {
      return "2";
    } else if (activeItem === 3) {
      return "2";
    } else {
      return;
    }
  };

  const handleSecondItemFlexOrder = () => {
    if (activeItem === 1) {
      return "3";
    } else if (activeItem === 2) {
      return "-1";
    } else if (activeItem === 3) {
      return "3";
    } else {
      return;
    }
  };

  const handleThirdItemFlexOrder = () => {
    if (activeItem === 1) {
      return "4";
    } else if (activeItem === 2) {
      return "1";
    } else if (activeItem === 3) {
      return "-1";
    } else {
      return;
    }
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialSectionContentBox}>
        <h2 className={styles.heading}>Testimonials</h2>
        <AnimateSharedLayout>
          <motion.div className={styles.testimonialsGroupBox} layout>
            <motion.div
              className={styles.testimonialCard}
              data-active={activeItem === 1 && "true"}
              layout
              style={{
                borderRadius: "1.25rem",
                boxShadow: "0px 20px 0px rgba(156, 105, 226, 0.3)",
                order: `${handleFirstItemFlexOrder()}`,
              }}
            >
              <img
                src={johnFangImg}
                alt="John Fang"
                className={styles.customerImg}
              />
              <div>
                <p className={styles.name}>John Fang</p>
                <p className={styles.role}>Software Developer</p>
                <p className={styles.remarks}>
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </motion.div>
            <motion.div
              className={styles.testimonialCard}
              data-active={activeItem === 2 && "true"}
              layout
              style={{
                borderRadius: "1.25rem",
                boxShadow: "0px 20px 0px rgba(156, 105, 226, 0.3)",
                order: `${handleSecondItemFlexOrder()}`,
              }}
            >
              <img
                src={jenyDoeImg}
                alt="Jeny Doe"
                className={styles.customerImg}
              />
              <div>
                <p className={styles.name}>Jeny Doe</p>
                <p className={styles.role}>UX Engineer</p>
                <p className={styles.remarks}>
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </motion.div>
            <motion.div
              className={styles.testimonialCard}
              data-active={activeItem === 3 && "true"}
              layout
              style={{
                borderRadius: "1.25rem",
                boxShadow: "0px 20px 0px rgba(156, 105, 226, 0.3)",
                order: `${handleThirdItemFlexOrder()}`,
              }}
            >
              <img
                src={williamWongImg}
                alt="John Fang"
                className={styles.customerImg}
              />
              <div>
                <p className={styles.name}>William Wong</p>
                <p className={styles.role}>Data Scientist</p>
                <p className={styles.remarks}>
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimateSharedLayout>

        <div className={styles.indicatorsAndNavButtonsBox}>
          <div className={styles.indicatorsBox}>
            <motion.span
              animate={{
                backgroundColor: activeItem === 1 ? "#f063b8" : "#ffffff",
                scale: activeItem === 1 ? 2 : 1,
              }}
              className={styles.indicator}
            ></motion.span>
            <motion.span
              animate={{
                backgroundColor: activeItem === 2 ? "#f063b8" : "#ffffff",
                scale: activeItem === 2 ? 2 : 1,
              }}
              className={styles.indicator}
            ></motion.span>
            <motion.span
              animate={{
                backgroundColor: activeItem === 3 ? "#f063b8" : "#ffffff",
                scale: activeItem === 3 ? 2 : 1,
              }}
              className={styles.indicator}
            ></motion.span>
          </div>
          <div className={styles.navButtonsBox}>
            <span onClick={handlePrevBtnClick} className={styles.prevBtn}>
              <svg
                width="42"
                height="16"
                viewBox="0 0 42 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 8L7 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.999998 8L41 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span onClick={handleNextBtnClick} className={styles.nextBtn}>
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M15 15L21 8L15 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8H1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
