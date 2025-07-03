// Lista de TODOS los productos disponibles
const productos = [
    {
        id: "bacardi-carta-blanca",
        nombre: "Bacardi Carta Blanca",
        precio: 62000,
        imagen: "Bebidas/Bacardi/Bicadi-Carta-Blanca.webp"
    },
    {
        id: "himoshi-vodka",
        nombre: "HiMoShi Club Licor De Vodka I",
        precio: 470000,
        imagen: "Bebidas/Vodka/Hi-Mo-Shi-Club-Licor-Morado.webp"
    },
    {
        id: "himoshi-vodka-2",
        nombre: "HiMoShi Club Licor De Vodka II",
        precio: 470000,
        imagen: "Bebidas/Vodka/Hi-Mo-Shi-Club-Licor-Verde.webp"
    },
    {
        id: "Aguila-6Pack",
        nombre: "Aguila Original-Six Pack",
        precio: 19000,
        imagen: "Bebidas/Cervezas/AGUILA-LIGHT-ORIGINAL-SIX-PACK.webp"
    },
    {
        id: "Erdinger-Dunkel",
        nombre: "Erdinger Dunkel",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Erdinger Dunkel.webp"
    },
    {
        id: "Liefmans-Fruitesse",
        nombre: "Liefmans Fruitesse",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Liefmans-Fruitesse.webp"
    },
    {
        id: "Corona-Tropical-Frutos",
        nombre: "Corona Tropical-Frutos Rojos",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Corona-Tropical-Frutos-Rojos.webp"
    },
    {
        id: "Corona-Tropical-Limon",
        nombre: "Corona Tropical-Limon",
        precio: 25000,
        imagen: "Bebidas/Cervezas/Corona-Tropical-Limon.webp"
    },
    {
        id: "Smirnoff-Ice",
        nombre: "Smirnoff Ice",
        precio: 8000,
        imagen: "Bebidas/Cervezas/Smirnoff-Ice-Original.webp"
    },
    {
        id: "Smirnoff-Lata",
        nombre: "Smirnoff Ice Lata",
        precio: 8000,
        imagen: "Bebidas/Cervezas/Sminroff-Ice-Original-Lata.webp"
    },
    {
        id: "Coronita-Six-Pack",
        nombre: "Corona Coronita Six Pack",
        precio: 21000,
        imagen: "Bebidas/Cervezas/Coronitas-6-Pack.webp"
    },
    {
        id: "Cerveza-Andina-6-Pack",
        nombre: "Cerveza Andina Six Pack",
        precio: 19000,
        imagen: "Bebidas/Cervezas/Cerveza-Andina-6-Pack.webp"
    },
    {
        id: "Cerveza-Poker-6-Pack",
        nombre: "Cerveza Poker Six Pack",
        precio: 19000,
        imagen: "Bebidas/Cervezas/Cerveza-Poker-6-Pack.webp"
    },
    {
        id: "Cerveza-Club-Colombia-6-Pack",
        nombre: "Club Colombia Six Pack",
        precio: 21000,
        imagen: "Bebidas/Cervezas/Cerveza-Club-Colombia-6-Pack.webp"
    },
    {
        id: "Corona-Six-Pack",
        nombre: "Corona Extra Six Pack",
        precio: 24000,
        imagen: "Bebidas/Cervezas/Corona-Six-Pack.webp"
    },
    {
        id: "Budweiser-Six",
        nombre: "Budweiser Six Pack",
        precio: 24000,
        imagen: "Bebidas/Cervezas/Budweiser-Six-Pack.webp"
    },
    {
        id: "Costeña",
        nombre: "Costeña",
        precio: 3500,
        imagen: "Bebidas/Cervezas/Costeña-Bacana-Six-Pack.webp"
    },
    {
        id: "Michelob",
        nombre: "Michelob Ultra",
        precio: 6000,
        imagen: "Bebidas/Cervezas/Michelob-Ultra-6-Pack.webp"
    },
    {
        id: "Four-Loko-Ponche",
        nombre: "Four Loko Ponche",
        precio: 12000,
        imagen: "Bebidas/Cervezas/FOUR-LOKO-PONCHE.webp"
    },
    {
        id: "Four-Loko-Gold",
        nombre: "Four Loko Gold",
        precio: 12000,
        imagen: "Bebidas/Cervezas/FOUR-LOKO-GOLD.webp"
    },
    {
        id: "Four-Loko-Sandia",
        nombre: "Four Loko Sandía",
        precio: 12000,
        imagen: "Bebidas/Cervezas/FOUR-LOKO-SANDIA.webp"
    },
    {
        id: "Heineken-6-pack",
        nombre: "Heineken Six Pack",
        precio: 23000,
        imagen: "Bebidas/Cervezas/Heineken-6-pack.webp"
    },
    {
        id: "Aguila-Light-6-Pack",
        nombre: "Aguila Light Six Pack",
        precio: 19000,
        imagen: "Bebidas/Cervezas/Aguila-Light-6-Pack.webp"
    },
    {
        id: "Aguardiente-Lider",
        nombre: "Aguardiente Líder",
        precio: 28000,
        imagen: "Bebidas/Aguardientes/Aguardiente-Lider.webp"
    },
    {
        id: "Aguardiente",
        nombre: "Aguardiente Antioqueño",
        precio: 33000,
        imagen: "Bebidas/Aguardientes/Aguardiente-Lider-750ML.webp"
    },
    {
        id: "Onix-Sello-Negro-2",
        nombre: "Onix Sello Negro 2",
        precio: 58000,
        imagen: "Bebidas/Tequila/Onix-Sello-Negro.webp"
    },
    {
        id: "Onix-Sello-Negro",
        nombre: "Onix Sello Negro",
        precio: 32000,
        imagen: "Bebidas/Tequila/Onix-Sello-Negro-2.webp"
    },
    {
        id: "Domeco-Brandy",
        nombre: "Domecq Brandy",
        precio: 26000,
        imagen: "Bebidas/Brandy/Domeco-Brandy-750ML.webp"
    },
    {
        id: "Domeco",
        nombre: "Domecq",
        precio: 16000,
        imagen: "Bebidas/Brandy/Domeco-Brandy-350ML.webp"
    },
    {
        id: "Bacardi-Añejo-750ML",
        nombre: "Bacardi Añejo 750ML",
        precio: 44000,
        imagen: "Bebidas/Bacardi/Bacardi-Añejo-750ML.webp"
    },
    {
        id: "Ron-Viejo-De-Caldas",
        nombre: "Ron Viejo de Caldas",
        precio: 42000,
        imagen: "Bebidas/Ron/Ron-Viejo-De-Caldas.webp"
    },
    {
        id: "Havana-Club",
        nombre: "Havana Club",
        precio: 47000,
        imagen: "Bebidas/Ron/Havana-Club.webp"
    },
    {
        id: "Caballos-Tequila",
        nombre: "Caballos Tequila",
        precio: 37000,
        imagen: "Bebidas/Tequila/Caballos-Tequila.webp"
    },
    {
        id: "Bandolero-Reposado",
        nombre: "Bandolero Reposado",
        precio: 47000,
        imagen: "Bebidas/Tequila/Bandolero-Reposado.webp"
    },
    {
        id: "Altos-Plata-Tequila",
        nombre: "Altos Plata Tequila",
        precio: 73000,
        imagen: "Bebidas/Tequila/Altos-Plata-Tequila.webp"
    },
    {
        id: "Smirnoff-Lulo",
        nombre: "Smirnoff Lulo",
        precio: 21000,
        imagen: "Bebidas/Vodka/Smirnoff-Lulo-375ML.webp"
    },
    {
        id: "Reposado-Patrón",
        nombre: "Reposado Patrón",
        precio: 143000,
        imagen: "Bebidas/Tequila/Reposado-Patrón.webp"
    },
    {
        id: "Tequila-Jose-Cuervo-Especial",
        nombre: "Tequila Jose Cuervo Especial",
        precio: 65000,
        imagen: "Bebidas/Tequila/Jose-Cuervo-Especial.webp"
    },
    {
        id: "Tequila-Jaileza-Oro",
        nombre: "Tequila Jaileza Oro",
        precio: 49000,
        imagen: "Bebidas/Tequila/Tequila-Jaileza-Oro.webp"
    },
    {
        id: "La-Mision-XXI",
        nombre: "La Misión XXI",
        precio: 69000,
        imagen: "Bebidas/Tequila/TEQUILA-LA-MISION-SIGLO-XXI-750.webp"
    },
    {
        id: "Tanqueray-Imported",
        nombre: "Tanqueray Imported",
        precio: 109000,
        imagen: "Bebidas/Licores Destilados/Tanqueray_Imported.webp"
    },
    {
        id: "Absolut-Citron",
        nombre: "Absolut Citron",
        precio: 74000,
        imagen: "Bebidas/Vodka/Absolut_Citron.webp"
    },
    {
        id: "La_Botija-Tabernero",
        nombre: "La Botija Tabernero",
        precio: 47000,
        imagen: "Bebidas/Licores Destilados/La_Botija-Tabernero.webp"
    },
    {
        id: "Convier-Vermouth",
        nombre: "Convier Vermouth",
        precio: 19000,
        imagen: "Bebidas/Vinos/Convier-Vermouth.webp"
    },
    {
        id: "Axis-Triple-Sec",
        nombre: "Axis Triple Sec",
        precio: 25000,
        imagen: "Bebidas/Licores Destilados/Axis-Triple-Sec.webp"
    },
    {
        id: "Axis-Licor-De-Ginebra",
        nombre: "Axis Licor de Ginebra",
        precio: 49000,
        imagen: "Bebidas/Licores Destilados/Axis-Licor-De-Ginebra.webp"
    },
    {
        id: "Sminorff-Lulo-Grande",
        nombre: "Smirnoff Lulo Grande",
        precio: 47000,
        imagen: "Bebidas/Vodka/SMIRNOFF-LULO.webp"
    },
    {
        id: "Licor-Stolichnaya",
        nombre: "Licor Stolichnaya",
        precio: 25000,
        imagen: "Bebidas/Vodka/Licor-Stolichnaya.webp"
    },
    {
        id: "Bombay-Saphire",
        nombre: "Bombay Saphire",
        precio: 152000,
        imagen: "Bebidas/Licores Destilados/Bombay-Saphire.webp"
    },
    {
        id: "Black-Jack-Grande",
        nombre: "Black Jack (Grande)",
        precio: 50000,
        imagen: "Bebidas/Cremas/Black-Jack750ml.webp"
    },
    {
        id: "Black-Jack-Mediano",
        nombre: "Black Jack (Mediano)",
        precio: 22000,
        imagen: "Bebidas/Cremas/Jack 315.webp"
    },
    {
        id: "vino-Leyenda-Rose-SYRAH",
        nombre: "Leyenda Rose Ryrah",
        precio: 68000,
        imagen: "Bebidas/Vinos/Leyenda Rose.webp"
    },
    {
        id: "Cono-Sur-Rosé",
        nombre: "Cono Sur Rosé",
        precio: 68000,
        imagen: "Bebidas/Vinos/Cono Sur Rose'.webp"
    },
    {
        id: "Cono-Sur-Cabernet",
        nombre: "Cono Sur Cabernet",
        precio: 68000,
        imagen: "Bebidas/Vinos/Cono sur Cabernet.webp"
    },
    {
        id: "120-Rosé-Cabernet",
        nombre: "Convier Vermouth",
        precio: 19000,
        imagen: "Bebidas/Vinos/120 Rose.webp"
    },
    {
        id: "Casillero-Merlot",
        nombre: "Casillero del Diablo Merlot",
        precio: 68000,
        imagen: "Bebidas/Vinos/Casillero del Diablo Merlot.webp"
    },
    {
        id: "Casillero-Cabernet",
        nombre: "Casillero del Diablo Cabernet",
        precio: 68000,
        imagen: "Bebidas/Vinos/Casillro del Diablo.webp"
    },
    {
        id: "La-Escondida-Rose-2020",
        nombre: "La Escondida Rosé 2020",
        precio: 25000,
        imagen: "Bebidas/Vinos/Vino la escondida rose.webp"
    },
    {
        id: "Vino-Indomita",
        nombre: "Indomita",
        precio: 57000,
        imagen: "Bebidas/Vinos/Indomita.webp"
    },
    {
        id: "Vino-IL-DUOMO",
        nombre: "IL DOUMO",
        precio: 40000,
        imagen: "Bebidas/Vinos/IL DOUMO.webp"
    },
    {
        id: "Cabernet-Sauviginon",
        nombre: "Cabernet Sauviginon",
        precio: 51000,
        imagen: "Bebidas/Vinos/GatoNegro Sauvigion.webp"
    },
    {
        id: "Santa-Ana-Reserve-2020",
        nombre: "Santa Ana Reserve 2020",
        precio: 77000,
        imagen: "Bebidas/Vinos/Santa Ana Reserve.webp"
    },
    {
        id: "120-Cabernet-Sauviginon-2021",
        nombre: "120 Cabernet Sauviginon 2021",
        precio: 68000,
        imagen: "Bebidas/Vinos/120 Santa Rita.webp"
    },
    {
        id: "Vino-Leyenda-Merlot-2020",
        nombre: "Vino Leyenda Merlot 2020",
        precio: 72000,
        imagen: "Bebidas/Vinos/Leyenda Merlot 2020.webp"
    },
    {
        id: "Tres-medallas-Merlot-2021",
        nombre: "Tres Medallas Merlot 2021",
        precio: 68000,
        imagen: "Bebidas/Vinos/3 Medallas Merlot 21.webp"
    },
    {
        id: "Vientos-del-Sur-Merlot-2020",
        nombre: "Vientos del Sur Merlot 2020",
        precio: 70000,
        imagen: "Bebidas/Vinos/Vientos del sur merlot.webp"
    },
    {
        id: "Tocornal-Carmenere-2020",
        nombre: "Tocornal Carmenere 2020",
        precio: 63000,
        imagen: "Bebidas/Vinos/Tocornal Carmenere.webp"
    },
    {
        id: "Gato-Negro-Cabernet-Merlot",
        nombre: "Gato Negro Cabernet Merlot",
        precio: 58000,
        imagen: "Bebidas/Vinos/Gato Negro Cabernet Merlo chile.webp"
    },
    {
        id: "Chiloe-Merlot",
        nombre: "Chiloe Merlot",
        precio: 60000,
        imagen: "Bebidas/Vinos/Chiloe Merlot.webp"
    },
    {
        id: "Manischewitz",
        nombre: "Manischewitz",
        precio: 55000,
        imagen: "Bebidas/Vinos/Manischewitz.webp"
    },
    {
        id: "Merlot-Viña-Maipo",
        nombre: "Merlot Viña Maipo",
        precio: 62000,
        imagen: "Bebidas/Vinos/Merlot Maipo.webp"
    },
    {
        id: "Cabernet-Sauvignon-Vientos-del-Sur-2020",
        nombre: "Cabernet Sauvignon Vientos del Sur 2020",
        precio: 75000,
        imagen: "Bebidas/Vinos/Cabernet Vientos del Sur 2020.png"
    },
    {
        id: "Vino-Tinto-Gato-Negro-Malbec-ARG",
        nombre: "Vino Tinto Gato Negro Malbec ARG",
        precio: 67000,
        imagen: "Bebidas/Vinos/Gato Negro Malbec.webp"
    },
    {
        id: "Estedanya-Lambrusco-Vino-Roso-Dulce",
        nombre: "Stefanya Lambrusco Rosso Dulce",
        precio: 46000,
        imagen: "Bebidas/Vinos/Vino Stefanya Lambrusco.webp"
    },
    {
        id: "Vino-Tinto-Leyenda-Carmenere-21",
        nombre: "Vino Tinto Leyenda Carmenere 2021",
        precio: 68000,
        imagen: "Bebidas/Vinos/Leyenda Vino Carmenere 2021.webp"
    },
    {
        id: "Vino-tres-medallas-2020",
        nombre: "Tres Medallas Carmenere 2020",
        precio: 44000,
        imagen: "Bebidas/Vinos/3Tres Medallas Carmenere2020.webp"
    },
    {
        id: "Chiloe-Cabernet-Sauviginon-2020",
        nombre: "Chiloe Cabernet Sauvignon 2020",
        precio: 40000,
        imagen: "Bebidas/Vinos/Wine Of Chile  Chiloe.webp"
    },
    {
        id: "Tres-medallas-Cabernet-2021",
        nombre: "Tres Medallas Cabernet Sauvignon 2021",
        precio: 44000,
        imagen: "Bebidas/Vinos/3 Medallas Vino tinto.webp"
    },
    {
        id: "Vino-RosadoLambrusco-Rosé-Dolce",
        nombre: "Vino Rosado Lambrusco Rosé Dolce",
        precio: 46000,
        imagen: "Bebidas/Vinos/Lambrusco Rose-Dolce 1911.webp"
    },
    {
        id: "Mirador-Merlot-19",
        nombre: "Mirador Merlot 2019",
        precio: 68000,
        imagen: "Bebidas/Vinos/Mirador Merlot 2019.webp"
    },
    {
        id: "Leyenda-Cabernet-Sauviginon",
        nombre: "Leyenda Cabernet Sauvignon",
        precio: 68000,
        imagen: "Bebidas/Vinos/Leyenda Vino tinto.webp"
    },
    {
        id: "Buchanans-Malts",
        nombre: "Buchanans Malts",
        precio: 230000,
        imagen: "Bebidas/Whiskys/Buchanans Malts.webp"
    },
    {
        id: "Chivas-Regal-13Y",
        nombre: "Chivas Regal 13Y",
        precio: 40000,
        imagen: "Bebidas/Whiskys/Chivas Regal 13Y.webp"
    },
    {
        id: "Black-and-White-M.",
        nombre: "Black and White Mediano",
        precio: 31000,
        imagen: "Bebidas/Whiskys/Blakck and white M.webp"
    },
    {
        id: "Black-and-White-G.",
        nombre: "Black and White Grande",
        precio: 57000,
        imagen: "Bebidas/Whiskys/Black and White.webp"
    },
    {
        id: "Jack-Daniels-Honey",
        nombre: "Jack Daniels Honey",
        precio: 143000,
        imagen: "Bebidas/Whiskys/Jack daniels Honey.webp"
    },
    {
        id: "Whisky-Jack-Daniels",
        nombre: "Whisky Jack Daniels",
        precio: 143000,
        imagen: "Bebidas/Whiskys/Jack daniels Black.webp"
    },
    {
        id: "Whisky-Jack-Daniels-M.",
        nombre: "Whisky Jack Daniels Mediano",
        precio: 143000,
        imagen: "Bebidas/Whiskys/Jack daniels Black.webp"
    },
    {
        id: "Chivas-regal-12Y",
        nombre: "Chivas Regal 12Y",
        precio: 146000,
        imagen: "Bebidas/Whiskys/Chivas 12Y.webp"
    },
    {
        id: "Double-Label",
        nombre: "Double Black Label",
        precio: 206000,
        imagen: "Bebidas/Whiskys/Double Black.webp"
    },
    {
        id: "Whisky-Grants-B.",
        nombre: "Whisky Grants Mediano",
        precio: 64000,
        imagen: "Bebidas/Whiskys/Grant's Wood.webp"
    },
    {
        id: "Whisky-Grants",
        nombre: "Whisky Grants",
        precio: 86000,
        imagen: "Bebidas/Whiskys/Grant's Wood.webp"
    },
    {
        id: "Ballantine",
        nombre: "Whisky Ballantine's",
        precio: 35000,
        imagen: "Bebidas/Whiskys/Ballantinea finest.webp"
    },
    {
        id: "Something-Especial-Pequeño",
        nombre: "Something Especial Pequeño",
        precio: 46000,
        imagen: "Bebidas/Whiskys/Something Especial Media.webp"
    },
    {
        id: "Something-Especial-Mediano",
        nombre: "Something Especial Mediano",
        precio: 71000,
        imagen: "Bebidas/Whiskys/Something Especial Botella.webp"
    },
    {
        id: "Something-Especial",
        nombre: "Something Especial",
        precio: 96000,
        imagen: "Bebidas/Whiskys/Something Especial Botella.webp"
    },
    {
        id: "Whisky-Jameson",
        nombre: "Whisky Jameson",
        precio: 90000,
        imagen: "Bebidas/Whiskys/Jameson.webp"
    },
    {
        id: "Chivas-Regal-18Y",
        nombre: "Chivas Regal 18Y",
        precio: 320000,
        imagen: "Bebidas/Whiskys/Chivas Regal.webp"
    },
    {
        id: "Buchanans-Deluxe-M",
        nombre: "Buchanan's Deluxe Mediano",
        precio: 97000,
        imagen: "Bebidas/Whiskys/Buchanans Deluxe M.webp"
    },
    {
        id: "Buchanans-Deluxe",
        nombre: "Buchanan's Deluxe",
        precio: 166000,
        imagen: "Bebidas/Whiskys/Buchanans Deluxe G.webp"
    },
    {
        id: "old-Parr",
        nombre: "Old Parr",
        precio: 180000,
        imagen: "Bebidas/Whiskys/Old Parr.webp"
    },
    {
        id: "Black-Label",
        nombre: "Black Label",
        precio: 150000,
        imagen: "Bebidas/Whiskys/Black Label.webp"
    },
    {
        id: "Monkey-Shoulder",
        nombre: "Monkey Shoulder",
        precio: 147000,
        imagen: "Bebidas/Whiskys/Monkey Shoulder.webp"
    },
    {
        id: "Red-Label",
        nombre: "Red Label",
        precio: 70000,
        imagen: "Bebidas/Whiskys/Red label.webp"
    },
    {
        id: "Bacardi-Mandarina",
        nombre: "Bacardí Mandarina",
        precio: 52000,
        imagen: "Bebidas/Bacardi/Bicardi Mandarina.webp"
    },
    {
        id: "Bacardi-Limon",
        nombre: "Bacardí Limón",
        precio: 52000,
        imagen: "Bebidas/Bacardi/Bicardi Limon.webp"
    },
    {
        id: "Bacardi-Island",
        nombre: "Bacardí Island Tea",
        precio: 52000,
        imagen: "Bebidas/Bacardi/Bicardi Island Tea.webp"
    },
    {
        id: "Bacardi-Bahama",
        nombre: "Bacardí Bahama Mama",
        precio: 52000,
        imagen: "Bebidas/Bacardi/Bicardi Bahama Mama.webp"
    },
    {
        id: "Bacardi-Añejo-Pe",
        nombre: "Bacardí Añejo Pequeño",
        precio: 52000,
        imagen: "Bebidas/Bacardi/Bicardi Añejo.webp"
    },
    {
        id: "Mojito",
        nombre: "Bacardí Mojito",
        precio: 52000,
        imagen: "Bebidas/Bacardi/Bicardi Mojito.webp"
    },
    {
        id: "Bacardi-Carta-B",
        nombre: "Bacardí Carta Blanca",
        precio: 62000,
        imagen: "Bebidas/Bacardi/Bicadi-Carta-Blanca.webp"
    },
    {
        id: "J.P.-Chenet-Blanco",
        nombre: "J.P.Chenet Blanco",
        precio: 78000,
        imagen: "Bebidas/Vinos/J.P.-Chenet-Blanco.webp"
    },
    {
        id: "J.P.-Chenet-Rosado",
        nombre: "J.P.Chenet Rosado",
        precio: 78000,
        imagen: "Bebidas/Vinos/J.P.-Chenet-Rosado.webp"
    },
    {
        id: "J.P.-Chenet-De-Fresa",
        nombre: "J.P.Chenet De Fresa",
        precio: 78000,
        imagen: "Bebidas/Vinos/J.P.-Chenet-De-Fresa.webp"
    },
    {
        id: "Bacardi-Zombie",
        nombre: "Bacardi Zombie",
        precio: 56000,
        imagen: "Bebidas/Bacardi/Bacardi-Zombie.webp"
    },
    {
        id: "Bacardi-Hurricane",
        nombre: "Bacardi Hurricane",
        precio: 56000,
        imagen: "Bebidas/Bacardi/Bacardi-Hurricane.webp"
    },
    {
        id: "Leyenda-Sauvignon-Blanco",
        nombre: "Leyenda Sauvignon Blanco",
        precio: 36000,
        imagen: "Bebidas/vinos/Leyenda-Sauvignon-Blanco.webp"
    },
    {
        id: "Buchanans-Master",
        nombre: "Buchanans Master",
        precio: 36000,
        imagen: "Bebidas/Whiskys/Buchanans-Master.webp"
    },
    {
        id: "Lider-Caja-Sin-Azucar",
        nombre: "Lider Caja Sin Azucar",
        precio: 60000,
        imagen: "Bebidas/Aguardientes/Lider-Caja-Sin-Azucar.webp"
    },
    {
        id: "Lider-Sin-Azucar-Verde",
        nombre: "Lider Sin Azucar Verde",
        precio: 24000,
        imagen: "Bebidas/Aguardientes/Lider-Sin-Azucar-Verde.webp"
    },
    {
        id: "La-Escondida-Malbec",
        nombre: "La Escondida Malbec",
        precio: 25000,
        imagen: "Bebidas/Vinos/La-Escondida-Malbec.webp"
    },
    {
        id: "Embajador Merlot Argentina",
        nombre: "Embajador Merlot Argentina",
        precio: 23000,
        imagen: "Bebidas/Vinos/Embajador Merlot Argentina.webp"
    },
    {
        id: "Embajador Merlot Chile",
        nombre: "Embajador Merlot Chile",
        precio: 23000,
        imagen: "Bebidas/Vinos/Embajador Merlot Chile.webp"
    },
    {
        id: "Tres Caballos Gold",
        nombre: "Tres Caballos Gold",
        precio: 104000,
        imagen: "Bebidas/Tequila/Tres Caballos Gold.webp"
    },
    {
        id: "Tequila 1800 Reposado",
        nombre: "Tequila 1800 Reposado",
        precio: 233000,
        imagen: "Bebidas/Tequila/Tequila 1800 Reposado.webp"
    },
    {
        id: "OLMECA Dark Chocolate",
        nombre: "OLMECA Dark Chocolate",
        precio: 90000,
        imagen: "Bebidas/Tequila/OLMECA Dark Chocolate.webp"
    },
    {
        id: "Buchanans Two Souls",
        nombre: "Buchanan's Two Souls",
        precio: 206000,
        imagen: "Bebidas/Whiskys/Buchanan's Two Souls.webp"
    },
    {
        id: "Buchanans Red Seal",
        nombre: "Buchanans Red Seal",
        precio: 925000,
        imagen: "Bebidas/Whiskys/Buchanans Red Seal.webp"
    },
    {
        id: "Blue Label",
        nombre: "Blue Label",
        precio: 1150000,
        imagen: "Bebidas/Whiskys/Blue Label.webp"
    },
    {
        id: "Ron Cienfuegos",
        nombre: "Ron Cienfuegos",
        precio: 46000,
        imagen: "Bebidas/Ron/Ron Cienfuegos.webp"
    },
    {
        id: "El Aguardientero Santa Lucia Sandia",
        nombre: "El Aguardientero Santa Lucia Sandia",
        precio: 30000,
        imagen: "Bebidas/Aguardientes/El Aguardientero Santa Lucia Sandia.webp"
    },
    {
        id: "El aguardientero Santa Lucia Maracuyá",
        nombre: "El aguardientero Santa Lucia Maracuyá",
        precio: 30000,
        imagen: "Bebidas/Aguardientes/El aguardientero Santa Lucia Maracuyá.webp"
    },
    {
        id: "Ónix Sello Negro Añejo",
        nombre: "Ónix Sello Negro Añejo",
        precio: 100000,
        imagen: "Bebidas/Tequila/Ónix Sello Negro Añejo.webp"
    },
    {
        id: "Onix sello negro nada a medias todo al 100",
        nombre: "Onix sello negro nada a medias todo al 100",
        precio: 55000,
        imagen: "Bebidas/Tequila/Onix sello negro nada a medias todo al 100.webp"
    }
];

// Mostrar solo los productos favoritos
window.addEventListener('DOMContentLoaded', () => {
    const favoritosIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const contenedor = document.getElementById('favoritos-container');

    const favoritos = productos.filter(p => favoritosIds.includes(p.id));

    if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>No tienes productos en favoritos.</p>";
        return;
    }

    favoritos.forEach(p => {
        const div = document.createElement('div');
        div.className = "product";
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h2>${p.nombre}</h2>
            <p class="price">$${p.precio.toLocaleString()}</p>
            <button onclick="addToCart('${p.nombre}', ${p.precio})">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
});
