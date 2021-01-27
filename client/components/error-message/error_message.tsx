import styles from "./styles.module.scss";

const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <img src="/error.svg" alt="" className={styles.error_illustration} />
      <span className={styles.error_message}>¡Hubo un error!</span>
    </div>
  );
};

export default ErrorMessage;
