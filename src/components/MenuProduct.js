import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductSize(props) {
    const {product} = props;
    if(!product.size) return;
    return <span style={{color: "blue", textDecoration: "underline", fontSize: '.7em'}}> - {product.size}</span>;
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
        <Row className='mb-2'>
            <Row>
                <Col>
                    {product.name}
                    <ProductSize product={product}/>
                </Col>
                <Col >{product.price}€</Col>
            </Row>
            <ProductNote product={product} />
        </Row>
    );
}