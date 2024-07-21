import NavBar from './NavBar';

function Footer() {
    return (
        <footer className="bg-blue-800 p-6">
            <div className="container mx-auto flex justify-center items-center">
                <p className="text-slate-100 text-lg pr-4">Copyright © - Jean Montealegre</p>
                <NavBar isHeader={false} />
            </div>
        </footer>
    );
}

export default Footer;

