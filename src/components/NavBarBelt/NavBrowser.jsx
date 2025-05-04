export default function NavBrowser() {
  return (
    <div id="nav-bar-left" className="flex w-full max-w-5xl mx-auto">
        <form
        id="nav-search-bar-form"
        acceptCharset="utf-8"
        action="/s/ref=nb_sb_noss"
        method="GET"
        name="site-search"
        role="search"
        className="flex w-full bg-white rounded-md overflow-hidden border border-gray-300 focus-within:border-yellow-500 transition"
        >
        {/* Campo oculto */}
        <input type="hidden" name="__mk_es_US" value="ÅMÅŽÕÑ" />
    
        {/* Selector de categorías */}
        <div className="relative">
            <select
            name="url"
            id="searchDropdownBox"
            className="h-full pl-2 pr-6 py-2 text-sm bg-gray-100 text-gray-700 border-r border-gray-300 focus:outline-none"
            aria-describedby="searchDropdownDescription"
            >
            <option value="search-alias=todays-deals" defaultValue="selected">Promociones</option>
            <option value="search-alias=aps">Todos los departamentos</option>
            <option value="search-alias=arts-crafts-intl-ship">Arte y artesanías</option>
            <option value="search-alias=automotive-intl-ship">Automotriz</option>
            <option value="search-alias=baby-products-intl-ship">Bebé</option>
            <option value="search-alias=beauty-intl-ship">Belleza</option>
            </select>
        </div>
    
        {/* Campo de búsqueda */}
        <input
            type="text"
            name="field-keywords"
            placeholder="Buscar en Amazon"
            className="flex-grow px-4 py-2 text-sm text-gray-900 focus:outline-none"
            aria-label="Buscar en Amazon"
            autoComplete="off"
            role="searchbox"
        />
    
        {/* Botón de búsqueda */}
        <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 px-4 text-sm font-medium text-gray-800"
            aria-label="Buscar"
        >
            Ir
        </button>
        </form>
    </div>
  )
}
