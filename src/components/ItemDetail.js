
import Carousel from 'react-bootstrap/Carousel';

const ItemDetail = ({ item }) => {
    console.log(item)
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
            </div>
        </div>
    )
};

export default ItemDetail;