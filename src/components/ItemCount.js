

const ItemCount = ({stock, initial, onAdd}) => {
    return (
        <div>
            <p>{stock} {initial}</p>
        </div>
    );
}

export default ItemCount;