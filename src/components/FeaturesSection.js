import styles from "../styles/FeaturesSection.module.scss";
import FeatureCard from "./FeatureCard";
import searchDataImg from "../assets/images/search_data_img.png";
import hrsAccessImg from "../assets/images/24hrs_access_img.png";
import printOutImg from "../assets/images/print_out_img.png";
import securityCodeImg from "../assets/images/security_code_img.png";

export default function FeaturesSection() {
  const features = [
    {
      title: "Search Data",
      img: searchDataImg,
      description:
        "Don’t worry if your data is very large, the DataWarehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
      bgColor: "#68C9BA",
    },
    {
      title: "24 Hours Access",
      img: hrsAccessImg,
      description:
        "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
      bgColor: "#9C69E2",
    },
    {
      title: "Print Out",
      img: printOutImg,
      description:
        "Print Out service gives you convenience if someday you need to print data, just edit it all and just print it.",
      bgColor: "#F063B8",
    },
    {
      title: "Security Code",
      img: securityCodeImg,
      description:
        "Data Security is one of our best facilities. Allows for your files to be safer. The files can be secured with a code or password you created, so only you can open it.",
      bgColor: "#2D9CDB",
    },
  ];
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresSectionHeading}>
        <h2>Features</h2>
        <p>
          Some of the features and advantages that we provide for those of you
          who store data in this DataWarehouse.
        </p>
      </div>
      <div className={styles.featureCardGroupContainer}>
        {features.map((feature) => (
          <div
            key={feature.title}
            className={styles.singleFeatureCardContainer}
          >
            <FeatureCard
              title={feature.title}
              img={feature.img}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
