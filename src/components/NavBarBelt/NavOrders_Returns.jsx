export default function NavOrders_Returns() {
  return (
    <div className="flex items-center px-2 group">
        <a
            href="#"
            className="flex flex-col text-sm text-gray-800 hover:text-black"
            tabIndex="0"
            id="nav-orders"
        >
            <span className="text-xs text-gray-600 group-hover:underline">
            Devoluciones
            </span>
            <span className="font-medium flex items-center group-hover:underline">
            y Pedidos
            {/* Icono de flecha opcional */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-3 w-3 text-gray-500 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </span>
        </a>
    </div>
  )
}
