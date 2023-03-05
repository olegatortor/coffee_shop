import './products.scss'
import ProductsItem from './products-item';

function Products({data, bg}) {
    const list = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <ProductsItem key={id}
                          {...itemProps}
                          id={id}/>
        )
    })
    const clazz = bg ? 'clazz': ''

    return (
        <div className={`products ${clazz}`}>
            <div className="container">
                <h3 className='title_h3'>Our best</h3>
                <div className="products__wrapper">
                    {list}
                </div>
            </div>
        </div>
    )
}

export default Products;