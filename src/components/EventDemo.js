import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function EventDemo(props) {
    return <Section title='events'>
        <EventButton />
        <BootstrapButton />
    </Section>
}

function EventButton(props) {
    return <button onClick={() => alert('button is clicked')}>Click me Please!</button>
}

function BootstrapButton() {
    return <Button onClick={() => alert('button is clicked')}>Click me please</Button>
}