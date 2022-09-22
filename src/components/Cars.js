import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import {Section} from "./Section";

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
    return (
        <Section
            title={title}
            content={
            cars.map(car =>
            <Col className='g-3' xs={3} key={car.id}>
                <Card >
                    <h1>{car.name}</h1>
                    {car.brand ? <span>merk: {car.brand}</span> : null}
                    {car.type ? <span>type: {car.type}</span> : null}
                    {car.color ? <span style={{background: colorMap.get(car.color), color: colorMap.get(car.color) === 'black' ? 'white' : ''}}>kleur: {car.color}</span> : null}
                </Card>
            </Col>)}
        />
        );
}