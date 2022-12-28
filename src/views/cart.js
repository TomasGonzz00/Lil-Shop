import { useContext } from "react";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { carrito, removeItem, clear, totalAmount } = useContext(CartContext)
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="cart-item-container">
                {carrito.map((product) => (
                    <div className="cart-item">
                        <div className="cart-img-container">
                            <img className="cart-img" src={product.urlImg} height="80px" alt="Imagen del producto"/>
                        </div>
                        
                        <div className="cart cart-info">
                            <p className='cart-title' >{product.name}</p>
                            <p className='cart-precio' >Precio Unitario: ${product.precio}</p>
                            <p className='cart-cant' >Cant: {product.count}</p>
                            <button onClick={() => removeItem(product.id)} className="btn-cart-remove">X</button>
                        </div>
                    </div>
                ))}
                {totalAmount > 0 ? (
                    <div className="cart-btn-container">
                        <p className='card-precio' >Total: ${totalAmount}</p>
                        <div className="cart-btn">
                            <button onClick={() => clear()} className="btn-add-cart">Limpiar Carrito</button>
                            <button onClick={() => navigate("/checkout")} className="btn-add-cart">Siguiente</button>
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <p className='card-precio' >No hay productos en el carrito!!!</p>
                        <button onClick={() => navigate("/")} className="btn-add-cart" style={{ minWidth: "100%" }}>Seguir Comprando</button>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Cart;