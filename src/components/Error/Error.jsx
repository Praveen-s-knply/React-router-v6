import { useRouteError, isRouteErrorResponse } from "react-router-dom";

// styles
import styles from "./Error.module.css";

export default function Error() {
  const error = useRouteError();

  return (
    <div className={styles.container}>
      {error.status === 404 ? (
        <>
          <h1>
            4<i className="fa-solid fa-ghost"></i>4
          </h1>
          <h4 style={{ fontSize: "2rem" }}>uh-oh! Nothing here...</h4>
        </>
      ) : (
        <h1>{error.status}</h1>
      )}
      <p>{error.message}</p>
    </div>
  );
  // throw error;
}
