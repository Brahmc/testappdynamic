import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, children} = props;
    return <Col className="g-3" xs={3} onClick={() => alert(title ? title : children)}>
        <Card>
            {title ? <h1>{title}</h1> : ''}
            {children}
        </Card>
    </Col>
}