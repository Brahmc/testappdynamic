import {Persons} from "../components/Persons";

export function PersonsPage(props) {
    return <Persons title='alle personen' persons={props.persons} />

}