import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {fireStoreIdConverter} from "../services/fireStoreConverter";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCardPage} from "./MenuCardPage";

export function MenuFromDbPage() {
    const query = collection(firestoreDB, 'products').withConverter(fireStoreIdConverter);
    const [values] = useCollectionData(query);
    return <MenuCardPage products={values} />
}
