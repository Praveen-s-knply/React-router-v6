import { json } from "react-router-dom";

export async function getProducts(id) {
  const url = id ? `/api/products/${id}` : "/api/products";
  const res = await fetch(url);
  // if (!res.ok) {
  //   console.log("res not okay");
  //   throw {
  //     message: "Failed to fetch Products",
  //     statusText: res.statusText,
  //     status: res.status,
  //   };
  // }
  const data = await res.json();
  console.log(data);
  if (!data?.products) {
    throw {
      message: id
        ? `Sorry, the item you requested is not available.`
        : "Products are unavilable right now.",
      status: 404,
      statusText: "statustext",
    };
  }
  return data.products;
}

export async function getHostProducts(id) {
  const url = id ? `/api/host/products/${id}` : "/api/host/products";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch Products",
      statusText: 400,
      status: 400,
    };
  }
  const data = await res.json();
  if (!data?.products) {
    throw {
      message: id
        ? `Sorry, the item you requested is not available.`
        : "Products are unavilable right now.",
      status: 404,
      statusText: "statustext",
    };
  }

  return data.products;
}

// Login

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
