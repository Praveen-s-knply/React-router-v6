// styles
import styles from "./IncomeGraph.module.css";
import "../Graph/Graph.css";

export default function IncomeGraph() {
  return (
    <>
      <div className={styles.graphMainContainer}>
        <div className={styles.yearStats}>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h100}></div>
            <p className={styles.month}>Jan</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h50}></div>
            <p className={styles.month}>Feb</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h75}></div>
            <p className={styles.month}>Mar</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h25}></div>
            <p className={styles.month}>Apr</p>
          </div>
          <div className={styles.monthGroup + " " + styles.selected}>
            <div className={styles.bar + " " + styles.h100}></div>
            <p className={styles.month}>May</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h50}></div>
            <p className={styles.month}>Jun</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h75}></div>
            <p className={styles.month}>Jul</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h25}></div>
            <p className={styles.month}>Aug</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h50}></div>
            <p className={styles.month}>Sep</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h75}></div>
            <p className={styles.month}>Oct</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h25}></div>
            <p className={styles.month}>Nov</p>
          </div>
          <div className={styles.monthGroup}>
            <div className={styles.bar + " " + styles.h100}></div>
            <p className={styles.month}>Dez</p>
          </div>
        </div>
      </div>
    </>
  );
}
