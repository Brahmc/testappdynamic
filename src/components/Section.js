import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function Section(props) {
    const {title, children} = props;
    return (<div className='bg-info rounded mb-4' style={{textAlign: 'center'}}>
        <Container className='g-3 p-3 '>
            <Row>
                <h2>{title}</h2>
                <Container className='g-3 p-3 '>
                    <Row>
                        {children}
                    </Row>
                </Container>
            </Row>
        </Container>
    </div>)
}