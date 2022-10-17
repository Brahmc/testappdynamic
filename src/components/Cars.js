import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {MyCard} from "./MyCard";

const colors = [
    ['blauw', 'blue'],
    ['geel', 'yellow'],
    ['zwart', 'black'],
    ['grijs', 'grey'],
    ['groen', 'green'],
    ['rood', 'red']
];
const colorMap = new Map(colors);

function Car(props) {
    const {car} = props;
    return <MyCard title={car.name}>
        {car.brand ? <span>merk: {car.brand}</span> : null}
        {car.type ? <span>type: {car.type}</span> : null}
        {car.color ? <span style={{
            background: colorMap.get(car.color),
            color: colorMap.get(car.color) === "black" ? "white" : ""
        }}>kleur: {car.color}</span> : null}
    </MyCard>
}

Car.propTypes = {car: PropTypes.any};

export function Cars(props) {
    const {cars, title} = props;
    return <Section title={title} open={true}>
        {cars?.map(car => <Car key={car.id} car={car}/>)}
    </Section>;
}