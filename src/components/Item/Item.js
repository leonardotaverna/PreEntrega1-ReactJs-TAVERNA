import "./Item.css"

const Item =({id, name, price, stock, category,img}) => {
    return (
        <article className="CardItem">
            <picture>
                <img src ={img} alt={name} className="ItemImg"/>
            </picture>

            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Descargas disponibles: {stock}
                </p>
            </section>

            <footer className="ItemFooter">
                <button className="Option">
                    Ver detalle
                </button>
            </footer>
        </article>
    )
}

export default Item;
