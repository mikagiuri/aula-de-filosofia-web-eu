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
 },
 {
  "id": "fil-virtud",
  "subject": "fil",
  "tema": "5. gaia · Etikaren galderak",
  "unidad": "fil-t5",
  "materia": "Filosofia 1. · Etika",
  "titulo": "Zer da bertutea Aristotelesentzat?",
  "lede": "Zoriontasunaren eta termino erdikoaren etika. Eskatu behar dituzun pistak bakarrik.",
  "ciclos": [
   {
    "fase": "1. fasea · Berreskuratzea",
    "etiqueta": "Hasierako galdera",
    "pregunta": "Zer da bertutea Aristotelesentzat?",
    "intro": [
     "Pentsatu pertsona ausart batean. Zerk bereizten du koldar batengandik… eta ausarkeriaz jokatzen duen batengandik?"
    ],
    "pistas": [
     "Aristotelesentzat, giza bizitzaren helburua zoriontasuna da (<em>eudaimonia</em>): bere osotasunean ondo betetako bizitza.",
     "Zoriontasuna <em>bertutea</em> garatuz lortzen da, eta bertutea ez da dohain bat, ikasten den zerbait baizik.",
     "Ausardia bi bizioren artean dago: bata gabeziaz (koldarkeria) eta bestea gehiegikeriaz (ausarkeria).",
     "Bertutea bi muturren arteko <strong>termino erdikoa</strong> da, arrazoiak gidatua eta ohituraz eskuratua."
    ],
    "comprobacion": {
     "pregunta": "Definizio hauetatik, zein dago bertute aristotelikotik hurbilen?",
     "opciones": [
      [
       "Bi muturren arteko termino erdikoa aukeratzeko ohitura, arrazoiak gidatua.",
       true
      ],
      [
       "Jaiotzetik daukagun talentu bat.",
       false,
       "Aristotelesentzat bertutea praktikaren bidez eskuratzen da: inor ez da bertutetsu jaiotzen."
      ],
      [
       "Beti nahi duguna ez bezalakoa egitea.",
       false,
       "Ez da norbere burua zapaltzea, neurri egokia aurkitzea baizik."
      ],
      [
       "Hiriko arauak betetzea, direnak direla.",
       false,
       "Bertutea arrazoimen praktikoak gidatzen du, ez obedientzia hutsak."
      ]
     ],
     "ok": "Ondo: ohitura, termino erdikoa eta arrazoia dira hiru gakoak.",
     "mal": "Oraindik ez."
    },
    "rescate": [
     {
      "boton": "Adibideak ikusi behar ditut",
      "etiqueta": "Adibideak",
      "titulo": "Gabezia, termino erdikoa eta gehiegikeria",
      "definicion": [
       "Koldarkeria ← <strong>ausardia</strong> → ausarkeria",
       "Zekenkeria ← <strong>eskuzabaltasuna</strong> → xahutzea",
       "Sentikortasunik eza ← <strong>neurritasuna</strong> → neurrigabekeria"
      ],
      "parrafos": [
       "Kontuan hartu bertutea ez dela erdi-erdia: egoera bakoitzean egokia dena da, pertsona zuhur batek erabakiko lukeen bezala."
      ],
      "comprobacion": {
       "etiqueta": "Adibideen egiaztapena",
       "pregunta": "Zein da zekenkeriaren eta xahutzearen arteko termino erdikoa?",
       "opciones": [
        [
         "Eskuzabaltasuna.",
         true
        ],
        [
         "Aberastasuna.",
         false,
         "Aberastasuna ez da bertute bat, kanpoko on bat baizik."
        ],
        [
         "Daukazunaren erdia zehatz-mehatz gastatzea.",
         false,
         "Termino erdikoa ez da kontu matematiko bat: kasu bakoitzean egokia dena da."
        ],
        [
         "Inoiz ez gastatzea.",
         false,
         "Hori zekenkeriaren muturra litzateke."
        ]
       ],
       "ok": "Zuzen. Ez gutxiegi eman, ez gehiegi: behar den bezala eman.",
       "mal": "Begiratu berriro taulari.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Definizioa eta azalpena",
      "titulo": "Bertute aristotelikoa",
      "definicion": [
       "<strong>Bertutea</strong> (<em>areté</em>) bi bizioren arteko termino erdikoa aukeratzeko joera egonkorra da: bizio bat gabeziaz eta bestea gehiegikeriaz.",
       "Termino erdiko hori ez da matematikoa: <strong>arrazoimen praktikoak</strong> (zuhurtziak) zehazten du egoera bakoitzean.",
       "<strong>Ohituraz</strong> eskuratzen da: ekintza ausartak eginez bihurtzen gara ausart. Eta bertutea praktikatzea da zoriontasunerako bidea."
      ],
      "comprobacion": {
       "boton": "Ulermena egiaztatu",
       "etiqueta": "Azken egiaztapena",
       "pregunta": "Nola bihurtzen da norbait bertutetsu, Aristotelesen arabera?",
       "opciones": [
        [
         "Ekintza bertutetsuak eginez, ohitura bihurtu arte.",
         true
        ],
        [
         "Etikari buruz asko irakurriz.",
         false,
         "Ausardia zer den jakitea ez da nahikoa: praktikatu egin behar da."
        ],
        [
         "Familia on batean jaioz.",
         false,
         "Bertutea ez da heredatzen: eskuratu egiten da."
        ],
        [
         "Beti plazerari jarraituz.",
         false,
         "Hori hedonismotik hurbilago dago, eta neurririk gabeko plazera bizio bat da."
        ]
       ],
       "ok": "Zuzen: bertutea praktikatuz ikasten da.",
       "mal": "Oraindik ez."
      }
     }
    ]
   },
   {
    "fase": "2. fasea · Sakontzea",
    "etiqueta": "Galdera berria",
    "pregunta": "Zer harreman dago bertutearen eta zoriontasunaren artean?",
    "intro": [
     "Badakizu zer den bertutea. Orain pentsatu: zertarako balio du bertutetsu izateak? Zoriontasuna geroago iristen den sari bat al da?"
    ],
    "pistas": [
     "Aristotelesentzat, egiten dugun guztiak helburu bat bilatzen du; zoriontasuna azken helburua da, berez bilatzen duguna.",
     "Zoriontasuna ez da plazer-une bat, ondo bizitako bizitza oso bat baizik.",
     "Izaki bakoitza zoriontsu da bere funtzio propioa ondo betetzen duenean. Gizakiaren funtzio propioa arrazoiaren arabera bizitzea da.",
     "Zoriontasuna bertutez bizitzean <strong>datza</strong>: ez da kanpoko sari bat, ondo betetako bizitza bera baizik."
    ],
    "comprobacion": {
     "pregunta": "Zer harreman dago bertutearen eta zoriontasunaren artean Aristotelesentzat?",
     "opciones": [
      [
       "Zoriontasuna bertutearen araberako bizitza batean datza.",
       true
      ],
      [
       "Bertutea heriotzaren ondoren saritzen den sakrifizio bat da.",
       false,
       "Aristotelesek bizitza honetako zoriontasunaz hitz egiten du, ez beste batean jasoko den sari batez."
      ],
      [
       "Ez dute harremanik: zoriontasuna zortearen menpe dago soilik.",
       false,
       "Zorteak eragina du, baina gakoa jarduera bertutetsua da."
      ],
      [
       "Zoriontasuna plazerak metatzea da.",
       false,
       "Hori plazerezko bizitza da, ez bere osotasunean ondo betetako bizitza."
      ]
     ],
     "ok": "Hala da. Zoriontsu izatea ondo bizitzea da, eta ondo bizitzea bertutez bizitzea.",
     "mal": "Ez zehazki."
    },
    "rescate": [
     {
      "boton": "Azalpena erakutsi",
      "etiqueta": "Zoriontasunaren etika",
      "titulo": "Ondo betetako bizitza",
      "definicion": [
       "Aristotelesen etika <strong>zoriontasunaren etika</strong> da (eudemonista): nola bizi bizitza ona galdetzen du.",
       "Zoriontasuna (<em>eudaimonia</em>) azken helburua da, eta gizakiaren funtzio propioa ondo betetzean datza: arrazoiaren arabera bizitzean.",
       "Horregatik, bertutea ez da zoriontasuna sari gisa lortzeko bitarteko bat: bertutez bizitzea <strong>da</strong> jada zoriontsu izatea, nahiz eta kanpoko onek ere laguntzen duten (osasuna, lagunak, baliabideak)."
      ],
      "comprobacion": {
       "boton": "Egiaztatuz amaitu",
       "pregunta": "Zergatik esaten da Aristotelesen etika eudemonista dela?",
       "opciones": [
        [
         "Zoriontasunaren inguruan biratzen delako, azken helburu gisa.",
         true
        ],
        [
         "Betebeharrean oinarritzen delako, betebeharragatik beragatik.",
         false,
         "Hori Kanten etika da, ez Aristotelesena."
        ],
        [
         "Ona dena gehiengoarentzako ondorioen arabera neurtzen duelako.",
         false,
         "Hori utilitarismoa da."
        ],
        [
         "Jainkoen aginduak betetzen dituelako.",
         false,
         "Aristotelesek giza arrazoian oinarritzen du etika."
        ]
       ],
       "ok": "Zuzen: <em>eudaimonia</em> zoriontasuna esan nahi du.",
       "mal": "Irakurri berriro azalpena."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Badakizu Aristotelesen etika",
   "parrafos": [
    "Bertutea bi bizioren arteko termino erdikoa aukeratzeko ohitura da, arrazoimen praktikoak gidatua. Horrela bizitzea da zoriontasuna: bere osotasunean ondo betetako bizitza.",
    "Jarraitzeko: alderatu Epikurorekin (plazera minik eza gisa) eta Kantekin (betebeharra)."
   ]
  }
 }
];
