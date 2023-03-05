import './footer.scss'
import HeaderLinks from '../header/header-link'
import LogoWrap from '../header/logo-wrap'

function Footer({logo, headerLogo}) {
    return(
        <footer className='footer'>
            <HeaderLinks headerLogo={headerLogo}/>
            <LogoWrap logo={logo}/>
        </footer>
    )
}

export default Footer