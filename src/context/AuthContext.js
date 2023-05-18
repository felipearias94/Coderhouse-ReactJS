import { useState, createContext, useEffect, useContext } from "react";
import { showToaster } from "../components/shared/UxResources/Toaster";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../services/firebase/config";

export const AuthContext = createContext({ user: {} });

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("There is no Auth Provider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        console.log(user);

        return () => unsubscribe();
    }, []);

    const signUp = (credentials) =>
        createUserWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password,
        );

    const login = (credentials) =>
        signInWithEmailAndPassword(auth, credentials.email, credentials.password);

    const sendVerificationEmail = () => sendEmailVerification(user)

    const logout = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, loading, signUp, sendVerificationEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
