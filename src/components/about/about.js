import './about.scss'
import LogoWrap from '../header/logo-wrap';

function About({logo, h3, descr, img, main}) {
    const hide = img ? '': 'hide'
    const mw = main ? 'main': ''

    return(
        <>
            <div className={`about ${mw}`}>
                <img src={img} alt="ph1" className={`about__photo ${hide}`}/>
                <div className='about__text'>
                    <h3 className='title_h3'>{h3}</h3>
                    <LogoWrap logo={logo}/>
                    <div className="about__descr">{descr}</div>
                </div>
            </div>
            
            <div className={`about__line ${hide}`}></div>
        </>
    )
}

export default About;