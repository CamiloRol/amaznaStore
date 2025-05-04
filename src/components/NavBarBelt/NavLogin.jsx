export default function NavLogin() {
  return (
    <div className="flex items-center relative px-2 group" id="nav-link-accountList">
        <a
            href="/"
            className="flex flex-col text-sm text-gray-800 hover:text-black"
            aria-controls="nav-flyout-accountList"
            tabIndex="0"
        >
            <span className="text-xs text-gray-600 group-hover:underline">
            Hola, Identifícate
            </span>
            <span className="font-medium group-hover:underline">
            Cuenta y Listas
            </span>
        </a>

        {/* Icono de flecha */}
        <button
            className="ml-1 text-gray-500 group-hover:text-black"
            aria-label="Expandir cuenta y listas"
            tabIndex="0"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>
  )
}
