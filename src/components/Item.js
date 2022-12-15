
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
    const navigate = useNavigate();
    console.log(product);
    const itemUrl = "/item/"+ product.id;
    return (
        <div onClick={() => navigate(itemUrl)}>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={product.urlImg} />
                    <div className='card-info'>
                    <p className='card-title' >{product.name}</p>
                    <p className='card-precio' >${product.precio}</p>
                    <Link className="btn from-center" to={itemUrl} >Ver detalles</Link>
                    </div>
                </Card.Body>
            </Card>

        </div>

    )
}

export default Item;