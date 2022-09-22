import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const colors = [
    ['blauw', 'blue'],
    ['geel', 'yellow'],
    ['zwart', 'black'],
    ['grijs', 'grey'],
    ['groen', 'green'],
    ['rood', 'red']
];
const colorMap = new Map(colors);

export function Cars(props) {
    const {cars, title} = props;
    return <div className='bg-info rounded mb-4' style={{textAlign: 'center'}}>
        <h2>{title}</h2>
        <Container className='g-3 p-3 '>
            <Row>
                {cars.map(car =>
                <Col className='g-3' xs={3} key={car.id}>
                    <Card >
                        <h1>{car.name}</h1>
                        {car.brand ? <span>merk: {car.brand}</span> : null}
                        {car.type ? <span>type: {car.type}</span> : null}
                        {car.color ? <span style={{background: colorMap.get(car.color), color: colorMap.get(car.color) === 'black' ? 'white' : ''}}>kleur: {car.color}</span> : null}
                    </Card>
                </Col>
                )}
            </Row>
        </Container>
    </div>
}