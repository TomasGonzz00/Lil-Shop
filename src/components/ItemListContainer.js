import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const {category} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();   
    const itemCollection = collection(db,'items');

    if(category){
      const q = query(itemCollection, where("category",'==',category));
      getDocs(q).then((snapshot) => {
        const products2 = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(products2);
      }).catch(err => console.log(err))
    } else {
      getDocs(itemCollection).then((snapshot) => {
        const products2 = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(products2);
      }).catch(err => console.log(err))
    }
  },[category])

  return (
    <div className="greeting">
      <div>
        <ItemList products={products} />
      </div>

    </div>
  );
}

export default ItemListContainer;