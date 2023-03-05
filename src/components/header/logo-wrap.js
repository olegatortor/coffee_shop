function LogoWrap({color, logo, hide}) {
    const light = color ? 'light': '';

    return(
        <div className={`logo__wrapper ${hide}`}>
            <div className={`line ${light}`}></div>
            <img src={logo} alt="logo_s"/>
            <div className={`line ${light}`}></div>
        </div>
    )
}

export default LogoWrap;