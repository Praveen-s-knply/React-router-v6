import { useLoaderData } from "react-router-dom";

// Components
import ProductDetailCard from "../components/ProductDetailCard/ProductDetailCard";

// Utilities
import { getHostProducts } from "../api";
import { requireAuth } from "../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostProducts(params.id);
}

export default function HostProductDetailLayout() {
  const product = useLoaderData();

  return (
    <>
      <ProductDetailCard product={product} />
    </>
  );
}
