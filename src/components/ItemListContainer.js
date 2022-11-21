import { useState } from "react";
import ItemCount from "./ItemCount";

const items = [
    {
      id : 1,
      name : "mouse",
      description : "mouse gamer con control de sensibilidad y RGB",
      stock : 5
    },
    {
      id : 2,
      name : "keyboard",
      desciption : "Teclado mecanico con iluminacion LED y teclas multimedia",
      stock : 3
    }
  ] 

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
 
    const productList = new Promise ((resolve) =>
        setTimeout(() =>
            {resolve (items)},3000)
    );

    productList.then(data => setProducts(data));

    return (
            <div className="greeting">
                <ItemCount stock={5} initial={1}/>
                <div>
                  {products.map((product) => (
                    <p>{product.name}</p>
                  ))}
                </div>
                
            </div>
    );
}

export default ItemListContainer;