import { useOutletContext } from "react-router-dom";

export default function Details() {
  const product = useOutletContext();

  const detailElems = product.details.map((item) => {
    return (
      <div key={item.title} style={{ marginBottom: "0.5rem" }}>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    );
  });

  return <>{detailElems}</>;
}
