export default function NavCategories() {
  return (
    <div id="nav-main" className="bg-blue-400 text-gray-800 px-4 py-2 flex items-center justify-between shadow-md">
  {/* Sección Izquierda - Menú Hamburguesa */}
  <div className="flex items-center space-x-4">
    <a href="#" 
       id="nav-hamburger-menu" 
       role="button" 
       aria-label="Abrir menú de todas las categorías" 
       className="flex items-center space-x-2 hover:text-white">
      <i className="hm-icon nav-sprite">☰</i>
      <span className="font-semibold">Todo</span>
    </a>
  </div>

  {/* Sección Central - Navegación */}
  <div className="hidden md:flex flex-1 justify-center">
    <ul className="flex space-x-6 text-sm font-medium">
      <li><a href="/-/es/gp/goldbox?ref_=nav_cs_gb" className="hover:underline">Ofertas del Día</a></li>
      <li><a href="/" className="hover:underline">Listas</a></li>
      <li><a href="/" className="hover:underline">Prime Video</a></li>
      <li><a href="/" className="hover:underline">Tarjetas de Regalo</a></li>
      <li><a href="/" className="hover:underline">Servicio al Cliente</a></li>
      <li><a href="/" className="hover:underline">Vender</a></li>
    </ul>
  </div>

  {/* Sección Derecha - Vacía por ahora */}
  <div className="hidden md:flex items-center space-x-4">
    {/* Aquí puedes agregar íconos de usuario, carrito, etc. */}
  </div>

  {/* Responsive - Menú para móviles */}
  <div className="md:hidden">
    <button className="text-2xl" aria-label="Abrir menú móvil">☰</button>
  </div>
</div>

  )
}
