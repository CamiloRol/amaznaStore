export default function IndiProduct({product}) {
  return (
    <div>
      <h2>{product.produname}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  )
}
