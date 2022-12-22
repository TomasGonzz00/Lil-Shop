import {createContext,useState, useEffect} from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const itemsCounter = () =>carrito.reduce((acum, item) => acum = acum + item.count, 0);

    useEffect(() => {
        const amount = carrito
        .map((product) => parseInt(product.precio) * product.count)
        .reduce((partialSum, a) => partialSum + a, 0);
        setTotalAmount(amount);
    }, [carrito]);

    function addItem(item, count){
        const isAlreadyAdded = isInCart(item.id);
        if(isAlreadyAdded){
            const modificado = carrito.map((element) => {
                if(element.id == item.id){
                    element.count += count;
                }
                return element;
            })
            setCarrito(modificado)
            console.log(carrito)
        } else {
            setCarrito([...carrito,{count,...item}]);
            console.log(carrito)     
        }   
    }

    function removeItem(itemId){
        setCarrito(carrito.filter((item) => item.id !== itemId));
    }

    function clear(){
        setCarrito([]);
        setTotalAmount(0);
    }

    function isInCart(id){
        const prueba = carrito.find((product) => product.id == id);
        return Boolean(prueba);
    }

    return(
        <CartContext.Provider value={{carrito, itemsCounter, setCarrito, addItem, removeItem,totalAmount, clear}}>
            {children}
        </CartContext.Provider>
    );


}