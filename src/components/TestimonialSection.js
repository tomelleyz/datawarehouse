import styles from "../styles/TestimonialSection.module.scss";
import johnFangImg from "../assets/images/john_fang_rounded_img.jpg";
import jenyDoeImg from "../assets/images/jeny_doe_rounded_img.jpg";
import williamWongImg from "../assets/images/william_wong_rounded_img.jpg";

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialSectionContentBox}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.testimonialsGroupBox}>
          <div className={styles.testimonialCard}>
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
          </div>
          <div className={`${styles.testimonialCard} ${styles.whiteOverlay}`}>
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
          </div>
          <div className={styles.testimonialCard}>
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
          </div>
        </div>
        <div className={styles.indicatorsAndNavButtonsBox}>
          <div className={styles.indicatorsBox}>
            <span className={styles.indicator} data-indicator="active"></span>
            <span className={styles.indicator}></span>
            <span className={styles.indicator}></span>
          </div>
          <div className={styles.navButtonsBox}>
            <span className={styles.prevBtn}>
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
            <span className={styles.nextBtn}>
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
