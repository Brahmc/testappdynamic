import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {useState} from "react";
import {MyButton} from "./MyButton";

export function Section(props) {
    const {title, children, open} = props;
    const [isOpen, setIsOpen] = useState(open);
    return (<div className='bg-info rounded mb-4' style={{textAlign: 'center'}}>
        <Container className='g-3 p-3 '>
            <Row>
                <h2>{title}</h2><MyButton onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}</MyButton>
                    <SectionContent isOpen={isOpen}>{children}</SectionContent>
            </Row>
        </Container>
    </div>)
}

function SectionContent(props) {
    if(props.isOpen)
        return <Container className='g-3 p-3 '>
            <Row>
                {props.children}
            </Row>
        </Container>
}