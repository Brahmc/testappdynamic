import {Card} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {Section} from "./Section";
import * as PropTypes from "prop-types";

function Number(props) {
    return <Col className="g-3" xs={3}>
        <Card>{props.n}</Card>
    </Col>;
}

Number.propTypes = {n: PropTypes.any};

export function Numbers(props) {
    const {title, numbers} = props;
    return <Section title={title}>
        {numbers.map((n, i) => <Number key={i} n={n}/>)}
    </Section>;
}