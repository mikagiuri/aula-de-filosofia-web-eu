// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/pistas_uhs.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const PISTAS = [
 {
  "id": "fil-validez",
  "subject": "fil",
  "tema": "4. gaia · Logika eta argudiaketa",
  "unidad": "fil-t4",
  "materia": "Filosofia 1. · Logika",
  "titulo": "Zerk egiten du argudio bat baliozko?",
  "lede": "Gaiaren funtsezko bereizketa: baliozkotasuna eta egia. Eskatu behar dituzun pistak bakarrik.",
  "ciclos": [
   {
    "fase": "1. fasea · Berreskuratzea",
    "etiqueta": "Hasierako galdera",
    "pregunta": "Zer esan nahi du argudio bat baliozkoa izateak?",
    "intro": [
     "Saiatu azaltzen laguntza eskatu aurretik. Pentsatzen hasteko pista bat: baliozkotasuna argudioak <em>zer</em> dioen ala <em>nola</em> arrazoitzen duen araberakoa da?"
    ],
    "pistas": [
     "Baliozkotasuna argudioaren <em>formaren</em> ezaugarria da, ez bere edukiarena.",
     "Argudio batek premisak eta ondorio bat ditu. Galdera da zer erlazio dagoen haien artean.",
     "Argudioa baliozkoa bada, <strong>ezin da gertatu</strong> premisak egiazkoak izatea eta ondorioa faltsua.",
     "Baliozkoa da ondorioa premisetatik nahitaez ateratzen denean, premisak egiazkoak izan ala ez."
    ],
    "comprobacion": {
     "pregunta": "«Argudio baliozko»-aren definizio hauetatik zein da zuzena?",
     "opciones": [
      [
       "Ondorioa bere premisetatik nahitaez ateratzen den argudioa.",
       true
      ],
      [
       "Premisa guztiak egiazkoak dituen argudioa.",
       false,
       "Hori premisen egiaz hitz egitea da, ez baliozkotasunaz: baliozkotasunak forma begiratzen du."
      ],
      [
       "Ondorio egiazkoa duen argudioa.",
       false,
       "Ondorio bat kasualitatez izan daiteke egiazkoa, premisetatik atera ez arren."
      ],
      [
       "Entzuten dutenen gehiengoa konbentzitzen duen argudioa.",
       false,
       "Konbentzitzea ez da ondo arrazoitzea: faltsukeriek ere konbentzitzen dute."
      ]
     ],
     "ok": "Ondo. Baliozkotasuna premisen eta ondorioaren arteko erlazioaren araberakoa da, ez egiazkoak izatearen araberakoa.",
     "mal": "Oraindik ez."
    },
    "rescate": [
     {
      "boton": "Adibide bat ikusi behar dut",
      "etiqueta": "Adibidea",
      "titulo": "Premisa faltsu bat duen argudio baliozkoa",
      "definicion": [
       "1. premisa: Arrain guztiek hegan egiten dute.",
       "2. premisa: Izokina arraina da.",
       "Ondorioa: Beraz, izokinak hegan egiten du."
      ],
      "parrafos": [
       "Lehen premisa faltsua da, eta ondorioa ere bai. Baina erreparatu: arrain guztiek hegan egingo <em>balute</em> eta izokina arraina balitz, izokinak hegan ez egitea posible litzateke? Hori da baliozkotasunaren galdera."
      ],
      "comprobacion": {
       "etiqueta": "Adibidearen egiaztapena",
       "pregunta": "Baliozkoa da izokinaren argudioa?",
       "opciones": [
        [
         "Bai: premisak egiazkoak balira, ondorioak ere egiazkoa izan beharko luke.",
         true
        ],
        [
         "Ez, lehen premisa faltsua delako.",
         false,
         "Premisa baten faltsutasunak ez dio baliozkotasunari eragiten: baliozkotasunak ondorioa ateratzen den bakarrik begiratzen du."
        ],
        [
         "Ez, ondorioa faltsua delako.",
         false,
         "Ondorio faltsu batek ez du argudioa baliogabe egiten, premisaren bat ere faltsua bada."
        ],
        [
         "Bakoitzaren iritziaren araberakoa da.",
         false,
         "Baliozkotasuna ez da iritzi kontua: arrazoiketaren forma begiratuz egiaztatzen da."
        ]
       ],
       "ok": "Zuzen. Baliozkoa da, ezer frogatzen ez badu ere, premisa faltsu batetik abiatzen baita.",
       "mal": "Begiratu berriro.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Definizioa eta azalpena",
      "titulo": "Baliozkotasuna eta egia",
      "definicion": [
       "<strong>Baliozkotasuna</strong> formaren ezaugarria da: argudio bat baliozkoa da ondorioa premisetatik zuzen ateratzen denean.",
       "<strong>Egia</strong> edukiaren ezaugarria da: premisek gauzak nolakoak diren deskribatzen dute ala ez.",
       "Elkarren independenteak dira: egon daitezke premisa faltsuak dituzten argudio baliozkoak, eta premisa egiazkoak dituzten argudio baliogabeak."
      ],
      "comprobacion": {
       "boton": "Ulermena egiaztatu",
       "etiqueta": "Azken egiaztapena",
       "pregunta": "Zeren araberakoa da argudio bat baliozkoa izatea?",
       "opciones": [
        [
         "Bere formaren araberakoa: ondorioa premisetatik ateratzearen araberakoa.",
         true
        ],
        [
         "Premisak egiazkoak izatearen araberakoa.",
         false,
         "Hori egia da, baliozkotasunarekiko independentea dena."
        ],
        [
         "Ondorioa gustatzearen araberakoa.",
         false,
         "Gustatzen zaigunak ez du arrazoiketaren forma aldatzen."
        ],
        [
         "Aditu batek esatearen araberakoa.",
         false,
         "Hori autoritateari dei egitea litzateke, ez arrazoiketa aztertzea."
        ]
       ],
       "ok": "Zuzen: baliozkotasuna forma kontua da.",
       "mal": "Oraindik ez."
      }
     }
    ]
   },
   {
    "fase": "2. fasea · Sakontzea",
    "etiqueta": "Galdera berria",
    "pregunta": "Nahikoa da argudio bat baliozkoa izatea bere ondorioa egiazkoa izateko?",
    "intro": [
     "Badakizu zer den baliozkotasuna. Orain pentsatu izokinaren argudioan: baliozkoa zen… eta bere ondorioa faltsua. Zer falta zaio argudio bati bere ondorioa <em>bermatzeko</em>?"
    ],
    "pistas": [
     "Argudio baliozko batek makina batek bezala funtzionatzen du: premisetatik egia sartzen bada, ondoriotik egia ateratzen da.",
     "Baina zerbait faltsua sartzen bada, makinak ez du ezer bermatzen.",
     "Badago izen bat baliozkoa den <em>eta gainera</em> premisa guztiak egiazkoak dituen argudioarentzat.",
     "Argudio horri <strong>sendoa</strong> deritzo: ondorioa egiazkoa dela bermatzen duen bakarra da."
    ],
    "comprobacion": {
     "pregunta": "Zein argudiok bermatzen du bere ondorioa egiazkoa dela?",
     "opciones": [
      [
       "Baliozkoa dena eta premisa guztiak egiazkoak dituena (sendoa).",
       true
      ],
      [
       "Edozein argudio baliozkok.",
       false,
       "Ez: premisa faltsu bat duen argudio baliozko batek ondorio faltsu batera eraman dezake, izokinarenak bezala."
      ],
      [
       "Premisa egiazkoak dituenak, baliogabea izan arren.",
       false,
       "Ez: ondorioa ateratzen ez bada, premisa egiazkoek ez dute bermatzen."
      ],
      [
       "Premisa gehien dituenak.",
       false,
       "Premisa kopuruak ez du ezer bermatzen: forma eta egia dira garrantzitsuak."
      ]
     ],
     "ok": "Hala da. Baliozkotasuna gehi premisa egiazkoak: argudio sendoa.",
     "mal": "Ez zehazki."
    },
    "rescate": [
     {
      "boton": "Taula erakutsi",
      "etiqueta": "Baliozkotasunaren eta egiaren taula",
      "titulo": "Lau kasu posible",
      "definicion": [
       "<strong>Baliozkoa + premisa egiazkoak</strong> → sendoa: ondorioa bermatuta geratzen da.",
       "<strong>Baliogabea + premisa egiazkoak</strong> → ondorioa ez da bermatuta geratzen.",
       "<strong>Baliozkoa + premisa faltsuak</strong> → forman zuzena, baina ez du ezer frogatzen.",
       "<strong>Baliogabea + premisa faltsuak</strong> → bi aldiz hutsegitea."
      ],
      "comprobacion": {
       "boton": "Egiaztatuz amaitu",
       "pregunta": "Argudio baliozko batek ondorio faltsua du. Zer ziurta dezakegu?",
       "opciones": [
        [
         "Gutxienez bere premisetako bat faltsua dela.",
         true
        ],
        [
         "Bere premisa guztiak egiazkoak direla.",
         false,
         "Guztiak egiazkoak balira, baliozkoa denez, ondorioa egiazkoa izango litzateke."
        ],
        [
         "Benetan baliogabea dela.",
         false,
         "Erabat baliozkoa izan daiteke: hutsegitea premisaren batean dago."
        ],
        [
         "Ezer ere ez.",
         false,
         "Badugu zerbait ziurtatzerik: begiratu taulako «baliozkoa + premisa faltsuak» lerroa."
        ]
       ],
       "ok": "Zuzen: baliozkoa bada eta ondorioa faltsua, premisaren batek faltsua izan behar du.",
       "mal": "Irakurri berriro taula."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Baliozkotasuna eta egia bereizten dituzu jada",
   "parrafos": [
    "Argudio bat baliozkoa da bere ondorioa premisetatik ateratzen denean; sendoa da, gainera, bere premisak egiazkoak direnean. Argudio sendoak bakarrik bermatzen du ondorioaren egia.",
    "Jarraitzeko: bilatu gaiko faltsukerien zerrendan baliozkoa izan gabe konbentzitzen duen argudio bat."
   ]
  }
 }
];
