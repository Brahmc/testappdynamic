import {useState} from "react";
import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0);

    return <Section title="state">
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <MyButton onClick={() => setDemoValue(0)}>SET 0</MyButton>
        <MyButton onClick={() => setDemoValue(77)}>SET 77</MyButton>
        <MyButton onClick={() => setDemoValue(184)}>SET 184</MyButton>
    </Section>
}

function MyButton(props) {
    return <Button className='d-flex w-auto' onClick={props.onClick}>{props.children}</Button>
}