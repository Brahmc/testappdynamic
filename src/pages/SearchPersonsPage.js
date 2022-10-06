import {Persons} from "../components/Persons";
import {useState} from "react";
import {MyInput} from "../components/MyInput";

export function SearchPersonsPage(props) {
    const {persons} = props;
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <MyInput label='test input:' onChange={(e) => setSearchValue(e.target.value)} />
            <Persons title='Search' persons={persons.filter(p => p.name.toLowerCase().match(searchValue.toLowerCase()))} />
        </>);
}