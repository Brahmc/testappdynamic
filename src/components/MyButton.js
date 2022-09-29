import {Button} from "react-bootstrap";

export function MyButton(props) {
    return <Button className='d-flex w-auto' onClick={props.onClick}>{props.children}</Button>
}