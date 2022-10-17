import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Cars} from "../components/Cars";
import {fireStoreIdConverter} from "../services/fireStoreConverter";


export function CarsFromDbPage() {
    const query = collection(firestoreDB, 'cars').withConverter(fireStoreIdConverter);
    const [values, loading, error] = useCollectionData(query)
    console.log({values, loading, error});
    return (
        <Cars title='cars from db' cars={values} />
    )
}