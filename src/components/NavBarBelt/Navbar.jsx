import NadLang from "./NadLang";
import NavBrowser from "./NavBrowser";
import NavCart from "./NavCart";
import NavCategories from "./NavCategories";
import NavLocation from "./NavLocation";
import NavLogin from "./NavLogin";
import NavLogo from "./NavLogo";
import NavOrders_Returns from "./NavOrders_Returns";

export default function Navbar() {
  return (
    <>
        <div id="nav-belt" className="w-full bg-gray-900 text-white flex items-center justify-between px-4 py-2 shadow-md">
            <div className="flex items-center space-x-4">
                <NavLogo />
                <NavLocation />
            </div>

            <div className="flex-1 max-w-2xl mx-4">
                <div id="nav-search">
                <NavBrowser />
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <NadLang />
                <NavLogin />
                <NavOrders_Returns />
                <NavCart />
            </div>
        </div>
        <NavCategories />
    </>
  )
}