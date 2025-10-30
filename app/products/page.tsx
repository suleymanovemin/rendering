import React from "react";
import Product from "../component/Product";

const Page = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  console.log(products);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 gap-4 ">
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Page;
