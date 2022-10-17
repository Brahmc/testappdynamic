import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from '../services/firebase';

export function PersonsFromDbPage() {
    const query = collection(firestoreDB, 'Persons');
    const [values, loading, error] = useCollectionData(query);
    console.log({values, loading, error});
    return (
        <div>Persons from db</div>
    )
}