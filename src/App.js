import './App.css';
import {MenuProduct} from "./components/MenuProduct";

function App() {
  return (
      <div>
          <h1>Menu</h1>
          <MenuProduct productName="cola" price={1} />
          <MenuProduct productName="water" price={1} />
          <MenuProduct productName="bier" price={1} />
          <MenuProduct productName="wijn" price={2} />
      </div>

  );
}
export default App;
