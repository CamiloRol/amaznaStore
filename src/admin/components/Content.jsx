import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Content = () => {

  const data = [
  { name: 'Ene', ventas: 400 },
  { name: 'Feb', ventas: 300 },
  { name: 'Mar', ventas: 500 },
  { name: 'Abr', ventas: 200 },
  { name: 'May', ventas: 600 },
];

  return (
    <>
      <div className="flex w-full bg-gray-700">
        {/* Main Content */}
        <div id="content"></div>
        <div className="container mx-auto">
          {/* Page Heading */}
          <div className="flex sm:flex-row flex-col items-center mb-2 mt-2 ml-3">
            {/* Dashboard alineado a la izquierda */}
            <h1 className="text-xl font-semibold text-gray-100 flex-grow">
              Dashboard
            </h1>

            {/* Botones alineados a la derecha */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="hidden sm:inline-block btn btn-sm bg-blue-500 text-white shadow-sm px-3 py-2 rounded-md hover:bg-blue-600 transition"
              >
                <i className="fas fa-download fa-sm text-white opacity-50"></i>{" "}
                Generate Report
              </a>

              <button
                onClick={exportarProductos}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Exportar Productos
              </button>
            </div>
          </div>

          {/* Aquí se supone que va el contenido del dashboard */}

      <div class="p-6 bg-gray-100 min-h-screen">
  
  <header class="mb-6">
    <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
    <p class="text-sm text-gray-500">Bienvenido al panel de administración</p>
  </header>

 
  <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-white p-5 rounded-2xl shadow-md">
      <p class="text-sm text-gray-500">Usuarios activos</p>
      <p class="text-2xl font-bold text-blue-600">1,245</p>
    </div>
    <div class="bg-white p-5 rounded-2xl shadow-md">
      <p class="text-sm text-gray-500">Ventas de hoy</p>
      <p class="text-2xl font-bold text-green-600">$4,320</p>
    </div>
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Ventas Mensuales</h2>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip />
          <Bar dataKey="ventas" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </section>


  <section class="bg-white p-5 rounded-2xl shadow-md mb-6">
    <h2 class="text-lg font-semibold text-gray-700 mb-3">Últimos registros</h2>
    <table class="w-full text-sm text-left">
      <thead class="text-gray-500 border-b">
        <tr>
          <th class="py-2">Nombre</th>
          <th class="py-2">Fecha</th>
          <th class="py-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <td class="py-2">Juan Pérez</td>
          <td class="py-2">2025-05-25</td>
          <td class="py-2 text-green-600 font-medium">Completado</td>
        </tr>
        <tr class="border-b">
          <td class="py-2">Laura Gómez</td>
          <td class="py-2">2025-05-24</td>
          <td class="py-2 text-yellow-600 font-medium">Pendiente</td>
        </tr>
      </tbody>
    </table>
  </section>


  <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
   
    <div class="bg-white p-5 rounded-2xl shadow-md">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Notificaciones</h3>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>🔔 Nuevo mensaje de soporte recibido</li>
        <li>🔄 El sistema fue actualizado</li>
        <li>📦 Pedido #12345 fue enviado</li>
      </ul>
    </div>

   
    <div class="bg-white p-5 rounded-2xl shadow-md">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Accesos rápidos</h3>
      <div class="flex flex-wrap gap-2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">Nuevo Usuario</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">Generar Reporte</button>
        <button class="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600">Configuración</button>
      </div>
    </div>
  </section>
</div>

        </div>
      </div>
    </>
  );
};

export default Content;