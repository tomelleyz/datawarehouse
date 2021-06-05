import { motion } from "framer-motion";
import styles from "../styles/MobileMenu.module.scss";
import Button from "./Button";

export default function MobileMenu({ setOpenMobileMenu }) {
  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    close: {
      opacity: 0,
      scale: 0.975,
      transition: {
        when: "afterChilden",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const items = {
    open: { opacity: 1, y: 0 },
    close: { opacity: 0, y: 32 },
  };

  return (
    <motion.nav
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      className={styles.menuContainer}
    >
      <div className={styles.closeBtnContainer}>
        <span
          onClick={() => setOpenMobileMenu(false)}
          className={styles.closeBtn}
        >
          X
        </span>
      </div>
      <div className={styles.menuItemsContainer}>
        <motion.div variants={items} className={styles.menuItem}>
          About
        </motion.div>
        <motion.div variants={items} className={styles.menuItem}>
          Help
        </motion.div>
        <motion.div variants={items} className={styles.menuItem}>
          Features
        </motion.div>
        <motion.div variants={items} className={styles.menuItem}>
          Sign Up
        </motion.div>
        <motion.div variants={items} className={styles.menuItem}>
          <Button type="alternate" action="Request demo" />
        </motion.div>
      </div>
    </motion.nav>
  );
}
