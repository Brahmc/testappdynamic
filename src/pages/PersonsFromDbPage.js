import {collection} from 'firebase/firestore';
import {useCollectionData, useCollectionDataOnce} from 'react-firebase-hooks/firestore';
import {firestoreDB} from '../services/firebase';
import {Persons} from "../components/Persons";
import {useState} from "react";
import {MyInput} from "../components/MyInput";

export function PersonsFromDbPage() {
    const query = collection(firestoreDB, 'Persons').withConverter(personConverter);
    const [values, loading, error] = useCollectionData(query);
    console.log({values, loading, error});
    const [search, setSearch] = useState('');
    return (
        <>
            <Persons title='persons from db' persons={values?.filter(p => p.name.toLowerCase().match(search.toLowerCase()))} open={true} />
            <MyInput label='Search:' onChange={(e) => setSearch(e.target.value)} />
        </>

    );
}

const personConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}