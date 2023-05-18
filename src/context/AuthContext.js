import { useState, createContext, useEffect, useContext } from "react";
import { showToaster } from "../components/shared/UxResources/Toaster";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup
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

    const signUp = async (credentials) => {
        const { email, password } = credentials;

        const { user: newUser } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await sendEmailVerification(newUser);
    };

    const login = (credentials) =>
        signInWithEmailAndPassword(auth, credentials.email, credentials.password);


    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider);
    }

    const logout = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, loading, signUp, login, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
