

const ItemCount = ({stock, initial, onAdd}) => {
    console.log(stock,initial)
    return (
        <div>
            <p className="prueba2">{stock} {initial}</p>
        </div>
    );
}

export default ItemCount;