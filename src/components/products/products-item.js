import './products.scss'

function ProductsItem({name, country, price, img, id, clazz}) {
    const blur = clazz === 'clazz' ? '': 'blur';
    return(
        <div className={`products-item ${blur}`}>
            <img src={img} alt={`product_${id}`} />
            <span className="products__name">{name}</span>
            <span className="products__country">{country}</span>
            <span className='products__price'>{price}$</span>
        </div>
    )
}

export default ProductsItem;