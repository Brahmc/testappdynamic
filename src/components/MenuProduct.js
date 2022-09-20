export function MenuProduct(props) {
    const {product} = props;
    if(product?.name) return;
    return <div className={'menuProduct'}><div>{product.name}</div><div>{product.price}</div></div>
}