import {
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
} from "firebase/firestore";
import { dataBase } from "./firebase/config";

export const getProducts = () => {
    return getDocs(collection(dataBase, "items"));
};

export const getProductById = (id) => {
    return getDoc(doc(dataBase, "items", id));
};

export const getProductsByCategoryId = (categoryId) => {
    return getDocs(query(
        collection(dataBase, "items"),
        where('categoryId', '==', categoryId)
    ));
};
