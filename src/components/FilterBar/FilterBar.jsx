import { useSearchParams } from "react-router-dom";

// styles
import styles from "./FilterBar.module.css";

export default function FilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const handleFilterChange = (key, value) => {
    console.log("handling filter change...");
    setSearchParams((prevSearchParams) => {
      if (value == null) prevSearchParams.delete(key);
      else prevSearchParams.set(key, value);
      return prevSearchParams;
    });
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => handleFilterChange("type", null)}
        className={typeFilter === null ? styles.active : undefined}
      >
        All
      </div>
      <div
        onClick={() => handleFilterChange("type", "headset")}
        className={typeFilter === "headset" ? styles.active : undefined}
      >
        Headset
      </div>
      <div
        onClick={() => handleFilterChange("type", "speaker")}
        className={typeFilter === "speaker" ? styles.active : undefined}
      >
        Speaker
      </div>
      <div
        onClick={() => handleFilterChange("type", "laptop")}
        className={typeFilter === "laptop" ? styles.active : undefined}
      >
        Laptop
      </div>
      {console.log("Filter bar rendered...")}
    </div>
  );
}
