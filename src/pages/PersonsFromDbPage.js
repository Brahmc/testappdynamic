import {collection, query, orderBy, addDoc, updateDoc} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from '../services/firebase';
import {Persons} from "../components/Persons";
import {useState} from "react";
import {MyInput} from "../components/MyInput";
import {fireStoreIdConverter} from "../services/fireStoreConverter";
import {MyButton} from "../components/MyButton";

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'Persons').withConverter(fireStoreIdConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({loading, error})
    const [search, setSearch] = useState('');
    const addDummyPerson = async () => {
        const newPerson = { name: "Dummy", age: 8000, city: "Antwerpen", _validation: { age: (e) => e < 0 ? 0 : e > 100 ? 100 : Number(e)} };
        const docRef = await addDoc(collectionRef, newPerson);
        console.log("Document written with ID: " + docRef.id + " was added.");
    }

    const incrementAllAges = async (amount) => {
        const results = values.map(async p => await updateDoc(p.ref, {age: p.age + amount}));
        await Promise.all(results);
        console.log("alle leeftijden werden met " + amount + " verhoogd");
    }

    return (
        <>
            <MyInput label='Search:' onChange={(e) => setSearch(e.target.value)} />
            <MyButton onClick={() => addDummyPerson()}>+Dummy</MyButton>
            <MyButton onClick={() => incrementAllAges(1)}>Age+1</MyButton>
            <MyButton onClick={() => incrementAllAges(-1)}>Age-1</MyButton>
            <Persons title='persons from db' persons={values?.filter(p => p.name.toLowerCase().match(search.toLowerCase()))} open={true} />
        </>

    );
}