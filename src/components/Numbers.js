import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {MyCard} from "./MyCard";

function Number(props) {
    return <MyCard>
        {props.n}
    </MyCard>
}

Number.propTypes = {n: PropTypes.any};

export function Numbers(props) {
    const {title, numbers, open} = props;
    return <Section title={title} open={open}>
        {numbers.map((n, i) => <Number key={i} n={n}/>)}
    </Section>;
}