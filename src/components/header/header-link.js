import './header.scss'

function HeaderLinks({headerLogo}) {
    return(
        <ul className="header__links">
            <li><img src={headerLogo} alt="logo" /><a href="#">Coffee house</a></li>
            <li><a href="#">Our coffee</a></li>
            <li><a href="#">For your pleasure</a></li>
        </ul>
    )
}

export default HeaderLinks;