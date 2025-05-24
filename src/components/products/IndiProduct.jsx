export default function IndiProduct({product}) {
  return (
    <div>
        <img
            src={product.Images[0]?.produlimages}
            alt={product.produname}
            style={{ width: "200px", height: "auto" }}
        />
        <h2>{product.produname}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
    </div>
  )
}
