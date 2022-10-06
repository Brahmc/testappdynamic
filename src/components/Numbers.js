import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {MyCard} from "./MyCard";

function Number(props) {
    const {n, onSelect, isMarked} = props;
    return <MyCard className={isMarked ? 'bg-warning' : ''} onClick={onSelect ? () => onSelect(n) : undefined}>
        {n}
    </MyCard>
}

Number.propTypes = {n: PropTypes.any};

export function Numbers(props) {
    const {title, numbers, open, onSelectNumber, markedNumber} = props;
    return <Section title={title} open={open}>
        {numbers.map((n, i) => <Number onSelect={onSelectNumber} n={n} isMarked = {n === markedNumber} key={i} />)}
    </Section>;
}