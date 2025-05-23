export default function NavCart() {
  return (
    <div className="flex items-center px-2">
        <a
            href="/-/es/gp/cart/view.html?ref_=nav_cart"
            aria-label="0 artículos en el carrito"
            className="flex items-center text-sm hover:text-black"
            id="nav-cart"
        >
            <div className="relative mr-1">
            <span
                id="nav-cart-count"
                aria-hidden="true"
                className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1 rounded-full"
            >
                0
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5h12.8M7 13L5.4 5M16 16a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
                />
            </svg>
            </div>
            <div className="flex flex-col">
            <span className="text-xs text-gray-400 hidden sm:inline">Carrito</span>
            </div>
        </a>
    </div>
  )
}
