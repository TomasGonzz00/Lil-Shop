import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ stock, count, onAdd }) => {
    return (
        <div>
            <div className='item-count'>             
                <button onClick={() => onAdd("minus")} className="cart-button">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <p className="prueba2">{count}</p>
                <button onClick={() => onAdd("plus")} className="cart-button">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    );
}

export default ItemCount;