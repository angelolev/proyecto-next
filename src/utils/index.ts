export async function getProducts() {
  if (!process.env.NEXT_PUBLIC_PRODUCTS_API) {
    throw new Error("NEXT_PUBLIC_PRODUCTS_API is not defined");
  }

  const response = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_API);

  const data = response.json();

  return data;
}
