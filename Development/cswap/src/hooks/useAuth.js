import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

//Initialize Firebase
firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const AuthContext = createContext();

//Hook for child components to get the current auth object ...
//... and re-render when it changes
export const useAuth = () => {
    return useContext(AuthContext);
}

//Provider hook that creates auth object and handles state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    const sendSignInLinkToEmail = (email) => {
        return firebase.auth().sendSignInLinkToEmail(email, {
            url: 'http://localhost:3000/confirm',
            handleCodeInApp: true,
        })
        .then(() => {
            return true
        });
    }

    const signInWithEmailLink = (email, code) => {
        return firebase.auth().signInWithEmailLink(email, code)
        .then(result => {
            setUser(result.user);
            return true;
        });
    }

    const logout = () => {
        return firebase.auth().signOut()
        .then(() => {
            setUser(null);
        });
    }

    //Subscribe to user on mount
    //this sets state in the callback it will cause ...
    //... component that utilizes this hook to re-render with the ...
    //... latest auth object
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStatechanged(user => {
            setUser(user)
            setIsAuthenticating(false)
        });

        //Clean up subscription on unmount
        return () => unsubscribe();
    }, []);

    const values = {
        user,
        isAuthenticating,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        logout
    };

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );

}