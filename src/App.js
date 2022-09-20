import './App.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuProduct} from "./components/MenuProduct";

function App() {
  return (
      <div>
          <h1>Menu</h1>
          {PRODUCTS_DATA.map(p => <MenuProduct product={p} key={p.name} />)}
      </div>

  );
}
export default App;
