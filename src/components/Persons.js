import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {Button} from "react-bootstrap";
import Avatar from "boring-avatars";

export function Persons(props) {
    const {persons, title, open} = props;
    return <Section title={title} open={open}>
        {persons?.map(p => <Person person={p} key={p.id ? p.id : p.name}/>)}
    </Section>
}

function Person(props) {
    const {person} = props;
    return <MyCard title={person.name}>
        <PersonAvatar person={person}/>
        <span>{person.age}</span>
        <span>{person.city}</span>
        {person.buttons?.map((b, index) => <Button key={index} onClick={b.onClick}>{b.name}</Button>)}
    </MyCard>
}

export function PersonAvatar({person}) {
    return <Avatar
        size={50}
        name={person?.id}
        variant="beam"
    />;
}