// STYLES
import styles from "../components/Error/Error.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Ooops!</h2>
      <h3>Page Not Found...</h3>
    </div>
  );
}
