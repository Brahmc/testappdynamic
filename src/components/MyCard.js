import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, children, onClick, className} = props;
    return <Col className="g-3" xs={3} onClick={onClick}>
        <Card className={className}>
            {title ? <h1>{title}</h1> : ''}
            {children}
        </Card>
    </Col>
}