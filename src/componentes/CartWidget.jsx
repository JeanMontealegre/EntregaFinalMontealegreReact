import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="relative flex items-center">
            <img className="h-10 w-auto" src="/carrito.png" alt="carrito" />
            {totalItems > 0 && (
                <span className="bg-red-500 text-slate-100 rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs font-bold">
                    {totalItems}
                </span>
            )}
        </div>
    );
}

export default CartWidget;

