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
    </div>
    </>
  )
}