export default function Product({ product }) {
  return (
    <div>
      <p>{product.title}</p>
      <a className="text-blue-400" href={`/productos/${product.id}`}>
        Ver detalle
      </a>
    </div>
  );
}
