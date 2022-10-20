import {collection, query, orderBy} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {fireStoreIdConverter} from "../services/fireStoreConverter";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCardPage} from "./MenuCardPage";

export function MenuFromDbPage() {
    const collectionRef = collection(firestoreDB, 'products').withConverter(fireStoreIdConverter);
    const queryRef = query(collectionRef, orderBy("sequence"));
    const [values] = useCollectionData(queryRef);
    return <MenuCardPage products={values} />
}
