import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () =>{
    const {itemsCounter} = useContext(CartContext)
    return (
        <div className='widget-container'>
            <button className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} />
            </button>
            {itemsCounter() > 0 && (
                <p className='widget-button'>{itemsCounter()}</p>
            )}
            
        </div>
        
    );
};

export default CartWidget;