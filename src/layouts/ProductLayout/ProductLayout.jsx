import { Suspense } from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  Await,
  defer,
} from "react-router-dom";

import { getProducts } from "../../api";

// styles
import styles from "./ProductLayout.module.css";
import FilterBarStyles from "../../components/FilterBar/FilterBar.module.css";

// Components
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";

// Loader
export async function loader() {
  return defer({ products: getProducts() });
}

// Component
export default function ProductLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();
  const typeFilter = searchParams.get("type");

  const handleFilterChange = (key, value) => {
    setSearchParams((prevSearchParams) => {
      if (value == null) prevSearchParams.delete(key);
      else prevSearchParams.set(key, value);
      return prevSearchParams;
    });
  };

  function deferedRenderElems(products) {
    // Filtering Products
    const productsToDisplay = typeFilter
      ? products.filter((product) => product.type === typeFilter)
      : products;

    // Product Element
    const productsElem = productsToDisplay.map((product) => {
      // ProductCard
      return (
        <ProductCard
          product={product}
          key={product.id}
          searchParams={searchParams}
        />
      );
    });

    return (
      <>
        <div className={styles.productContainer}>{productsElem}</div>
      </>
    );
  }

  // Component Return
  return (
    <div className={styles.container}>
      {/* FilterBar */}
      <div className={FilterBarStyles.container}>
        <div
          onClick={() => handleFilterChange("type", null)}
          className={typeFilter === null ? FilterBarStyles.active : undefined}
        >
          <p>All</p>
        </div>
        <div
          onClick={() => handleFilterChange("type", "headphone")}
          className={
            typeFilter === "headphone" ? FilterBarStyles.active : undefined
          }
        >
          <p>headphone</p>
        </div>
        <div
          onClick={() => handleFilterChange("type", "speaker")}
          className={
            typeFilter === "speaker" ? FilterBarStyles.active : undefined
          }
        >
          <p>Speaker</p>
        </div>
        <div
          onClick={() => handleFilterChange("type", "laptop")}
          className={
            typeFilter === "laptop" ? FilterBarStyles.active : undefined
          }
        >
          <p>Laptop</p>
        </div>
      </div>
      {/* FilterBar End */}
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.products}>{deferedRenderElems}</Await>
      </Suspense>
    </div>
  );
}
