import { Layout } from "../components/Layout";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



const CheckoutView = () => {
    const { carrito, totalAmount, clear } = useContext(CartContext);
    const navigate = useNavigate();
    const [comprobante, setComprobante] = useState(false)

    const db = getFirestore();

    const finalizarCompra = (event) => {
        event.preventDefault();
        const nombre = event.target[0].value;
        const apellido = event.target[1].value;
        const mail = event.target[2].value;
        const mail2 = event.target[3].value;
        const telefono = event.target[4].value;

        if (mail === mail2) {
                const order = {
                buyer: {nombre, apellido, mail, telefono},
                items: carrito,
                total: totalAmount,
                date: serverTimestamp()
                }
    
                const ventaCollection = collection(db, "ventas");
            addDoc(ventaCollection, order)
                .then((comprobante) => setComprobante(comprobante.id)).catch(err => console.log(err))
            carrito.forEach(element => {
                actualizarStock(element.id, (element.stock - element.count));
                clear();
            });
         } else (
            alert("El mail ingresado no es correcto")
        ) 

        
    }

    const actualizarStock = (id, stockNuevo) => {
        const updateStock = doc(db, "items", id)
        updateDoc(updateStock, { stock: stockNuevo })
    }
    return (
        <Layout>
            {!comprobante ? (
                <form className="form" onSubmit={finalizarCompra}>
                <h4 className="checkout-title">Complete sus datos para finalizar la compra</h4>
                <input type="text" className="form__input" placeholder="Nombre" required/>
                
                <input type="text" className="form__input" placeholder="Apellido" required/>
                
                <input className="form__input" type="email" placeholder="Email" required/>

                <input className="form__input" type="email" placeholder="Verificar Email" required/>
                
                <input type="number" className="form__input" placeholder="Telefono" required/>
                
                <button type="submit" className="btn-add-cart">Finalizar Compra</button>
    
            </form>
            ): (<div className="form">
                    <p className="comprobante">Comprobante: {comprobante}</p>
                    <button className="btn-add-cart" onClick={() => navigate('/')}>Volver a inicio</button>
            </div>
                
            )}
            
            
        </Layout>
    )
}

export default CheckoutView;
