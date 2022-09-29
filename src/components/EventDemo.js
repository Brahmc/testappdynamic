import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function EventDemo(props) {
    return <Section title='events' open={props.open}>
        <EventButton />
        <BootstrapButton />
        <div className='bg-danger text-start' onClick={() => alert('div is clicked')}>
            Dit is een div<br/>
            <a onClick={() => alert('een alert')} href='#'>
                dit is een link met een href
            </a>
            -en-
            <button onClick={(e) => {alert('button is clicked'); e.stopPropagation()}}>Dit is een button</button>
        </div>
    </Section>
}

function EventButton() {
    return <button onClick={() => alert('button is clicked')}>Click me Please!</button>
}

function BootstrapButton() {
    return <Button onClick={() => alert('button is clicked')}>Click me please</Button>
}