export default function NadLang() {
  return (
    <div className="flex items-center relative px-2">
        <a
            href="/"
            className="flex items-center space-x-1 text-sm text-gray-800 hover:underline"
            aria-label="Elige un idioma para comprar en Amazon Estados Unidos. La selección actual es Español (ES)."
        >
            <span className="flex items-center">
            {/* Bandera */}
            <span
                role="img"
                aria-label="Estados Unidos"
                className="w-5 h-5 bg-[url('/us-flag.png')] bg-cover rounded-sm mr-1"
            ></span>

            {/* Código de idioma */}
            <span>ES</span>
            </span>
        </a>

        {/* Botón de flyout */}
        <button
            aria-label="Ampliar para cambiar el idioma o país"
            className="ml-1 text-gray-600 hover:text-black"
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
