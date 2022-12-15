import ItemCount from './ItemCount';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setStock(item.stock);
    }, [item.stock]);



    function onAdd(algo) {
        if (algo === "plus" && count < stock) setCount(count + 1);
        if (algo === "minus" && count > 0) setCount(count - 1);
    }
    return (
        <div className='item-detail-container'>
            <Carousel className='card-detail-carousel'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block card-detail-img"
                        src={item.urlImg}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block card-detail-img"
                        src={item.urlImg2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block card-detail-img"
                        src={item.urlImg3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='details'>
                <p className='card-title' >{item.name}</p>
                <p className='card-description'>{item.description}</p>
                <p className='card-precio' >${item.precio}</p>
                <div className='btn-container'>
                {stock > 0 ? (<p className='card-precio' >Stock: {stock}</p>):(null)}
                    
                    <div className='item-count-container'>
                        <ItemCount stock={stock} count={count} onAdd={onAdd} />
                        {stock > 0 ? (
                            <button onClick={() => {setStock(stock - count) 
                                                    setCount(1)}} 
                                class="btn-add-cart">Añadir al Carrito</button>
                        ) : (
                            <span className="card-stock ">Sin stock</span>
                        )}
                    </div>
                    <button onClick={() => navigate("/cart")} class="btn-add-cart" style={{ minWidth: "100%" }}>Finalizar Compra</button>
                </div>

            </div>
        </div>
    )
};

export default ItemDetail;