export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await response.json();
  console.log(data);

  return <h1>{data.product.name}</h1>;
}
