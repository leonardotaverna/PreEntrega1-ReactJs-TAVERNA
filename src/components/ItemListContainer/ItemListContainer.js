import "./ItemListContainer.css";
import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../../services/firebase/firebaseConfig";


const ItemListContainer = ( {greeting} ) => {
    const[products, setProducts] = useState ([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        getProducts()
        
        asyncFunc (categoryId)
            .then (response => {
                setProducts (response)
            })

            .catch (error => {
                console.error (error)
            })    
    }, [categoryId])

    return(
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer