export async function getProducts() {
  if (!process.env.NEXT_PUBLIC_PRODUCTS_API) {
    throw new Error("NEXT_PUBLIC_PRODUCTS_API is not defined");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API}`);

  const data = response.json();

  return data;
}

export async function getProduct(id: number) {
  if (!process.env.NEXT_PUBLIC_PRODUCTS_API) {
    throw new Error("NEXT_PUBLIC_PRODUCTS_API is not defined");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = response.json();

  return data;
}
