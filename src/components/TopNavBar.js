import styles from "../styles/TopNavBar.module.scss";
import logo from "../assets/icons/datawarehouse-logo.svg";
import Button from "./Button";

export default function TopNavBar({ setOpenMobileMenu }) {
  return (
    <div className={styles.topNavBar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="DataWarehouse logo" />
      </div>
      <div
        onClick={() => setOpenMobileMenu(true)}
        className={styles.openMobileMenuBtn}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={styles.menu}>
        <div className={styles.menuItem}>About</div>
        <div className={styles.menuItem}>Help</div>
        <div className={styles.menuItem}>Features</div>
        <div className={styles.menuItem}>Sign Up</div>
      </nav>
      <div className={styles.topNavBarCTA}>
        <Button type="alternate" action="Request Demo" />
      </div>
    </div>
  );
}
