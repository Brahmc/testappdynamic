import {Form} from "react-bootstrap";

export function MyInput(props) {
    const {label, value, onChange} = props;
    return(
        <div className="m-3">
            <Form>
                <Form.Label>{label}</Form.Label>
                <Form.Control value={value} onChange={onChange} />
            </Form>
        </div>);
}