import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ count, onAddCount }) => {
    return (
                <div className='item-count'>
                    <button onClick={() => onAddCount("minus")} className="cart-button">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <p className="prueba2">{count}</p>
                    <button onClick={() => onAddCount("plus")} className="cart-button">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
    );
}

export default ItemCount;