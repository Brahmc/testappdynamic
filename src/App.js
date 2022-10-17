import './App.css';
import 'normalize.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";
import {EventsAndStatePage} from "./pages/EventsAndStatePage";
import {FavNumbersPage} from "./pages/FavNumbersPage";
import {InputPage} from "./pages/InputPage";
import {SearchPersonsPage} from "./pages/SearchPersonsPage";
import {PersonsFromDbPage} from "./pages/PersonsFromDbPage";
import {CarsFromDbPage} from "./pages/CarsFromDbPage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Menu</Tab>
                <Tab>Pics</Tab>
                <Tab>Numbers</Tab>
                <Tab>Cars</Tab>
                <Tab>Persons</Tab>
                <Tab>EventsAndSatePage</Tab>
                <Tab>FavNumbersPage</Tab>
                <Tab>InputPage</Tab>
                <Tab>Search</Tab>
                <Tab>PersonsFromDb</Tab>
                <Tab>CarsFromDb</Tab>
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
            <TabPanel>
                <CarsPage cars={CAR_DATA}/>
            </TabPanel>
            <TabPanel>
                <PersonsPage persons = {PERSON_DATA}/>
            </TabPanel>
            <TabPanel>
                <EventsAndStatePage />
            </TabPanel>
            <TabPanel>
                <FavNumbersPage numbers={NUMBER_DATA} />
            </TabPanel>
            <TabPanel>
                <InputPage />
            </TabPanel>
            <TabPanel>
                <SearchPersonsPage persons={PERSON_DATA}/>
            </TabPanel>
            <TabPanel>
                <PersonsFromDbPage />
            </TabPanel>
            <TabPanel>
                <CarsFromDbPage />
            </TabPanel>
        </Tabs>
    );
}
export default App;
