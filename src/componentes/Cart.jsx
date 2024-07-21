import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function Cart() {
    const { cart, removeItem, clear, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        setIsEmailValid(email === confirmEmail);
    }, [email, confirmEmail]);

    const handleCheckout = async (event) => {
        event.preventDefault();
        const buyer = {
            name,
            lastName,
            phone,
            email,
        };
        const order = {
            buyer,
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date().toISOString(),
            status: 'generada'
        };
        try {
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders');
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            clear();
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) {
            setPhone(value);
        }
    };

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
    });

    return (
        <div className="container mx-auto my-8 p-4">
            {orderId ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6">Compra realizada con éxito</h2>
                    <p className="text-lg mb-4">Tu número de orden es: <span className="font-semibold">{orderId}</span></p>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                        Volver al Inicio
                    </Link>
                </div>
            ) : cart.length === 0 ? (
                <div className="text-center">
                    <img src="/carrito_vacio.png" alt="Carrito vacío" className="mx-auto mb-4 h-48" />
                    <h2 className="text-2xl font-bold mb-6">Tu carrito está vacío</h2>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                        Añade algunos productos para verlos aquí
                    </Link>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-center text-4xl font-extrabold text-blue-900 mb-6">Carrito de Compras</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="mb-4 flex items-center justify-between">
                                <img src={item.pictureUrl} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                                <span className="text-gray-700 mr-4">SKU: {item.id}</span>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                                <div className="flex items-center mt-2 space-x-2">
                                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded-l">-</button>
                                    <input
                                        type="text"
                                        value={item.quantity}
                                        readOnly
                                        className="w-12 text-center border border-gray-300"
                                    />
                                    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded-r">+</button>
                                </div>
                                <div className="flex flex-col items-end ml-4">
                                    <span className="text-xl font-bold text-blue-500">
                                        {(item.price * item.quantity).toLocaleString('es-CL', {
                                            style: 'currency',
                                            currency: 'CLP',
                                            minimumFractionDigits: 0,
                                        })}
                                    </span>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800 ml-4">
                                    &#x2716;
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="text-right mt-6">
                        <h3 className="text-2xl font-bold text-blue-900">Total: {totalAmount}</h3>
                    </div>
                    <form onSubmit={handleCheckout} className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Datos de Contacto</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Apellido:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Teléfono:</label>
                            <input
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Confirmar Email:</label>
                            <input
                                type="email"
                                name="confirmEmail"
                                value={confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                required
                                className={`w-full border p-2 rounded ${isEmailValid ? 'border-gray-300' : 'border-red-500'}`}
                            />
                            {!isEmailValid && (
                                <p className="text-red-500 text-sm mt-1">Los correos electrónicos no coinciden.</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 ${
                                !name || !lastName || !phone || !email || !confirmEmail || !isEmailValid ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={!name || !lastName || !phone || !email || !confirmEmail || !isEmailValid}
                        >
                            Finalizar Compra
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Cart;





