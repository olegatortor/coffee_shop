import HeaderLinks from './header-link'
import LogoWrap from './logo-wrap'

import './header.scss'

function Header({bg, color, logo, headerLogo, headerHeight, h1, descr}) {
    const bigHeader = headerHeight ? 'header_big': '';
    const hide = descr ? '': 'hide';

    return(
        <div className={`header ${bigHeader}`} style={{backgroundImage:`url("${bg}")`}}>
            <div className="container">
                <HeaderLinks headerLogo={headerLogo}/>

                <h1 className="title">{h1}</h1>

                <LogoWrap color={color} logo={logo} hide={hide}/>

                <h2 className="title__descr">{descr}</h2>
                <button className={`more ${hide}`}>More</button>
            </div>
        </div>
    )
}

export default Header;