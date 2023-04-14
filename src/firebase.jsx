import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { toast } from "react-hot-toast";

const firebaseConfig = {
    apiKey: "AIzaSyBYJ6q8xVJay-jAEuinKA-xalwPzWPsKEc",
    authDomain: "news-app-c7cba.firebaseapp.com",
    projectId: "news-app-c7cba",
    storageBucket: "news-app-c7cba.appspot.com",
    messagingSenderId: "759173888750",
    appId: "1:759173888750:web:1d3f596bd7ad97cf70d1ff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        return user;
    } catch (error) {
        console.error(error.message);
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        console.log(error.message)
    }
}

export const logout = async () => {
    try {
        await signOut()
        return true
    } catch (error) {
        console.log(error.message);
    }
}

export default app;