export const Content = () => {
  const exportarProductos = () => {
    window.open("http://localhost:3000/exportar-csv", "_blank");
  };

  return (
    <>
      <div className="flex flex-col w-full bg-gray-700">
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
        </div>
      </div>
    </>
  );
};

export default Content;