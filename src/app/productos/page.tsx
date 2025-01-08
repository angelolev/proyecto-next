import Product from "@/components/Product";

export default async function Productos() {
  const data = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await data.json();

  console.log(products, "mis productos");

  return (
    <>
      <h1>Productos</h1>
      <p>Estos son los productos</p>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
