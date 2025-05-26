import { useState } from "react";
import { Link } from "react-router-dom";

export const Aside = () => {
  const [isCollapseTwoOpen, setIsCollapseTwoOpen] = useState(false);

  const toggleCollapseTwo = () => {
    setIsCollapseTwoOpen(!isCollapseTwoOpen);
  };

  return (
    <>
      <ul className="flex flex-col bg-gray-900 text-gray-300 w-64 min-h-screen p-4" id="accordionSidebar">

        {/* Sidebar - Brand */}
        <Link to={"/Inventario"} className="flex items-center justify-center mb-4 hover:underline">
          <div className="transform rotate-6 text-2xl text-gray-400">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="text-lg font-bold ml-3">Inventario</div>
        </Link>

        {/* Divider */}
        <hr className="border-gray-700 my-2" />

        {/* Nav Item - Dashboard */}
        <li className="mb-2">
          <Link to={"/dashboard"} className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition">
            <i className="fas fa-tachometer-alt text-gray-400"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="border-gray-700 my-2" />

        {/* Heading */}
        <div className="text-sm font-semibold text-gray-400 uppercase mt-4">
          Módulos
        </div>

        {/* Nav Item - Pages Collapse Menu */}
        <li className="mt-2">
          <button
            onClick={toggleCollapseTwo}
            className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition w-full text-left"
            aria-expanded={isCollapseTwoOpen}
            aria-controls="collapseTwo"
          >
            <i className="fas fa-cog text-gray-400"></i>
            <span>Productos</span>
          </button>

          <div
            id="collapseTwo"
            className={`${isCollapseTwoOpen ? 'block' : 'hidden'} mt-2 bg-gray-800 rounded-md p-2`}
          >
            <h6 className="text-gray-400 text-sm font-medium">Acciones:</h6>
            <Link to={"/products"} className="block text-gray-400 hover:text-gray-200 mt-1 hover:underline">Ver Productos</Link>
            <Link to={"/products"} className="block text-gray-400 hover:text-gray-200 mt-1 hover:underline">Crear Productos</Link>
          </div>
        </li>
  <hr className="border-gray-700 my-2" />
        {/* VENTAS  */}
        

        <div className="text-sm font-semibold text-gray-400 uppercase mt-4">
          VENTAS
        </div>
         <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition w-full text-left">
          ventas al mayor
        </div>
         <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition w-full text-left">
          ventas al Detal
        </div>
        <hr className="border-gray-700 my-2" />

        
        {/* GRAFICAS  */}

        <div className="text-sm font-semibold text-gray-400 uppercase mt-4">
          GRAFICAS
        </div>
        
         <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition w-full text-left">
          Reportes de Usuario
        </div>
        <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition w-full text-left">
          Mes anterior
        </div>
        <hr className="border-gray-700 my-2" />

         {/* SOPORTE EN LINEA  */}

        <div className="text-sm font-semibold text-gray-400 uppercase mt-4">
          SOPORTTE EN LINEA
        </div>
         <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition w-full text-left">
          Mesa de ayuda
        </div>
         <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-800 transition w-full text-left">
          enviar un ticket
        </div>
        <hr className="border-gray-700 my-2" />

      </ul>
      
      
    </>
  );
};
