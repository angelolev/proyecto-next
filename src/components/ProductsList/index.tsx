import { IProduct } from "@/types/product";
import { getProducts } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsList() {
  const data = await getProducts();

  return (
    <main>
      <h1>Lista de productos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.map((product: IProduct) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-white p-4 shadow-md rounded-md">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm">Precio: {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
