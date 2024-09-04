// styles
import styles from "./IncomeLayout.module.css";

// components
import IncomeGraph from "../../components/IncomeGraph/IncomeGraph";

export default function IncomeLayout() {
  return (
    <div className={styles.gridContainer}>
      {/* 1 */}
      <div className={styles.incomeCard}>
        <h3>Total Income</h3>
        <h1>
          120,456,50<sup>&#8377;</sup>
        </h1>
        <p>
          <span>+&#8377;2,456</span> from last month
        </p>
      </div>

      {/* 2 */}
      <div className={styles.normalCard}>
        <div className={styles.head}>
          <h5>Expenses</h5>
          <i className="fa-solid fa-money-bill-transfer"></i>
        </div>
        <h2>&#8377;7,949</h2>
        <p>
          <span className={styles.decrease}>&#8595; 1.4%</span> since last month
        </p>
      </div>

      {/* 3 */}
      <div className={styles.normalCard}>
        <div className={styles.head}>
          <h5>Balance</h5>
          <i className="fa-solid fa-wallet"></i>
        </div>
        <h2>&#8377;5,129</h2>
        <p>
          <span className={styles.increase}>&#8593; 8.2%</span> since last month
        </p>
      </div>

      {/* 4 */}
      <div className={styles.activitiesCard}>
        <h4>Recent Activities</h4>
        <p>05 Dec 2021</p>
        {/* item 1 */}
        <div>
          <div>
            <div
              className={styles.imgIcon}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/Rockid_Rush1.png"
                })`,
              }}
            ></div>
            <div>
              <h5>Rockid Rush</h5>
              <p>05 Dec 2021</p>
            </div>
          </div>
          <h5>&#8377;1499.00</h5>
        </div>
        {/* item 2 */}
        <div>
          <div>
            <div
              className={styles.imgIcon}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/Rockerz_Batman1.png"
                })`,
              }}
            ></div>
            <div>
              <h5>Rockerz Bat</h5>
              <p>05 Dec 2021</p>
            </div>
          </div>
          <h5>&#8377;1799.00</h5>
        </div>
        {/* item 3 */}
        <div>
          <div>
            <div
              className={styles.imgIcon}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/JBL_Partybox1.png"
                })`,
              }}
            ></div>
            <div>
              <h5>Partybox 110</h5>
              <p>05 Dec 2021</p>
            </div>
          </div>
          <h5>&#8377;26999.00</h5>
        </div>
        {/* item 4 */}
        <div>
          <div>
            <div
              className={styles.imgIcon}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/images/Rockerz_DC1.png"
                })`,
              }}
            ></div>
            <div>
              <h5>Rockerz 450 DC</h5>
              <p>05 Dec 2021</p>
            </div>
          </div>
          <h5>&#8377;999.00</h5>
        </div>
      </div>

      {/* 5 */}
      <div className={styles.graphCard}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div className={styles.head} style={{ height: "12%", width: "100%" }}>
            <h4>Sales dynamics</h4>
            <p>2024</p>
          </div>
          <div style={{ height: "88%", width: "100%" }}>
            <IncomeGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
