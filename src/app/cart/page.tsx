export default async function Cart() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return <h1 className="title">Carrito</h1>;
}
