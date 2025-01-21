import { IProduct } from "@/types/product";

export default function Product({ name, id }: IProduct) {
  return (
    <div>
      <p>{name}</p>
      <a className="text-blue-400" href={`/productos/${id}`}>
        Ver detalle
      </a>
    </div>
  );
}
