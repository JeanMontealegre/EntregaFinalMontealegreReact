import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function Item({ id, title, description, price, pictureUrl }) {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleImageClick = () => {
        navigate(`/item/${id}`);
    };

    const handleAddToCart = () => {
        addItem({ id, title, price, pictureUrl, quantity });
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (/^\d+$/.test(value)) {
            setQuantity(parseInt(value, 10));
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <div className="w-full h-48 flex items-center justify-center">
                <img
                    src={pictureUrl}
                    alt={title}
                    className="object-contain h-full w-full cursor-pointer image-hover-effect"
                    onClick={handleImageClick}
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 truncate">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-blue-500">${price.toLocaleString('es-CL')}</span>
                    <Link to={`/item/${id}`} className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700 transition-colors duration-300">Ver Detalle</Link>
                </div>
                <div className="mt-4 flex justify-between items-center space-x-2">
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="border border-gray-300 rounded text-center w-16"
                        min="1"
                    />
                    <button
                        onClick={handleAddToCart}
                        className="bg-green-500 text-white py-1 px-1 rounded hover:bg-green-700 transition-colors duration-300 flex-1"
                    >
                        Agregar al Carrito
                    </button>
                </div>
                <div className="mt-2">
                    <button
                        onClick={() => {
                            handleAddToCart();
                            navigate('/cart');
                        }}
                        className="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-700 transition-colors duration-300 w-full"
                    >
                        Comprar Ahora
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item;




