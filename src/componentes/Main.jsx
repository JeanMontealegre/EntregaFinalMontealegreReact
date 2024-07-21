import { Link } from 'react-router-dom';

function Main() {
    const categorias = [
        { name: "Accesorios", image: "/index_acc.jpg", path: "/category/accesorios" },
        { name: "Higiene", image: "/index_hig.jpg", path: "/category/higiene" },
        { name: "Juguetes", image: "/index_jug.jpg", path: "/category/juguetes" },
        { name: "Snacks", image: "/index_sna.jpg", path: "/category/snacks" },
    ];

    return (
        <main className="p-4 flex-grow">
            <h1 className="text-center text-6xl font-extrabold text-blue-900 mb-3 mt-5">Aamilú PETSHOP</h1>
            <h2 className="text-center text-4xl font-bold text-blue-500 mb-6">Productos para perros</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categorias.map((category, index) => (
                    <div key={index} className="text-center bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <div className="w-full h-48 flex items-center justify-center bg-white-100">
                            <img src={category.image} alt={category.name} className="object-contain h-full w-full" />
                        </div>
                        <Link to={category.path}>
                            <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded text-xl font-bold mt-2">
                                {category.name}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main;
