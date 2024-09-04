import { useOutletContext } from "react-router-dom";

export default function Description() {
  const product = useOutletContext();

  return <p>{product.description}</p>;
}
