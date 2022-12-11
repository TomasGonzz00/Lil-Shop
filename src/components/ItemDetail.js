import ItemCount from './ItemCount';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState('');
    const max = stock;

    useEffect(() => {
            setStock(item.stock);
      }, [item.stock]);

    

    function onAdd(algo) {
        if (algo === "plus" && count < max) setCount(count + 1);
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
                <p className='card-precio' >Stock: {item.stock}</p>
                {max > 0 ? (
            <ItemCount stock={stock} count={count} onAdd={onAdd} />
          ) : (
            <span className="card-precio">Sin stock</span>
          )}
            </div>
        </div>
    )
};

export default ItemDetail;