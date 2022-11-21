import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const itemMock = [
    {
        id: 1,
        name: "mouse",
        description: "mouse gamer con control de sensibilidad y RGB",
        stock: 5
    },
    {
        id: 2,
        name: "keyboard",
        desciption: "Teclado mecanico con iluminacion LED y teclas multimedia",
        stock: 3
    }
]

const ItemDetailContainer = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        new Promise((resolve) =>
            setTimeout(() => resolve(itemMock), 2000)).then(
                (data) => setItem(data)
            );
    }, []);

    if(!item) {
        return <p>Loading...</p>;
    }

    return <ItemDetail item={items} />;
}

export default ItemDetailContainer;