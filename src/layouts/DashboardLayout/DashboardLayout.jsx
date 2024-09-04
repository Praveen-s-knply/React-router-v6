// styles
import styles from "./DashboardLayout.module.css";

// components
import Graph from "../../components/Graph/Graph";

export default function DashboardLayout() {
  return (
    <div className={styles.gridContainer}>
      {/* 1 */}
      <div className={styles.item1}>
        <div className={styles.head}>
          <h5>Orders</h5>
          <i className="fa-solid fa-box-open"></i>
        </div>
        <h2>201</h2>
        <p>
          <span className={styles.increase}>&#8593; 8.2%</span> since last month
        </p>
      </div>
      {/* 2 */}
      <div className={styles.item1}>
        <div className={styles.head}>
          <h5>Apporved</h5>
          <i className="fa-solid fa-truck"></i>
        </div>
        <h2>36</h2>
        <p>
          <span className={styles.increase}>&#8593; 3.4%</span> since last month
        </p>
      </div>
      {/* 3 */}
      <div className={styles.item3}>
        <h5>Users</h5>
        <div>
          <h2>4.890</h2>
          <p>since last month</p>
        </div>
        <div className={styles.pieChartContainer}>
          <div>
            <div className={styles.pieChartDetail}>
              <div style={{ backgroundColor: "pink" }}></div>
              <p>
                <span>60%</span> New
              </p>
            </div>
            <div className={styles.pieChartDetail}>
              <div style={{ backgroundColor: "lightblue" }}></div>
              <p>
                <span>26%</span> Returning
              </p>
            </div>
            <div className={styles.pieChartDetail}>
              <div style={{ backgroundColor: "orange" }}></div>
              <p>
                <span>14%</span> nactive
              </p>
            </div>
          </div>
          <div className={styles.userPiechart}></div>
        </div>
      </div>
      {/* 4 */}
      <div className={styles.item4}>
        <h5>Subscriptions</h5>
        <div>
          <h2>1.201</h2>
          <p>since last month</p>
        </div>
        <div className={styles.pieChartContainer}>
          <div>
            <div className={styles.pieChartDetail}>
              <div style={{ backgroundColor: "pink" }}></div>
              <p>
                <span>70%</span> Paid
              </p>
            </div>
            <div className={styles.pieChartDetail}>
              <div style={{ backgroundColor: "lightblue" }}></div>
              <p>
                <span>30%</span> Trial
              </p>
            </div>
          </div>
          <div className={styles.subscriptionsPiechart}></div>
        </div>
      </div>
      {/* 5 */}
      <div className={styles.item1}>
        <div className={styles.head}>
          <h5>Month total</h5>
          <i className="fa-solid fa-indian-rupee-sign"></i>
        </div>
        <h2>25410</h2>
        <p>
          <span className={styles.decrease}>&#8595; 0.2%</span> since last month
        </p>
      </div>
      {/* 6 */}
      <div className={styles.item1}>
        <div className={styles.head}>
          <h5>Revenue</h5>
          <i className="fa-solid fa-chart-line"></i>
        </div>
        <h2>1352</h2>
        <p>
          <span className={styles.decrease}>&#8595; 1.2%</span> since last month
        </p>
      </div>
      {/* 7 */}
      <div className={styles.itemGraph}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div className={styles.head} style={{ height: "12%", width: "100%" }}>
            <h5>Sales dynamics</h5>
            <p>2024</p>
          </div>
          <div style={{ height: "88%", width: "100%" }}>
            <Graph />
          </div>
        </div>
      </div>
      {/* 8 */}
      <div className={styles.item1}>
        <div className={styles.head}>
          <i className="fa-solid fa-wallet" style={{ fontSize: "2rem" }}></i>
        </div>
        <div>
          <p>Paid invoices</p>
          <h2>&#8377;30256.23</h2>
        </div>
        <p>Current Financial Year</p>
      </div>
      {/* 9 */}
      <div className={styles.item1}>
        <div className={styles.head}>
          <i
            className="fa-solid fa-money-bill-trend-up"
            style={{ fontSize: "2rem" }}
          ></i>
        </div>
        <div>
          <p>Funds received</p>
          <h2>&#8377;15256.23</h2>
        </div>
        <p>Current Financial Year</p>
      </div>
    </div>
  );
}
