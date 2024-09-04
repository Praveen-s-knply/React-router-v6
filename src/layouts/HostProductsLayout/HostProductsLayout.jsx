import Loading from "../../components/Loading/Loading";
import { Suspense } from "react";
import { useLoaderData, useSearchParams, defer, Await } from "react-router-dom";

// Styles
import styles from "./HostProductsLayout.module.css";

// Utilities
import { getHostProducts } from "../../api";
import { requireAuth } from "../../utils";

// Components
import ProductCard from "../../components/ProductCard/ProductCard";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ products: getHostProducts() });
}

export default function HostProductsLayout() {
  const dataPromise = useLoaderData();
  const [searchParams] = useSearchParams();

  // const productElems = products.map((product) => {
  //   return (
  //     <ProductCard
  //       key={product.id}
  //       product={product}
  //       searchParams={searchParams}
  //     />
  //   );
  // });

  const renderDeferElems = (products) => {
    const productElems = products.map((product) => {
      return (
        <ProductCard
          key={product.id}
          product={product}
          searchParams={searchParams}
        />
      );
    });
    return <div className={styles.productContainer}>{productElems}</div>;
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.products}>
          {renderDeferElems}
          {/* <div className={styles.productContainer}>{productElems}</div> */}
        </Await>
      </Suspense>
    </>
  );
}
