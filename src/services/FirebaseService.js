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
    const db = dataBase;
    const itemCollection = collection(db, "items");
    return getDocs(itemCollection);
};

export const getProductById = (id) => {
    const db = dataBase;
    const product = doc(db, "items", id);
    return getDoc(product);
};

export const getProductsByCategoryId = (categoryId) => {
    const db = dataBase;
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, where('categoryId', '==', categoryId));
    return getDocs(q);
};
