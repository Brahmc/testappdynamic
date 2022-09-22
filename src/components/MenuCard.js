import {MenuProduct} from "./MenuProduct";
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

export function MenuCard(props) {
    const {products} = props;
    return (<div>
                <h1>Menu</h1>
            <Container>
                {products.map(p => <MenuProduct product={p} key={p.name} />)}
            </Container>
            </div>
    );
}
MenuCard.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number
    })).isRequired
}