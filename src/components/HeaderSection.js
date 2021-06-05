import styles from "../styles/HeaderSection.module.scss";
import Button from "./Button";
import TopNavBar from "./TopNavBar";

export default function HeaderSection() {
  return (
    <header className={styles.header}>
      <TopNavBar />
      <div className={styles.headerTextAndHeroSection}>
        <div className={styles.headerTextContainer}>
          <h1>Save your data storage here.</h1>
          <p>
            DataWarehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <Button type="primary" action="Learn More" />
        </div>
      </div>
    </header>
  );
}
