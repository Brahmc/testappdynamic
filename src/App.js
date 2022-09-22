import './App.css';
import 'normalize.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NUMBER_DATA, PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumbersPage} from "./pages/NumbersPage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Menu</Tab>
                <Tab>Pics</Tab>
                <Tab>Numbers</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA} />
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
            <TabPanel>
                <NumbersPage numbers={NUMBER_DATA}/>
            </TabPanel>
        </Tabs>
    );
}
export default App;
