import {
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    runTransaction,
} from "firebase/firestore";
import { dataBase } from "./firebase/config";
import { showToaster } from "../components/shared/UxResources/Toaster";

export const getProducts = () => {
    return getDocs(collection(dataBase, "items"));
};

export const getProductById = (id) => {
    return getDoc(doc(dataBase, "items", id));
};

export const getProductsByCategoryId = (categoryId) => {
    return getDocs(
        query(collection(dataBase, "items"), where("categoryId", "==", categoryId)),
    );
};

export const endPurchase = (purchaseData) => {
    updateStock(purchaseData.products);
    return addDoc(collection(dataBase, "orders"), purchaseData);
};

const updateStock = (products) => {
    products.forEach(async (element) => {
        const prodRef = doc(dataBase, "items", element.item.id);
        try {
            await runTransaction(dataBase, async (transaction) => {
                const itemDoc = await transaction.get(prodRef);
                const newStock = itemDoc.data().stock - element.quantity;
                transaction.update(prodRef, { stock: newStock });
            });
        } catch (e) {
            throw e
        }

    });
};
