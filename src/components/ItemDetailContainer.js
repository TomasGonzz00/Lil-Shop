import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom";
/* import ItemCount from "./ItemCount"; */

import { itemMock } from "../mocks/Item.Mock"

const ItemDetailContainer = () => {
  const productId = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => { resolve(itemMock) }, 2000)
    ).then((data) => {
        const product = data.find((element) => element.id ==  productId.id);
        setProducts(product) ;
    });
  }, [productId]);

  return (
      <div>
        <ItemDetail item={products} />
      </div>
  );
}

export default ItemDetailContainer;