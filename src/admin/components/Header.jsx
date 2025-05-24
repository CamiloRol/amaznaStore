export const Header = () => {
    const userEmail = localStorage.getItem('userEmail'); // Obtengo el email

  return (
    <header className="bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* Buscador */}
      <form className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-1 w-64">
        <input type="text" className="bg-transparent flex-grow outline-none text-sm" placeholder="Search for..." />
        <button className="text-blue-600">
          <i className="fas fa-search"></i>
        </button>
      </form>

      {/* Iconos del Navbar */}
        <ul className="flex items-center space-x-6">
        
        {/* Alerts */}
        <li className="relative">
            <a href="#" className="text-gray-600 hover:text-gray-800 relative flex items-center">
            <i className="fas fa-bell"></i>
            <span className="absolute top-0 right-0 bg-[#FF7F50] text-white rounded-full text-sm w-7 h-7 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 shadow-lg ring-2 ring-white transition duration-300 hover:scale-110 hover:shadow-xl">
              3+
            </span>
            </a>
        </li>

        {/* Mensajes */}
        <li className="relative">
            <a href="#" className="text-gray-600 hover:text-gray-800 relative flex items-center">
            <i className="fas fa-envelope"></i>
            <span className="absolute top-0 right-0 bg-[#FF7F50] text-white rounded-full text-sm w-7 h-7 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 shadow-lg ring-2 ring-white transition duration-300 hover:scale-110 hover:shadow-xl">
              7+
            </span>
            </a>
        </li>

        {/* Pefil del Usuariio */}
        <li className="relative flex items-center space-x-2">
        <span className="hidden lg:block text-gray-500 text-sm">{userEmail ? userEmail : "Usuario"}</span>
        <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
            <i className="fas fa-user text-white"></i>
        </div>
        </li>
      </ul>

    </header>
  );
};

export default Header;