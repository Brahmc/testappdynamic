function ProductSize(props) {
    const {product} = props;
    if(!product.size) return;
    return <span className="productSize" style={{color: "blue", textDecoration: "underline"}}> - {product.size}</span>;
}

function ProductNote(props) {
    const {product} = props;
    if(!product.note) return;
    return <span className='note'>{product.note}</span>
}

export function MenuProduct(props) {
    const {product} = props;
    if(!product?.name) return;
    return (
        <div className='productLine'>
            <div className='menuProduct'>
                <div>
                    {product.name}
                    <ProductSize product={product}/>
                </div>
                <div>{product.price}</div>
            </div>
            <ProductNote product={product} />
        </div>
    );
}