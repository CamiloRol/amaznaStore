import React from 'react'

export default function NavLogo() {
  return (
    <div className="flex items-center">
        <div id="nav-logo">
            <a
            href="/"
            aria-label="Amazon"
            lang="en"
            className="flex items-center space-x-2"
            >
            <img
                src="/logoshort.png"
                alt="logoAmazna"
                className="h-10 w-auto object-contain"
            />
            <span className="hidden nav-sprite nav-logo-base"></span>
            <span className="hidden nav-sprite nav-logo-ext nav-progressive-content"></span>
            </a>
        </div>
    </div>
  )
}
