export default function NadLang() {
  return (
    <div className="nav-div" id="icp-nav-flyout">
        <a href="/" className="nav-a nav-a-2 icp-link-style-2" aria-label="Elige un idioma para comprar en Amazon Estados Unidos. La selección actual es Español (ES).
        ">
            <span className="icp-nav-link-inner">
            <span className="nav-line-1">
            </span>
            <span className="nav-line-2">
                <span className="icp-nav-flag icp-nav-flag-us icp-nav-flag-lop" role="img" aria-label="Estados Unidos"></span>
                <div>ES</div>
            </span>
            </span>
        </a>
        <button className="nav-flyout-button nav-icon nav-arrow" aria-label="Ampliar para cambiar el idioma o país" tabIndex="0" style={{visibility: 'visible'}}></button>
    </div>
  )
}
