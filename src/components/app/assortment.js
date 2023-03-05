import Header from '../header/header'
import About from '../about/about';
import Products from '../products/products';
import Footer from '../footer/footer';
import Filter from '../filter/filter';

function Assortment() {
    const best_product = [
        {img:'./img/products/best/third.jpg', name:'Solimo Coffee Beans 2 kg', country:'Brazil', price:'10.73', id:'1'},
        {img:'./img/products/best/third.jpg', name:'Presto Coffee Beans 1 kg', country:'Kenya', price:'15.99', id:'2'},
        {img:'./img/products/best/third.jpg', name:'AROMISTICO Coffee 1 kg', country:'Brazil', price:'6.99', id:'3'},
        {img:'./img/products/best/third.jpg', name:'Solimo Coffee Beans 2 kg', country:'Kenya', price:'10.73', id:'4'},
        {img:'./img/products/best/third.jpg', name:'Presto Coffee Beans 1 kg', country:'Columbia', price:'15.99', id:'5'},
        {img:'./img/products/best/third.jpg', name:'AROMISTICO Coffee 1 kg', country:'Columbia', price:'6.99', id:'6'}
    ]
    const descr2 = <div>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br/> <br/>Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br/>As greatly removed calling pleased improve an. Last ask him cold feel <br/> met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</div> 

    return(
        <>
            <Header bg='img/our-bg.jpg' 
                    color='white' 
                    logo='img/coffee-beans-white.svg' 
                    headerLogo='img/logo-white.svg'
                    h1='Our Coffee'/>
            <About logo='img/coffee-beans.svg'
                   h3='About our beans'
                   descr={descr2}
                   img='img/about.jpg'/>
            <Filter/>
            <Products data={best_product}
                      assortment='true'/>
            <Footer logo='img/coffee-beans.svg' headerLogo='img/logo.svg'/> 
        </>
    )
}

export default Assortment;