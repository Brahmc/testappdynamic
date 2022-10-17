import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Cars} from "../components/Cars";


export function CarsFromDbPage() {
    const query = collection(firestoreDB, 'cars').withConverter(carConverter);
    const [values, loading, error] = useCollectionData(query)
    console.log({values, loading, error});
    return (
        <Cars title='cars from db' cars={values} />
    )
}

const carConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}