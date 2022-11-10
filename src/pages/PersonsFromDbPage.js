import {collection, query, orderBy, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from '../services/firebase';
import {Persons} from "../components/Persons";
import {useState} from "react";
import {MyInput} from "../components/MyInput";
import {fireStoreIdConverter} from "../services/fireStoreConverter";
import {MyButton} from "../components/MyButton";
import {PersonFormEdit} from "../components/PersonFormEdit";
import {MdDelete, MdEdit} from "react-icons/md";

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'Persons').withConverter(fireStoreIdConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({loading, error})
    const [search, setSearch] = useState('');
    const [personSelected, setPersonSelected] = useState(undefined);

    const addDummyPerson = async () => {
        const newPerson = { name: "Dummy", age: 8000, city: "Antwerpen", _validation: { age: (e) => e < 0 ? 0 : e > 100 ? 100 : Number(e)} };
        try {
            const docRef = await addDoc(collectionRef, newPerson);
            console.log("Document written with ID: " + docRef.id + " was added.");
        } catch (e) {
            console.log("Document could not be added " + e.toString());
        }

    }

    const incrementAllAges = async (amount) => {
        try {
            const results = values.map(async p => await updateDoc(p.ref, {age: p.age + amount}));
            await Promise.all(results);
            console.log("alle leeftijden werden met " + amount + " verhoogd");
        } catch (e) {
            console.log("Something went wrong incrementing all ages : " + e.toString());
        }
    }

    const deletePerson = async (person) => {
        try{
            await deleteDoc(person.ref);
            console.log("Document written with id " + person.id + " was deleted");
        } catch (e) {
            console.log("Document could not be deleted : " + e.toString());
        }
    }

    const savePerson = async (person) => {
        try {
           await updateDoc(person.ref, person);
            console.log("Person met id " + person.id + " was edited");
        } catch (e) {
            console.log("Something went wrong editing person with id " + person.id + " " + e.toString());
        }
    }

    return (
        <>
            <PersonFormEdit person={personSelected} setPersonSelected={setPersonSelected} savePerson={savePerson} />
            <MyInput label='Search:' onChange={(e) => setSearch(e.target.value)} />
            <MyButton onClick={() => addDummyPerson()}>+Dummy</MyButton>
            <MyButton onClick={() => incrementAllAges(1)}>Age+1</MyButton>
            <MyButton onClick={() => incrementAllAges(-1)}>Age-1</MyButton>
            <Persons title='persons from db'
                     persons={
                         values?.filter(p => p.name.toLowerCase().match(search.toLowerCase()))
                         .map(p => ({...p, buttons: [
                                 {name: <MdDelete />, onClick: () => deletePerson(p)},
                                 {name: <MdEdit/>, onClick: () => setPersonSelected(p)}]
                            })
                         )}
                     open={true} />
        </>

    );
}