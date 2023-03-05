import './products.scss'

function ProductsItem({name, price, img, id}) {
    return(
        <div className="products-item">
            <img src={img} alt={`product_${id}`} />
            <span className="products__name">{name}</span>
            <span className='products__price'>{price}$</span>
        </div>
    )
}

export default ProductsItem;