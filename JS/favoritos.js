// favoritos.js - Sistema completo para mostrar productos favoritos

// Base de datos completa de TODOS los productos (Comida + Bebidas)
const productosDB = {
    // BEBIDAS
    "bacardi-carta-blanca": { nombre: "Bacardi Carta Blanca", precio: 62000, imagen: "Bebidas/Bacardi/Bicadi-Carta-Blanca.webp" },
    "himoshi-vodka": { nombre: "HiMoShi Club Licor De Vodka I", precio: 470000, imagen: "Bebidas/Vodka/Hi-Mo-Shi-Club-Licor-Morado.webp" },
    "himoshi-vodka-2": { nombre: "HiMoShi Club Licor De Vodka II", precio: 470000, imagen: "Bebidas/Vodka/Hi-Mo-Shi-Club-Licor-Verde.webp" },
    "Aguila-6Pack": { nombre: "Aguila Original-Six Pack", precio: 19000, imagen: "Bebidas/Cervezas/AGUILA-LIGHT-ORIGINAL-SIX-PACK.webp" },
    "Erdinger-Dunkel": { nombre: "Erdinger Dunkel", precio: 25000, imagen: "Bebidas/Cervezas/Erdinger Dunkel.webp" },
    "Liefmans-Fruitesse": { nombre: "Liefmans Fruitesse", precio: 25000, imagen: "Bebidas/Cervezas/Liefmans-Fruitesse.webp" },
    "Corona-Tropical-Frutos": { nombre: "Corona Tropical-Frutos Rojos", precio: 25000, imagen: "Bebidas/Cervezas/Corona-Tropical-Frutos-Rojos.webp" },
    "Corona-Tropical-Limon": { nombre: "Corona Tropical-Limon", precio: 25000, imagen: "Bebidas/Cervezas/Corona-Tropical-Limon.webp" },
    "Smirnoff-Ice": { nombre: "Smirnoff Ice", precio: 8000, imagen: "Bebidas/Cervezas/Smirnoff-Ice-Original.webp" },
    "Smirnoff-Lata": { nombre: "Smirnoff Ice Lata", precio: 8000, imagen: "Bebidas/Cervezas/Sminroff-Ice-Original-Lata.webp" },
    "Coronita-Six-Pack": { nombre: "Corona Coronita Six Pack", precio: 21000, imagen: "Bebidas/Cervezas/Coronitas-6-Pack.webp" },
    "Cerveza-Andina-6-Pack": { nombre: "Cerveza Andina Six Pack", precio: 19000, imagen: "Bebidas/Cervezas/Cerveza-Andina-6-Pack.webp" },
    "Cerveza-Poker-6-Pack": { nombre: "Cerveza Poker Six Pack", precio: 19000, imagen: "Bebidas/Cervezas/Cerveza-Poker-6-Pack.webp" },
    "Cerveza-Club-Colombia-6-Pack": { nombre: "Club Colombia Six Pack", precio: 21000, imagen: "Bebidas/Cervezas/Cerveza-Club-Colombia-6-Pack.webp" },
    "Corona-Six-Pack": { nombre: "Corona Extra Six Pack", precio: 24000, imagen: "Bebidas/Cervezas/Corona-Six-Pack.webp" },
    "Budweiser-Six": { nombre: "Budweiser Six Pack", precio: 24000, imagen: "Bebidas/Cervezas/Budweiser-Six-Pack.webp" },
    "Costeña": { nombre: "Costeña", precio: 3500, imagen: "Bebidas/Cervezas/Costeña-Bacana-Six-Pack.webp" },
    "Michelob": { nombre: "Michelob Ultra", precio: 6000, imagen: "Bebidas/Cervezas/Michelob-Ultra-6-Pack.webp" },
    "Four-Loko-Ponche": { nombre: "Four Loko Ponche", precio: 12000, imagen: "Bebidas/Cervezas/FOUR-LOKO-PONCHE.webp" },
    "Four-Loko-Gold": { nombre: "Four Loko Gold", precio: 12000, imagen: "Bebidas/Cervezas/FOUR-LOKO-GOLD.webp" },
    "Four-Loko-Sandia": { nombre: "Four Loko Sandía", precio: 12000, imagen: "Bebidas/Cervezas/FOUR-LOKO-SANDIA.webp" },
    "Heineken-6-pack": { nombre: "Heineken Six Pack", precio: 23000, imagen: "Bebidas/Cervezas/Heineken-6-pack.webp" },
    "Aguila-Light-6-Pack": { nombre: "Aguila Light Six Pack", precio: 19000, imagen: "Bebidas/Cervezas/Aguila-Light-6-Pack.webp" },
    "Aguardiente-Lider": { nombre: "Aguardiente Líder", precio: 28000, imagen: "Bebidas/Aguardientes/Aguardiente-Lider.webp" },
    "Aguardiente": { nombre: "Aguardiente Antioqueño", precio: 33000, imagen: "Bebidas/Aguardientes/Aguardiente-Lider-750ML.webp" },
    "Onix-Sello-Negro-2": { nombre: "Onix Sello Negro 2", precio: 58000, imagen: "Bebidas/Tequila/Onix-Sello-Negro.webp" },
    "Onix-Sello-Negro": { nombre: "Onix Sello Negro", precio: 32000, imagen: "Bebidas/Tequila/Onix-Sello-Negro-2.webp" },
    "Domeco-Brandy": { nombre: "Domecq Brandy", precio: 26000, imagen: "Bebidas/Brandy/Domeco-Brandy-750ML.webp" },
    "Domeco": { nombre: "Domecq", precio: 16000, imagen: "Bebidas/Brandy/Domeco-Brandy-350ML.webp" },
    "Bacardi-Añejo-750ML": { nombre: "Bacardi Añejo 750ML", precio: 44000, imagen: "Bebidas/Bacardi/Bacardi-Añejo-750ML.webp" },
    "Ron-Viejo-De-Caldas": { nombre: "Ron Viejo de Caldas", precio: 42000, imagen: "Bebidas/Ron/Ron-Viejo-De-Caldas.webp" },
    "Havana-Club": { nombre: "Havana Club", precio: 47000, imagen: "Bebidas/Ron/Havana-Club.webp" },
    "Caballos-Tequila": { nombre: "Caballos Tequila", precio: 37000, imagen: "Bebidas/Tequila/Caballos-Tequila.webp" },
    "Bandolero-Reposado": { nombre: "Bandolero Reposado", precio: 47000, imagen: "Bebidas/Tequila/Bandolero-Reposado.webp" },
    "Altos-Plata-Tequila": { nombre: "Altos Plata Tequila", precio: 73000, imagen: "Bebidas/Tequila/Altos-Plata-Tequila.webp" },
    "Smirnoff-Lulo": { nombre: "Smirnoff Lulo", precio: 21000, imagen: "Bebidas/Vodka/Smirnoff-Lulo-375ML.webp" },
    "Reposado-Patrón": { nombre: "Reposado Patrón", precio: 143000, imagen: "Bebidas/Tequila/Reposado-Patrón.webp" },
    "Tequila-Jose-Cuervo-Especial": { nombre: "Tequila Jose Cuervo Especial", precio: 65000, imagen: "Bebidas/Tequila/Jose-Cuervo-Especial.webp" },
    "Tequila-Jaileza-Oro": { nombre: "Tequila Jaileza Oro", precio: 49000, imagen: "Bebidas/Tequila/Tequila-Jaileza-Oro.webp" },
    "La-Mision-XXI": { nombre: "La Misión XXI", precio: 69000, imagen: "Bebidas/Tequila/TEQUILA-LA-MISION-SIGLO-XXI-750.webp" },
    "Red-Label": { nombre: "Red Label", precio: 70000, imagen: "Bebidas/Whiskys/Red label.webp" },
    "Monkey-Shoulder": { nombre: "Monkey Shoulder", precio: 147000, imagen: "Bebidas/Whiskys/Monkey Shoulder.webp" },
    "Black-Label": { nombre: "Black Label", precio: 150000, imagen: "Bebidas/Whiskys/Black Label.webp" },
    "old-Parr": { nombre: "Old Parr", precio: 180000, imagen: "Bebidas/Whiskys/Old Parr.webp" },
    "Buchanans-Deluxe": { nombre: "Buchanan's Deluxe", precio: 166000, imagen: "Bebidas/Whiskys/Buchanans Deluxe G.webp" },
    "Buchanans-Deluxe-M": { nombre: "Buchanan's Deluxe M", precio: 97000, imagen: "Bebidas/Whiskys/Buchanans Deluxe M.webp" },
    "Chivas-Regal-18Y": { nombre: "Chivas Regal 18Y", precio: 320000, imagen: "Bebidas/Whiskys/Chivas Regal.webp" },
    "Whisky-Jameson": { nombre: "Whisky Jameson", precio: 90000, imagen: "Bebidas/Whiskys/Jameson.webp" },
    "Something-Especial": { nombre: "Something Especial", precio: 96000, imagen: "Bebidas/Whiskys/Something Especial Botella.webp" },
    "Something-Especial-Mediano": { nombre: "Something Especial (Mediano)", precio: 71000, imagen: "Bebidas/Whiskys/Something Especial Botella.webp" },
    "Something-Especial-Pequeño": { nombre: "Something Especial (Pequeño)", precio: 46000, imagen: "Bebidas/Whiskys/Something Especial Media.webp" },
    "Ballantine": { nombre: "Whisky Ballantine's", precio: 35000, imagen: "Bebidas/Whiskys/Ballantinea finest.webp" },
    "Whisky-Grants": { nombre: "Whisky Grants", precio: 86000, imagen: "Bebidas/Whiskys/Grant's Wood.webp" },
    "Whisky-Grants-B.": { nombre: "Whisky Grants Mediano", precio: 64000, imagen: "Bebidas/Whiskys/Grant's Wood.webp" },
    "Double-Label": { nombre: "Double Black Label", precio: 206000, imagen: "Bebidas/Whiskys/Double Black.webp" },
    "Chivas-regal-12Y": { nombre: "Chivas Regal 12Y", precio: 146000, imagen: "Bebidas/Whiskys/Chivas 12Y.webp" },
    "Whisky-Jack-Daniels-M.": { nombre: "Whisky Jack Daniels M", precio: 143000, imagen: "Bebidas/Whiskys/Jack daniels Black.webp" },
    "Whisky-Jack-Daniels": { nombre: "Whisky Jack Daniels", precio: 143000, imagen: "Bebidas/Whiskys/Jack daniels Black.webp" },
    "Jack-Daniels-Honey": { nombre: "Jack Daniels Honey", precio: 143000, imagen: "Bebidas/Whiskys/Jack daniels Honey.webp" },
    "Black-and-White-G.": { nombre: "Black and White Grande", precio: 57000, imagen: "Bebidas/Whiskys/Black and White.webp" },
    "Black-and-White-M.": { nombre: "Black and White Mediano", precio: 31000, imagen: "Bebidas/Whiskys/Blakck and white M.webp" },
    "Chivas-Regal-13Y": { nombre: "Chivas Regal 13Y", precio: 40000, imagen: "Bebidas/Whiskys/Chivas Regal 13Y.webp" },
    "Buchanans-Malts": { nombre: "Buchanans Malts", precio: 230000, imagen: "Bebidas/Whiskys/Buchanans Malts.webp" },
    "Bacardi-Carta-B": { nombre: "Bacardí Carta Blanca", precio: 62000, imagen: "Bebidas/Bacardi/Bicadi-Carta-Blanca.webp" },
    "Mojito": { nombre: "Bacardí Mojito", precio: 52000, imagen: "Bebidas/Bacardi/Bicardi Mojito.webp" },
    "Bacardi-Añejo-Pe": { nombre: "Bacardí Añejo Pequeño", precio: 52000, imagen: "Bebidas/Bacardi/Bicardi Añejo.webp" },
    "Bacardi-Bahama": { nombre: "Bacardí Bahama Mama", precio: 52000, imagen: "Bebidas/Bacardi/Bicardi Bahama Mama.webp" },
    "Bacardi-Island": { nombre: "Bacardí Island Tea", precio: 52000, imagen: "Bebidas/Bacardi/Bicardi Island Tea.webp" },
    "Bacardi-Limon": { nombre: "Bacardí Limón", precio: 52000, imagen: "Bebidas/Bacardi/Bicardi Limon.webp" },
    "Bacardi-Mandarina": { nombre: "Bacardí Mandarina", precio: 52000, imagen: "Bebidas/Bacardi/Bicardi Mandarina.webp" },
    "Bacardi-Zombie": { nombre: "Bacardi Zombie", precio: 56000, imagen: "Bebidas/Bacardi/Bacardi-Zombie.webp" },
    "Bacardi-Hurricane": { nombre: "Bacardi Hurricane", precio: 56000, imagen: "Bebidas/Bacardi/Bacardi-Hurricane.webp" },
    "Buchanans-Master": { nombre: "Buchanans Master", precio: 199000, imagen: "Bebidas/Whiskys/Buchanans-Master.webp" },
    "Buchanans Two Souls": { nombre: "Buchanan's Two Souls", precio: 206000, imagen: "Bebidas/Whiskys/Buchanan's Two Souls.webp" },
    "Buchanans Red Seal": { nombre: "Buchanans Red Seal", precio: 925000, imagen: "Bebidas/Whiskys/Buchanans Red Seal.webp" },
    "Blue Label": { nombre: "Blue Label", precio: 1150000, imagen: "Bebidas/Whiskys/Blue Label.webp" },
    "Ron Cienfuegos": { nombre: "Ron Cienfuegos", precio: 46000, imagen: "Bebidas/Ron/Ron Cienfuegos.webp" },
    "El Aguardientero Santa Lucia Sandia": { nombre: "El Aguardientero Santa Lucia Sandia", precio: 30000, imagen: "Bebidas/Aguardientes/El Aguardientero Santa Lucia Sandia.webp" },
    "El aguardientero Santa Lucia Maracuyá": { nombre: "El aguardientero Santa Lucia Maracuyá", precio: 30000, imagen: "Bebidas/Aguardientes/El aguardientero Santa Lucia Maracuyá.webp" },
    "Ónix Sello Negro Añejo": { nombre: "Ónix Sello Negro Añejo", precio: 100000, imagen: "Bebidas/Tequila/Ónix Sello Negro Añejo.webp" },
    "Onix sello negro nada a medias todo al 100": { nombre: "Onix sello negro todo al 100", precio: 55000, imagen: "Bebidas/Tequila/Onix sello negro nada a medias todo al 100.webp" },
    "Lider-Caja-Sin-Azucar": { nombre: "Lider Caja Sin Azucar", precio: 60000, imagen: "Bebidas/Aguardientes/Lider-Caja-Sin-Azucar.webp" },
    "Lider-Sin-Azucar-Verde": { nombre: "Lider Sin Azucar Verde", precio: 24000, imagen: "Bebidas/Aguardientes/Lider-Sin-Azucar-Verde.webp" },
    "Tres Caballos Gold": { nombre: "Tres Caballos Gold", precio: 104000, imagen: "Bebidas/Tequila/Tres Caballos Gold.webp" },
    "Tequila 1800 Reposado": { nombre: "Tequila 1800 Reposado", precio: 233000, imagen: "Bebidas/Tequila/Tequila 1800 Reposado.webp" },
    "OLMECA Dark Chocolate": { nombre: "OLMECA Dark Chocolate", precio: 90000, imagen: "Bebidas/Tequila/OLMECA Dark Chocolate.webp" },
    
    // VINOS (todos los vinos de tu lista)
    "vino-Leyenda-Rose-SYRAH": { nombre: "Leyenda Rose Ryrah", precio: 68000, imagen: "Bebidas/Vinos/Leyenda Rose.webp" },
    "Cono-Sur-Rosé": { nombre: "Cono Sur Rosé", precio: 68000, imagen: "Bebidas/Vinos/Cono Sur Rose'.webp" },
    "Cono-Sur-Cabernet": { nombre: "Cono Sur Cabernet", precio: 68000, imagen: "Bebidas/Vinos/Cono sur Cabernet.webp" },
    "120-Rosé-Cabernet": { nombre: "120 Rosé Cabernet", precio: 19000, imagen: "Bebidas/Vinos/120 Rose.webp" },
    "Casillero-Merlot": { nombre: "Casillero del Diablo Merlot", precio: 68000, imagen: "Bebidas/Vinos/Casillero del Diablo Merlot.webp" },
    "Casillero-Cabernet": { nombre: "Casillero del Diablo Cabernet", precio: 68000, imagen: "Bebidas/Vinos/Casillro del Diablo.webp" },
    "La-Escondida-Rose-2020": { nombre: "La Escondida Rosé 2020", precio: 25000, imagen: "Bebidas/Vinos/Vino la escondida rose.webp" },
    "Vino-Indomita": { nombre: "Indomita", precio: 57000, imagen: "Bebidas/Vinos/Indomita.webp" },
    "Vino-IL-DUOMO": { nombre: "IL DOUMO", precio: 40000, imagen: "Bebidas/Vinos/IL DOUMO.webp" },
    "Cabernet-Sauviginon": { nombre: "Cabernet Sauviginon", precio: 51000, imagen: "Bebidas/Vinos/GatoNegro Sauvigion.webp" },
    "Santa-Ana-Reserve-2020": { nombre: "Santa Ana Reserve 2020", precio: 77000, imagen: "Bebidas/Vinos/Santa Ana Reserve.webp" },
    "120-Cabernet-Sauviginon-2021": { nombre: "120 Cabernet Sauviginon 2021", precio: 68000, imagen: "Bebidas/Vinos/120 Santa Rita.webp" },
    "Vino-Leyenda-Merlot-2020": { nombre: "Vino Leyenda Merlot 2020", precio: 72000, imagen: "Bebidas/Vinos/Leyenda Merlot 2020.webp" },
    "Tres-medallas-Merlot-2021": { nombre: "Tres Medallas Merlot 2021", precio: 68000, imagen: "Bebidas/Vinos/3 Medallas Merlot 21.webp" },
    "Vientos-del-Sur-Merlot-2020": { nombre: "Vientos del Sur Merlot 2020", precio: 70000, imagen: "Bebidas/Vinos/Vientos del sur merlot.webp" },
    "Tocornal-Carmenere-2020": { nombre: "Tocornal Carmenere 2020", precio: 63000, imagen: "Bebidas/Vinos/Tocornal Carmenere.webp" },
    "Gato-Negro-Cabernet-Merlot": { nombre: "Gato Negro Cabernet Merlot", precio: 58000, imagen: "Bebidas/Vinos/Gato Negro Cabernet Merlo chile.webp" },
    "Chiloe-Merlot": { nombre: "Chiloe Merlot", precio: 60000, imagen: "Bebidas/Vinos/Chiloe Merlot.webp" },
    "Manischewitz": { nombre: "Manischewitz", precio: 55000, imagen: "Bebidas/Vinos/Manischewitz.webp" },
    "Merlot-Viña-Maipo": { nombre: "Merlot Viña Maipo", precio: 62000, imagen: "Bebidas/Vinos/Merlot Maipo.webp" },
    "Cabernet-Sauvignon-Vientos-del-Sur-2020": { nombre: "Cabernet Sauvignon Vientos del Sur 2020", precio: 75000, imagen: "Bebidas/Vinos/Cabernet Vientos del Sur 2020.png" },
    "Vino-Tinto-Gato-Negro-Malbec-ARG": { nombre: "Vino Tinto Gato Negro Malbec ARG", precio: 67000, imagen: "Bebidas/Vinos/Gato Negro Malbec.webp" },
    "Estedanya-Lambrusco-Vino-Roso-Dulce": { nombre: "Stefanya Lambrusco Rosso Dulce", precio: 46000, imagen: "Bebidas/Vinos/Vino Stefanya Lambrusco.webp" },
    "Vino-Tinto-Leyenda-Carmenere-21": { nombre: "Vino Tinto Leyenda Carmenere 2021", precio: 68000, imagen: "Bebidas/Vinos/Leyenda Vino Carmenere 2021.webp" },
    "Vino-tres-medallas-2020": { nombre: "Tres Medallas Carmenere 2020", precio: 44000, imagen: "Bebidas/Vinos/3Tres Medallas Carmenere2020.webp" },
    "Chiloe-Cabernet-Sauviginon-2020": { nombre: "Chiloe Cabernet Sauvignon 2020", precio: 40000, imagen: "Bebidas/Vinos/Wine Of Chile  Chiloe.webp" },
    "Tres-medallas-Cabernet-2021": { nombre: "Tres Medallas Cabernet Sauvignon 2021", precio: 44000, imagen: "Bebidas/Vinos/3 Medallas Vino tinto.webp" },
    "Vino-RosadoLambrusco-Rosé-Dolce": { nombre: "Vino Rosado Lambrusco Rosé Dolce", precio: 46000, imagen: "Bebidas/Vinos/Lambrusco Rose-Dolce 1911.webp" },
    "Mirador-Merlot-19": { nombre: "Mirador Merlot 2019", precio: 68000, imagen: "Bebidas/Vinos/Mirador Merlot 2019.webp" },
    "Leyenda-Cabernet-Sauviginon": { nombre: "Leyenda Cabernet Sauvignon", precio: 68000, imagen: "Bebidas/Vinos/Leyenda Vino tinto.webp" },
    "J.P.-Chenet-Blanco": { nombre: "J.P.Chenet Blanco", precio: 78000, imagen: "Bebidas/Vinos/J.P.-Chenet-Blanco.webp" },
    "J.P.-Chenet-Rosado": { nombre: "J.P.Chenet Rosado", precio: 78000, imagen: "Bebidas/Vinos/J.P.-Chenet-Rosado.webp" },
    "J.P.-Chenet-De-Fresa": { nombre: "J.P.Chenet De Fresa", precio: 78000, imagen: "Bebidas/Vinos/J.P.-Chenet-De-Fresa.webp" },
    "Leyenda-Sauvignon-Blanco": { nombre: "Leyenda Sauvignon Blanco", precio: 36000, imagen: "Bebidas/vinos/Leyenda-Sauvignon-Blanco.webp" },
    "La-Escondida-Malbec": { nombre: "La Escondida Malbec", precio: 25000, imagen: "Bebidas/Vinos/La-Escondida-Malbec.webp" },
    "Embajador Merlot Argentina": { nombre: "Embajador Merlot Argentina", precio: 23000, imagen: "Bebidas/Vinos/Embajador Merlot Argentina.webp" },
    "Embajador Merlot Chile": { nombre: "Embajador Merlot Chile", precio: 23000, imagen: "Bebidas/Vinos/Embajador Merlot Chile.webp" },
    
    // LICORES Y OTROS
    "Tanqueray-Imported": { nombre: "Tanqueray Imported", precio: 109000, imagen: "Bebidas/Licores Destilados/Tanqueray_Imported.webp" },
    "Absolut-Citron": { nombre: "Absolut Citron", precio: 74000, imagen: "Bebidas/Vodka/Absolut_Citron.webp" },
    "La_Botija-Tabernero": { nombre: "La Botija Tabernero", precio: 47000, imagen: "Bebidas/Licores Destilados/La_Botija-Tabernero.webp" },
    "Convier-Vermouth": { nombre: "Convier Vermouth", precio: 19000, imagen: "Bebidas/Vinos/Convier-Vermouth.webp" },
    "Axis-Triple-Sec": { nombre: "Axis Triple Sec", precio: 25000, imagen: "Bebidas/Licores Destilados/Axis-Triple-Sec.webp" },
    "Axis-Licor-De-Ginebra": { nombre: "Axis Licor de Ginebra", precio: 49000, imagen: "Bebidas/Licores Destilados/Axis-Licor-De-Ginebra.webp" },
    "Sminorff-Lulo-Grande": { nombre: "Smirnoff Lulo Grande", precio: 47000, imagen: "Bebidas/Vodka/SMIRNOFF-LULO.webp" },
    "Licor-Stolichnaya": { nombre: "Licor Stolichnaya", precio: 25000, imagen: "Bebidas/Vodka/Licor-Stolichnaya.webp" },
    "Bombay-Saphire": { nombre: "Bombay Saphire", precio: 152000, imagen: "Bebidas/Licores Destilados/Bombay-Saphire.webp" },
    "Black-Jack-Grande": { nombre: "Black Jack (Grande)", precio: 50000, imagen: "Bebidas/Cremas/Black-Jack750ml.webp" },
    "Black-Jack-Mediano": { nombre: "Black Jack (Mediano)", precio: 22000, imagen: "Bebidas/Cremas/Jack 315.webp" },

    // COMIDA - Burgers
    "burger-junior-kinds": { nombre: "Burger Junior Kinds", precio: 28000, imagen: "Comida/Burger Junior Kinds.webp" },
    "burger-choclo": { nombre: "Burger Choclo", precio: 28000, imagen: "Comida/Burger Choclo.webp" },
    "burger-ranch": { nombre: "Burger Ranch", precio: 28000, imagen: "Comida/Burger Ranch.webp" },
    "burger-mexicana": { nombre: "Burger Mexicana", precio: 28000, imagen: "Comida/Burger Mexicana.webp" },
    "burger-los-jjjs": { nombre: "Burger Los JJJ's", precio: 28000, imagen: "Comida/Burger Los JJJ's.webp" },
    "burger-mixta": { nombre: "Burger Mixta", precio: 25000, imagen: "Comida/Burger Mixta.webp" },
    "burger-hawaina": { nombre: "Burger Hawaina", precio: 25000, imagen: "Comida/Burger Hawaina.webp" },
    "burger-doble-carne": { nombre: "Burger Doble Carne", precio: 25000, imagen: "Comida/Burger Doble Carne.webp" },
    "burger-pork": { nombre: "Burger Pork", precio: 20000, imagen: "Comida/Burger Pork.webp" },
    "burger-chiken": { nombre: "Burger Chiken", precio: 20000, imagen: "Comida/Burger Chiken.webp" },
    "burger-tocimiel": { nombre: "Burger Tocimiel", precio: 20000, imagen: "Comida/Burger Tocimiel.webp" },
    "burger-tradicional": { nombre: "Burger Tradicional", precio: 15000, imagen: "Comida/Burger Tradicional.webp" },
    
    // COMIDA - Perros
    "perro-hawaiano": { nombre: "Perro Hawaiano", precio: 15000, imagen: "Comida/Perro Hawaiano.webp" },
    "perro-criollo": { nombre: "Perro Criollo", precio: 18000, imagen: "Comida/Perro Criollo.webp" },
    "perrote": { nombre: "Perrote", precio: 20000, imagen: "Comida/Perrote.webp" },
    "perro-americano": { nombre: "Perro Americano", precio: 15000, imagen: "Comida/Perro Americano.webp" },
    "perro-choclo": { nombre: "Perro Choclo", precio: 19000, imagen: "Comida/Perro Choclo.webp" },
    "perro-mexicano": { nombre: "Perro Mexicano", precio: 20000, imagen: "Comida/Perro Mexicano.webp" },
    "perro-ranchero": { nombre: "Perro Ranchero", precio: 18000, imagen: "Comida/Perro Ranchero.webp" },
    
    // COMIDA - Taquitos
    "carnitas": { nombre: "Carnitas", precio: 20000, imagen: "Comida/Carnitas.webp" },
    "pollo-maiz": { nombre: "Pollo Maíz", precio: 18000, imagen: "Comida/Pollo Maíz.webp" },
    "maduro-cronch": { nombre: "Maduro Cronch", precio: 24000, imagen: "Comida/Maduro Cronch.webp" },
    
    // COMIDA - Maduros
    "maduro-los-jjjs": { nombre: "Maduro Los JJJ's", precio: 22000, imagen: "Comida/Maduro Los JJJ's.webp" },
    "maduros-carnivoros": { nombre: "Maduros Carnivoros", precio: 22000, imagen: "Comida/Maduros Carnivoros.webp" },
    
    // COMIDA - Picadas
    "tradicional": { nombre: "Tradicional", precio: 35000, imagen: "Comida/Tradicional.webp" },
    "criollo": { nombre: "Criollo", precio: 35000, imagen: "Comida/Criolla.webp" },
    
    // COMIDA - Nachos y Burritos
    "nachos": { nombre: "Nachos", precio: 20000, imagen: "Comida/Nachos.webp" },
    "burrito-vegetariano": { nombre: "Burrito Vegetariano", precio: 20000, imagen: "Comida/Burrito Vegetariano.webp" },
    "burrito-crunch": { nombre: "Burrito crunch", precio: 25000, imagen: "Comida/Burrito crunch.webp" },
    "burrito-ranch": { nombre: "Burrito Ranch", precio: 25000, imagen: "Comida/Burrito Ranch.webp" }
};

// Función para eliminar un producto de favoritos
function eliminarDeFavoritos(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Recargar la página para actualizar la vista
    location.reload();
}

// Cargar y mostrar los productos favoritos
window.addEventListener('DOMContentLoaded', () => {
    const favoritosIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const contenedor = document.getElementById('favoritos-container');
    const emptyState = document.getElementById('empty-favorites');
    const contadorElemento = document.getElementById('favoritesCount');

    // Actualizar contador
    if (contadorElemento) {
        contadorElemento.textContent = favoritosIds.length;
    }

    // Mostrar mensaje vacío si no hay favoritos
    if (favoritosIds.length === 0) {
        if (contenedor) contenedor.style.display = 'none';
        if (emptyState) emptyState.style.display = 'flex';
        return;
    }

    // Ocultar mensaje vacío
    if (contenedor) contenedor.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    // Limpiar contenedor
    contenedor.innerHTML = '';

    // Crear tarjetas de productos favoritos
    favoritosIds.forEach(productId => {
        const producto = productosDB[productId];
        
        if (producto) {
            const div = document.createElement('div');
            div.className = "product";
            div.id = productId;
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p class="price">${producto.precio.toLocaleString('es-CO')}</p>
                <button onclick="addToCart('${producto.nombre}', ${producto.precio})" class="add-cart-btn">
                    <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                </button>
                <button onclick="eliminarDeFavoritos('${productId}')" class="like-button liked">
                    <i class="fas fa-heart"></i>
                </button>
            `;
            contenedor.appendChild(div);
        }
    });
});

console.log('✅ favoritos.js cargado correctamente');
