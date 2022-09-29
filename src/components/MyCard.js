import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";

export function MyCard(props) {
    return <Col className="g-3" xs={3}>
        <Card>{props.children}</Card>
    </Col>
}