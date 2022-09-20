import './App.css';

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

function MenuProduct(props) {
    const {productName} = props;
    return <div>{productName}</div>
}

export default App;
