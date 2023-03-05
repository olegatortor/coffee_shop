import Header from '../header/header'
import About from '../about/about';
import Products from '../products/products';
import Footer from '../footer/footer';

function Main() {
    const best_product = [
        {img:'./img/products/best/first.jpg', name:'Solimo Coffee Beans 2 kg', price:'10.73', id:'1'},
        {img:'./img/products/best/second.jpg', name:'Presto Coffee Beans 1 kg', price:'15.99', id:'2'},
        {img:'./img/products/best/third.jpg', name:'AROMISTICO Coffee 1 kg', price:'6.99', id:'3'}
    ]
    const descr1= <div>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br /><br />Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far   recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</div> 

    return(
        <>
            <Header bg='img/main-bg.jpg' 
                    color='white' 
                    logo='img/coffee-beans-white.svg' 
                    headerLogo='img/logo-white.svg' 
                    headerHeight='main'
                    h1='Everything You Love About Coffee'
                    descr={<div>We makes every day full of energy and taste <br/>
                    Want to try our beans?</div>} />
            <About logo='img/coffee-beans.svg'
                   h3='About Us'
                   descr={descr1}
                   main='true'/>
            <Products data={best_product} bg='true'/>
            <Footer logo='img/coffee-beans.svg' headerLogo='img/logo.svg'/>
        </>
    )
}

export default Main;