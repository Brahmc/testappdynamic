import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from '../services/firebase';
import {Persons} from "../components/Persons";

export function PersonsFromDbPage() {
    const query = collection(firestoreDB, 'Persons').withConverter(personConverter);
    const [values, loading, error] = useCollectionData(query);
    console.log({values, loading, error});
    return (
        <Persons title='persons from db' persons={values} open={true} />
    );
}

const personConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}