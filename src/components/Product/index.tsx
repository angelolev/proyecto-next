import { IProduct } from "@/types/product";

export default function Product({ title, id }: IProduct) {
  return (
    <div>
      <p>{title}</p>
      <a className="text-blue-400" href={`/productos/${id}`}>
        Ver detalle
      </a>
    </div>
  );
}
