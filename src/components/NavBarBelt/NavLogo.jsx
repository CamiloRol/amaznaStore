import React from 'react'

export default function NavLogo() {
  return (
    <div className="flex items-center">
        <div id="nav-logo">
            <a
            href="/"
            aria-label="Amazna"
            lang="en"
            className="flex items-center space-x-2"
            >
            <img
                src="/logoblanco.png"
                alt="logoAmazna"
                className="h-auto w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
            />
            <span className="hidden nav-sprite nav-logo-base"></span>
            <span className="hidden nav-sprite nav-logo-ext nav-progressive-content"></span>
            </a>
        </div>
    </div>
  )
}
