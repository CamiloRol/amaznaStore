import Products from "./products/products"

export default function Banner() {
  return (
    <>
    
    <div className="w-full h-full">
      <img
        src="/Banner.png"
        alt="bannerprovisional"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <Products />
      {/* <div className="absolute top-150 left-25 w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="p-4">
    <img src="/Banner.png" alt="Imagen del producto" />
    <h2 className="text-xl font-semibold text-gray-800 mb-2">hola</h2>
    <p className="text-gray-600 text-sm mb-4">hola</p>
    <div className="text-right">
      <span className="text-lg font-bold text-indigo-600">COP $5000</span>
    </div>
    </div>
    </div> */}  
    </div>
    </>
  )
}