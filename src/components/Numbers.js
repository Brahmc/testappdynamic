import {Card} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {Section} from "./Section";

export function Numbers(props) {
    const {title, numbers} = props;
    return (
        <Section
        title={title}
        content={
            numbers.map((n, i) =>
            <Col className='g-3' xs={3} key={i}>
                <Card >{n}</Card>
            </Col>)}
        />);
}