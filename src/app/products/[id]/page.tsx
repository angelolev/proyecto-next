import { IProduct } from "@/types/product";
import Image from "next/image";

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const products = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API}`).then(
    (res) => res.json()
  );

  return products.map((product: IProduct) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const product = await response.json();

  return (
    <div className="product">
      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={150} height={150} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
