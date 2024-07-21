import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState(greeting);

    useEffect(() => {
        const fetchProducts = async () => {
            const db = getFirestore();
            const productsCollection = collection(db, 'items');
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            if (categoryId) {
                setItems(productsList.filter(product => product.category === categoryId));
                setTitle(categoryId.charAt(0).toUpperCase() + categoryId.slice(1));
            } else {
                setItems(productsList);
                setTitle(greeting);
            }
        };

        fetchProducts();
    }, [categoryId, greeting]);

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-center text-5xl font-extrabold text-blue-900 mb-6">{title}</h1>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;

