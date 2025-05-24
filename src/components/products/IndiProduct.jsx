export default function IndiProduct({product}) {
 
 
return (

    <div className="relative h-[900px]">
      {product.slice(0, 6).map((product, index) => (
        <div
          key={index}
          className="absolute w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          style={{
            top: 150 + Math.floor(index / 3) * 300, // 150px de margen superior maracaibo
            left: 25 + (index % 3) * 280 // 25px de margen izquierdo
          }}
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.produname}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="text-right">
              <span className="text-lg font-bold text-indigo-600">COP ${product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


