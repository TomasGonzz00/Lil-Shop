import {createContext,useState} from 'react';

export const CartContextProvider = ({children}) => {
    const CartContext = createContext([])

    const [carrito, setCarrito] = useState([]);

    function addItem(item){
        setCarrito(carrito.push(item));
    }

    function removeItem(itemId){
        setCarrito(carrito.filter((item) => item.id !== itemId));
    }

    function clear(){
        setCarrito([]);
    }

    function isInCart(id){
        return Boolean(carrito.find((item) => item.id === id));
        /* La funcion Boolean nos devuelve un true si existe un objeto y false si es undefined */
    }

    return(
        <CartContext.Provider value={{carrito, setCarrito, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );


}