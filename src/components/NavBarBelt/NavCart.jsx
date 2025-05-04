export default function NavCart() {
  return (
    <div>
        <a href="/-/es/gp/cart/view.html?ref_=nav_cart" aria-label="0 artículos en el carrito" className="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
            <div id="nav-cart-count-container">
                <span id="nav-cart-count" aria-hidden="true" className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content">0</span>
                <span className="nav-cart-icon nav-sprite"></span>
            </div>
            <div id="nav-cart-text-container" className=" nav-progressive-attribute">
                <span aria-hidden="true" className="nav-line-1">    
                </span>
                <span aria-hidden="true" className="nav-line-2">
                    Carrito
                    <span className="nav-icon nav-arrow"></span>
                </span>    
            </div>
        </a>
    </div>
  )
}
