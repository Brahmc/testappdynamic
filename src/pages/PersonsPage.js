import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";
import {Cities} from "../components/Cities";

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <>
            <Persons title='alle personen' persons={persons} />
            <Persons title='alle personen volgens leeftijd' persons={persons.slice().sort((p, p2) => p2.age - p.age)}/>
            <Numbers title='leeftijden' numbers={persons.map(p => p.age)}/>
            <Numbers title='unieke leeftijden gesorteerd' numbers={[...new Set(persons.map(p => p.age))].sort((n, n2) => n2 - n)}/>
            <Cities title='steden val alle personen' cities={function(){
                var cityNames = [];
                var cities = [];
                persons.forEach(p => {
                    if(!cityNames.includes(p.city)) {
                        cityNames.push(p.city);
                        cities.push({name: p.city, count: 1});
                    }
                    else cities.find(c => c.name === p.city).count++;
                });
                return cities;
            }()}/>
        </>);

}