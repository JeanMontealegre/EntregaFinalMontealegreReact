const brands = [
    { name: 'Marca 1', image: '/marcas/Logo_aamiluTexto.png' },
    { name: 'Marca 2', image: '/marcas/Index_kong.png' },
    { name: 'Marca 3', image: '/marcas/Logo_kong.png' },
    { name: 'Marca 1', image: '/marcas/Logo_aamiluTexto.png' },
    { name: 'Marca 4', image: '/marcas/Index_arnes.png' },
    { name: 'Marca 5', image: '/marcas/Logo_buenAmigo.png' },
    { name: 'Marca 1', image: '/marcas/Logo_aamiluTexto.png' },
    { name: 'Marca 6', image: '/marcas/Index_cuerda.png' },
    { name: 'Marca 6', image: '/marcas/Index_bolsas.png' },
    { name: 'Marca 6', image: '/marcas/Index_cepillo.png' }
];

function Marquee() {
    return (
        <div className="marquee-container overflow-hidden relative py-4 mt-6">
            <div className="marquee-content flex space-x-8 animate-marquee">
                {brands.map((brand, index) => (
                    <div key={index} className="flex-shrink-0">
                        <img src={brand.image} alt={brand.name} className="h-16" />
                    </div>
                ))}
                {brands.map((brand, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0">
                        <img src={brand.image} alt={brand.name} className="h-16" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Marquee
