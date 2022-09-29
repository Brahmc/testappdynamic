import {Section} from "./Section";
import {MyCard} from "./MyCard";

export function Persons(props) {
    const {persons, title} = props;
    return <Section title={title}>
        {persons.map(p => <Person person={p} key={p.name}/>)}
    </Section>
}

function Person(props) {
    const {person} = props;
    return <MyCard>
        <h1>{person.name}</h1>
        <span>{person.age}</span>
        <span>{person.city}</span>
    </MyCard>
}