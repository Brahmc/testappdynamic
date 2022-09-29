import {Section} from "./Section";
import {MyCard} from "./MyCard";

export function Cities(props) {
    const {cities, title} = props;
    return <Section title={title}>
        {cities.map(c => <City name={c.name} key={c.name} numberOfPersons={c.count} />)}
    </Section>;
}

function City(props) {
    const {name, numberOfPersons} = props;
    return <MyCard title={name}>
        <span>{numberOfPersons}</span>
    </MyCard>;
}