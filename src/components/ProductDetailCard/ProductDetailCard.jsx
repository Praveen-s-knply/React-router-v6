import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

//styles
import styles from "./ProuductDetailCard.module.css";

// Component
export default function ProductDetailCard({ product }) {
  const location = useLocation();

  const search = location.state?.search || "";

  const handleActive = ({ isActive }) => {
    return isActive ? `${styles.active} + ${styles.navLink}` : styles.navLink;
  };

  return (
    <div className={styles.container}>
      {/* Left side */}
      <div
        className={styles.containerLeft}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/mesh2.png"
          })`,
          height: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "/assets/images/" +
                product.imageUrls[0]
              })`,
              height: "100%",
            }}
          >
            <Link to={`..?${search}`} relative="path">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <h2 className={styles.item}>{product.name}</h2>
            <p>{product.caption}</p>
            <h2 className={styles.price}>&#x20B9;{product.price}</h2>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className={styles.containerRight}>
        <div>
          <h2 className={styles.item}> {product.name} </h2>
          <div className={styles.type}> {product.type} </div>
          <div className={styles.HNav}>
            {/* <NavLink to="" end className={handleActive}>
              DESCRIPTION
            </NavLink>
            <NavLink to="details" className={handleActive}>
              DETAILS
            </NavLink>
            <NavLink to="photos" className={handleActive}>
              PHOTOS
            </NavLink> */}
            <div>
              <NavLink to="" end className={handleActive}>
                DESCRIPTION
              </NavLink>
            </div>
            <div>
              <NavLink to="details" className={handleActive}>
                DETAILS
              </NavLink>
            </div>
            <div>
              <NavLink to="photos" className={handleActive}>
                PHOTOS
              </NavLink>
            </div>
          </div>
          <Outlet context={product} />
        </div>
      </div>
    </div>
  );
}
