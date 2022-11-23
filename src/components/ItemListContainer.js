import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
/* import ItemCount from "./ItemCount"; */

import { itemMock } from "../mocks/Item.Mock"

const ItemListContainer = () => {
  const {category} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => { resolve(itemMock) }, 2000)
    ).then((data) => {
      if(category){
        const categories = data.filter((products) => products.category === category);
        setProducts(categories) ;
      }else{
        setProducts(data);
      }
    });
  }, [category]);


  return (
    <div className="greeting">
      {/* <ItemCount stock={5} initial={1} /> */}
      <div>
        <ItemList products={products} />
      </div>

    </div>
  );
}

export default ItemListContainer;