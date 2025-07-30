const productos = [
    { nombre: "HiMoShi Club Licor De Vodka II", id: "himoshi-vodka-2", pagina: "ProductosCigarreria.html" },
    { nombre: "HiMoShi Club Licor De Vodka I", id: "himoshi-vodka", pagina: "ProductosCigarreria.html" },
    { nombre: "Aguila Original-Six Pack", id: "Aguila-6Pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Erdinger Dunkel", id: "Erdinger-Dunkel", pagina: "ProductosCigarreria.html" },
    { nombre: "Liefmans Fruitesse", id: "Liefmans-Fruitesse", pagina: "ProductosCigarreria.html" },
    { nombre: "Corona Frutos Rojos", id: "Corona-Tropical-Frutos", pagina: "ProductosCigarreria.html" },
    { nombre: "Corona Tropical Limon ", id: "Corona-Tropical-Limon", pagina: "ProductosCigarreria.html" },
    { nombre: "Smirnoff Ice", id: "Smirnoff-Ice", pagina: "ProductosCigarreria.html" },
    { nombre: "Smirnoff Ice Lata", id: "Smirnoff-Lata", pagina: "ProductosCigarreria.html" },
    { nombre: "Coronitas Six-Pack", id: "Coronita-Six-Pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Andina Six-Pack", id: "Cerveza-Andina-6-Pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Poker Six-Pack", id: "Cerveza-Poker-6-Pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Club Colombia Six-Pack", id: "Cerveza-Club-Colombia-6-Pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Corona Six-Pack", id: "Corona-Six-Pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Budweiser Six-Pack", id: "Budweiser-Six", pagina: "ProductosCigarreria.html" },
    { nombre: "Costeña Bacana Six-Pack", id: "Costeña", pagina: "ProductosCigarreria.html" },
    { nombre: "Michelob Ultra Six-Pack", id: "Michelob", pagina: "ProductosCigarreria.html" },
    { nombre: "Four Loko Ponche", id: "Four-Loko-Ponche", pagina: "ProductosCigarreria.html" },
    { nombre: "Four Loko Gold", id: "Four-Loko-Gold", pagina: "ProductosCigarreria.html" },
    { nombre: "Four loko Sandia", id: "Four-Loko-Sandia", pagina: "ProductosCigarreria.html" },
    { nombre: "Heineken Six-Pack", id: "Heineken-6-pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Aguila Light Six-Pack", id: "Aguila-Light-6-Pack", pagina: "ProductosCigarreria.html" },
    { nombre: "Aguardiente Lider Pequeño", id: "Aguardiente-Lider", pagina: "ProductosCigarreria.html" },
    { nombre: "Aguardiente Lider Grande", id: "Aguardiente", pagina: "ProductosCigarreria.html" },
    { nombre: "Onix Sello Negro 2", id: "Onix-Sello-Negro-2", pagina: "ProductosCigarreria.html" },
    { nombre: "Onix Sello Negro ", id: "Onix-Sello-Negro", pagina: "ProductosCigarreria.html" },
    { nombre: "Domeco Brandy Grande", id: "Domeco-Brandy", pagina: "ProductosCigarreria.html" },
    { nombre: "Domeco Brandy Pequeño", id: "Domeco", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Añejo Grande", id: "Bacardi-Añejo-750ML", pagina: "ProductosCigarreria.html" },
    { nombre: "Ron Viejo de Caldas", id: "Ron-Viejo-De-Caldas", pagina: "ProductosCigarreria.html" },
    { nombre: "Havanna Club", id: "Havana-Club", pagina: "ProductosCigarreria.html" },
    { nombre: "Caballos Tequila", id: "Caballos-Tequila", pagina: "ProductosCigarreria.html" },
    { nombre: "Bandolero Reposado", id: "Bandolero-Reposado", pagina: "ProductosCigarreria.html" },
    { nombre: "Altos Plata", id: "Altos-Plata-Tequila", pagina: "ProductosCigarreria.html" },
    { nombre: "Sminorff Lulo Pequeño", id: "Smirnoff-Lulo", pagina: "ProductosCigarreria.html" },
    { nombre: "Reposado Patrón", id: "Reposado-Patrón", pagina: "ProductosCigarreria.html" },
    { nombre: "Jose Cuervo Especial", id: "Tequila-Jose-Cuervo-Especial", pagina: "ProductosCigarreria.html" },
    { nombre: "Jaileza Oro", id: "Tequila-Jaileza-Oro", pagina: "ProductosCigarreria.html" },
    { nombre: "La Mision XXI", id: "La-Mision-XXI", pagina: "ProductosCigarreria.html" },
    { nombre: "Tanqueray Imported", id: "Tanqueray-Imported", pagina: "ProductosCigarreria.html" },
    { nombre: "Absolut Citron", id: "Absolut-Citron", pagina: "ProductosCigarreria.html" },
    { nombre: "La Botija Tabernero", id: "La_Botija-Tabernero", pagina: "ProductosCigarreria.html" },
    { nombre: "Convier Vermouth", id: "Convier-Vermouth", pagina: "ProductosCigarreria.html" },
    { nombre: "Axis Triple Seco", id: "Axis-Triple-Sec", pagina: "ProductosCigarreria.html" },
    { nombre: "Axis Licor de Ginebra", id: "Axis-Licor-De-Ginebra", pagina: "ProductosCigarreria.html" },
    { nombre: "Sminorff Lulo Grande", id: "Sminorff-Lulo-Grande", pagina: "ProductosCigarreria.html" },
    { nombre: "Licor Stolichnaya", id: "Licor-Stolichnaya", pagina: "ProductosCigarreria.html" },
    { nombre: "Bombay Shaphire", id: "Bombay-Saphire", pagina: "ProductosCigarreria.html" },
    { nombre: "Black Jack Grande", id: "Black-Jack-Grande", pagina: "ProductosCigarreria.html" },
    { nombre: "Black Jack Mediano", id: "Black-Jack-Mediano", pagina: "ProductosCigarreria.html" },
    { nombre: "vino Leyenda Rose SYRAH", id: "vino-Leyenda-Rose-SYRAH", pagina: "ProductosCigarreria.html" },
    { nombre: "Cono Sur Rosé", id: "Cono-Sur-Rosé", pagina: "ProductosCigarreria.html" },
    { nombre: "Cono Sur Cabernet", id: "Cono-Sur-Cabernet", pagina: "ProductosCigarreria.html" },
    { nombre: "120 Rosé Cabernet", id: "120-Rosé-Cabernet", pagina: "ProductosCigarreria.html" },
    { nombre: "Casillero Cabernet", id: "Casillero-Cabernet", pagina: "ProductosCigarreria.html" },
    { nombre: "La Escondida Rose 2020", id: "La-Escondida-Rose-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "Vino Indomita", id: "Vino-Indomita", pagina: "ProductosCigarreria.html" },
    { nombre: "Vino IL DUOMO", id: "Vino-IL-DUOMO", pagina: "ProductosCigarreria.html" },
    { nombre: "Cabernet Sauviginon", id: "Cabernet-Sauviginon", pagina: "ProductosCigarreria.html" },
    { nombre: "Santa Ana Reserve 2020", id: "Santa-Ana-Reserve-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "120 Cabernet Sauviginon 2021", id: "120-Cabernet-Sauviginon-2021", pagina: "ProductosCigarreria.html" },
    { nombre: "Vino Leyenda Merlot 2020", id: "Vino-Leyenda-Merlot-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "Tres medallas Merlot 2021", id: "Tres-medallas-Merlot-2021", pagina: "ProductosCigarreria.html" },
    { nombre: "Vientos del Sur Merlot 2020", id: "Vientos-del-Sur-Merlot-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "Tocornal Carmenere 2020", id: "Tocornal-Carmenere-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "Gato Negro Cabernet Merlot", id: "Gato-Negro-Cabernet-Merlot", pagina: "ProductosCigarreria.html" },
    { nombre: "Chiloe Merlot", id: "Chiloe-Merlot", pagina: "ProductosCigarreria.html" },
    { nombre: "Manischewitz", id: "Manischewitz", pagina: "ProductosCigarreria.html" },
    { nombre: "Merlot Viña Maipo", id: "Merlot-Viña-Maipo", pagina: "ProductosCigarreria.html" },
    { nombre: "Cabernet Sauvignon Vientos del Sur 2020", id: "Cabernet-Sauvignon-Vientos-del-Sur-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "Vino Tinto Gato Negro Malbec ARG", id: "Vino-Tinto-Gato-Negro-Malbec-ARG", pagina: "ProductosCigarreria.html" },
    { nombre: "Vino Tinto Leyenda Carmenere 2021", id: "Vino-Tinto-Leyenda-Carmenere-21", pagina: "ProductosCigarreria.html" },
    { nombre: "Tres Medallas Carmenere 2020", id: "Vino-tres-medallas-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "Chiloe Cabernet Sauvignon 2020", id: "Chiloe-Cabernet-Sauviginon-2020", pagina: "ProductosCigarreria.html" },
    { nombre: "Tres Medallas Cabernet Sauviginon 2021", id: "Tres-medallas-Cabernet-2021", pagina: "ProductosCigarreria.html" },
    { nombre: "Vino Rosado Lambrusco Rosé Dolce", id: "Vino-RosadoLambrusco-Rosé-Dolce", pagina: "ProductosCigarreria.html" },
    { nombre: "Mirador Merlot 2019", id: "Mirador-Merlot-19", pagina: "ProductosCigarreria.html" },
    { nombre: "Leyenda Cabernet Sauviginon", id: "Leyenda-Cabernet-Sauviginon", pagina: "ProductosCigarreria.html" },
    { nombre: "Buchanans Malts", id: "Buchanans-Malts", pagina: "ProductosCigarreria.html" },
    { nombre: "Chivas Regal 13Y", id: "Chivas-Regal-13Y", pagina: "ProductosCigarreria.html" },
    { nombre: "Black and White Mediano", id: "Black-and-White-M.", pagina: "ProductosCigarreria.html" },
    { nombre: "Black and White", id: "Black-and-White-G.", pagina: "ProductosCigarreria.html" },
    { nombre: "Jack Daniels Honey", id: "Jack-Daniels-Honey", pagina: "ProductosCigarreria.html" },
    { nombre: "Whisky Jack Daniels", id: "Whisky-Jack-Daniels", pagina: "ProductosCigarreria.html" },
    { nombre: "Whisky Jack Daniels Mediano", id: "Whisky-Jack-Daniels-M.", pagina: "ProductosCigarreria.html" },
    { nombre: "Chivas Regal 12Y", id: "Chivas-regal-12Y", pagina: "ProductosCigarreria.html" },
    { nombre: "Double Black Label", id: "Double-Label", pagina: "ProductosCigarreria.html" },
    { nombre: "Whisky Grants Mediano", id: "Whisky-Grants-B.", pagina: "ProductosCigarreria.html" },
    { nombre: "Whisky Grants ", id: "Whisky-Grants", pagina: "ProductosCigarreria.html" },
    { nombre: "Whisky Ballantine's", id: "Ballantine", pagina: "ProductosCigarreria.html" },
    { nombre: "Something Especial Pequeño", id: "Something-Especial-Pequeño", pagina: "ProductosCigarreria.html" },
    { nombre: "Something Especial Mediano", id: "Something-Especial-Mediano", pagina: "ProductosCigarreria.html" },
    { nombre: "Something Especial", id: "Something-Especial", pagina: "ProductosCigarreria.html" },
    { nombre: "Whisky Jameson", id: "Whisky-Jameson", pagina: "ProductosCigarreria.html" },
    { nombre: "Chivas Regal 18Y", id: "Chivas-Regal-18Y", pagina: "ProductosCigarreria.html" },
    { nombre: "Buchanan's Deluxe Media", id: "Buchanans-Deluxe-M", pagina: "ProductosCigarreria.html" },
    { nombre: "Buchanan's Deluxe", id: "Buchanans-Deluxe", pagina: "ProductosCigarreria.html" },
    { nombre: "Old Parr", id: "old-Parr", pagina: "ProductosCigarreria.html" },
    { nombre: "Black Label", id: "Black-Label", pagina: "ProductosCigarreria.html" },
    { nombre: "Monkey Shoulder", id: "Monkey-Shoulder", pagina: "ProductosCigarreria.html" },
    { nombre: "Red Label", id: "Red-Label", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Mandarina", id: "Bacardi-Mandarina", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Limón", id: "Bacardi-Limon", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Island Tea", id: "Bacardi-Island", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Bahama Mama", id: "Bacardi-Bahama", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Añejo Pequeño", id: "Bacardi-Añejo-Pe", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Mojito", id: "Mojito", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardí Carta Blanca", id: "Bacardi-Carta-B", pagina: "ProductosCigarreria.html" },
    { nombre: "J.P.Chenet Blanco", id: "J.P.-Chenet-Blanco", pagina: "ProductosCigarreria.html" },
    { nombre: "J.P.Chenet Rosado", id: "J.P.-Chenet-Rosado", pagina: "ProductosCigarreria.html" },
    { nombre: "J.P.Chenet De Fresa", id: "J.P.-Chenet-De-Fresa", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardi Zombie", id: "Bacardi-Zombie", pagina: "ProductosCigarreria.html" },
    { nombre: "Bacardi Hurricane", id: "Bacardi-Hurricane", pagina: "ProductosCigarreria.html" },
    { nombre: "Leyenda Sauvignon Blanco", id: "Leyenda-Sauvignon-Blanco", pagina: "ProductosCigarreria.html" },
    { nombre: "Buchanans Master", id: "Buchanans-Master", pagina: "ProductosCigarreria.html" },
    { nombre: "Lider Caja Sin Azucar", id: "Lider-Caja-Sin-Azucar", pagina: "ProductosCigarreria.html" },
    { nombre: "Lider Sin Azucar Verde", id: "Lider-Sin-Azucar-Verde", pagina: "ProductosCigarreria.html" },
    { nombre: "La Escondida Malbec", id: "La-Escondida-Malbec", pagina: "ProductosCigarreria.html" },
    { nombre: "Embajador Merlot Argentina", id: "Embajador Merlot Argentina", pagina: "ProductosCigarreria.html" },
    { nombre: "Embajador Merlot Chile", id: "Embajador Merlot Chile", pagina: "ProductosCigarreria.html" },
    { nombre: "Tres Caballos Gold", id: "Tres Caballos Gold", pagina: "ProductosCigarreria.html" },
    { nombre: "Tequila 1800 Reposado", id: "Tequila 1800 Reposado", pagina: "ProductosCigarreria.html" },
    { nombre: "OLMECA Dark Chocolate", id: "OLMECA Dark Chocolate", pagina: "ProductosCigarreria.html" },
    { nombre: "Buchanans Two Souls", id: "Buchanans Two Souls", pagina: "ProductosCigarreria.html" },
    { nombre: "Buchanans Red Seal", id: "Buchanans Red Seal", pagina: "ProductosCigarreria.html" },
    { nombre: "Blue Label", id: "Blue Label", pagina: "ProductosCigarreria.html" },
    { nombre: "Ron Cienfuegos", id: "Ron Cienfuegos", pagina: "ProductosCigarreria.html" },
    { nombre: "El Aguardientero Santa Lucia Sandia", id: "El Aguardientero Santa Lucia Sandia", pagina: "ProductosCigarreria.html" },
    { nombre: "El aguardientero Santa Lucia Maracuyá", id: "El aguardientero Santa Lucia Maracuyá", pagina: "ProductosCigarreria.html" },
    { nombre: "Ónix Sello Negro Añejo", id: "Ónix Sello Negro Añejo", pagina: "ProductosCigarreria.html" },
    { nombre: "Onix sello negro nada a medias todo al 100", id: "Onix sello negro nada a medias todo al 100", pagina: "ProductosCigarreria.html" },
    { nombre: "Coca-Cola", id: "coca-cola", pagina: "Producto.html" },
    { nombre: "Pepsi", id: "pepsi", pagina: "Producto.html" },
    { nombre: "mexicano", id: "mexicano", pagina: "Producto.html" },
    { nombre: "Burger Ranch", id: "Burger Ranch", pagina: "Producto.html" },
    { nombre: "Hambuerguesa mixta", id: "Hambuerguesa mixta", pagina: "Producto.html" },
    { nombre: "Tacos Pollo maíz", id: "Tacos Pollo maíz", pagina: "Producto.html" },
    { nombre: "Tacos madurito crunch", id: "Tacos madurito crunch", pagina: "Producto.html" },
    { nombre: "Tacos Carnitas", id: "Tacos Carnitas", pagina: "Producto.html" },
    { nombre: "Picada tradicional", id: "Picada tradicional", pagina: "Producto.html" },
    { nombre: "Perro americano", id: "Perro americano", pagina: "Producto.html" },
    { nombre: "Tocimiel", id: "Tocimiel", pagina: "Producto.html" },
    { nombre: "Entrada platanitos", id: "Entrada platanitos", pagina: "Producto.html" },
    { nombre: "Papas locas 38", id: "Papas locas 38k", pagina: "Producto.html" },
    { nombre: "Papas locas 55", id: "Papas locas 55k", pagina: "Producto.html" },
];

const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

// Normaliza texto para ignorar acentos y mayúsculas
function normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Calcula la distancia de Levenshtein (errores entre 2 palabras)
function distanciaLevenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // eliminación
                    dp[i][j - 1],    // inserción
                    dp[i - 1][j - 1] // sustitución
                );
            }
        }
    }
    return dp[m][n];
}

searchInput.addEventListener('input', function() {
    const query = normalizar(this.value.trim());
    suggestionsBox.innerHTML = '';

    if (query === '') {
        suggestionsBox.style.display = 'none';
        return;
    }

    const coincidencias = productos
        .map(p => {
            const nombreNormalizado = normalizar(p.nombre);
            const distancia = distanciaLevenshtein(query, nombreNormalizado);
            return { ...p, distancia };
        })
        .filter(p => p.distancia <= 3 || normalizar(p.nombre).includes(query)) // permite cierta tolerancia
        .sort((a, b) => a.distancia - b.distancia); // más parecidos arriba

    suggestionsBox.style.display = 'block';

    if (coincidencias.length > 0) {
        coincidencias.forEach(p => {
            const div = document.createElement('div');
            div.textContent = p.nombre;
            div.addEventListener('click', () => {
                searchInput.value = p.nombre;
                window.location.href = `${p.pagina}#${p.id}`;
            });
            suggestionsBox.appendChild(div);
        });
    } else {
        const noEncontrado = document.createElement('div');
        noEncontrado.textContent = 'Producto no encontrado';
        noEncontrado.style.color = 'gray';
        noEncontrado.style.padding = '8px';
        suggestionsBox.appendChild(noEncontrado);
    }
});

document.addEventListener('click', function(e) {
    if (!document.querySelector('.src1').contains(e.target)) {
        suggestionsBox.style.display = 'none';
    }
});


