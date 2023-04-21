import {
    collection,
    getDocs,
    getFirestore,
    doc,
    getDoc,
    query,
    where,
} from "firebase/firestore";

export const getProducts = () => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    return getDocs(itemCollection);
};

export const getProductById = (id) => {
    const db = getFirestore();
    const product = doc(db, "items", id);
    return getDoc(product);
};

export const getProductsByCategoryId = (categoryId) => {
    const db = getFirestore();
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, where('categoryId', '==', categoryId));
    return getDocs(q);
};
