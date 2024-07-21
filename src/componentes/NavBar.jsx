import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar({ isHeader }) {
    if (isHeader) {
        return (
            <nav className="flex space-x-12 pr-10">
                <NavLink to="/home" className="text-slate-100 font-bold text-lg hover:text-blue-400 hover:underline">Home</NavLink>
                <NavLink to="/category/accesorios" className="text-slate-100 font-bold text-lg hover:text-blue-400 hover:underline">Accesorios</NavLink>
                <NavLink to="/category/higiene" className="text-slate-100 font-bold text-lg hover:text-blue-400 hover:underline">Higiene</NavLink>
                <NavLink to="/category/juguetes" className="text-slate-100 font-bold text-lg hover:text-blue-400 hover:underline">Juguetes</NavLink>
                <NavLink to="/category/snacks" className="text-slate-100 font-bold text-lg hover:text-blue-400 hover:underline">Snacks</NavLink>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </nav>
        );
    } else {
        return (
            <nav className="flex space-x-4">
                <a href="#"><img className="h-7 w-auto" src="/logo_instagram.png" alt="logo instagram" /></a>
                <a href="#"><img className="h-7 w-auto" src="/logo_meta.png" alt="logo meta" /></a>
                <a href="#"><img className="h-7 w-auto" src="/logo_tiktok.png" alt="logo tiktok" /></a>
            </nav>
        );
    }
}

export default NavBar;

