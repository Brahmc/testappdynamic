export function MenuProduct(props) {
    const {productName, price} = props;
    return <div className={'menuProduct'}><div>{productName}</div><div>{price}</div></div>
}