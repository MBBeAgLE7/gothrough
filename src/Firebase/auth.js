import { auth, googleProvider } from "./config";
import { signInWithEmailAndPassword,doCreateUserWithEmailAndPassword,signOut,doSignInWithEmailAndPassword , createUserWithEmailAndPassword} from "./Firebase/auth";

export const doSignInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const doSignOut = async () => {
    return await signOut(auth);
};

export const doSignInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
};
