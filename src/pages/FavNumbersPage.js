import {Numbers} from "../components/Numbers";
import {useState} from "react";

export function FavNumbersPage(props) {
    const [favoriteNumber, setFavoriteNumber] = useState(undefined);
    return (
        <>
            <Numbers title='alle getallen' numbers={[...new Set(props.numbers)]} markedNumber={favoriteNumber} onSelectNumber = {n => setFavoriteNumber(n)}/>
            <div>Mijn favorite getal is ({(favoriteNumber === undefined) ? 'Niet gekozen' : favoriteNumber})</div>
        </>);
}