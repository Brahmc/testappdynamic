import {collection, query, where, orderBy} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {fireStoreIdConverter} from "../services/fireStoreConverter";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCardPage} from "./MenuCardPage";

export function MenuFromDbPage() {
    const collectionRef = collection(firestoreDB, 'products').withConverter(fireStoreIdConverter);
    const queryRef = query(collectionRef, where("price", "==", 1), orderBy("sequence"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({error});
    return <MenuCardPage products={values} />
}
