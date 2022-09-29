import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

export function StateDemo() {
    return <Section title="state">
        <DemoValue />
        <Counter name='counter1'/>
        <Counter name='counter2'/>
        <OnOffDemo />
    </Section>
}

function DemoValue() {
    const [demoValue, setDemoValue] = useState(0);
    return <>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <MyButton onClick={() => setDemoValue(0)}>SET 0</MyButton>
        <MyButton onClick={() => setDemoValue(77)}>SET 77</MyButton>
        <MyButton onClick={() => setDemoValue(184)}>SET 184</MyButton>
    </>;
}