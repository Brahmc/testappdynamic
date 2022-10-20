import {collection, query, orderBy} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from '../services/firebase';
import {Persons} from "../components/Persons";
import {useState} from "react";
import {MyInput} from "../components/MyInput";
import {fireStoreIdConverter} from "../services/fireStoreConverter";

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'Persons').withConverter(fireStoreIdConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({loading, error})
    const [search, setSearch] = useState('');
    return (
        <>
            <Persons title='persons from db' persons={values?.filter(p => p.name.toLowerCase().match(search.toLowerCase()))} open={true} />
            <MyInput label='Search:' onChange={(e) => setSearch(e.target.value)} />
        </>

    );
}