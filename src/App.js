import './App.css';
import {MenuProduct} from "./components/MenuProduct";

function App() {
  return (
      <div>
          <h1>Menu</h1>
          <MenuProduct productName="cola" />
          <MenuProduct productName="water" />
          <MenuProduct productName="bier" />
          <MenuProduct productName="wijn" />
      </div>

  );
}
export default App;
