import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {Button} from "react-bootstrap";

export function Persons(props) {
    const {persons, title, open} = props;
    return <Section title={title} open={open}>
        {persons?.map(p => <Person person={p} key={p.id ? p.id : p.name}/>)}
    </Section>
}

function Person(props) {
    const {person} = props;
    return <MyCard title={person.name}>
        <span>{person.age}</span>
        <span>{person.city}</span>
        {person.buttonName ? <Button onClick={person.buttonOnClick}>{person.buttonName}</Button> : ''}
    </MyCard>
}