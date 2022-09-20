import './App.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCard} from "./components/MenuCard";

function App() {
    return (
        <MenuCard products={PRODUCTS_DATA} />
    );
}
export default App;
