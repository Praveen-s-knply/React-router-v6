import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";

// Assets

export default function ProductCard({ product, searchParams }) {
  return (
    <Link
      to={`${product.id}`}
      state={{ search: searchParams.toString() }}
      className={styles.container}
    >
      <div className={styles.banner}>
        <div
          className={styles.imgContainer}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/images/" + product.imageUrls[0]
            })`,
          }}
        >
          {/* <img
          src={process.env.PUBLIC_URL + "/assets/images/Srs-Xb1001.jpg"}
          alt="img not found"
        /> */}
          {console.log(`url(${"../../assets/images/" + product.imageUrls[0]})`)}
          <h5 className={styles.price}>&#x20B9;{product.price}</h5>
        </div>
      </div>
      <div>
        <h5>{product.name}</h5>
        {/* <i className="fa-solid fa-circle-chevron-right"></i> */}
      </div>
    </Link>
  );
}
