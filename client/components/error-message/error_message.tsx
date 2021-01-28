import styles from "./styles.module.scss";

const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <img src="/error.svg" alt="" className={styles.error_illustration} />
      <span className={styles.error_message}>{text}</span>
    </div>
  );
};

export default ErrorMessage;
