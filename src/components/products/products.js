import './products.scss'
import ProductsItem from './products-item';

function Products({data, bg, assortment}) {
    const clazz = bg ? 'clazz': ''
    const prod = assortment ? 'hide': ''
    const list = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <ProductsItem key={id}
                          {...itemProps}
                          id={id}
                          blur={clazz}/>
        )
    })

    return (
        <div className={`products ${clazz}`}>
            <div className="container">
                <h3 className={`title_h3 ${prod}`}>Our best</h3>
                <div className={`products__wrapper ${clazz}`}>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default Products;