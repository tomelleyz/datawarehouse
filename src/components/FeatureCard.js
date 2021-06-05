import styles from "../styles/FeatureCard.module.scss";
import Button from "./Button";

export default function FeatureCard({ img, title, description, bgColor }) {
  return (
    <div className={styles.featureCard}>
      <div
        className={styles.trapezoidShape}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div
          className={styles.trapezoidShapeEqualizer}
          style={{ backgroundColor: `${bgColor}` }}
        ></div>
      </div>
      <div className={styles.featureCardImgContainer}>
        <img src={img} alt="Search Data" />
      </div>
      <div className={styles.featureCardTextContainer}>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button type="plain" action="Learn more" />
      </div>
    </div>
  );
}
