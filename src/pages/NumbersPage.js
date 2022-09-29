import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    return (
        <>
            <Numbers title='alle getallen' numbers={props.numbers} open={true}/>
            <Numbers title={'getallen > 6'} numbers={props.numbers.filter(n => n > 6)}/>
            <Numbers title={'getallen verdubbeld'} numbers={props.numbers.map(n => n*2)}/>
        </>
    );
}