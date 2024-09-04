// styles
import styles from "./ReviewsLayout.module.css";

export default function ReviewsLayout() {
  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <h2 className={styles.heading}>
          Your reviews <span className={styles.pSpan}>last 30 days</span>
        </h2>
        <h2 className={styles.centerLine}>
          5.0 <i className="fa-solid fa-star"></i>
          <span className={styles.pSpan}>overall rating</span>
        </h2>
        <div>
          {/* 5 */}
          <div className={styles.card}>
            <p>5 stars</p>
            <div>
              <div className={styles.w100}></div>
            </div>
            <p>100%</p>
          </div>
          {/* 4 */}
          <div className={styles.card}>
            <p>4 stars</p>
            <div>
              <div className={styles.w0}></div>
            </div>
            <p>0%</p>
          </div>
          {/* 3 */}
          <div className={styles.card}>
            <p>3 stars</p>
            <div>
              <div className={styles.w50}></div>
            </div>
            <p>50%</p>
          </div>
          {/* 2 */}
          <div className={styles.card}>
            <p>2 stars</p>
            <div>
              <div className={styles.w0}></div>
            </div>
            <p>0%</p>
          </div>
          {/* 3 */}
          <div className={styles.card}>
            <p>1 stars</p>
            <div>
              <div className={styles.w0}></div>
            </div>
            <p>0%</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className={styles.right}>
        <h3>Reviews (3)</h3>
        {/* 1 */}
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={styles.centerLine}>
          <h5>Praveen</h5>
          <p>August 4 2024</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quos
          quod doloribus impedit nostrum in dicta praesentium mollitia
          molestias. Praesentium.
        </p>
        <div className={styles.hr}></div>
        {/* 2 */}
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={styles.centerLine}>
          <h4>Nandu</h4>
          <p>August 2 2024</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          optio perferendis tenetur?
        </p>
        <div className={styles.hr}></div>
        {/* 3 */}
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i
            className="fa-solid fa-star"
            style={{ color: "rgb(92, 92, 92)" }}
          ></i>
          <i
            className="fa-solid fa-star "
            style={{ color: "rgb(92, 92, 92)" }}
          ></i>
        </div>
        <div className={styles.centerLine}>
          <h4>Said</h4>
          <p>August 1 2024</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          accusamus.
        </p>
        <div className={styles.hr}></div>
      </div>
    </div>
  );
}
