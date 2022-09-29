import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0);
    return <Section title="state">
        <DemoValue demoValue={demoValue} setDemoValue={setDemoValue} />
        <Counter name='counter1'/>
        <Counter name='counter2'/>
        <OnOffDemo />
        <DemoValueReadOnly demoValue={demoValue} />
        <DemoValueIncrement setDemoValue={setDemoValue}/>
    </Section>
}

function DemoValue(props) {
    const {demoValue, setDemoValue} = props;
    return <>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <MyButton onClick={() => setDemoValue(0)}>SET 0</MyButton>
        <MyButton onClick={() => setDemoValue(77)}>SET 77</MyButton>
        <MyButton onClick={() => setDemoValue(184)}>SET 184</MyButton>
    </>;
}

function DemoValueReadOnly(props) {
    return <div>Demo value is {props.demoValue}</div>
}

function DemoValueIncrement(props) {
    return <MyButton onClick={() => props.setDemoValue(prevValue => prevValue + 1)}>demoValue increment</MyButton>;
}