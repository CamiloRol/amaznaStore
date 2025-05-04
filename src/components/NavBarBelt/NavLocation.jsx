export default function NavLocation() {
  return (
    <div id="nav-global-location-slot" className="flex items-center px-4 py-2 hover:cursor-pointer">
        <a
            id="nav-global-location-popover-link"
            role="button"
            tabIndex="0"
            href="#"
            className="flex items-center space-x-2 text-white"
        >
            <div id="nav-packard-glow-loc-icon" className="w-5 h-5 bg-gray-400 rounded-full"></div>

            <div id="glow-ingress-block" className="leading-tight">
            <span
                className="block text-xs text-gray-200"
                id="glow-ingress-line1"
            >
                Enviar a
            </span>
            <span
                className="block text-sm font-semibold text-white"
                id="glow-ingress-line2"
            >
                Colombia
            </span>
            </div>
        </a>
    </div>
  )
}
