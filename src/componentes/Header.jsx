import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-blue-800 p-1 pl-10 z-50 shadow-lg">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img
                        className="h-24 w-auto cursor-pointer image-hover-effect"
                        src="/logo.png"
                        alt="logo"
                    />
                </Link>
                <NavBar isHeader={true} />
            </div>
        </header>
    );
}

export default Header;


