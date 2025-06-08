import Products from "./products/products"

export default function Banner() {
  return (
    <>
   
       
  <div id="controls-carousel" className="absolute top-[40px]  w-full h-full overflow-hidden">
  <div className="relative h-56 md:h-150 flex space-x-4 snap-x snap-mandatory whitespace-nowrap">
    <div className="snap-center flex-shrink-0 w-full relative duration-700 ease-in-out">
      <img src="/finalone.png"
        className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Imagen 1" />
    </div>
    <div className="snap-center flex-shrink-0 w-full relative duration-700 ease-in-out hidden">
      <img src="https://images.pexels.com/photos/4553185/pexels-photo-4553185.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Imagen 2" />
    </div>
    <div className="snap-center flex-shrink-0 w-full relative duration-700 ease-in-out hidden">
      <img src="/docs/images/carousel/carousel-3.svg"
        className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Imagen 3" />
    </div>
  </div>

  <button type="button" className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full cursor-pointer group" data-carousel-prev>
    <svg className="w-6 h-6 text-gray-300 group-hover:text-white" viewBox="0 0 6 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
    </svg>
  </button>

  <button type="button" className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full cursor-pointer group" data-carousel-next>
    <svg className="w-6 h-6 text-gray-300 group-hover:text-white" viewBox="0 0 6 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
    </svg>
  </button>
</div>
    <div>

      <Products />
    </div>
     <div className="w-full h-full">
      <img
        src="/Banner.png"
        alt="bannerprovisional"
        className="w-full h-full object-cover"
      />
      </div>



      
    </>
  ) 
}