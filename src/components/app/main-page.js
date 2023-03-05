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

    return(
        <>
            <Header bg='img/main-bg.jpg' color='white' logo='img/coffee-beans-white.svg' headerLogo='img/logo-white.svg'/>
            <About logo='img/coffee-beans.svg'/>
            <Products data={best_product} bg='true'/>
            <Footer logo='img/coffee-beans.svg' headerLogo='img/logo.svg'/>
        </>
    )
}

export default Main;