import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, doc, getDoc, query, where} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDy2EhNtzDKzc7SCeetHfCmXbQuN1vLPZo",
    authDomain: "react-blockbuster-x.firebaseapp.com",
    projectId: "react-blockbuster-x",
    storageBucket: "react-blockbuster-x.appspot.com",
    messagingSenderId: "212043507629",
    appId: "1:212043507629:web:d7e9f2f28550096b326324"
}

const firebaseApp = initializeApp (firebaseConfig);

export const db = getFirestore (firebaseApp);

export async function getProducts (){
    const productsCollectionRef = collection (db, "products");
    const productsSnapshot = await getDocs (productsCollectionRef);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map (
        (doc) => {
         return {...doc.data(), id: doc.id}
        }
    ); 
    
    return dataDocs;
}

export async function getProductById (idUrl) {
    const docRef = doc (db, "products", idUrl);
    const docSnap = await getDoc (docRef);
    return { id:docSnap.id, ...docSnap.data() }
}

export async function getProductsByCategory (idCategory) {
    const productsCollectionRef = collection (db, "products");
    const q = query (productsCollectionRef, where("category", "==", idCategory));
    const productsSnapshot = await getDocs (q);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map (
        (doc) => {
         return {...doc.data(), id: doc.id}
        }
    );
    
    return dataDocs;
}