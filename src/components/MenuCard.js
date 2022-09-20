import {MenuProduct} from "./MenuProduct";
import PropTypes from 'prop-types';

export function MenuCard(props) {
    const {products} = props;
    return (<div>
                <h1>Menu</h1>
                {products.map(p => <MenuProduct product={p} key={p.name} />)}
            </div>
    );
}
MenuCard.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number
    })).isRequired
}