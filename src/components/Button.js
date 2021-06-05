import styles from "../styles/Button.module.scss";

export default function Button({ type, action }) {
  const buttonType = type;
  let buttonClass;

  if (buttonType === "primary") {
    buttonClass = styles.btnPrimary;
  } else if (buttonType === "secondary") {
    buttonClass = styles.btnSecondary;
  } else if (buttonType === "alternate") {
    buttonClass = styles.btnAlternate;
  } else if (buttonType === "plain") {
    buttonClass = styles.btnPlain;
  } else {
    buttonClass = styles.btnPrimary;
  }

  return (
    <button className={`${styles.btn} ${buttonClass}`}>
      {action}{" "}
      {type === "alternate" || type === "plain" ? (
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2842 15.0006L21.2842 8.00061L15.2842 1.00061"
            stroke="#9C69E2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.2842 8.00061H1.28418"
            stroke="#9C69E2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </button>
  );
}
