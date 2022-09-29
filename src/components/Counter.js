import {useState} from "react";
import {MyButton} from "./MyButton";

export function Counter(props) {
    const [counterValue, setCounterValue] = useState(0);
    return <>
        <div>de waarde van {props.name} is {counterValue}</div>
        <MyButton onClick={() => setCounterValue(0)}>CLEAR</MyButton>
        <MyButton onClick={() => setCounterValue(prevState => prevState - 1)}>-</MyButton>
        <MyButton onClick={() => setCounterValue(prevState => prevState + 1)}>+</MyButton>
    </>
}