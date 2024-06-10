import styles from "./buttonSubmit.module.css";

export const ButtonSubmit = ({ label }) => {
  return <button className={styles.submitButton}>{label}</button>;
};
