import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

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

export async function createOrder(data) {
    const ordersCollectionRef = collection(db, "orders");
  
    const response = await addDoc(ordersCollectionRef, data);
    return response.id;
}
  
// export async function createOrderWithStockUpdate(data) {
//     const ordersCollectionRef = collection(db, "orders");
//     const batch = writeBatch(db);
//     const { items } = data;
  
//     for (let itemInCart of items) {
//       const refDoc = doc(db, "products", itemInCart.id);
//       const docSnap = await getDoc(refDoc);
  
//       const { stock } = docSnap.data();
//       console.log(stock);
  
//       const stockToUpdate = stock - itemInCart.count;
//       if (stockToUpdate < 0) {
//         throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
//       } 
//       else {
//         const docRef = doc(db, "products", itemInCart.id);
//         batch.update(docRef, { stock: stockToUpdate });
//       }
//     }
  
//     await batch.commit();
//     const response = await addDoc(ordersCollectionRef, data);
  
//     return response.id;
// }