import styles from "../styles/FooterSection.module.scss";
import Button from "./Button";
import logo from "../assets/icons/datawarehouse-logo.svg";
import facebookIcon from "../assets/icons/facebook_icon.svg";
import twitterIcon from "../assets/icons/twitter_icon.svg";
import instagramIcon from "../assets/icons/instagram_icon.svg";

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.tryFreeSectionAndCTAButtons}>
        <div className={styles.tryFreeTextSection}>
          <h2>Try for free!</h2>
          <p>Get limited 1 week free to try out features.</p>
        </div>
        <div className={styles.footerCTAButtonsContainer}>
          <Button type="secondary" action="Learn More" />
          <Button type="alternate" action="Request Demo" />
        </div>
      </div>

      <div className={styles.footerLinksContainer}>
        <div className={styles.footerLogoAndContactInfoBox}>
          <div className={styles.footerLogoBox}>
            <img src={logo} alt="DataWarehouse logo" />
            <span>DataWarehouse</span>
          </div>
          <div className={styles.footerAddress}>
            <p>
              Warehouse Society, 234 <br /> Bahagia Ave Street PRBW 29281
            </p>
          </div>
          <div>info@warehouse.project</div>
          <div>1-232-3434</div>
        </div>
        <div className={styles.singleFooterLinksBox}>
          <h5>About</h5>
          <p>Profile</p>
          <p>Features</p>
          <p>Careers</p>
          <p>DW News</p>
        </div>
        <div className={styles.singleFooterLinksBox}>
          <h5>Help</h5>
          <p>Support</p>
          <p>Sign Up</p>
          <p>Guide</p>
          <p>Reports</p>
          <p>Q&amp;A</p>
        </div>
        <div className={styles.singleFooterLinksBox}>
          <h5>Social Media</h5>
          <div className={styles.socialMediaLinksGroupBox}>
            <div className={styles.singleSocialMediaLink}>
              <img src={facebookIcon} alt="facebook icon" />
            </div>
            <div className={styles.singleSocialMediaLink}>
              <img src={twitterIcon} alt="twitter icon" />
            </div>
            <div className={styles.singleSocialMediaLink}>
              <img src={instagramIcon} alt="instagram icon" />
            </div>
          </div>
        </div>
      </div>

      <p className={styles.copyrightText}>
        &copy; DataWarehouse. All rights reserved.
      </p>
    </footer>
  );
}
