import { getProducts } from "@/utils";
import Link from "next/link";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

export default async function ProductsList() {
  const data = await getProducts();

  return (
    <main>
      <h1>Lista de productos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.products.map((product: IProduct) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm">Precio: {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
