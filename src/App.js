import './App.css';
import 'normalize.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";

function App() {
    return (<>
        <MenuCardPage products={PRODUCTS_DATA} />
        <PicturesPage/>
        </>
    );
}
export default App;
