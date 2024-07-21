import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from '../context/CartContext';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, "items", itemId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError("El producto no existe");
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setError("Error al obtener el producto");
            }
        };

        fetchProduct();
    }, [itemId]);

    const handleAddToCart = () => {
        addItem(item, quantity);
    };

    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/cart');
    };

    if (error) {
        return <div className="text-center mt-10">{error}</div>;
    }

    if (!item) {
        return <div className="text-center mt-10">Cargando...</div>;
    }

    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full md:w-1/3 h-48 md:h-auto flex items-center justify-center bg-gray-100">
                    <img src={item.pictureUrl} alt={item.title} className="object-contain h-full w-full" />
                </div>
                <div className="w-full md:w-2/3 p-6">
                    <h2 className="text-3xl font-extrabold text-blue-800 mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <span className="text-xl font-bold text-blue-500">${item.price}</span>
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-blue-800">Características</h3>
                        <p className="text-gray-600 mb-2">{item.features}</p>
                        <h3 className="text-2xl font-semibold text-blue-800">Talla</h3>
                        <p className="text-gray-600 mb-2">{item.size}</p>
                        <h3 className="text-2xl font-semibold text-blue-800">Dimensiones</h3>
                        <p className="text-gray-600 mb-2">{item.dimensions}</p>
                        <h3 className="text-2xl font-semibold text-blue-800">Colores Disponibles</h3>
                        <ul className="text-gray-600 mb-4">
                            {Array.isArray(item.availableColors) && item.availableColors.map((color, index) => (
                                <li key={index}>{color}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-4 space-x-2">
                            <input 
                                type="number" 
                                value={quantity} 
                                onChange={(e) => setQuantity(Number(e.target.value))} 
                                min="1"
                                className="border rounded p-2"
                            />
                            <button 
                                onClick={handleAddToCart}
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 flex-1"
                            >
                                Agregar al Carrito
                            </button>
                            <button 
                                onClick={handleBuyNow}
                                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700 transition-colors duration-300 flex-1"
                            >
                                Comprar Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
