import styles from "../styles/AboutSection.module.scss";
import aboutSectionImg from "../assets/images/about-section-img.png";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutSectionCard}>
        <div className={styles.aboutSectionCardImgContainer}>
          <img src={aboutSectionImg} alt="" />
        </div>
        <div className={styles.aboutSectionCardTextContainer}>
          <h2>We are a high-level data storage bank</h2>
          <p>
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this DataWarehouse.
          </p>
        </div>
      </div>
    </section>
  );
}
