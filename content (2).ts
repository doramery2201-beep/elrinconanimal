/**
 * Rincón Animal — biblioteca de contenido.
 * Todos los textos son originales. Las fotografías provienen de Wikimedia
 * Commons y están verificadas. Para añadir una especie, un artículo o una
 * ubicación basta con agregar un objeto a la lista correspondiente.
 */

export type ConservationTone = "good" | "warn" | "bad";

export interface AnimalSection {
  heading: string;
  text: string;
}

export interface Animal {
  id: string;
  name: string;
  scientific: string;
  category: string;
  categoryId: string;
  conservation: string;
  conservationTone: ConservationTone;
  habitat: string;
  diet: string;
  size: string;
  weight: string;
  lifespan: string;
  speed: string;
  range: string;
  country: string;
  regions: string[];
  aliases: string[];
  summary: string;
  about: string;
  dietText: string;
  rangeText: string;
  reproduction: string;
  predators: string;
  behavior: string;
  curiosities: string[];
  image: string;
  imageAlt: string;
  photoCredit: string;
  related: string[];
  articleIds: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  type: string;
  read: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  animalIds: string[];
  sections: AnimalSection[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Location {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  animalIds: string[];
}

export interface ScienceTopic {
  icon: string;
  tag: string;
  title: string;
  description: string;
  articleId: string;
}

export interface Curiosity {
  icon: string;
  title: string;
  description: string;
  animalIds: string[];
}

export interface NewsItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  animalId: string;
}

export const categories: Category[] = [
  { id: "mamiferos", name: "Mamíferos", icon: "🐘", description: "Desde grandes felinos hasta gigantes gentiles de la sabana." },
  { id: "aves", name: "Aves", icon: "🦅", description: "Colores, vuelos y cantos que llenan cada ecosistema." },
  { id: "reptiles", name: "Reptiles", icon: "🐍", description: "Sangre fría, paciencia y estrategias antiguas." },
  { id: "peces", name: "Peces", icon: "🐟", description: "La vida que llena ríos, lagos y océanos." },
  { id: "anfibios", name: "Anfibios", icon: "🐸", description: "Guardianes sensibles del agua y el bosque." },
  { id: "invertebrados", name: "Invertebrados", icon: "🦋", description: "Los animales más numerosos y sorprendentes del planeta." },
  { id: "marinos", name: "Animales marinos", icon: "🌊", description: "Ballenas, tiburones y la vida de los mares." },
];

const img = (id: keyof typeof images) => images[id].url;

const images = {
  jaguar: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/1280px-Standing_jaguar.jpg" },
  "ballena-azul": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/1280px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg" },
  "tortuga-verde": { url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg/1280px-Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg" },
  leon: { url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1280px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" },
  tigre: { url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/1280px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg" },
  "elefante-africano": { url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg/1280px-178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg" },
  "aguila-real": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg" },
  "cocodrilo-americano": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Crocodylus_acutus_mexico_02-edit1.jpg/1280px-Crocodylus_acutus_mexico_02-edit1.jpg" },
  orca: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1280px-Killerwhales_jumping.jpg" },
  "guacamaya-roja": { url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Scarlet_macaw_%28Ara_macao_cyanopterus%29_Copan.jpg/1280px-Scarlet_macaw_%28Ara_macao_cyanopterus%29_Copan.jpg" },
  "rana-ojos-rojos": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Red-eyed_Tree_Frog_%28Agalychnis_callidryas%29_1.png/1280px-Red-eyed_Tree_Frog_%28Agalychnis_callidryas%29_1.png" },
  "tucan-pico-iris": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Keel-billed_toucan_%28Ramphastos_sulfuratus_sulfuratus%29_on_foxtail_palm_%28Wodyetia_bifurcata%29_Cayo.jpg/1280px-Keel-billed_toucan_%28Ramphastos_sulfuratus_sulfuratus%29_on_foxtail_palm_%28Wodyetia_bifurcata%29_Cayo.jpg" },
  "tiburon-ballena": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Similan_Dive_Center_-_great_whale_shark.jpg/1280px-Similan_Dive_Center_-_great_whale_shark.jpg" },
  "perezoso-de-tres-dedos": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bradypus.jpg/1280px-Bradypus.jpg" },
  "quetzal-resplandeciente": { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Resplendent_quetzal_san_gerardo_de_dota_3.31.24_DSC_3989-topaz-denoiseraw.jpg/1280px-Resplendent_quetzal_san_gerardo_de_dota_3.31.24_DSC_3989-topaz-denoiseraw.jpg" },
} as const;

const WM = "Foto · Wikimedia Commons";

export const animals: Animal[] = [
  {
    id: "jaguar",
    name: "Jaguar",
    scientific: "Panthera onca",
    category: "Mamífero",
    categoryId: "mamiferos",
    conservation: "Casi amenazado",
    conservationTone: "warn",
    habitat: "Selvas tropicales, humedales, bosques secos y sabanas",
    diet: "Carnívoro",
    size: "1,6–2,4 m incluyendo la cola",
    weight: "45–100 kg",
    lifespan: "12–15 años en libertad",
    speed: "Hasta 80 km/h en carreras cortas",
    range: "Desde México hasta el norte de Argentina",
    country: "América",
    regions: ["América", "Centroamérica", "Nicaragua"],
    aliases: ["pantera", "tigre americano", "yaguar"],
    summary:
      "El felino más grande de América: un nadador experto, un depredador silencioso y el guardián de los bosques que habita.",
    about:
      "El jaguar vive solo y defiende un territorio amplio que patrulla siguiendo rutas fijas. A diferencia de otros felinos, adora el agua: cruza ríos, nada con naturalidad y caza también en las orillas. Es más activo al amanecer y al atardecer, cuando el bosque despierta con su movimiento.",
    dietText:
      "Caza más de 85 especies distintas: capibaras, ciervos, caimanes, tortugas y peces. Su técnica es única: en lugar de atacar el cuello, clava los colmillos directo en el cráneo de su presa, la mordida más poderosa entre los grandes felinos.",
    rangeText:
      "Se distribuye desde el norte de México hasta el norte de Argentina, con las poblaciones más sanas en la Amazonía y en la selva de Centroamérica. Nicaragua forma parte del corredor biológico mesoamericano que conecta sus territorios.",
    reproduction:
      "Las hembras paren entre 1 y 4 crías tras unos 100 días de gestación. Las crías permanecen con la madre cerca de dos años, aprendiendo a cazar antes de independentizarse.",
    predators:
      "El jaguar adulto no tiene depredadores naturales; su mayor amenaza es la pérdida de hábitat y los conflictos con actividades humanas. Las crías pueden ser vulnerables a serpientes y otros depredadores.",
    behavior:
      "Es territorial y marca su paso con arañazos y señales olfativas. Comunica su presencia con roces profundos que recorren la selva. Aunque solitario, su vida gira en torno a ríos y áreas abiertas donde las presas se concentran.",
    curiosities: [
      "Su mancha central, llamada roseta, suele tener un punto dentro: ninguna otra especie de felino la tiene.",
      "En culturas mesoamericanas fue símbolo de poder; aparece en piezas de más de 2.000 años.",
      "Puede cazar tortugas y abrirlas con una de las mordidas más fuertes del reino animal.",
    ],
    image: img("jaguar"),
    imageAlt: "Jaguar caminando entre la vegetación de la selva",
    photoCredit: WM,
    related: ["perezoso-de-tres-dedos", "guacamaya-roja", "cocodrilo-americano"],
    articleIds: ["grandes-felinos-de-america", "animales-de-nicaragua", "colores-en-animales"],
  },
  {
    id: "ballena-azul",
    name: "Ballena azul",
    scientific: "Balaenoptera musculus",
    category: "Mamífero marino",
    categoryId: "marinos",
    conservation: "En peligro",
    conservationTone: "bad",
    habitat: "Océanos abiertos de todo el mundo",
    diet: "Principalmente kril",
    size: "24–30 metros de longitud",
    weight: "100–150 toneladas",
    lifespan: "80–90 años",
    speed: "Hasta 30 km/h en travesías",
    range: "Todos los océanos, del Ártico a la Antártida",
    country: "Todos los océanos",
    regions: ["Todos los océanos"],
    aliases: ["rorcuual azul"],
    summary:
      "El animal más grande que ha existido en la Tierra: su corazón pesa como un automóvil y su canto viaja cientos de kilómetros.",
    about:
      "La ballena azul vive en mar abierto y recorre enormes distancias entre zonas de alimentación y reproducción. Pasa la mayor parte del año filtrando agua para capturar kril, y en verano puede ingerir hasta 4 toneladas de estos pequeños crustáceos al día.",
    dietText:
      "Se alimenta casi exclusivamente de kril, unos crustáceos de pocos centímetros. Abre la boca a gran velocidad y filtra miles de litros de agua a través de sus barbas, atrapando bancos enteros de presas.",
    rangeText:
      "Se encuentra en todos los océanos del planeta. Aunque suele viajar sola, en zonas ricas en alimento puede verse en pequeños grupos. Las poblaciones del hemisferio norte y sur casi nunca se cruzan.",
    reproduction:
      "Tras una gestación de unos 12 meses nace una cría de 7 metros y 2,5 toneladas. La madre la amamanta con una leche extremadamente rica en grasa: la cría puede ganar 90 kg por día.",
    predators:
      "Las crías pueden ser atacadas por orcas y tiburones. El gran peligro histórico ha sido la caza industrial, que redujo la población a menos del 10 % de su tamaño original.",
    behavior:
      "Se comunica con sonidos de baja frecuencia que pueden escucharse a cientos de kilómetros bajo el agua. Respira por un espiráculo y lanza chorros de hasta 9 metros al salir a la superficie.",
    curiosities: [
      "Su corazón es del tamaño de un auto pequeño y puede oírse su latido a kilómetros.",
      "Su lengua pesa tanto como un elefante africano adulto.",
      "Es más larga que tres autobuses urbanos puestos en fila.",
    ],
    image: img("ballena-azul"),
    imageAlt: "Ballena azul emergiendo en mar abierto",
    photoCredit: WM,
    related: ["orca", "tiburon-ballena", "tortuga-verde"],
    articleIds: ["cuanto-pesa-ballena-azul", "como-respiran-las-ballenas", "animales-mas-grandes"],
  },
  {
    id: "rana-ojos-rojos",
    name: "Rana de ojos rojos",
    scientific: "Agalychnis callidryas",
    category: "Anfibio",
    categoryId: "anfibios",
    conservation: "Preocupación menor",
    conservationTone: "good",
    habitat: "Selvas tropicales húmedas cerca de estanques y ríos lentos",
    diet: "Insectívora",
    size: "5–7 centímetros",
    weight: "7–15 gramos",
    lifespan: "unos 5 años",
    speed: "Saltos rápidos y precisos",
    range: "Del sur de México al norte de Colombia",
    country: "Centroamérica",
    regions: ["Centroamérica", "Nicaragua", "América"],
    aliases: ["rana de hoja", "rana arborícola de ojos rojos"],
    summary:
      "Un pequeño anfibio de colores intensos que duerme escondido entre las hojas y se convierte en símbolo de las selvas de Centroamérica.",
    about:
      "Es nocturna y arborícola: pasa el día pegada al reverso de las hojas con los ojos cerrados y las patas plegadas, camuflándose por completo. Al caer la noche se activa para alimentarse y buscar pareja cerca del agua.",
    dietText:
      "Caza grillos, polillas, moscas y otros insectos que atrae con movimientos lentos y precisos. Sus ojos rojos abiertos pueden sobresaltar a un depredador en el último instante.",
    rangeText:
      "Vive en selvas tropicales húmedas desde el sur de México hasta Colombia, siempre cerca de cuerpos de agua donde deposita sus huevos. En Nicaragua es una de las especies más fotografiadas de sus reservas.",
    reproduction:
      "La hembra deposita los huevos en gelatina sobre hojas que cuelgan sobre el agua. Al eclosionar, las renacuajos caen directamente al estanque, donde completan su desarrollo.",
    predators:
      "Serpientes arborícolas, aves nocturnas, murciélagos y arañas. Su defensa principal es el camuflaje y, de madrugada, la sorpresa de sus ojos rojos.",
    behavior:
      "Se mueve con pasos lentos y silenciosos para no delatar su posición. Cuando debe escapar, salta con precisión de hoja en hoja. Los machos cantan para atraer a las hembras en las noches de lluvia.",
    curiosities: [
      "Puede cambiar ligeramente de tono verde según la luz y el descanso.",
      "Sus patas rojas y flancos azules aparecen solo cuando se mueve: una señal de alarma.",
      "Pasa hasta el 90 % de su vida pegada a una hoja, sin moverse.",
    ],
    image: img("rana-ojos-rojos"),
    imageAlt: "Rana de ojos rojos posada sobre una hoja verde",
    photoCredit: WM,
    related: ["quetzal-resplandeciente", "tucan-pico-iris", "jaguar"],
    articleIds: ["animales-de-nicaragua", "colores-en-animales"],
  },
  {
    id: "tortuga-verde",
    name: "Tortuga verde",
    scientific: "Chelonia mydas",
    category: "Reptil marino",
    categoryId: "marinos",
    conservation: "En peligro",
    conservationTone: "bad",
    habitat: "Mares tropicales y subtropicales; playas de anidación",
    diet: "Herbívora (adulta)",
    size: "hasta 1,5 m de caparazón",
    weight: "68–190 kg",
    lifespan: "60–70 años o más",
    speed: "Nados tranquilos de varios km por hora",
    range: "Todos los océanos templados y cálidos",
    country: "Todos los océanos",
    regions: ["Todos los océanos", "Centroamérica", "Caribe", "Nicaragua"],
    aliases: ["tortuga marina verde"],
    summary:
      "Una viajera oceánica que regresa a la playa donde nació para poner sus huevos, décadas después de partir por primera vez.",
    about:
      "Las tortugas verdes pasan décadas cruzando mares entre áreas de alimentación y descanso. Son capaces de dormir bajo el agua durante horas. De adultas, viven en pastos marinos y arrecifes, donde realizan una de las migraciones más fieles del reino animal.",
    dietText:
      "De adulta es prácticamente herbívora: raspa pastos marinos y algas con su pico afilado. Esta dieta vegetariana es la que da tono verdoso a su grasa y su nombre.",
    rangeText:
      "Habita todos los océanos cálidos del planeta. Anida en playas tropicales, y en Centroamérica la costa Caribe de Nicaragua y Costa Rica es un santuario fundamental de anidación.",
    reproduction:
      "Las hembras regresan a la playa donde nacieron, guiadas por el campo magnético, para enterrar entre 80 y 120 huevos en la arena. Tras unos dos meses, las crías corren al mar de noche, guiadas por la luz del horizonte.",
    predators:
      "Las crías sufren el asedio de cangrejos, aves y peces; solo una de cada mil alcanza la edad adulta. Los adultos tienen pocos depredadores naturales, pero sufren por redes, plásticos y la pérdida de playas.",
    behavior:
      "Pueden permanecer bajo el agua hasta cinco horas en reposo. Utilizan corrientes marinas como rutas y son capaces de reconocer su playa natal después de 30 años.",
    curiosities: [
      "La temperatura de la arena decide el sexo de las crías: más calor, más hembras.",
      "Puede distinguir colores y ha demostrado aprendizaje en estudios de laboratorio.",
      "Regresa a anidar en la misma playa exacta donde nació, décadas después.",
    ],
    image: img("tortuga-verde"),
    imageAlt: "Tortuga verde nadando sobre un arrecife",
    photoCredit: WM,
    related: ["tiburon-ballena", "cocodrilo-americano", "ballena-azul"],
    articleIds: ["animales-marinos-centroamerica", "animales-de-nicaragua"],
  },
  {
    id: "leon",
    name: "León",
    scientific: "Panthera leo",
    category: "Mamífero",
    categoryId: "mamiferos",
    conservation: "Vulnerable",
    conservationTone: "warn",
    habitat: "Sabanas, praderas y bosques abiertos de África",
    diet: "Carnívoro",
    size: "2,5–3,3 m con la cola",
    weight: "120–250 kg",
    lifespan: "10–14 años en libertad",
    speed: "Hasta 80 km/h en distancias cortas",
    range: "África subsahariana; una población pequeña en la India",
    country: "África",
    regions: ["África", "Asia"],
    aliases: ["rey de la selva", "león africano"],
    summary:
      "El único gran felino verdaderamente social: vive en manadas, ruge para anunciar su territorio y comparte la caza.",
    about:
      "Los leones son el único felino que vive en grupos estables. Las manadas están formadas por hembras emparentadas, sus crías y uno o varios machos. Pasan hasta 20 horas al día descansando y concentran su energía en las horas frescas.",
    dietText:
      "Cazan ñus, cebras, búfalos y gacelas. Las hembras coordinan emboscadas en equipo, rodeando a la presa. También roban capturas a hienas y leopardos cuando la ocasión lo permite.",
    rangeText:
      "Hoy vive sobre todo en reservas del África subsahariana. Una población pequeña y aislada sobrevive en el bosque de Gir, en la India. Hace miles de años habitó también Europa y América.",
    reproduction:
      "Las crías nacen en camadas de 2 a 4 y son cuidadas por todas las hembras de la manada, que las amamantan de forma compartida. Los machos jóvenes abandonan la manada al madurar.",
    predators:
      "El león adulto tiene pocos rivales, pero las crías corren peligro de hienas y leopardos, y los machos nuevos pueden matar cachorros al tomar el control de una manada.",
    behavior:
      "Su rugido se escucha a 8 kilómetros y sirve para marcar territorio y reunir a la manada. La vida social exige negociación constante: lamidos, roces y posturas que mantienen la paz.",
    curiosities: [
      "Las hembras hacen la mayor parte de la caza de la manada.",
      "Su rugido puede escucharse a más de 8 kilómetros de distancia.",
      "Un león puede comer hasta 40 kg de carne en una sola sentada.",
    ],
    image: img("leon"),
    imageAlt: "León adulto mirando a la cámara en la sabana",
    photoCredit: WM,
    related: ["tigre", "elefante-africano", "aguila-real"],
    articleIds: ["animales-mas-grandes"],
  },
  {
    id: "tigre",
    name: "Tigre",
    scientific: "Panthera tigris",
    category: "Mamífero",
    categoryId: "mamiferos",
    conservation: "En peligro",
    conservationTone: "bad",
    habitat: "Selvas tropicales, manglares, bosques templados y sabanas de Asia",
    diet: "Carnívoro",
    size: "2,5–3,9 m con la cola",
    weight: "100–300 kg",
    lifespan: "10–15 años en libertad",
    speed: "Hasta 65 km/h en distancias cortas",
    range: "India, sudeste asiático, China y el este de Rusia",
    country: "Asia",
    regions: ["Asia"],
    aliases: ["tigre de bengala"],
    summary:
      "El felino más grande del mundo: un cazador solitario con rayas únicas, capaz de nadar ríos y arrastrar presas de medio tonelada.",
    about:
      "El tigre es un cazador de emboscada: se aproxima sigiloso entre la vegetación y ataca con fuerza explosiva. A diferencia de la mayoría de los felinos, le encanta el agua y nada con soltura, incluso para refrescarse o cruzar ríos grandes.",
    dietText:
      "Caza ciervos, jabalíes y búfalos, y puede consumir más de 30 kg de carne en una noche. Tras una cacería exitosa, se alimenta durante varios días cerca de la presa.",
    rangeText:
      "Sobrevive en poblaciones aisladas de India, Nepal, Bután, sudeste asiático, China y el lejano este de Rusia. Cada territorio necesita bosques grandes y sanos con presas abundantes.",
    reproduction:
      "Tras unos 3,5 meses de gestación nacen 2 o 3 cachorros ciegos. La madre los enseña a cazar durante casi dos años. Cada adulto necesita un territorio propio y muy extenso.",
    predators:
      "No tiene depredadores naturales de adulto. La pérdida de hábitat, la caza furtiva y la disminución de presas son sus amenazas reales.",
    behavior:
      "Marca su territorio con rascados, orina y señales olfativas. Es excepcionalmente sigiloso: sus almohadillas amortiguan cada paso. Las rayas de su pelaje son únicas, como huellas dactilares.",
    curiosities: [
      "Su piel está rayada también debajo del pelo: cada tigre tiene un patrón irrepetible.",
      "Puede arrastrar presas que pesan más que él mismo.",
      "A diferencia de otros felinos, adora bañarse y nadar.",
    ],
    image: img("tigre"),
    imageAlt: "Tigre de bengala entre la vegetación",
    photoCredit: WM,
    related: ["leon", "jaguar", "aguila-real"],
    articleIds: [],
  },
  {
    id: "elefante-africano",
    name: "Elefante africano",
    scientific: "Loxodonta africana",
    category: "Mamífero",
    categoryId: "mamiferos",
    conservation: "En peligro",
    conservationTone: "bad",
    habitat: "Sabanas, bosques secos y selvas de África",
    diet: "Herbívoro",
    size: "3–4 m de altura a la cruz",
    weight: "3–6 toneladas",
    lifespan: "60–70 años",
    speed: "Hasta 40 km/h en distancias cortas",
    range: "África subsahariana",
    country: "África",
    regions: ["África"],
    aliases: ["elefante de sabana"],
    summary:
      "El animal terrestre más grande del planeta: inteligente, longevo y con una memoria y vida social extraordinarias.",
    about:
      "Los elefantes africanos viven en manadas matriarcales guiadas por la hembra más experimentada. Recorren grandes distancias siguiendo rutas de agua que aprenden de generación en generación. Se bañan, juegan y se comunican con caricias de trompa.",
    dietText:
      "Come hasta 150 kg de vegetación al día: hierbas, hojas, cortezas y frutos. Con su trompa —más de 40.000 músculos— recoge todo, desde un ramita hasta un tronco pequeño.",
    rangeText:
      "Habita sabanas y bosques del África subsahariana. Su papel de 'ingeniero del ecosistema' es clave: abre senderos, dispersa semillas y crea fuentes de agua que usan decenas de especies.",
    reproduction:
      "La gestación dura casi 22 meses, la más larga de los mamíferos. Las crías nacen de unos 100 kg y son cuidadas por toda la manada; las hembras suelen quedarse en el grupo toda la vida.",
    predators:
      "Los adultos sanos no tienen depredadores naturales. Las crías pueden ser atacadas por leones e hienas. La caza de marfil y la pérdida de hábitat son sus amenazas mayores.",
    behavior:
      "Se comunican con infrasonidos que viajan kilómetros bajo el suelo y son percibidos por sus patas. Reconocen a decenas de familiares, guardan memoria de lugares de agua y muestran señales de duelo.",
    curiosities: [
      "Su gestación dura casi dos años, la más larga entre los mamíferos.",
      "Puede reconocerse en un espejo, una señal rara de autoconciencia.",
      "Sus orejas funcionan como abanicos y radiadores para regular su temperatura.",
    ],
    image: img("elefante-africano"),
    imageAlt: "Elefante africano macho en la sabana",
    photoCredit: WM,
    related: ["leon", "tigre", "ballena-azul"],
    articleIds: ["cuanto-vive-un-elefante", "animales-mas-grandes"],
  },
  {
    id: "aguila-real",
    name: "Águila real",
    scientific: "Aquila chrysaetos",
    category: "Ave",
    categoryId: "aves",
    conservation: "Preocupación menor",
    conservationTone: "good",
    habitat: "Montañas, acantilados, praderas y bosques abiertos",
    diet: "Carnívora",
    size: "70–100 cm; envergadura de hasta 2,3 m",
    weight: "3–6,5 kg",
    lifespan: "hasta 30 años en libertad",
    speed: "Más de 240 km/h en picada",
    range: "América del Norte, Europa, Asia y el norte de África",
    country: "Todos los continentes del hemisferio norte",
    regions: ["América", "Europa", "Asia", "África"],
    aliases: ["águila dorada"],
    summary:
      "Una de las aves de presa más potentes del mundo: planea durante horas y ataca en picada a más de 240 km/h.",
    about:
      "El águila real caza desde grandes alturas, planeando con corrientes cálidas durante horas sin batir las alas. Forma parejas estables que defienden el mismo territorio durante años y reparan su nido temporada tras temporada.",
    dietText:
      "Caza liebres, conejos, marmotas y aves de tamaño medio. Es también carroñera oportunista: aprovecha animales muertos cuando la caza no rinde. Su vista detecta un movimiento desde más de 2 km de altura.",
    rangeText:
      "Es el águila de distribución más amplia del mundo: habita montañas y zonas abiertas de América del Norte, Europa, Asia y el norte de África. Prefiere paisajes donde el viento le permita planear sin esfuerzo.",
    reproduction:
      "Pone de 1 a 3 huevos por temporada; con frecuencia solo el primer polluelo sobrevive. Ambos padres incuban y alimentan. El nido, construido en acantilados, puede pesar más de una tonelada tras años de uso.",
    predators:
      "El adulto carece de depredadores naturales. Los huevos y polluelos pueden caer presa de cuervos, marmotas osadas o mamíferos trepadores; la humanidad y sus tendidos siguen siendo el mayor riesgo.",
    behavior:
      "Muy territorial, realiza vuelos de exhibición en picada para disuadir intrusos. Sus parejas cooperan en la caza: una molesta a la presa mientras la otra ataca desde arriba.",
    curiosities: [
      "Su picada supera los 240 km/h: una de las velocidades más altas del reino animal.",
      "Su vista es unas 8 veces más aguda que la humana.",
      "Los nidos reutilizados durante décadas pueden superar el tamaño de un auto pequeño.",
    ],
    image: img("aguila-real"),
    imageAlt: "Águila real volando con las alas extendidas",
    photoCredit: WM,
    related: ["quetzal-resplandeciente", "guacamaya-roja", "leon"],
    articleIds: ["como-vuelan-las-aves"],
  },
  {
    id: "cocodrilo-americano",
    name: "Cocodrilo americano",
    scientific: "Crocodylus acutus",
    category: "Reptil",
    categoryId: "reptiles",
    conservation: "Vulnerable",
    conservationTone: "warn",
    habitat: "Estuarios, manglares, lagunas costeras y ríos grandes",
    diet: "Carnívoro",
    size: "3–4,5 m los machos grandes",
    weight: "200–400 kg",
    lifespan: "60–70 años",
    speed: "Emboscadas explosivas en el agua",
    range: "Sur de Florida, México, Centroamérica, Caribe y norte de Sudamérica",
    country: "América",
    regions: ["América", "Centroamérica", "Caribe", "Nicaragua"],
    aliases: ["cocodrilo de río", "cocodrilo de tumbes"],
    summary:
      "Un depredador ancestral que vive entre el agua dulce y el mar, y que puede tolerar agua salada mejor que ningún otro cocodrilo americano.",
    about:
      "El cocodrilo americano pasa horas inmóvil en la superficie, dejando que la corriente lo lleve hacia sus presas. Tolera la salinidad gracias a glándulas especiales, por lo que se mueve entre manglares, estuarios e incluso mar abierto.",
    dietText:
      "Caza peces, aves acuáticas, tortugas y mamíferos que se acercan al agua. Con su mandíbula atrapa y gira para desgarrar; los dientes se reemplazan toda la vida.",
    rangeText:
      "Se distribuye desde el sur de Florida hasta el norte de Sudamérica, incluida la costa Caribe de Centroamérica y Nicaragua. Prefiere agua salobre y manglares donde anida en montículos de arena y vegetación.",
    reproduction:
      "La hembra excava un nido y pone entre 30 y 60 huevos. Es una de las pocas reptiles que defiende el nido y ayuda a las crías a llegar al agua, cargándolas en su boca con cuidado.",
    predators:
      "Las crías sufren depredación de aves, peces grandes y mamíferos. El adulto sano no tiene depredadores; su amenaza es la destrucción de manglares y la caza histórica por su piel.",
    behavior:
      "Regula su temperatura alternando sol y agua. Se comunica con golpes de mandíbula, soplidos y vibraciones que se propagan en el agua durante la época de cortejo.",
    curiosities: [
      "Tolera agua salada gracias a glándulas sobre la lengua que excretan sal.",
      "Puede vivir más de 60 años y reemplaza sus dientes de por vida.",
      "Su nido puede ser defendido por la madre durante los dos meses de incubación.",
    ],
    image: img("cocodrilo-americano"),
    imageAlt: "Cocodrilo americano en la orilla de un río",
    photoCredit: WM,
    related: ["tortuga-verde", "tiburon-ballena", "jaguar"],
    articleIds: ["animales-marinos-centroamerica", "animales-de-nicaragua"],
  },
  {
    id: "tucan-pico-iris",
    name: "Tucán pico iris",
    scientific: "Ramphastos sulfuratus",
    category: "Ave",
    categoryId: "aves",
    conservation: "Casi amenazado",
    conservationTone: "warn",
    habitat: "Selvas tropicales y bordes de bosque de Centroamérica",
    diet: "Frugívora (con insectos y pequeños vertebrados)",
    size: "42–55 cm incluyendo el pico",
    weight: "400–600 g",
    lifespan: "15–20 años",
    speed: "Vuelo ondulante de cortas distancias",
    range: "Sur de México a Colombia y Venezuela",
    country: "Centroamérica",
    regions: ["Centroamérica", "Nicaragua", "América"],
    aliases: ["tucán real", "keel-billed toucan"],
    summary:
      "El ave nacional de Belice, famosa por su pico multicolor: liviano, hueco y sorprendentemente útil.",
    about:
      "Vive en grupos pequeños que se mueven por el dosel de la selva en vuelos cortos y ondulantes. Es sociable y bullicioso: sus llamadas roncas se escuchan a distancia y comparte árboles de fruta con otros tucanes.",
    dietText:
      "Se alimenta sobre todo de frutas, que toma con la punta del pico y traga entera ladeando la cabeza. Completa su dieta con insectos, huevos y pequeños lagartos en época seca.",
    rangeText:
      "Habita selvas húmedas desde el sur de México hasta Colombia y Venezuela. En Nicaragua y Costa Rica es un habitante común de reservas y bosques en recuperación.",
    reproduction:
      "Anida en cavidades naturales de árboles. La hembra pone de 2 a 4 huevos; ambos padres incuban y alimentan a los polluelos, que nacen ciegos y muy pequeños.",
    predators:
      "Aves rapaces grandes, monos y serpientes atacan huevos y polluelos. El adulto confía en su vista aguda y en el dosel alto para evitar peligro.",
    behavior:
      "Regula su temperatura liberando calor a través del pico, que actúa como radiador. Duerme con el pico girado sobre la espalda y la cola hacia arriba, ahorra espacio en la cavidad.",
    curiosities: [
      "Su pico, pese a medir un tercio del cuerpo, es hueco y muy liviano.",
      "El pico también funciona como radiador para refrescar su cuerpo.",
      "Duerme en la cavidad del árbol con el pico doblado hacia atrás.",
    ],
    image: img("tucan-pico-iris"),
    imageAlt: "Tucán pico iris posado en una rama",
    photoCredit: WM,
    related: ["guacamaya-roja", "quetzal-resplandeciente", "rana-ojos-rojos"],
    articleIds: ["animales-de-nicaragua", "colores-en-animales"],
  },
  {
    id: "tiburon-ballena",
    name: "Tiburón ballena",
    scientific: "Rhincodon typus",
    category: "Pez marino",
    categoryId: "marinos",
    conservation: "En peligro",
    conservationTone: "bad",
    habitat: "Aguas tropicales y templadas de todos los océanos",
    diet: "Planctófago (filtra plancton y pequeños peces)",
    size: "8–12 metros de largo",
    weight: "hasta 20 toneladas",
    lifespan: "80–130 años",
    speed: "3–5 km/h en nado constante",
    range: "Todos los océanos cálidos",
    country: "Todos los océanos",
    regions: ["Todos los océanos", "Centroamérica"],
    aliases: ["pez ballena"],
    summary:
      "El pez más grande del mundo: un gigante tranquilo que filtra plancton y es inofensivo para las personas.",
    about:
      "El tiburón ballena nada despacio cerca de la superficie, con la boca abierta, filtrando miles de litros por hora. A pesar de su tamaño, es completamente inofensivo: no tiene dientes funcionales para morder presas grandes.",
    dietText:
      "Se alimenta de plancton, huevos de peces, kril y pequeños peces cardumen. Sus 300 filas de denticciones no sirven para morder: la comida pasa por las branquias y queda atrapada en un filtro esponjoso.",
    rangeText:
      "Recorre todos los océanos cálidos siguiendo concentraciones de plancton. En Centroamérica es avistado frente a la costa Pacífica en épocas de abundancia de alimento.",
    reproduction:
      "Es ovovivíparo: las crías nacen vivas dentro de la madre, que puede gestar cientos de embriones. Los recién nacidos miden apenas 40–60 cm y crecen lentamente durante décadas.",
    predators:
      "Los adultos casi no tienen depredadores; las crías pueden ser atacadas por tiburones grandes y orcas. Las colisiones con barcos y la pesca son sus principales amenazas.",
    behavior:
      "Se mueve solo o en grupos pequeños cuando el alimento es abundante. Puede bucear a más de 1.500 metros y parece recordar rutas de alimentación año tras año.",
    curiosities: [
      "Es el pez más grande del mundo y sin embargo come organismos microscópicos.",
      "Su piel tiene un patrón único de manchas, como una huella digital.",
      "Puede vivir más de un siglo, según estudios de su cartílago.",
    ],
    image: img("tiburon-ballena"),
    imageAlt: "Tiburón ballena nadando cerca de la superficie",
    photoCredit: WM,
    related: ["ballena-azul", "tortuga-verde", "orca"],
    articleIds: ["animales-marinos-centroamerica"],
  },
  {
    id: "orca",
    name: "Orca",
    scientific: "Orcinus orca",
    category: "Mamífero marino",
    categoryId: "marinos",
    conservation: "Datos insuficientes",
    conservationTone: "warn",
    habitat: "Todos los océanos, desde polos hasta aguas tropicales",
    diet: "Carnívora (peces, focas, ballenas jóvenes)",
    size: "6–8 metros",
    weight: "3–6 toneladas",
    lifespan: "50–90 años",
    speed: "Hasta 55 km/h",
    range: "Todos los océanos del mundo",
    country: "Todos los océanos",
    regions: ["Todos los océanos"],
    aliases: ["ballena asesina", "ballena orca"],
    summary:
      "El delfín más grande del planeta: inteligente, social y con dialectos propios que se transmiten de generación en generación.",
    about:
      "Las orcas viven en grupos familiares matrilineales muy unidos, que permanecen juntos toda la vida. Cada grupo tiene sus técnicas de caza y su dialecto de sonidos, aprendidos de las madres y abuelas.",
    dietText:
      "Algunas poblaciones comen solo peces, otras cazan focas, pingüinos o incluso ballenas jóvenes. Las técnicas se pasan de generación en generación, como una cultura propia.",
    rangeText:
      "Es el cetáceo de distribución más amplia: vive en todos los océanos, desde los hielos polares hasta el ecuador. Prefiere aguas frías y costas ricas en alimento.",
    reproduction:
      "La gestación dura unos 17 meses. Las crías nacen ya nadando y permanecen con la madre toda la vida en la mayoría de las poblaciones. Las hembras pueden tener crías hasta los 40 años.",
    predators:
      "No tiene depredadores naturales: es una superdepredadora. Su principal amenaza es la contaminación y la escasez de alimento causada por la pesca industrial.",
    behavior:
      "Se comunica con silbidos y clics únicos de su grupo. Caza en equipo, compartiendo estrategias sorprendentes: crear olas para derribar focas o rodear bancos de peces con burbujas.",
    curiosities: [
      "La orca no es una ballena: es el miembro más grande de la familia de los delfines.",
      "Cada grupo tiene un dialecto de sonidos propio, como un acento familiar.",
      "Puede nadar a más de 50 km/h y saltar varios metros fuera del agua.",
    ],
    image: img("orca"),
    imageAlt: "Orca saltando fuera del agua",
    photoCredit: WM,
    related: ["ballena-azul", "tiburon-ballena", "delfin"],
    articleIds: ["animales-mas-grandes"],
  },
  {
    id: "guacamaya-roja",
    name: "Guacamaya roja",
    scientific: "Ara macao",
    category: "Ave",
    categoryId: "aves",
    conservation: "Preocupación menor",
    conservationTone: "good",
    habitat: "Selvas tropicales húmedas y bosques de galería",
    diet: "Frugívora y granívora",
    size: "80–95 cm con la cola",
    weight: "900–1.200 g",
    lifespan: "40–50 años",
    speed: "Vuelo directo y potente en pareja",
    range: "Sur de México a Bolivia y Brasil",
    country: "América",
    regions: ["América", "Centroamérica", "Nicaragua"],
    aliases: ["lapa roja", "ara macao"],
    summary:
      "Uno de los pájaros más vistosos del planeta: roja, azul y amarilla, fiel a su pareja y a su árbol de comida.",
    about:
      "Las guacamayas rojas vuelan en parejas o grupos familiares entre los árboles de fruta. Forman parejas de por vida: se alimentan juntas, se acicalan mutuamente y vuelan casi siempre al mismo ritmo.",
    dietText:
      "Come frutos, semillas, néctar y flores. Puede tolerar semillas tóxicas gracias a arcillas y minerales que consume en las llamadas collpas, paredes de barro ricas en sales.",
    rangeText:
      "Habita selvas desde el sur de México hasta Bolivia y Brasil. En Centroamérica, y en particular en Nicaragua, sus reservas protegen poblaciones que aún vuelan en libertad.",
    reproduction:
      "Anida en huecos de árboles grandes. Pone de 2 a 4 huevos; ambos padres incuban y alimentan. Los polluelos aprenden a volar a los tres meses y siguen con la familia hasta el año.",
    predators:
      "Aves rapaces grandes, monos y serpientes atacan huevos y polluelos. La pérdida de bosques y el tráfico de mascotas son sus mayores amenazas.",
    behavior:
      "Es ruidosa e inquieta: sus llamadas atraviesan la selva para mantener contacto con la pareja. Pueden aprender sonidos y mostrar curiosidad por objetos brillantes.",
    curiosities: [
      "Sus colores intensos vienen de pigmentos y de estructuras microscópicas de la pluma.",
      "Forma parejas de por vida y vuela al mismo ritmo que su compañero.",
      "Puede vivir más de 40 años en libertad.",
    ],
    image: img("guacamaya-roja"),
    imageAlt: "Guacamaya roja posada en una rama",
    photoCredit: WM,
    related: ["tucan-pico-iris", "quetzal-resplandeciente", "jaguar"],
    articleIds: ["animales-de-nicaragua", "colores-en-animales"],
  },
  {
    id: "perezoso-de-tres-dedos",
    name: "Perezoso de tres dedos",
    scientific: "Bradypus variegatus",
    category: "Mamífero",
    categoryId: "mamiferos",
    conservation: "Preocupación menor",
    conservationTone: "good",
    habitat: "Selvas tropicales húmedas de Centroamérica y Sudamérica",
    diet: "Herbívoro (hojas, brotes y frutos)",
    size: "50–60 cm",
    weight: "3,5–5 kg",
    lifespan: "20–30 años",
    speed: "4 metros por minuto en las ramas",
    range: "Honduras al norte de Argentina",
    country: "América",
    regions: ["América", "Centroamérica", "Nicaragua"],
    aliases: ["perezoso", "perico ligero"],
    summary:
      "Un mamífero que vive en el dosel de la selva a cámara lenta: su mejor estrategia es no gastar energía.",
    about:
      "El perezoso de tres dedos pasa casi toda su vida colgado de las ramas: come, duerme y hasta pare en el dosel. Su lentitud no es pereza sino estrategia: digiere hojas durante semanas y necesita muy poca energía para vivir.",
    dietText:
      "Come hojas, brotes y frutos de pocas especies de árboles. Su estómago de varios compartimentos tarda hasta un mes en digerir una sola comida.",
    rangeText:
      "Vive en selvas húmedas desde Honduras hasta el norte de Argentina. En Nicaragua es común en reservas del Caribe y bosques ribereños.",
    reproduction:
      "La hembra pare una cría al año, que se aferra al pelaje de la madre durante seis meses. Baja del árbol solo una vez por semana, para hacer sus necesidades en la base del tronco.",
    predators:
      "Águilas arpías, jaguares, ocelotes y serpientes grandes. Su defensa principal es el camuflaje: algas verdes crecen en su pelaje y lo hacen casi invisible entre las hojas.",
    behavior:
      "Se mueve con una calma absoluta y duerme hasta 15 horas al día. Su pelaje alberga un ecosistema completo: algas, polillas y escarabajos que viven solo en él.",
    curiosities: [
      "Algas verdes crecen en su pelaje y lo camuflan entre las hojas.",
      "Solo baja del árbol una vez por semana.",
      "Gira la cabeza casi 270 grados, más que muchas otras especies.",
    ],
    image: img("perezoso-de-tres-dedos"),
    imageAlt: "Perezoso de tres dedos colgado de una rama",
    photoCredit: WM,
    related: ["jaguar", "rana-ojos-rojos", "tucan-pico-iris"],
    articleIds: ["animales-de-nicaragua"],
  },
  {
    id: "quetzal-resplandeciente",
    name: "Quetzal resplandeciente",
    scientific: "Pharomachrus mocinno",
    category: "Ave",
    categoryId: "aves",
    conservation: "Casi amenazado",
    conservationTone: "warn",
    habitat: "Bosques nublados de montaña en Centroamérica",
    diet: "Frugívora (especialmente aguacatillos)",
    size: "36–40 cm; cola hasta 65 cm más",
    weight: "200–225 g",
    lifespan: "20–25 años",
    speed: "Vuelo ágil entre los árboles del bosque nublado",
    range: "Sur de México, Guatemala, Honduras, Nicaragua, Costa Rica y Panamá",
    country: "Centroamérica",
    regions: ["Centroamérica", "Nicaragua"],
    aliases: ["quetzal", "faisán resplandeciente"],
    summary:
      "El ave símbolo de Centroamérica: plumas verdes iridiscentes y una cola que parece una cinta flotando entre la niebla.",
    about:
      "El quetzal vive en bosques nublados de altura, donde la niebla y las bromelias crean un mundo húmedo y silencioso. Es territorial en la época de reproducción y realiza vuelos de exhibición donde su cola ondea como una cinta.",
    dietText:
      "Se alimenta sobre todo de aguacatillos silvestres, que traga enteros y luego regurgita el hueso, dispersando así los árboles del bosque. Completa su dieta con insectos y pequeñas ranas.",
    rangeText:
      "Habita bosques nublados desde el sur de México hasta Panamá. En Nicaragua se le encuentra en las montañas del norte, donde la conservación del bosque es clave para su supervivencia.",
    reproduction:
      "Anida en cavidades de árboles podridos. La hembra pone 2 huevos; la cola tan larga del macho sobresale del nido mientras incuba, un espectáculo memorable. Ambos padres alimentan a los polluelos.",
    predators:
      "Aves rapaces y mamíferos trepadores atacan nidos. La deforestación del bosque nublado es su mayor amenaza, ya que necesita árboles viejos para anidar.",
    behavior:
      "Es tímido y difícil de ver: se queda quieto entre las hojas durante largos ratos. Sus plumas iridiscentes cambian de tono con la luz, de verde esmeralda a azul profundo.",
    curiosities: [
      "Es el ave nacional de Guatemala y su nombre dio título a la moneda del país.",
      "Las plumas de su cola pueden medir más de 60 cm en los machos.",
      "No canta bien en cautiverio: se dice que prefiere morir antes que vivir enjaulado.",
    ],
    image: img("quetzal-resplandeciente"),
    imageAlt: "Quetzal resplandeciente posado en una rama del bosque nublado",
    photoCredit: WM,
    related: ["tucan-pico-iris", "guacamaya-roja", "rana-ojos-rojos"],
    articleIds: ["animales-de-nicaragua"],
  },
];

export const featuredAnimalIds = ["jaguar", "ballena-azul", "rana-ojos-rojos"];

export const articles: Article[] = [
  {
    id: "cuanto-pesa-ballena-azul",
    title: "¿Cuánto pesa una ballena azul?",
    category: "Preguntas",
    type: "Pregunta",
    read: "4 min",
    excerpt:
      "Una ballena azul adulta puede superar las 100 toneladas, pero pesar un animal vivo de ese tamaño no es nada fácil. Te contamos cómo se mide y por qué las cifras varían.",
    image: img("ballena-azul"),
    imageAlt: "Ballena azul en mar abierto",
    animalIds: ["ballena-azul", "elefante-africano", "orca"],
    sections: [
      {
        heading: "Un peso que cuesta imaginar",
        text: "Una ballena azul adulta puede superar las 100 toneladas: tanto como unos 25 elefantes africanos juntos. El peso exacto cambia entre individuos y depende de la edad, el sexo, la condición corporal y el método utilizado para estimarlo.",
      },
      {
        heading: "¿Por qué varían las cifras?",
        text: "Pesar directamente a un animal vivo de ese tamaño no es sencillo. Por eso, la ciencia combina mediciones históricas de ejemplares varados, modelos matemáticos y observaciones aéreas. Conviene tratar las cifras máximas como estimaciones generosas.",
      },
      {
        heading: "Tamaño y alimentación",
        text: "La ballena azul obtiene su energía filtrando grandes cantidades de agua para capturar kril. Su enorme tamaño está ligado a su forma de alimentarse: en mar abierto, el agua sostiene su cuerpo y los bancos de kril le permiten comer toneladas al día en temporada alta.",
      },
    ],
  },
  {
    id: "como-respiran-las-ballenas",
    title: "¿Cómo respiran las ballenas?",
    category: "Preguntas",
    type: "Pregunta",
    read: "4 min",
    excerpt:
      "Viven bajo el agua, pero respiran aire como nosotros. Descubre cómo funciona el espiráculo y por qué las ballenas deben subir a la superficie.",
    image: img("orca"),
    imageAlt: "Orca saliendo a respirar en la superficie",
    animalIds: ["ballena-azul", "orca", "tiburon-ballena"],
    sections: [
      {
        heading: "Respiran aire, aunque vivan en el agua",
        text: "Las ballenas son mamíferos y toman oxígeno del aire. Suben a la superficie, exhalan e inhalan por el espiráculo, una abertura ubicada en la parte superior de la cabeza. El chorro visible al exhalar es aire comprimido y vapor de agua.",
      },
      {
        heading: "Una pausa antes de sumergirse",
        text: "Antes de bucear, una ballena puede renovar rápidamente el aire de sus pulmones y almacenar gran parte del oxígeno en sus músculos. La duración de una inmersión depende de la especie, la actividad y las condiciones del momento.",
      },
      {
        heading: "Cada especie tiene su propio ritmo",
        text: "El patrón de respiración no es igual para todas las ballenas: unas hacen inmersiones de minutos y otras pueden estar mucho más tiempo bajo el agua. La forma más útil de entenderlo es observar cómo se alternan sus periodos de superficie y sus inmersiones.",
      },
    ],
  },
  {
    id: "cuanto-vive-un-elefante",
    title: "¿Cuánto vive un elefante?",
    category: "Preguntas",
    type: "Pregunta",
    read: "3 min",
    excerpt:
      "Los elefantes africanos pueden vivir 60 o 70 años, casi tanto como una persona. Descubre qué depende de su longevidad y por qué las matriarcas son tan valiosas.",
    image: img("elefante-africano"),
    imageAlt: "Elefante africano en la sabana",
    animalIds: ["elefante-africano", "leon", "tortuga-verde"],
    sections: [
      {
        heading: "Décadas de vida en manada",
        text: "Un elefante africano sano puede vivir entre 60 y 70 años en libertad. Su vida es larga porque su tamaño lo protege de depredadores y porque vive en un grupo familiar que lo cuida y le enseña rutas de agua.",
      },
      {
        heading: "La memoria de la matriarca",
        text: "La hembra más vieja del grupo, la matriarca, guarda en su memoria las rutas hacia el agua de años anteriores. En sequías extremas, esa memoria puede salvar a toda la manada. Perder a una matriarca afecta al grupo durante décadas.",
      },
      {
        heading: "Crecer despacio, vivir mucho",
        text: "Los elefantes crecen durante buena parte de su vida y tienen la gestación más larga de los mamíferos: casi dos años. Ese ritmo lento va de la mano con su longevidad, igual que ocurre con las ballenas y otros gigantes.",
      },
    ],
  },
  {
    id: "animales-mas-grandes",
    title: "¿Cuál es el animal más grande del mundo?",
    category: "Listas",
    type: "Lista",
    read: "5 min",
    excerpt:
      "De la inmensidad del océano a la fuerza de los gigantes terrestres: te presentamos a los animales más grandes que existen hoy.",
    image: img("ballena-azul"),
    imageAlt: "Ballena azul, el animal más grande del mundo",
    animalIds: ["ballena-azul", "elefante-africano", "tiburon-ballena", "orca"],
    sections: [
      {
        heading: "El gigante de los océanos",
        text: "La ballena azul es el animal más grande conocido, incluso mayor que los dinosaurios más pesados. Vive en el mar, donde el agua ayuda a sostener su cuerpo, y encuentra grandes concentraciones de kril que sostienen su enorme apetito.",
      },
      {
        heading: "Gigantes en tierra",
        text: "El elefante africano es el animal terrestre más grande. Con hasta 6 toneladas, su tamaño, su vida social y su impacto en el paisaje lo convierten en una especie clave de la sabana: abre senderos y dispersa semillas por kilómetros.",
      },
      {
        heading: "Comparar con cuidado",
        text: "Las listas cambian según se compare longitud, altura o masa. El tiburón ballena, por ejemplo, es el pez más grande, y la jirafa el animal más alto. También importa distinguir promedios de récords y separar datos medidos de estimaciones.",
      },
    ],
  },
  {
    id: "como-vuelan-las-aves",
    title: "¿Cómo vuelan las aves?",
    category: "Ciencia",
    type: "Guía",
    read: "4 min",
    excerpt:
      "Alas, plumas y corrientes de aire: una explicación sencilla de por qué las aves pueden volar y qué hace único a cada vuelo.",
    image: img("aguila-real"),
    imageAlt: "Águila real volando con las alas extendidas",
    animalIds: ["aguila-real", "quetzal-resplandeciente", "guacamaya-roja"],
    sections: [
      {
        heading: "El aire también sostiene",
        text: "Las alas empujan el aire y generan fuerzas que permiten elevarse y avanzar. Su forma curva, el movimiento de las plumas y la velocidad influyen en cómo vuela cada ave. Los huesos huecos y los músculos pectorales potentes completan el diseño.",
      },
      {
        heading: "Volar cuesta energía",
        text: "Las aves alternan el aleteo con planeos cuando las corrientes de aire lo permiten. Las especies tienen cuerpos y estrategias distintos, adaptados a su modo de vida: un colibrí aletea decenas de veces por segundo, mientras un ave rapaz puede planear horas.",
      },
      {
        heading: "Cada vuelo es diferente",
        text: "Un águila real aprovecha corrientes ascendentes para planear durante mucho tiempo sin gastar energía. Otras aves usan aleteos rápidos, vuelos cortos o recorridos migratorios de miles de kilómetros. El vuelo es un idioma y cada especie tiene su acento.",
      },
    ],
  },
  {
    id: "colores-en-animales",
    title: "¿Por qué los animales tienen colores tan distintos?",
    category: "Ciencia",
    type: "Guía",
    read: "5 min",
    excerpt:
      "Camuflaje, advertencia o seducción: los colores del reino animal tienen funciones muy concretas. Te explicamos cuáles.",
    image: img("rana-ojos-rojos"),
    imageAlt: "Rana de ojos rojos entre hojas verdes",
    animalIds: ["rana-ojos-rojos", "guacamaya-roja", "tucan-pico-iris"],
    sections: [
      {
        heading: "El color comunica",
        text: "Los colores pueden ayudar a ocultarse, reconocer a otros individuos o advertir de una defensa química. Su función depende del animal y del ambiente: un mismo color puede ser un camuflaje en la selva y una alarma en otra parte.",
      },
      {
        heading: "Camuflaje y contraste",
        text: "Una piel que se mezcla con hojas o corteza reduce la posibilidad de ser detectado. El perezoso, por ejemplo, aloja algas verdes en su pelaje. En otras situaciones, un color llamativo sirve como señal visual: los ojos rojos de la rana sorprenden al depredador en el último instante.",
      },
      {
        heading: "No siempre vemos lo mismo",
        text: "Algunas especies perciben longitudes de onda distintas a las humanas: ven ultravioleta o distinguen tonos que para nosotros son iguales. La manera en que un animal ve el color puede cambiar por completo el significado de sus señales.",
      },
    ],
  },
  {
    id: "grandes-felinos-de-america",
    title: "Los grandes felinos de América",
    category: "Especies",
    type: "Guía",
    read: "5 min",
    excerpt:
      "El jaguar encabeza una familia de cazadores que van desde la selva hasta las montañas: conoce a los grandes felinos del continente.",
    image: img("jaguar"),
    imageAlt: "Jaguar caminando en la selva",
    animalIds: ["jaguar", "leon", "tigre"],
    sections: [
      {
        heading: "El jaguar y sus ecosistemas",
        text: "El jaguar vive desde bosques tropicales hasta humedales. Como depredador tope, forma parte de redes ecológicas complejas y necesita territorios conectados: donde el jaguar está bien, el bosque entero suele estar bien.",
      },
      {
        heading: "Diversidad de felinos",
        text: "América también es hogar de pumas, ocelotes, jaguatires y margays. Cada especie tiene su propio tamaño, distribución y forma de aprovechar el hábitat. Juntos forman una familia que abarca desde 4 kg hasta más de 100.",
      },
      {
        heading: "Conservar corredores",
        text: "La fragmentación del paisaje puede aislar poblaciones de felinos. Proteger corredores naturales —franjas de bosque que conectan reservas— ayuda a que los animales se desplacen, se crucen y encuentren recursos en estaciones difíciles.",
      },
    ],
  },
  {
    id: "animales-de-nicaragua",
    title: "Animales de Nicaragua: una guía para empezar",
    category: "Ubicaciones",
    type: "Guía",
    read: "6 min",
    excerpt:
      "Bosques, lagos, volcanes y dos costas: Nicaragua reúne una fauna extraordinaria. Conoce sus especies más representativas.",
    image: img("tucan-pico-iris"),
    imageAlt: "Tucán pico iris, habitante de los bosques nicaragüenses",
    animalIds: ["jaguar", "rana-ojos-rojos", "tucan-pico-iris", "guacamaya-roja", "quetzal-resplandeciente"],
    sections: [
      {
        heading: "Un mosaico de hábitats",
        text: "Nicaragua reúne bosques tropicales, humedales, lagos, volcanes y dos costas: la del Pacífico y la del Caribe. Esa variedad permite que convivan animales terrestres, aves, anfibios y especies marinas en un mismo país.",
      },
      {
        heading: "Especies para conocer",
        text: "El jaguar y la rana de ojos rojos representan parte de la fauna de sus bosques. El quetzal habita las montañas del norte; las guacamayas y tucanes pintan el dosel; y las playas del Caribe son santuario de tortugas marinas.",
      },
      {
        heading: "Cuidar los lugares donde viven",
        text: "La conservación depende de mantener hábitats conectados, reducir la contaminación y respetar las zonas de reproducción. Cada ecosistema necesita información local y acciones acordes con sus comunidades: conocer es el primer paso para proteger.",
      },
    ],
  },
  {
    id: "animales-marinos-centroamerica",
    title: "Animales marinos de Centroamérica: dos océanos, una vida conectada",
    category: "Ubicaciones",
    type: "Guía",
    read: "5 min",
    excerpt:
      "Manglares, arrecifes y aguas abiertas conectan el Pacífico y el Caribe. Descubre la vida marina que une a la región.",
    image: img("tortuga-verde"),
    imageAlt: "Tortuga verde nadando sobre un arrecife",
    animalIds: ["tortuga-verde", "tiburon-ballena", "cocodrilo-americano", "ballena-azul"],
    sections: [
      {
        heading: "Dos océanos, muchos hábitats",
        text: "Centroamérica conecta el Pacífico y el Caribe. Sus playas, manglares, arrecifes y aguas abiertas sirven a distintas especies en etapas diferentes de su vida: un mismo animal puede nacer en el Caribe y alimentarse en el Pacífico.",
      },
      {
        heading: "Viajeros del mar",
        text: "Las tortugas marinas usan playas para anidar y áreas de alimentación en el océano, y regresan décadas después al mismo lugar. Algunas ballenas recorren grandes distancias entre zonas donde se alimentan y se reproducen.",
      },
      {
        heading: "Una región conectada",
        text: "La salud del mar depende de lo que ocurre también en la costa: los manglares, ríos y arrecifes forman parte de sistemas relacionados. Proteger solo una parte no basta; la conexión es el corazón de la región.",
      },
    ],
  },
  {
    id: "animales-mas-rapidos",
    title: "¿Cuál es el animal más rápido del mundo?",
    category: "Listas",
    type: "Lista",
    read: "4 min",
    excerpt:
      "Del cielo al mar: los velocistas del reino animal y las velocidades que alcanzan en sus carreras cortas.",
    image: img("aguila-real"),
    imageAlt: "Águila real en picada",
    animalIds: ["aguila-real", "jaguar", "leon", "orca"],
    sections: [
      {
        heading: "El campeón vuela",
        text: "El halcón peregrino alcanza más de 300 km/h en picada, la velocidad más alta registrada en el reino animal. Nuestro águila real no se queda atrás: supera los 240 km/h cuando cae desde gran altura sobre su presa.",
      },
      {
        heading: "Velocistas en tierra y agua",
        text: "En tierra, el guepardo lidera con más de 100 km/h en carreras cortas. En el mar, el pez vela supera los 100 km/h y la orca alcanza unos 55 km/h. El jaguar, con 80 km/h, es el felino americano más veloz en distancias breves.",
      },
      {
        heading: "La velocidad tiene reglas",
        text: "Las cifras dependen de cómo se midan: en picada, en sprint o sostenidas durante kilómetros. Un animal puede ser el más rápido en una distancia y no en otra. Lo importante es la función: cada velocidad responde a una estrategia de caza o de escape.",
      },
    ],
  },
];

export const locations: Location[] = [
  {
    id: "africa",
    icon: "🌍",
    eyebrow: "Continente",
    title: "África",
    description: "Sabanas, selvas y desiertos donde viven los gigantes terrestres y los grandes depredadores.",
    animalIds: ["leon", "elefante-africano", "aguila-real"],
  },
  {
    id: "america",
    icon: "🌎",
    eyebrow: "Continente",
    title: "América",
    description: "Del norte helado a la Patagonia: selvas, montañas y praderas de una biodiversidad enorme.",
    animalIds: ["jaguar", "perezoso-de-tres-dedos", "guacamaya-roja", "aguila-real"],
  },
  {
    id: "asia",
    icon: "🌏",
    eyebrow: "Continente",
    title: "Asia",
    description: "Selvas tropicales, manglares y taigas donde sobrevive el felino más grande del mundo.",
    animalIds: ["tigre", "aguila-real"],
  },
  {
    id: "europa",
    icon: "🌍",
    eyebrow: "Continente",
    title: "Europa",
    description: "Montañas, bosques y costas que albergan rapaces y fauna adaptada a paisajes antiguos.",
    animalIds: ["aguila-real"],
  },
  {
    id: "oceania",
    icon: "🌏",
    eyebrow: "Continente",
    title: "Oceanía",
    description: "Aguas cálidas, arrecifes y islas con especies que no existen en ningún otro lugar.",
    animalIds: ["tortuga-verde", "tiburon-ballena"],
  },
  {
    id: "centroamerica",
    icon: "🗺️",
    eyebrow: "Región",
    title: "Centroamérica",
    description: "Un puente de vida entre dos continentes: bosques nublados, volcanes y dos costas.",
    animalIds: ["quetzal-resplandeciente", "tucan-pico-iris", "rana-ojos-rojos", "cocodrilo-americano", "guacamaya-roja", "perezoso-de-tres-dedos"],
  },
  {
    id: "caribe",
    icon: "🏝️",
    eyebrow: "Región",
    title: "Caribe",
    description: "Aguas turquesa, manglares y playas de anidación de las tortugas marinas.",
    animalIds: ["tortuga-verde", "cocodrilo-americano"],
  },
  {
    id: "nicaragua",
    icon: "🇳🇮",
    eyebrow: "País",
    title: "Nicaragua",
    description: "Volcanes, lagos grandes y bosques del Caribe: un país que concentra una fauna asombrosa.",
    animalIds: ["jaguar", "rana-ojos-rojos", "tucan-pico-iris", "guacamaya-roja", "perezoso-de-tres-dedos", "quetzal-resplandeciente", "tortuga-verde", "cocodrilo-americano"],
  },
];

export const scienceTopics: ScienceTopic[] = [
  { icon: "🐾", tag: "Comportamiento", title: "Por qué los animales hacen lo que hacen", description: "Territorios, jerarquías y rutinas: la vida social explicada de forma sencilla.", articleId: "grandes-felinos-de-america" },
  { icon: "🪶", tag: "Adaptaciones", title: "Diseñados por el tiempo", description: "Huesos huecos, picos especializados y otras soluciones que la evolución afinó.", articleId: "como-vuelan-las-aves" },
  { icon: "🎨", tag: "Camuflaje y color", title: "El color tiene un porqué", description: "Ocultarse, avisar o seducir: la ciencia de los colores en el reino animal.", articleId: "colores-en-animales" },
  { icon: "🌳", tag: "Ecosistemas", title: "Todo está conectado", description: "Cómo una especie sostiene a otras y por qué proteger hábitats importa más que proteger ejemplares.", articleId: "animales-de-nicaragua" },
  { icon: "🌊", tag: "Vida marina", title: "Un océano de conexiones", description: "Migraciones, corrientes y la vida que une dos costas en Centroamérica.", articleId: "animales-marinos-centroamerica" },
  { icon: "📏", tag: "Récords", title: "Los extremos del reino animal", description: "El más grande, el más rápido, el más longevo: qué dicen los datos y cómo se miden.", articleId: "animales-mas-grandes" },
];

export const curiosities: Curiosity[] = [
  { icon: "⚡", title: "Los animales más rápidos", description: "Del halcón peregrino al pez vela: los velocistas del planeta y cómo se mide su velocidad.", animalIds: ["aguila-real", "orca", "jaguar"] },
  { icon: "🐋", title: "Los animales más grandes", description: "La ballena azul encabeza una lista de gigantes que cuesta imaginar.", animalIds: ["ballena-azul", "elefante-africano", "tiburon-ballena"] },
  { icon: "⏳", title: "Los que viven más tiempo", description: "Tortugas, ballenas y elefantes: la longevidad y sus secretos.", animalIds: ["tortuga-verde", "ballena-azul", "elefante-africano"] },
  { icon: "🦓", title: "Camuflajes sorprendentes", description: "Animales que desaparecen entre hojas, arena y nieve.", animalIds: ["perezoso-de-tres-dedos", "rana-ojos-rojos", "jaguar"] },
  { icon: "🤔", title: "Los más extraños", description: "Picos huecos, cabeza giratoria y otras rarezas que funcionan.", animalIds: ["tucan-pico-iris", "perezoso-de-tres-dedos"] },
  { icon: "🌊", title: "Curiosidades de los mares", description: "Dialectos de orcas, manchas únicas de tiburones y otras sorpresas del mar.", animalIds: ["orca", "tiburon-ballena", "tortuga-verde"] },
];

export const news: NewsItem[] = [
  {
    category: "Conservación",
    date: "12 de agosto de 2026",
    title: "Más jaguares de lo esperado en reservas de Centroamérica",
    excerpt:
      "Cámaras trampa registraron un aumento de avistamientos en corredores biológicos, una señal positiva para la conectividad del bosque.",
    image: img("jaguar"),
    imageAlt: "Jaguar caminando por el bosque",
    animalId: "jaguar",
  },
  {
    category: "Descubrimiento",
    date: "28 de julio de 2026",
    title: "Documentan una nueva ruta de anidación de tortugas verdes en el Caribe",
    excerpt:
      "Investigadores siguiendo hembras marcadas confirmaron el uso de playas previamente no registradas para la anidación.",
    image: img("tortuga-verde"),
    imageAlt: "Tortuga verde en aguas del Caribe",
    animalId: "tortuga-verde",
  },
  {
    category: "Conservación",
    date: "10 de junio de 2026",
    title: "El quetzal regresa a bosques restaurados del norte",
    excerpt:
      "Programas de reforestación con árboles nativos muestran resultados: ejemplares juveniles fueron observados en zonas restauradas.",
    image: img("quetzal-resplandeciente"),
    imageAlt: "Quetzal resplandeciente en el bosque nublado",
    animalId: "quetzal-resplandeciente",
  },
  {
    category: "Ciencia",
    date: "22 de mayo de 2026",
    title: "Avistamientos récord de tiburón ballena frente a costas del Pacífico",
    excerpt:
      "Una concentración inusual de plancton atrajo a decenas de ejemplares juveniles, aprovechados por investigadores para tomar muestras.",
    image: img("tiburon-ballena"),
    imageAlt: "Tiburón ballena cerca de la superficie del mar",
    animalId: "tiburon-ballena",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const normalize = (value = "") =>
  value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export const byAnimalId = (id: string) => animals.find((animal) => animal.id === id);

export const byArticleId = (id: string) => articles.find((article) => article.id === id);

export const byLocationId = (id: string) => locations.find((location) => location.id === id);

export interface SearchResults {
  animals: Animal[];
  articles: Article[];
  locations: Location[];
}

export function searchContent(term: string): SearchResults {
  const query = normalize(term);
  if (!query) return { animals: [], articles: [], locations: [] };

  const matchAnimal = (animal: Animal) =>
    normalize(
      [
        animal.name,
        animal.aliases?.join(" "),
        animal.scientific,
        animal.category,
        animal.categoryId,
        animal.range,
        animal.country,
        animal.regions.join(" "),
        animal.habitat,
        animal.diet,
        animal.summary,
      ].join(" "),
    ).includes(query);

  const matchArticle = (article: Article) =>
    normalize(
      [
        article.title,
        article.excerpt,
        article.category,
        article.type,
        article.animalIds.map((id) => byAnimalId(id)?.name).join(" "),
      ].join(" "),
    ).includes(query);

  const matchLocation = (place: Location) =>
    normalize([place.title, place.description, place.eyebrow].join(" ")).includes(query);

  return {
    animals: animals.filter(matchAnimal),
    articles: articles.filter(matchArticle),
    locations: locations.filter(matchLocation),
  };
}
