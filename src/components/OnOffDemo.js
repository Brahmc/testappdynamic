import {useState} from "react";
import {MyButton} from "./MyButton";

export function OnOffDemo() {
    const [isOn, setIsOnValue] = useState(false);
    return <>
        <div>Huidige waarde van isOn is {isOn ? 'ON' : 'OFF'}</div>
        <MyButton onClick={() => setIsOnValue(true)}>ON</MyButton>
        <MyButton onClick={() => setIsOnValue(false)}>OFF</MyButton>
        <MyButton onClick={() => setIsOnValue(!isOn)}>toggle</MyButton>
    </>
}