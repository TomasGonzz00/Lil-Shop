import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom";

import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
  const productId = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();   
    const itemRef = doc(db, 'items', productId.id);
    getDoc(itemRef).then((snapshot) => {
      if(snapshot.exists()){
        setProducts({ id: productId.id,...snapshot.data()})
      } else {
        alert("la Id ingresada no es correcta, por favor revise nuestro catalogo para buscar lo que desea comprar")
      }
    }).catch(err => console.log(err))
  },[])

  return (
      <div>
        <ItemDetail item={products} />
      </div>
  );
}

export default ItemDetailContainer;