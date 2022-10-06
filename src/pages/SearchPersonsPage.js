import {Persons} from "../components/Persons";
import {Form} from "react-bootstrap";
import {useState} from "react";

export function SearchPersonsPage(props) {
    const {persons} = props;
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <Form>
                <Form.Label>test input:</Form.Label>
                <Form.Control onChange={(e) => setSearchValue(e.target.value)} />
            </Form>
            <Persons title='Search' persons={persons.filter(p => p.name.toLowerCase().match(searchValue.toLowerCase()))} />
        </>);
}