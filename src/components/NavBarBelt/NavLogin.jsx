import { useNavigate } from "react-router-dom"

export default function NavLogin() {
    const navigate = useNavigate();
    const userEmail = localStorage.getItem('userEmail'); // Obtengo el email
  return (
    <div className="flex items-center relative px-2 group" id="nav-link-accountList">
        <a
            onClick={() => navigate('/login')}
            className="flex flex-col text-sm text-gray-800 hover:text-black"
            aria-controls="nav-flyout-accountList"
            tabIndex="0"
        >
            <span className="text-xs text-gray-400 group-hover:underline">
            Hola, {userEmail ? userEmail : "identíficate porfa"}
            </span>
            <span className="font-medium text-gray-500 group-hover:underline">
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
