// Base de dades de paraules típiques valencianes
// Només paraules que NO s'assemblen al castellà
const PARAULES = [
  {
    paraula: "Maduixa",
    categoria: "Substantiu",
    definicio: "Fruit menut, roig i dolç, de forma cònica, que fa una planta rastrera del gènere Fragaria. Molt apreciada en la gastronomia valenciana.",
    exemple: "Al mercat de Sagunt venen unes maduixes ben dolces.",
    castella: "Fresa",
    nota: "Paraula d'origen àrab"
  },
  {
    paraula: "Encisam",
    categoria: "Substantiu",
    definicio: "Planta hortícola de fulles grans i tendres que es menja crua en amanides. Molt cultivada a l'Horta valenciana.",
    exemple: "Fes-me una amanida d'encisam amb tomaca.",
    castella: "Lechuga",
    nota: "Del llatí 'intibus'"
  },
  {
    paraula: "Bassal",
    categoria: "Substantiu",
    definicio: "Massa d'aigua estancada en una depressió del terreny, generalment formada per la pluja.",
    exemple: "El xiquet s'ha mullat els peus en un bassal.",
    castella: "Charco",
    nota: ""
  },
  {
    paraula: "Xiquet",
    categoria: "Substantiu",
    definicio: "Persona de poca edat, infant. Forma molt característica del valencià que s'usa com a apel·latiu afectuós entre adults també.",
    exemple: "Eixe xiquet juga al carrer tots els vespres.",
    castella: "Niño / Chaval",
    nota: "Forma típicament valenciana"
  },
  {
    paraula: "Espill",
    categoria: "Substantiu",
    definicio: "Superfície polida que reflecteix la llum i les imatges. Jaume Roig va escriure l'obra 'L'Espill' al segle XV.",
    exemple: "Mira't a l'espill abans d'eixir de casa.",
    castella: "Espejo",
    nota: "Del llatí 'speculum'"
  },
  {
    paraula: "Granera",
    categoria: "Substantiu",
    definicio: "Instrument domèstic format per un feix de branquetes o fibres lligades a un mànec, que serveix per a escombrar.",
    exemple: "Agafa la granera i escombra la cuina.",
    castella: "Escoba",
    nota: ""
  },
  {
    paraula: "Eixir",
    categoria: "Verb",
    definicio: "Passar de dins a fora d'un lloc. Anar-se'n d'un espai tancat cap a l'exterior.",
    exemple: "Vaig a eixir un moment a comprar pa.",
    castella: "Salir",
    nota: "Del llatí 'exire'"
  },
  {
    paraula: "Espentar",
    categoria: "Verb",
    definicio: "Fer força contra algú o alguna cosa per a moure-la o allunyar-la. Donar empentes.",
    exemple: "No espentes, que hi ha cua per a tots!",
    castella: "Empujar",
    nota: ""
  },
  {
    paraula: "Rabosa",
    categoria: "Substantiu",
    definicio: "Mamífer carnívor salvatge de la família dels cànids, de pelatge rogenc i cua espessa. Símbol d'astúcia.",
    exemple: "Hem vist una rabosa pel bancal de darrere.",
    castella: "Zorra / Zorro",
    nota: "D'origen preromà"
  },
  {
    paraula: "Bresquilla",
    categoria: "Substantiu",
    definicio: "Fruit arrodonit, de pell aterciopelada i pinyol dur, de polpa sucosa i dolça. Molt cultivada a la Ribera del Xúquer.",
    exemple: "Les bresquilles d'Aielo són les millors.",
    castella: "Melocotón",
    nota: "Variant valenciana de 'pressec'"
  },
  {
    paraula: "Bajoca",
    categoria: "Substantiu",
    definicio: "Llegum de tavella verda i allargada que es menja sencera, molt utilitzada en la paella valenciana i altres guisats.",
    exemple: "La paella porta bajoca i garrofó.",
    castella: "Judía verde",
    nota: "Paraula molt usada a l'Horta"
  },
  {
    paraula: "Dacsa",
    categoria: "Substantiu",
    definicio: "Planta gramínia d'origen americà que produeix panolles amb grans grocs. Molt cultivada històricament a les hortes valencianes.",
    exemple: "Mon pare cultivava dacsa al bancal.",
    castella: "Maíz",
    nota: "D'origen àrab"
  },
  {
    paraula: "Carabassa",
    categoria: "Substantiu",
    definicio: "Fruit gros, de forma arredonida o allargada, de closca dura i polpa ataronjada. S'usa molt en arròs al forn.",
    exemple: "L'arròs al forn porta carabassa i cigrons.",
    castella: "Calabaza",
    nota: ""
  },
  {
    paraula: "Xumenera",
    categoria: "Substantiu",
    definicio: "Conducte vertical per on ix el fum de la llar de foc cap a l'exterior. Part de dalt del fumeral.",
    exemple: "La xumenera de casa fumeja molt en hivern.",
    castella: "Chimenea",
    nota: "Paraula en desús en moltes zones"
  },
  {
    paraula: "Enraonar",
    categoria: "Verb",
    definicio: "Parlar, conversar, mantindre una conversa amb algú. Raonar sobre qualsevol tema de manera informal.",
    exemple: "Estaven enraonant a la porta de casa tota la vesprada.",
    castella: "Hablar / Conversar",
    nota: "Molt usat al País Valencià"
  },
  {
    paraula: "Escurar",
    categoria: "Verb",
    definicio: "Rentar els plats, olles i estris de cuina després de menjar. Netejar la vaixella.",
    exemple: "Ara que hem sopat, em toca escurar a mi.",
    castella: "Fregar los platos",
    nota: "Del llatí 'excurare'"
  },
  {
    paraula: "Got",
    categoria: "Substantiu",
    definicio: "Recipient cilíndric, generalment de vidre, que serveix per a beure líquids.",
    exemple: "Porta'm un got d'aigua, per favor.",
    castella: "Vaso",
    nota: "Del llatí 'guttus'"
  },
  {
    paraula: "Teuladí",
    categoria: "Substantiu",
    definicio: "Ocell menut i molt comú de plomatge marró i gris que sol viure prop de les cases i els teulats.",
    exemple: "Hi ha un niu de teuladins al ràfec de casa.",
    castella: "Gorrión",
    nota: "Derivat de 'teulada' (tejado)"
  },
  {
    paraula: "Catxerulo",
    categoria: "Substantiu",
    definicio: "Joguet format per una estructura lleugera coberta de paper o tela que es fa volar amb el vent subjectat amb un fil.",
    exemple: "Anem a la platja a volar el catxerulo!",
    castella: "Cometa (juguete)",
    nota: "Paraula molt valenciana"
  },
  {
    paraula: "Esvarar",
    categoria: "Verb",
    definicio: "Relliscar, perdre l'equilibri en trepitjar una superfície llisa o mullada.",
    exemple: "Compte, que el terra està mullat i pots esvarar!",
    castella: "Resbalar",
    nota: ""
  },
  {
    paraula: "Xafogor",
    categoria: "Substantiu",
    definicio: "Calor sufocant i humida que fa difícil respirar. Sensació d'ofegament per la calor intensa, típica dels estius valencians.",
    exemple: "Quin xafogor que fa hui! No es pot ni respirar.",
    castella: "Bochorno / Sofoco",
    nota: "Molt usada a l'estiu"
  },
  {
    paraula: "Aladroc",
    categoria: "Substantiu",
    definicio: "Peix menut de mar, allargat i platejat, molt apreciat en la cuina valenciana, especialment fregit o en vinagreta.",
    exemple: "Hem menjat uns aladrocs fregits que estaven boníssims.",
    castella: "Anchoa / Boquerón",
    nota: "D'origen àrab 'al-hadrúq'"
  },
  {
    paraula: "Bromera",
    categoria: "Substantiu",
    definicio: "Conjunt de bombolles menudes que es formen sobre un líquid en agitar-se o en fer sabó.",
    exemple: "L'aigua de la font feia molta bromera.",
    castella: "Espuma",
    nota: ""
  },
  {
    paraula: "Safareig",
    categoria: "Substantiu",
    definicio: "Dipòsit d'aigua, generalment públic, on antigament es rentava la roba. Llavador comunitari.",
    exemple: "Les àvies rentaven la roba al safareig del poble.",
    castella: "Lavadero",
    nota: "D'origen àrab 'as-sarih'"
  },
  {
    paraula: "Fardatxo",
    categoria: "Substantiu",
    definicio: "Rèptil de cos allargat, quatre potes i cua llarga, de color verdós, que pren el sol sobre les pedres.",
    exemple: "Hi ha un fardatxo prenent el sol a la paret.",
    castella: "Lagarto",
    nota: "D'origen àrab"
  },
  {
    paraula: "Gemecar",
    categoria: "Verb",
    definicio: "Emetre sons baixos i continuats de dolor o pena. Plorar suaument, queixar-se amb gemecs.",
    exemple: "El malalt no parava de gemecar tota la nit.",
    castella: "Gemir / Gimotear",
    nota: ""
  },
  {
    paraula: "Melic",
    categoria: "Substantiu",
    definicio: "Cicatriu arredonida que queda al centre del ventre després de tallar el cordó umbilical.",
    exemple: "El bebè té el melic molt bonic.",
    castella: "Ombligo",
    nota: "Del llatí 'umbilicus'"
  },
  {
    paraula: "Oratge",
    categoria: "Substantiu",
    definicio: "Estat de l'atmosfera en un lloc i moment determinats: temperatura, vent, pluja, etc. Temps meteorològic.",
    exemple: "Quin oratge més bo que fa hui per a anar a la platja!",
    castella: "Tiempo atmosférico",
    nota: "Del llatí 'auraticum'"
  },
  {
    paraula: "Despús-ahir",
    categoria: "Adverbi",
    definicio: "El dia immediatament anterior a ahir. Fa dos dies respecte al dia present.",
    exemple: "Despús-ahir vam anar a sopar a Dénia.",
    castella: "Anteayer",
    nota: "Forma típicament valenciana"
  },
  {
    paraula: "Despús-demà",
    categoria: "Adverbi",
    definicio: "El dia immediatament posterior a demà. D'ací a dos dies respecte al dia present.",
    exemple: "Despús-demà és festa i no treballe.",
    castella: "Pasado mañana",
    nota: "Forma típicament valenciana"
  },
  {
    paraula: "Enguany",
    categoria: "Adverbi",
    definicio: "En l'any present, en este any en què estem. Expressió temporal que designa l'any en curs.",
    exemple: "Enguany les falles han sigut molt boniques.",
    castella: "Este año / Hogaño",
    nota: "Del llatí 'in hoc anno'"
  },
  {
    paraula: "Aplegar",
    categoria: "Verb",
    definicio: "Arribar a un lloc, aconseguir un destí. També significa recollir o ajuntar coses.",
    exemple: "Ja hem aplegat a València, quin viatge!",
    castella: "Llegar",
    nota: ""
  },
  {
    paraula: "Aufegar",
    categoria: "Verb",
    definicio: "Dificultar o impedir la respiració. Sentir-se sufocat per calor, fum o falta d'aire.",
    exemple: "Tanca la finestra, que el fum m'aufega!",
    castella: "Ahogar / Sofocar",
    nota: "Del llatí 'offocare'"
  },
  {
    paraula: "Garbell",
    categoria: "Substantiu",
    definicio: "Estri format per una xarxa de filferros o una planxa amb forats que serveix per a separar grans de diferent mida.",
    exemple: "Passa la farina pel garbell per a llevar els grumolls.",
    castella: "Criba / Colador",
    nota: "D'origen àrab"
  },
  {
    paraula: "Cullerot",
    categoria: "Substantiu",
    definicio: "Cullera gran que s'usa per a remenar i servir guisats, arrossos i caldos. També és la larva de la granota.",
    exemple: "Remena l'arròs amb el cullerot.",
    castella: "Cucharón / Renacuajo",
    nota: "Derivat de 'cullera'"
  },
  {
    paraula: "Llamborda",
    categoria: "Substantiu",
    definicio: "Pedra plana tallada en forma de cub o paral·lelepípede que s'usa per a pavimentar carrers i places.",
    exemple: "Els carrers del centre estan empedrats amb llambordes.",
    castella: "Adoquín",
    nota: ""
  },
  {
    paraula: "Torcar",
    categoria: "Verb",
    definicio: "Llevar la humitat o la brutícia d'una superfície passant-hi un drap o tovallola. Eixugar, netejar fregant.",
    exemple: "Torca't les mans amb el drap de la cuina.",
    castella: "Secar / Limpiar (con paño)",
    nota: "Molt usat en el parlar quotidià"
  },
  {
    paraula: "Llavador",
    categoria: "Substantiu",
    definicio: "Pica gran de la cuina on es renten els plats i altres estris. Aigüera.",
    exemple: "Deixa els plats bruts al llavador.",
    castella: "Fregadero",
    nota: ""
  },
  {
    paraula: "Palometa",
    categoria: "Substantiu",
    definicio: "Insecte lepidòpter amb ales grans i vistoses de colors variats que vola de flor en flor.",
    exemple: "Una palometa groga s'ha posat en la flor.",
    castella: "Mariposa",
    nota: "Molt usada al sud valencià"
  },
  {
    paraula: "Alficòs",
    categoria: "Substantiu",
    definicio: "Cogombre llarg i prim, de pell verda i polpa blanca i aquosa, típic de l'agricultura valenciana tradicional.",
    exemple: "A l'estiu menjàvem alficossos de l'hort.",
    castella: "Pepino / Alficoz",
    nota: "D'origen àrab 'al-fiqús'"
  },
  {
    paraula: "Cresol",
    categoria: "Substantiu",
    definicio: "Recipient menut amb un bec per al ble, que es plena d'oli i serveix per a fer llum. Llàntia antiga.",
    exemple: "Abans de la llum elèctrica, la gent s'alumava amb cresols.",
    castella: "Candil",
    nota: "Paraula en desús"
  },
  {
    paraula: "Arrap",
    categoria: "Substantiu",
    definicio: "Ferida superficial i allargada a la pell produïda per les ungles o un objecte punxegut.",
    exemple: "El gat m'ha fet un arrap a la mà.",
    castella: "Arañazo",
    nota: ""
  },
  {
    paraula: "Eixam",
    categoria: "Substantiu",
    definicio: "Conjunt nombrós d'abelles que volen juntes, especialment quan abandonen el rusc amb una reina nova.",
    exemple: "Un eixam d'abelles s'ha posat a l'arbre del jardí.",
    castella: "Enjambre",
    nota: "Del llatí 'examen'"
  },
  {
    paraula: "Endreçar",
    categoria: "Verb",
    definicio: "Posar en orde les coses, arreplegar i col·locar cada objecte al seu lloc. Ordenar un espai.",
    exemple: "Endreça la teua habitació, que està feta un desastre!",
    castella: "Ordenar / Arreglar",
    nota: ""
  },
  {
    paraula: "Llepolies",
    categoria: "Substantiu",
    definicio: "Dolços, llaminadures, caramels o qualsevol menjar dolç que es menja per plaer, especialment els xiquets.",
    exemple: "La iaia sempre porta llepolies als nets.",
    castella: "Golosinas / Chuches",
    nota: "De 'llepol' (goloso)"
  },
  {
    paraula: "Socarrar",
    categoria: "Verb",
    definicio: "Cremar lleugerament la superfície d'una cosa, deixant-la torrada o ennegrida. En la paella, el socarrat és molt valorat.",
    exemple: "No te'l socarre, l'arròs! Baixa el foc.",
    castella: "Chamuscar / Socarrar",
    nota: "El 'socarrat' de la paella és un tresor"
  },
  {
    paraula: "Greixonera",
    categoria: "Substantiu",
    definicio: "Recipient de cuina de terrissa o ceràmica, ample i poc fondo, que s'usa per a coure menjars al forn.",
    exemple: "Posa l'arròs al forn dins de la greixonera.",
    castella: "Cazuela de barro",
    nota: "De 'greix' (grasa)"
  },
  {
    paraula: "Deler",
    categoria: "Substantiu / Verb",
    definicio: "Desig intens i vehement d'aconseguir alguna cosa. Ànsia, afany. Com a verb: desitjar amb molta intensitat.",
    exemple: "Tinc un deler per anar a la platja que no puc més.",
    castella: "Anhelo / Deseo vehemente",
    nota: "Paraula molt expressiva"
  },
  {
    paraula: "Tarquim",
    categoria: "Substantiu",
    definicio: "Fang espés i fosc que es diposita al fons de les séquies, rius i marjals. Llot fèrtil usat com a adob.",
    exemple: "Després de la riuada, els camps estaven plens de tarquim.",
    castella: "Lodo / Cieno / Légamo",
    nota: "D'origen àrab"
  },
  {
    paraula: "Maixquera",
    categoria: "Substantiu",
    definicio: "Cadascun dels costats de la cara, entre l'orella, l'ull i la boca. La part carnosa del rostre.",
    exemple: "El bebè té unes maixqueres ben grosses i rosades.",
    castella: "Mejilla / Cachete",
    nota: "D'origen àrab"
  },
  {
    paraula: "Nyigui-nyogui",
    categoria: "Adjectiu / Substantiu",
    definicio: "Persona fluixa, sense forces ni energia. Algú feble, malaltís o sense vigor. També s'aplica a objectes de mala qualitat.",
    exemple: "No sigues nyigui-nyogui i ajuda'm a carregar açò!",
    castella: "Enclenque / Debilucho",
    nota: "Expressió molt popular"
  },
  {
    paraula: "Pallola",
    categoria: "Substantiu",
    definicio: "Gra de dacsa que, en escalfar-lo, explota i es converteix en una massa blanca i esponjosa.",
    exemple: "Fes-me unes palloles per a veure la pel·lícula.",
    castella: "Palomita de maíz",
    nota: "De 'palla' (paja)"
  },
  {
    paraula: "Voladoret",
    categoria: "Substantiu",
    definicio: "Insecte de cos allargat i ales transparents que vola prop de l'aigua. Símbol de fragilitat i bellesa.",
    exemple: "Quants voladorets hi ha a la vora del riu!",
    castella: "Libélula",
    nota: "De 'volador' + diminutiu '-et'"
  },
  {
    paraula: "Llufa",
    categoria: "Substantiu",
    definicio: "Ventositat silenciosa i generalment de mala olor. També s'usa per a referir-se a algú covard o poca cosa.",
    exemple: "Algú ha amollat una llufa i no vol dir qui ha sigut.",
    castella: "Pedo silencioso",
    nota: "Paraula molt expressiva i popular"
  },
  {
    paraula: "Esmorzar",
    categoria: "Verb",
    definicio: "Prendre el tradicional àpat de mig matí, autèntic ritual sagrat i pilar gastronòmic del poble valencià, habitualment amb entrepà, cacaus del collaret, tramussos i cremaet.",
    exemple: "Hui dissabte anem a esmorzar un bon entrepà de blanc i negre amb faves.",
    castella: "Desayunar / Almorzar a media mañana",
    nota: "L'esmorzar és una de les grans tradicions de la cultura valenciana"
  },
  {
    paraula: "Terròs",
    categoria: "Substantiu",
    definicio: "Tros compacte de terra seca i dura. Fragment de sòl que es trenca en llaurar o cavar.",
    exemple: "El llaurador trencava els terrossos amb l'aixada.",
    castella: "Terrón",
    nota: ""
  },
  {
    paraula: "Garrofó",
    categoria: "Substantiu",
    definicio: "Llegum gran, pla i blanc, que és un dels ingredients essencials de l'autèntica paella valenciana.",
    exemple: "Sense garrofó i bajoca no hi ha paella de veritat.",
    castella: "Garrofón (judión blanco)",
    nota: "Ingredient identitari de la paella"
  },
  {
    paraula: "Renyir",
    categoria: "Verb",
    definicio: "Discutir amb algú de manera acalorada. Reprendre o reganyar, especialment els pares als fills.",
    exemple: "Ma mare em va renyir per aplegar tard a casa.",
    castella: "Reñir / Regañar",
    nota: ""
  },
  {
    paraula: "Xarrar",
    categoria: "Verb",
    definicio: "Parlar molt i sense parar, sovint de coses poc importants. Conversar de manera distesa i informal.",
    exemple: "Les veïnes estan xarrant a la porta des de fa una hora.",
    castella: "Charlar / Parlotear",
    nota: ""
  },
  {
    paraula: "Carcassa",
    categoria: "Substantiu",
    definicio: "El cap, la closca del cap. S'usa col·loquialment per a referir-se al cap d'una persona.",
    exemple: "S'ha pegat un colp a la carcassa contra la porta.",
    castella: "Cabeza / Cráneo (coloquial)",
    nota: "Ús col·loquial molt comú"
  },
  {
    paraula: "Vesprada",
    categoria: "Substantiu",
    definicio: "Part del dia compresa entre el migdia i el vespre. Les hores de la tarda, des de dinar fins a sopar.",
    exemple: "Aquesta vesprada anirem a passejar pel riu.",
    castella: "Tarde",
    nota: "Del llatí 'vesperata'"
  },
  {
    paraula: "Rossinyol",
    categoria: "Substantiu",
    definicio: "Ocell menut de plomatge marró-rogenc, molt conegut pel seu cant melodiós, especialment a la nit.",
    exemple: "Cada nit s'escolta el cant d'un rossinyol al jardí.",
    castella: "Ruiseñor",
    nota: "Del llatí 'lusciniolus'"
  },
  {
    paraula: "Lligallo",
    categoria: "Substantiu",
    definicio: "Camí ample per on passa el ramat transhumant. Via pecuària tradicional del territori valencià.",
    exemple: "Les ovelles passaven pel lligallo camí de la serra.",
    castella: "Cañada real / Vía pecuaria",
    nota: "Terme ramader en desús"
  },
  {
    paraula: "Espardenya",
    categoria: "Substantiu",
    definicio: "Calçat tradicional de sola de cànem o espart i lligams que s'enrotllen al turmell. Calçat típic valencià.",
    exemple: "Els llauradors portaven espardenyes per a treballar al camp.",
    castella: "Alpargata",
    nota: "D'origen basc"
  },
  {
    paraula: "Bleda",
    categoria: "Substantiu",
    definicio: "Planta hortícola de fulles grans i carnoses amb una penca blanca central. Ingredient clau de la cuina valenciana.",
    exemple: "L'arròs al forn amb bledes està boníssim.",
    castella: "Acelga",
    nota: ""
  },
  {
    paraula: "Calces",
    categoria: "Substantiu",
    definicio: "Peça de roba interior femenina que cobreix des de la cintura fins a l'engonal.",
    exemple: "Posa les calces netes al calaix de dalt.",
    castella: "Bragas",
    nota: "Del llatí 'calceus'"
  },
  {
    paraula: "Almud",
    categoria: "Substantiu",
    definicio: "Mesura tradicional de gra o líquids usada antigament als mercats valencians. Valia aproximadament 4 litres.",
    exemple: "Al mercat venien la dacsa per almuds.",
    castella: "Almud (medida antigua)",
    nota: "D'origen àrab, en desús"
  },
  {
    paraula: "Coentor",
    categoria: "Substantiu",
    definicio: "Sensació de vergonya, timidesa o tall davant d'una situació embarassosa.",
    exemple: "Em fa coentor demanar-li el telèfon.",
    castella: "Vergüenza / Corte",
    nota: "Molt usada col·loquialment"
  },
  {
    paraula: "Faena",
    categoria: "Substantiu",
    definicio: "Treball, feina, tasca que cal fer. Ocupació laboral o domèstica.",
    exemple: "Tinc molta faena hui i no podré eixir.",
    castella: "Trabajo / Tarea",
    nota: "D'ús quotidià"
  },
  {
    paraula: "Embassar",
    categoria: "Verb",
    definicio: "Quedar-se sense poder articular paraula per la sorpresa, emoció o vergonya. Quedar-se tallat.",
    exemple: "Em vaig embassar quan em van donar el premi.",
    castella: "Quedarse sin palabras / Cortarse",
    nota: ""
  },
  {
    paraula: "Allioli",
    categoria: "Substantiu",
    definicio: "Salsa tradicional feta amb all picat i oli d'oliva, barrejats al morter fins a obtindre una pasta cremosa.",
    exemple: "Aquesta fideuà està molt millor amb allioli.",
    castella: "Alioli / Ajoaceite",
    nota: "De 'all' (ajo) + 'i' (y) + 'oli' (aceite)"
  },
  {
    paraula: "Torró",
    categoria: "Substantiu",
    definicio: "Dolç tradicional fet amb ametles i mel, típic de Xixona i altres localitats valencianes, consumit especialment per Nadal.",
    exemple: "El torró de Xixona és el millor del món.",
    castella: "Turrón",
    nota: "Producte identitari de Xixona"
  },
  {
    paraula: "Entabuixar-se",
    categoria: "Verb",
    definicio: "Emboirar-se el cel de núvols densos i foscos que amenacen pluja o tempesta.",
    exemple: "S'ha entabuixat el cel; segur que plourà.",
    castella: "Nublarse / Encapotarse",
    nota: "Paraula molt expressiva i típica"
  },
  {
    paraula: "Bresca",
    categoria: "Substantiu",
    definicio: "Conjunt de casetes de cera hexagonals que les abelles construeixen dins del rusc per a emmagatzemar mel.",
    exemple: "Hem tret una bresca plena de mel del rusc.",
    castella: "Panal de miel",
    nota: "D'origen germànic"
  },
  {
    paraula: "Sucre",
    categoria: "Substantiu",
    definicio: "Substància dolça i cristal·lina que s'obté de la canya de sucre o de la remolatxa, indispensable en la rebosteria tradicional valenciana.",
    exemple: "Posa-li una culleradeta de sucre al café.",
    castella: "Azúcar",
    nota: "Del llatí 'succarum', d'origen àrab"
  },
  {
    paraula: "Escopinyar",
    categoria: "Verb",
    definicio: "Expel·lir saliva o qualsevol altra cosa per la boca amb força. Llançar amb rebuig.",
    exemple: "No escopinyes al terra, que és molt lleig!",
    castella: "Escupir",
    nota: ""
  },
  {
    paraula: "Ferrament",
    categoria: "Substantiu",
    definicio: "Instrument, generalment de ferro o metall, que serveix per a realitzar un treball manual o mecànic.",
    exemple: "Porta'm el ferrament que necessitem per a arreglar la porta.",
    castella: "Herramienta",
    nota: "De 'ferro' (hierro)"
  },
  {
    paraula: "Dragó",
    categoria: "Substantiu",
    definicio: "Rèptil menut, inofensiu i nocturn de cos aplanat i color grisós, amb dits proveïts de ventoses adhesives que li permeten grimpar amb agilitat per parets i sostres caçant mosquits.",
    exemple: "A l'estiu sempre hi ha un dragó a la paret de la terrassa.",
    castella: "Salamanquesa",
    nota: "Animalet molt típic i beneficiós a les terres valencianes"
  },
  {
    paraula: "Petxina",
    categoria: "Substantiu",
    definicio: "Closca dura i calcària que protegeix els mol·luscs marins. Conquilla de mar.",
    exemple: "Els xiquets arrepleguen petxines a la platja.",
    castella: "Concha / Cáscara de molusco",
    nota: "Del llatí 'pectinem'"
  },
  {
    paraula: "Empeltar",
    categoria: "Verb",
    definicio: "Inserir un brot o tija d'una planta en una altra perquè s'hi unisca i done fruit. Tècnica agrícola tradicional.",
    exemple: "Mon iaio empeltava els tarongers cada primavera.",
    castella: "Injertar",
    nota: "Del llatí 'impeltare'"
  },
  {
    paraula: "Pernil",
    categoria: "Substantiu",
    definicio: "Cuixa del porc, salada i curada, que es consumeix tallada en lonxes fines. Producte de xarcuteria.",
    exemple: "Talla'm unes llesques de pernil per a almorzar.",
    castella: "Jamón",
    nota: ""
  },
  // ===== NOVES PARAULES =====
  {
    paraula: "Creïlla",
    categoria: "Substantiu",
    definicio: "Tubercle comestible de planta solanàcia, arredonit, de pell marró i polpa blanca o groguenca. Bàsic en la cuina.",
    exemple: "Pela unes creïlles per a fer una truita.",
    castella: "Patata",
    nota: "Terme molt usat al País Valencià"
  },
  {
    paraula: "Clòtxina",
    categoria: "Substantiu",
    definicio: "Mol·lusc bivalve de closca fosca i allargada que viu adherit a les roques o a estructures marines. Típic del port de València.",
    exemple: "Les clòtxines al vapor del Cabanyal són increïbles.",
    castella: "Mejillón",
    nota: "Producte identitari del Cabanyal"
  },
  {
    paraula: "Tomaca",
    categoria: "Substantiu",
    definicio: "Fruit roig i carnós de la tomatera, molt usat en la cuina valenciana per a fer salses, amanides i pa amb tomaca.",
    exemple: "Fes-me un pa amb tomaca per a almorzar.",
    castella: "Tomate",
    nota: "D'origen nahua (Amèrica)"
  },
  {
    paraula: "Pésol",
    categoria: "Substantiu",
    definicio: "Llegum menut, verd i arrodonit, que creix dins d'una tavella. Ingredient clàssic de la paella valenciana.",
    exemple: "La paella de verdures porta pésols i carxofa.",
    castella: "Guisante",
    nota: ""
  },
  {
    paraula: "Forat",
    categoria: "Substantiu",
    definicio: "Obertura, buit o perforació en una superfície. Espai buit travessat de banda a banda.",
    exemple: "Tinc un forat als pantalons i em fa coentor.",
    castella: "Agujero",
    nota: "Del llatí 'foratum'"
  },
  {
    paraula: "Rajola",
    categoria: "Substantiu",
    definicio: "Peça rectangular de fang cuit que s'usa per a la construcció de parets o per a pavimentar terres.",
    exemple: "El terra de casa de la iaia era de rajoles de fang.",
    castella: "Ladrillo / Azulejo",
    nota: "D'origen àrab 'ar-rajula'"
  },
  {
    paraula: "Gronxador",
    categoria: "Substantiu",
    definicio: "Aparell de joc format per un seient penjat de cordes o cadenes que es balanceja avant i arrere.",
    exemple: "La xiqueta es passava les vesprades al gronxador del parc.",
    castella: "Columpio",
    nota: "De 'gronxar' (mecer)"
  },
  {
    paraula: "Bescoll",
    categoria: "Substantiu",
    definicio: "Part posterior del coll, entre el cap i l'esquena. Clatell, nuca.",
    exemple: "Em fa mal el bescoll de dormir en mala postura.",
    castella: "Nuca / Cogote",
    nota: ""
  },
  {
    paraula: "Setrill",
    categoria: "Substantiu",
    definicio: "Recipient de vidre, ceràmica o metall amb bec estret que serveix per a contindre i servir oli o vinagre.",
    exemple: "Passa'm el setrill de l'oli, que vull amanir l'amanida.",
    castella: "Aceitera / Vinagrera",
    nota: "Del llatí 'sittrellum'"
  },
  {
    paraula: "Boira",
    categoria: "Substantiu",
    definicio: "Massa de gotes d'aigua molt menudes suspeses en l'aire prop del terra, que redueix la visibilitat.",
    exemple: "Hui fa molta boira i no es veu res per la carretera.",
    castella: "Niebla",
    nota: "Del llatí 'boreas'"
  },
  {
    paraula: "Calbot",
    categoria: "Substantiu",
    definicio: "Colp donat al cap amb la mà oberta. Clatellot, copet al clatell.",
    exemple: "Com no pares quiet et pegue un calbot!",
    castella: "Coscorrón / Colleja",
    nota: "Molt usat col·loquialment"
  },
  {
    paraula: "Carabasseta",
    categoria: "Substantiu",
    definicio: "Variant menuda de la carabassa, de pell verda i forma allargada, que es menja tendra i cuita.",
    exemple: "Pela unes carabassetes per a fer-les a la planxa.",
    castella: "Calabacín",
    nota: "Diminutiu de 'carabassa'"
  },
  {
    paraula: "Granota",
    categoria: "Substantiu",
    definicio: "Amfibi de pell llisa i humida, potes posteriors llargues adaptades al salt, que viu prop de l'aigua.",
    exemple: "A l'estany se senten les granotes cantar de nit.",
    castella: "Rana",
    nota: ""
  },
  {
    paraula: "Xarxa",
    categoria: "Substantiu",
    definicio: "Teixit de fils o cordes entrellançats que forma una malla amb buits regulars. S'usa per a pescar, caçar o altres finalitats.",
    exemple: "El pescador reparava la xarxa al port.",
    castella: "Red",
    nota: ""
  },
  {
    paraula: "Llesca",
    categoria: "Substantiu",
    definicio: "Porció prima i plana tallada d'un pa, formatge, pernil o altre aliment sòlid.",
    exemple: "Talla'm unes llesques de pa per a sopar.",
    castella: "Rebanada / Loncha",
    nota: "Del germànic 'liska'"
  },
  {
    paraula: "Pinyol",
    categoria: "Substantiu",
    definicio: "Llavor dura i llenyosa que es troba al centre d'alguns fruits com la bresquilla, la pruna o l'oliva.",
    exemple: "Compte amb el pinyol de l'oliva, no te'l tragues!",
    castella: "Hueso (de fruta)",
    nota: "De 'pinya'"
  },
  {
    paraula: "Trellat",
    categoria: "Substantiu",
    definicio: "Seny, sentit comú, bon judici per a obrar correctament. Sensatesa en el comportament.",
    exemple: "Eixe xic no té gens de trellat, fa qualsevol ximpleria.",
    castella: "Sentido común / Juicio",
    nota: "Paraula molt expressiva"
  },
  {
    paraula: "Xicotet",
    categoria: "Adjectiu",
    definicio: "De dimensions reduïdes, de poca grandària. Menut, poc gran.",
    exemple: "Viu en un pis molt xicotet però molt acogedoret.",
    castella: "Pequeño",
    nota: "Forma típicament valenciana"
  },
  {
    paraula: "Enfitar-se",
    categoria: "Verb",
    definicio: "Tindre una indigestió per haver menjat massa, especialment coses pesades o grasses.",
    exemple: "Em vaig enfitar de menjat les festes de Nadal.",
    castella: "Empacharse / Indigestarse",
    nota: ""
  },
  {
    paraula: "Moquero",
    categoria: "Substantiu",
    definicio: "Tros de tela que s'usa per a mocar-se o per a eixugar-se la suor. Mocador.",
    exemple: "Porta sempre un moquero a la butxaca, per si de cas.",
    castella: "Pañuelo",
    nota: "De 'moc' (moco)"
  },
  {
    paraula: "Taulell",
    categoria: "Substantiu",
    definicio: "Moble allargat i pla que hi ha en botigues i bars, on es mostren o serveixen els productes als clients.",
    exemple: "Deixa les bosses damunt del taulell de la botiga.",
    castella: "Mostrador / Barra (de bar)",
    nota: "De 'taula' (mesa)"
  },
  {
    paraula: "Joguet",
    categoria: "Substantiu",
    definicio: "Objecte fabricat per a entreteniment i diversió dels xiquets. Joguina, objecte de joc.",
    exemple: "Els Reis li van portar molts joguets al xiquet.",
    castella: "Juguete",
    nota: "De 'joc' (juego)"
  },
  {
    paraula: "Geperut",
    categoria: "Adjectiu / Substantiu",
    definicio: "Persona que té una deformitat a l'esquena en forma de prominència arredonida. Amb gepa.",
    exemple: "El personatge del conte era un home geperut però molt savi.",
    castella: "Jorobado",
    nota: "De 'gepa' (joroba)"
  },
  {
    paraula: "Borumballa",
    categoria: "Substantiu",
    definicio: "Encenall, bocí prim i llarg de fusta que ix en serrar o raspar la fusta. Viruta.",
    exemple: "El fuster tenia el taller ple de borumballes.",
    castella: "Viruta",
    nota: ""
  },
  {
    paraula: "Polseguera",
    categoria: "Substantiu",
    definicio: "Núvol de pols que s'alça del terra per l'acció del vent o pel pas de vehicles o persones.",
    exemple: "El cotxe va alçar una polseguera enorme pel camí.",
    castella: "Polvareda",
    nota: "De 'pols' (polvo)"
  },
  {
    paraula: "Atzucac",
    categoria: "Substantiu",
    definicio: "Carrer sense eixida, que acaba en un mur o paret. Situació sense solució ni sortida.",
    exemple: "No entres per ací, que és un atzucac.",
    castella: "Callejón sin salida",
    nota: "D'origen àrab 'as-suqaq'"
  },
  {
    paraula: "Pigota",
    categoria: "Substantiu",
    definicio: "Malaltia infecciosa que provoca erupcions cutànies amb butllofes i fòssils a la pell.",
    exemple: "De xiquet vaig passar la pigota i em van quedar unes marques.",
    castella: "Viruela / Varicela",
    nota: ""
  },
  {
    paraula: "Soca",
    categoria: "Substantiu",
    definicio: "Part inferior del tronc d'un arbre, des de les arrels fins a les primeres branques. Cep de la vinya.",
    exemple: "La soca d'aquell garrofer deu tindre més de cent anys.",
    castella: "Cepa / Tocón / Tronco",
    nota: "D'origen preromà"
  },
  {
    paraula: "Camal",
    categoria: "Substantiu",
    definicio: "Cadascuna de les dues parts d'un pantaló que cobreixen les cames, des de la cintura fins als peus.",
    exemple: "Se m'ha descosit el camal del pantaló dret.",
    castella: "Pernera (del pantalón)",
    nota: "De 'cama' (pierna)"
  },
  {
    paraula: "Almàssera",
    categoria: "Substantiu",
    definicio: "Lloc on es premsen les olives per a obtindre oli. Molí d'oli tradicional.",
    exemple: "Portàvem les olives a l'almàssera del poble per a fer oli.",
    castella: "Almazara",
    nota: "D'origen àrab 'al-masara'"
  },
  {
    paraula: "Soroll",
    categoria: "Substantiu",
    definicio: "So fort, desagradable o confús que molesta o impedeix escoltar bé. Renou.",
    exemple: "No pugues dormir amb tant de soroll del carrer.",
    castella: "Ruido",
    nota: ""
  },
  {
    paraula: "Eixida",
    categoria: "Substantiu",
    definicio: "Lloc per on s'ix, porta o obertura per a eixir. També excursió o passeig curt.",
    exemple: "L'eixida d'emergència està al final del passadís.",
    castella: "Salida",
    nota: "De 'eixir' (salir)"
  },
  {
    paraula: "Garsa",
    categoria: "Substantiu",
    definicio: "Ocell de plomatge blanc i negre, amb cua llarga, conegut per la seua intel·ligència i pel seu cant estrident.",
    exemple: "Les garses han fet niu a l'arbre del pati.",
    castella: "Urraca",
    nota: ""
  },
  {
    paraula: "Llanda",
    categoria: "Substantiu",
    definicio: "Recipient pla i rectangular de metall que s'usa per a coure al forn pastissos, coques i altres menjars.",
    exemple: "Posa la coca en la llanda i fica-la al forn.",
    castella: "Bandeja de horno / Lata",
    nota: "Molt usada en rebosteria valenciana"
  },
  {
    paraula: "Alçar",
    categoria: "Verb",
    definicio: "Guardar, recollir les coses i posar-les al seu lloc. En valencià s'usa sobretot amb el sentit de guardar.",
    exemple: "Alça els plats al seu lloc després d'escurar.",
    castella: "Guardar / Recoger",
    nota: "Sentit típicament valencià"
  },
  {
    paraula: "Pixar",
    categoria: "Verb",
    definicio: "Expel·lir l'orina del cos. Forma col·loquial molt usada en el parlar quotidià.",
    exemple: "El xiquet vol pixar i no troba el bany.",
    castella: "Mear / Orinar",
    nota: "Mot molt popular i sense tabú en valencià"
  },
  {
    paraula: "Muixí",
    categoria: "Substantiu",
    definicio: "Peix menut d'aigua dolça o salobre, molt menut i sense valor comercial.",
    exemple: "Al barranc només es pescaven muixins.",
    castella: "Pez pequeño / Pececillo",
    nota: "Paraula en desús"
  },
  {
    paraula: "Tormo",
    categoria: "Substantiu",
    definicio: "Roca gran i aïllada, penyal. Pedra grossa de forma irregular.",
    exemple: "Ens vam asseure damunt d'un tormo a descansar.",
    castella: "Peñasco / Roca grande",
    nota: "D'origen preromà"
  },
  {
    paraula: "Carxofa",
    categoria: "Substantiu",
    definicio: "Inflorescència comestible d'una planta composta, formada per bràctees carnoses. Molt cultivada a la Vega Baja.",
    exemple: "L'arròs amb carxofes i aladrocs és boníssim.",
    castella: "Alcachofa",
    nota: "D'origen àrab"
  },
  {
    paraula: "Garrofa",
    categoria: "Substantiu",
    definicio: "Fruit del garrofer, una tavella fosca i dura, dolça, que s'usava com a aliment per al bestiar i per a fer xocolate.",
    exemple: "Els garrofers de la serra donaven garrofes enormes.",
    castella: "Algarroba",
    nota: "D'origen àrab 'al-kharruba'"
  },
  {
    paraula: "Manoll",
    categoria: "Substantiu",
    definicio: "Porció d'herba, flors o verdura que es pot agafar amb la mà. Feix menut.",
    exemple: "Compra un manoll de julivert al mercat.",
    castella: "Manojo",
    nota: ""
  },
  {
    paraula: "Clavell",
    categoria: "Substantiu",
    definicio: "Flor ornamental molt viva, de pètals dentats i olor dolça i penetrant, molt estimada als patis i balcons tradicionals valencians.",
    exemple: "La iaia sempre tenia testos de clavells al balcó.",
    castella: "Clavel",
    nota: ""
  },
  {
    paraula: "Xopat",
    categoria: "Adjectiu",
    definicio: "Molt mullat, completament amarat d'aigua. Empapar-se fins als ossos.",
    exemple: "He arribat a casa xopat de la pluja!",
    castella: "Empapado / Calado",
    nota: "Molt expressiu"
  },
  {
    paraula: "Sucar",
    categoria: "Verb",
    definicio: "Submergir un aliment sòlid en un líquid, generalment una salsa o brou, per a mullar-lo i donar-li sabor.",
    exemple: "M'agrada sucar el pa en la salsa de l'estofat.",
    castella: "Mojar / Untar (pan en salsa)",
    nota: ""
  },
  {
    paraula: "Brull",
    categoria: "Substantiu",
    definicio: "Formatge fresc i tendre elaborat amb llet acabada de quallar. Recuit, mató.",
    exemple: "De postre hem menjat brull amb mel, boníssim!",
    castella: "Requesón / Cuajada",
    nota: "Producte tradicional valencià"
  },
  {
    paraula: "Aixeta",
    categoria: "Substantiu",
    definicio: "Dispositiu que regula el pas de l'aigua en canonades i fontanes. Grifó.",
    exemple: "Tanca bé l'aixeta, que goteja.",
    castella: "Grifo",
    nota: ""
  },
  {
    paraula: "Torròs",
    categoria: "Adjectiu",
    definicio: "Dit d'un aliment que s'ha tostat o cremat lleugerament, adquirint un sabor intens i cruixent.",
    exemple: "M'agrada el pa ben torròs amb tomaca.",
    castella: "Tostado / Crujiente",
    nota: ""
  },
  {
    paraula: "Falaguera",
    categoria: "Substantiu",
    definicio: "Planta de fulles compostes molt fines i dividides que creix en llocs humits i ombrívols. Falguera.",
    exemple: "Al barranc hi havia falagueres precioses.",
    castella: "Helecho",
    nota: ""
  },
  {
    paraula: "Calfar",
    categoria: "Verb",
    definicio: "Augmentar la temperatura d'una cosa, fer que passe de freda a calenta. Escalfar.",
    exemple: "Calfa'm la llet, que la vull calenteta.",
    castella: "Calentar",
    nota: ""
  },
  {
    paraula: "Llomello",
    categoria: "Substantiu",
    definicio: "Part de la carn del porc o la vedella que correspon a la part baixa del llom. Tall de carn molt apreciat.",
    exemple: "Per a sopar he comprat un llomello de porc.",
    castella: "Solomillo",
    nota: ""
  },
  {
    paraula: "Matalaf",
    categoria: "Substantiu",
    definicio: "Peça grossa i tova de tela farcida de materials tous, on es gita la gent per a dormir.",
    exemple: "Necessitem un matalaf nou perquè este ja està molt vell.",
    castella: "Colchón",
    nota: "D'origen àrab 'al-matrah'"
  },
  {
    paraula: "Mugró",
    categoria: "Substantiu",
    definicio: "Prominència carnosa central del pit per on ix la llet materna. Part del pit.",
    exemple: "El bebè busca el mugró de la mare per a mamar.",
    castella: "Pezón",
    nota: ""
  },
  {
    paraula: "Traüc",
    categoria: "Substantiu",
    definicio: "Obertura, forat, pas estret a través d'una paret o superfície. Forat per on passa alguna cosa.",
    exemple: "Entra aire pel traüc de la porta.",
    castella: "Agujero / Abertura",
    nota: "Del llatí 'transfocare'"
  },
  {
    paraula: "Peüc",
    categoria: "Substantiu",
    definicio: "Peça de roba que cobreix el peu, feta de punt o tela fina. Mitjó curt per a xiquets menuts.",
    exemple: "Posa-li els peücs al xiquet que fa fred.",
    castella: "Calcetín / Patucos (de bebé)",
    nota: "De 'peu' (pie)"
  },
  {
    paraula: "Rogle",
    categoria: "Substantiu",
    definicio: "Cercle de persones reunides per a conversar o fer alguna activitat conjunta. Rotlle, corro.",
    exemple: "Fem un rogle i parlem del que farem demà.",
    castella: "Corro / Círculo (de personas)",
    nota: ""
  },
  {
    paraula: "Llagosta",
    categoria: "Substantiu",
    definicio: "Insecte ortòpter de potes posteriors molt llargues, adaptat al salt, que pot causar plagues als camps.",
    exemple: "A l'estiu els bancals es plenen de llagostes.",
    castella: "Langosta / Saltamontes",
    nota: ""
  },
  {
    paraula: "Blavet",
    categoria: "Substantiu",
    definicio: "Insecte himenòpter de cos robust amb bandes grogues i negres, amb un fibló que fa molt de mal.",
    exemple: "Compte amb eixe blavet, que pica molt!",
    castella: "Avispa",
    nota: ""
  },
  {
    paraula: "Toll",
    categoria: "Substantiu",
    definicio: "Clot amb aigua estancada, generalment al llit d'un riu o barranc. Lloc on es remansa l'aigua.",
    exemple: "Al riu hi ha un toll on els xiquets es banyen a l'estiu.",
    castella: "Poza / Remanso",
    nota: ""
  },
  {
    paraula: "Piular",
    categoria: "Verb",
    definicio: "Emetre sons aguts i breus, com fan els ocells menuts. Cantar els pollets o les aus de mida reduïda.",
    exemple: "Els pollets no paren de piular buscant la mare.",
    castella: "Piar",
    nota: "D'origen onomatopeic"
  },
  {
    paraula: "Matxucar",
    categoria: "Verb",
    definicio: "Colpejar repetidament una cosa fins a trencar-la o aplanar-la. Esclafar, aixafar.",
    exemple: "Matxuca les ametles per a posar-les al pastís.",
    castella: "Machacar / Triturar",
    nota: ""
  },
  {
    paraula: "Grapat",
    categoria: "Substantiu",
    definicio: "Quantitat de coses que es pot agafar tancant la mà. Punyat, un quants junts.",
    exemple: "Agafa un grapat de cacauets i menja'ls.",
    castella: "Puñado",
    nota: ""
  },
  {
    paraula: "Argilaga",
    categoria: "Substantiu",
    definicio: "Arbust espinós de la família de les lleguminoses, amb flors grogues, que creix en terrenys secs i pedregosos.",
    exemple: "La muntanya estava plena d'argilagues florides de groc.",
    castella: "Aliaga / Aulaga",
    nota: ""
  },
  {
    paraula: "Butza",
    categoria: "Substantiu",
    definicio: "Panxa, ventre. S'usa col·loquialment per a referir-se a l'estómac o la panxa d'una persona.",
    exemple: "Tinc la butza plena, no puc menjar res més.",
    castella: "Barriga / Panza",
    nota: "Ús col·loquial"
  },
  {
    paraula: "Gambosí",
    categoria: "Substantiu",
    definicio: "Peix menut d'aigua dolça introduït per a combatre els mosquits, molt comú a les séquies i marjals.",
    exemple: "Les séquies de l'Albufera estan plenes de gambosins.",
    castella: "Pez mosquito (Gambusia)",
    nota: "Molt comú a l'Albufera"
  },
  {
    paraula: "Sargantana",
    categoria: "Substantiu",
    definicio: "Rèptil menut i àgil, de cos pla i cua llarga, que corre amb rapidesa per les parets i roques.",
    exemple: "Les sargantanes prenen el sol damunt de les pedres.",
    castella: "Lagartija",
    nota: "D'origen incert"
  },
  {
    paraula: "Atzavara",
    categoria: "Substantiu",
    definicio: "Planta crassa de fulles grosses, gruixudes i punxegudes, que creix en terrenys secs i és típica del paisatge mediterrani.",
    exemple: "Al marge del bancal hi havia atzavares enormes.",
    castella: "Pita / Agave",
    nota: ""
  },
  {
    paraula: "Claveguera",
    categoria: "Substantiu",
    definicio: "Conducte subterrani per on circulen les aigües residuals i pluvials d'una població.",
    exemple: "Van haver d'arreglar la claveguera perquè estava embossada.",
    castella: "Alcantarilla / Cloaca",
    nota: ""
  },
  {
    paraula: "Aigüera",
    categoria: "Substantiu",
    definicio: "Pica de la cuina amb un desguàs per on s'escola l'aigua. Lloc on es renten els plats.",
    exemple: "Deixa els plats bruts a l'aigüera, que ja els escuraré jo.",
    castella: "Fregadero / Pila de fregar",
    nota: "De 'aigua' (agua)"
  },
  {
    paraula: "Fesol",
    categoria: "Substantiu",
    definicio: "Llegum sec de forma arredonida o de ronyó que es cuina en olla o en guisats. Mongeta seca.",
    exemple: "L'olla de fesols amb naps és un plat d'hivern.",
    castella: "Alubia / Judía seca",
    nota: ""
  },
  {
    paraula: "Rosegar",
    categoria: "Verb",
    definicio: "Mastegar una cosa dura repetidament amb les dents. Mossegar i trencar a poc a poc.",
    exemple: "El gos no para de rosegar l'os.",
    castella: "Roer",
    nota: ""
  },
  {
    paraula: "Rabosot",
    categoria: "Substantiu",
    definicio: "Cria de la rabosa. Cadell de guineu. S'usa també com a insult afectuós per a algú astut.",
    exemple: "Eixe rabosot sempre se n'ix amb la seua!",
    castella: "Cachorro de zorro / Pillo",
    nota: "De 'rabosa'"
  },
  {
    paraula: "Morret",
    categoria: "Substantiu",
    definicio: "Part sortint de la cara, especialment els llavis. Posar morrets és un gest de disgust o enfado.",
    exemple: "No em poses eixos morrets, que tampoc és per a tant!",
    castella: "Morritos / Pucheros",
    nota: ""
  },
  {
    paraula: "Cocotada",
    categoria: "Substantiu",
    definicio: "Colp fort al cap, clatellada. S'usa també per a una sorpresa desagradable o un revés inesperat.",
    exemple: "Si no estudies, la vida te pegarà unes cocotades!",
    castella: "Coscorrón / Batacazo",
    nota: "De 'cocot' (cogote)"
  },
  {
    paraula: "Abeurador",
    categoria: "Substantiu",
    definicio: "Recipient o lloc on beuen els animals, especialment el bestiar i les aus de corral.",
    exemple: "Plena l'abeurador de les gallines, que està sec.",
    castella: "Abrevadero / Bebedero",
    nota: "De 'abeurar' (abrevar)"
  },
  {
    paraula: "Llaurador",
    categoria: "Substantiu",
    definicio: "Persona que treballa la terra, que es dedica al conreu dels camps. Pagés, agricultor.",
    exemple: "Mon pare era llaurador i cultivava taronges.",
    castella: "Labrador / Agricultor",
    nota: "Figura identitària del País Valencià"
  },
  {
    paraula: "Arrossegar",
    categoria: "Verb",
    definicio: "Portar una cosa tirant d'ella de manera que toque o raspe el terra. Portar a ras de terra.",
    exemple: "No arrossegues la cadira, que ratles el terra!",
    castella: "Arrastrar",
    nota: ""
  },
  {
    paraula: "Calfó",
    categoria: "Adjectiu",
    definicio: "Persona que sent molt el fred, que és molt sensible a les temperatures baixes.",
    exemple: "Sóc molt calfó, porte jaqueta fins a l'estiu.",
    castella: "Friolero",
    nota: "De 'calfar' (calentar)"
  },
  {
    paraula: "Fogasser",
    categoria: "Adjectiu",
    definicio: "Persona que sent molt la calor, que es queixa amb facilitat de les altes temperatures.",
    exemple: "No sigues tan fogasser, que només estem a trenta graus!",
    castella: "Caluroso (persona que sufre el calor)",
    nota: "De 'foc' (fuego)"
  },
  {
    paraula: "Enramar",
    categoria: "Verb",
    definicio: "Adornar amb rams de flors i plantes un carrer, balcó o espai per a una festa o celebració.",
    exemple: "Per al Corpus enramaven tots els carrers del poble.",
    castella: "Adornar con ramas y flores",
    nota: "Tradició valenciana festiva"
  },
  {
    paraula: "Pedregar",
    categoria: "Verb",
    definicio: "Caure pedra de gel del cel durant una tempesta. Calamarsejar, caure calabruix.",
    exemple: "Ahir va pedregar i va destrossar la collita de tomaca.",
    castella: "Granizar",
    nota: ""
  },
  {
    paraula: "Colp",
    categoria: "Substantiu",
    definicio: "Contacte violent i sobtat d'un cos contra un altre. Impacte brusc, topada.",
    exemple: "S'ha pegat un bon colp al genoll contra la taula.",
    castella: "Golpe",
    nota: ""
  },
  {
    paraula: "Orxata",
    categoria: "Substantiu",
    definicio: "Beguda refrescant elaborada amb xufa, aigua i sucre, típica de València i molt popular a l'estiu.",
    exemple: "A l'estiu no hi ha res millor que una orxata ben freda d'Alboraia.",
    castella: "Horchata",
    nota: "Beguda identitària valenciana"
  },
  {
    paraula: "Xufa",
    categoria: "Substantiu",
    definicio: "Tubercle comestible menut i arrodonit d'una planta herbàcia, que s'usa per a elaborar l'orxata.",
    exemple: "Els camps de xufes de l'Horta Nord són patrimoni.",
    castella: "Chufa",
    nota: "Cultiu exclusiu de l'Horta valenciana"
  },
  {
    paraula: "Batzulla",
    categoria: "Substantiu",
    definicio: "Festa animada, gresca, rebombori o reunió molt alegre i sorollosa entre amics o veïns.",
    exemple: "Quina batzulla tenien muntada ahir a la nit al casal faller!",
    castella: "Jaleo / Jarana / Gresca",
    nota: "Paraula molt festiva i popular"
  },
  {
    paraula: "Rebost",
    categoria: "Substantiu",
    definicio: "Habitació o armari gran on es guarden els aliments, conserves i provisions de la casa.",
    exemple: "Guarda les conserves al rebost, que allí fa més fresc.",
    castella: "Despensa",
    nota: "Del llatí 'repositum'"
  },
  {
    paraula: "Badall",
    categoria: "Substantiu",
    definicio: "Obertura involuntària i ampla de la boca produïda per la son, la fatiga, l'avorriment o la gana.",
    exemple: "Se li escapava un badall rere l'altre durant la classe de matemàtiques.",
    castella: "Bostezo",
    nota: "Del llatí 'badare' (estar amb la boca oberta)"
  },
  {
    paraula: "Emboirar-se",
    categoria: "Verb",
    definicio: "Cobrir-se el cel de boira o núvols espessos. Perdre la claredat per la condensació de l'aigua a l'aire.",
    exemple: "S'ha emboirat en un moment i ara no es veu el cap del Montgó.",
    castella: "Cubrirse de niebla / Nublarse",
    nota: "De 'boira' (niebla)"
  },
  {
    paraula: "Cossi",
    categoria: "Substantiu",
    definicio: "Recipient gros de terrissa o metall que s'usava per a fer la bugada o per a altres feines domèstiques.",
    exemple: "Posaven la roba en remull dins del cossi.",
    castella: "Barreño / Tina grande",
    nota: "En desús"
  },
  {
    paraula: "Borinot",
    categoria: "Substantiu",
    definicio: "Insecte himenòpter semblant a l'abella però més gros i vellutat que fa un fort brunzit. En sentit figurat, persona pesada o que molesta parlant sense parar.",
    exemple: "Calla ja una estona i no sigues borinot!",
    castella: "Abejorro / Pelmazo",
    nota: "Molt habitual en el llenguatge col·loquial"
  },
  {
    paraula: "Bescollada",
    categoria: "Substantiu",
    definicio: "Colp donat al bescoll o clatell amb la mà oberta.",
    exemple: "Si no fas cas a ta mare et guanyaràs una bescollada.",
    castella: "Pescozón / Cogotazo",
    nota: "Derivat de 'bescoll' (nuca)"
  },
  {
    paraula: "Escagarrussar-se",
    categoria: "Verb",
    definicio: "Agafar molta por, acovardir-se davant d'una situació compromesa o d'un perill imminent.",
    exemple: "Quan va vore vindre el gos gros es va escagarrussar.",
    castella: "Acoquinarse / Acobardarse",
    nota: "Forma expressiva col·loquial"
  },
  {
    paraula: "Desficaci",
    categoria: "Substantiu",
    definicio: "Dita o acció sense sentit, sense trellat ni fonament; disbarat o desgavell total.",
    exemple: "No digues tants desficacis i parla amb trellat.",
    castella: "Disparate / Desatino",
    nota: "Paraula emblemàtica del parlar valencià"
  },
  {
    paraula: "Baldana",
    categoria: "Substantiu",
    definicio: "Amplària o folgança d'una peça de roba que queda ampla i còmoda.",
    exemple: "Estes calces em venen amples, fan molta baldana.",
    castella: "Holgura / Amplitud",
    nota: ""
  },
  {
    paraula: "Tabaola",
    categoria: "Substantiu",
    definicio: "Batzulla gran, renou confús i cridòria produïda per una multitud de persones.",
    exemple: "Quina tabaola feien els xiquets al pati de l'escola!",
    castella: "Barullo / Escándalo",
    nota: ""
  },
  {
    paraula: "Rampell",
    categoria: "Substantiu",
    definicio: "Impuls sobtat i passatger que fa actuar a algú sense reflexió prèvia.",
    exemple: "Li va agafar un rampell i va agarrar el cotxe per anar-se'n a la platja.",
    castella: "Arrebato / Venada",
    nota: ""
  },
  {
    paraula: "Esvaró",
    categoria: "Substantiu",
    definicio: "Relliscada sobtada que fa perdre l'equilibri, generalment provocada per un terra humit o lliscant.",
    exemple: "Vaig pegar un esvaró amb una pell de plàtan i quasi caic a terra.",
    castella: "Resbalón",
    nota: "De 'esvarar' (resbalar)"
  },
  {
    paraula: "Morrut",
    categoria: "Adjectiu",
    definicio: "Que està enfadat, disgustat o de mal geni i ho manifesta amb la cara tibant i sense voler parlar.",
    exemple: "No et poses morrut per esta tonteria i vine a dinar.",
    castella: "Enfadado / Enmorrado",
    nota: ""
  },
  {
    paraula: "Petarrell",
    categoria: "Substantiu",
    definicio: "So sec i esclatant que fa una espurna de foc, un coet menut o la llenya quan crema.",
    exemple: "La foguera feia petarrells en cremar la fusta de pi.",
    castella: "Chasquido / Chisporroteo",
    nota: ""
  },
  {
    paraula: "Escalipatxo",
    categoria: "Substantiu",
    definicio: "Gripau gros de terra, especialment quan té un aspecte rabassut i aspre.",
    exemple: "A la vora de la séquia vam vore un escalipatxo amagat entre les canyes.",
    castella: "Sapo grande",
    nota: ""
  },
  {
    paraula: "Empastre",
    categoria: "Substantiu",
    definicio: "Feina mal feta, desordenada o bruta que crea un gran destrellat o problema.",
    exemple: "Menut empastre has fet pintant la paret amb eixe pinzell!",
    castella: "Chapuza / Desastre",
    nota: "Molt típic en frases com 'quin empastre!'"
  },
  {
    paraula: "Meló d'Alger",
    categoria: "Substantiu",
    definicio: "Fruit gros i arredonit, verd fosc per fora i roig brillant per dins, molt sucós i dolç, amb llavors negres.",
    exemple: "A l'estiu no hi ha res més fresquet que una bona tallada de meló d'Alger.",
    castella: "Sandía",
    nota: "Denominació històrica i autèntica valenciana"
  },
  {
    paraula: "Figa de pala",
    categoria: "Substantiu",
    definicio: "Fruit dolç i carnós, recobert de pues xicotetes, propi de la figuera de pala o palera.",
    exemple: "Ves amb compte en collir les figues de pala, que les punxes són molt traïdores.",
    castella: "Higo chumbo",
    nota: ""
  },
  {
    paraula: "Xitxarra",
    categoria: "Substantiu",
    definicio: "Insecte de cos robust que a l'estiu emet un cant característic, persistent i agut durant les hores més caloroses del dia.",
    exemple: "Al migdia només se senten les xitxarres als camps de tarongers.",
    castella: "Cigarra / Chicharra",
    nota: ""
  },
  {
    paraula: "Empegueir-se",
    categoria: "Verb",
    definicio: "Sentir vergonya o pudor davant d'altres persones en una situació incòmoda.",
    exemple: "La xiqueta es va empegueir quan tothom li va aplaudir.",
    castella: "Avergonzarse / Sentir vergüenza",
    nota: "Molt arrelat a les comarques centrals i del sud"
  },
  {
    paraula: "Espantall",
    categoria: "Substantiu",
    definicio: "Figura o maniquí amb forma humana que es col·loca als bancals sembrats per a fer por als pardals i evitar que es mengen la collita.",
    exemple: "Han posat un espantall amb un barret de palla al mig de l'hort.",
    castella: "Espantapájaros",
    nota: ""
  },
  {
    paraula: "Farnaca",
    categoria: "Substantiu",
    definicio: "Cria de la llebre o del conill salvatge mentre encara és menuda i de llet.",
    exemple: "Vam trobar un cau amb tres farnaques entre els matolls.",
    castella: "Lebrato / Gazapo",
    nota: "Paraula tradicional de l'àmbit rural"
  },
  {
    paraula: "Engatussar",
    categoria: "Verb",
    definicio: "Enganyar o convéncer algú amb compliments afectuosos, manyagueries o promeses enganyoses.",
    exemple: "L'ha engatussat amb paraules boniques per aconseguir el que volia.",
    castella: "Embaucar / Camelar",
    nota: ""
  },
  {
    paraula: "Gargamella",
    categoria: "Substantiu",
    definicio: "Part interior del coll o gola per on passen el menjar i la respiració.",
    exemple: "Tinc la gargamella seca de tant de parlar.",
    castella: "Garganta / Gaznate",
    nota: ""
  },
  {
    paraula: "Esclafit",
    categoria: "Substantiu",
    definicio: "So brusc, eixordador i sobtat com el que fa un tro, una mascletà o una cosa que es trenca de sobte.",
    exemple: "Quin esclafit que ha fet el tro, ha tremolat tota la casa!",
    castella: "Estallido / Chasquido fuerte",
    nota: "Molt lligat a la cultura de la pólvora valenciana"
  },
  {
    paraula: "Esquella",
    categoria: "Substantiu",
    definicio: "Campaneta de metall o bronze que es penja al coll de les ovelles o bous per a poder sentir on pasturen.",
    exemple: "Se sentia el dring de les esquelles del ramat baixant per la muntanya.",
    castella: "Cencerro / Esquila",
    nota: ""
  },
  {
    paraula: "Farinetes",
    categoria: "Substantiu",
    definicio: "Plat tradicional i popular fet amb farina cuita en aigua o brou fins a aconseguir una pasta suau i calenta.",
    exemple: "Antigament per sopar a l'hivern feien unes bones farinetes.",
    castella: "Gachas",
    nota: "Recepta tradicional dels llauradors valencians"
  },
  {
    paraula: "Pastanaga",
    categoria: "Substantiu",
    definicio: "Arrel vegetal mengívola, allargada, cònica i de color ataronjat intens, rica en vitamines.",
    exemple: "Posa una bona pastanaga al caldo per a donar-li dolçor.",
    castella: "Zanahoria",
    nota: ""
  },
  {
    paraula: "Glaçó",
    categoria: "Substantiu",
    definicio: "Tros menut de gel de forma cúbica o arredonida que s'afig a les begudes per a refredar-les ràpidament.",
    exemple: "Posa-li un parell de glaçons al café del temps.",
    castella: "Cubito de hielo",
    nota: "De 'glaç' (gel)"
  },
  {
    paraula: "Ulleres",
    categoria: "Substantiu",
    definicio: "Instrument òptic format per dues lents muntades en una armadura que es recolza al nas i a les orelles per a corregir defectes de visió o protegir els ulls del sol.",
    exemple: "No trobe les ulleres de sol i en este carrer fa molta claror.",
    castella: "Gafas",
    nota: "De 'ull' (ojo)"
  },
  {
    paraula: "Forqueta",
    categoria: "Substantiu",
    definicio: "Eina o cobert de taula amb mànec i tres o quatre pues que serveix per a punxar i portar el menjar a la boca o subjectar-lo en tallar-lo.",
    exemple: "Posa les forquetes a l'esquerra del plat per a parar la taula.",
    castella: "Tenedor",
    nota: "Del llatí 'furca' (forca)"
  }
];

// Exportem per a ús global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PARAULES;
}
