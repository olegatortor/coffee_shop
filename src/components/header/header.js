import HeaderLinks from './header-link'
import LogoWrap from './logo-wrap'

import './header.scss'

function Header({bg, color, logo, headerLogo}) {
    return(
        <div className='header' style={{backgroundImage:`url("${bg}")`}}>
            <div className="container">
                <HeaderLinks headerLogo={headerLogo}/>

                <h1 className="title">Everything You Love About Coffee</h1>

                <LogoWrap color={color} logo={logo}/>

                <h2 className="title__descr">We makes every day full of energy and taste <br /> Want to try our beans?</h2>
                <button className='more'>More</button>
            </div>
        </div>
    )
}

export default Header;