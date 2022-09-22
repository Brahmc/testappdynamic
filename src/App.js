import './App.css';
import 'normalize.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA} />
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
        </Tabs>
    );
}
export default App;
