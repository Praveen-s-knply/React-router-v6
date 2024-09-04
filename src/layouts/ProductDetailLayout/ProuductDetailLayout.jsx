import { useLoaderData, json } from "react-router-dom";

// Utilities
import { getProducts } from "../../api";

// styles
import styles from "./ProductDetailLayout.module.css";

// Components
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";

// Loader
export async function loader({ params }) {
  return getProducts(params.id);
}

export default function ProductDetailLayout() {
  const product = useLoaderData();

  return (
    <>
      <ProductDetailCard product={product} />
    </>
  );
}
