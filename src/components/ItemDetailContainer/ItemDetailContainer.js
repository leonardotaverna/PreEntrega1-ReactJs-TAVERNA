import "./ItemDetalContainer.css";
import { useState, useEffect } from "react";
import { getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetalContainer = () => {
    const [product, setProduct] = useState (null)

    useEffect (() => {
        getProductById ("1")
        .then (response => {
            setProduct (response)
        })
        .catch (error => {
            console.error (error)
        })
    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetalContainer