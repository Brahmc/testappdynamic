import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import Col from "react-bootstrap/Col";

export function Numbers(props) {
    const {title, numbers} = props;
    return (
        <div className='bg-info rounded mb-4' style={{textAlign: 'center'}}>
            <h2>{title}</h2>
            <Container className='g-3 p-3 '>
            <Row>
                {numbers.map((n, i) =>
                    <Col className='g-3' xs={3} key={i}>
                    <Card >{n}</Card>
                    </Col>)
                }
            </Row>
        </Container>
        </div>
);
}