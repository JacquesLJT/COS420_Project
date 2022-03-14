import firebase from 'react-native-firebase';
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     GoogleAuthProvider,
//     signInWithPopup,
//     FacebookAuthProvider,
//   } from "firebase/auth";
//   import { auth } from "../firebase";
  
export function addTextbook(product, addComplete){
    
    firebase.firestore().collection('Textbooks').add({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        location: product.location,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
}
  
export async function getTextbook(textbookRetreived){
    var textbookList = [];

    var snapshot = await firebase.firestore()
    .collection('Textbooks')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
        textbookList.push(doc.data());
    });
    textbookRetreived(textbookList);
}