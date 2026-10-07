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
     "Kokatzeko: argudio batek <strong>premisak</strong> ditu (abiapuntua) eta <strong>ondorio</strong> bat (helmuga). Baliozkotasunak haien arteko harremanaz galdetzen du.",
     "Harreman horrek <em>arrazoibidea</em> bera epaitzen uzten digu, gertaeretatik aparte: premisetatik ondoriora egiten den jauzia ondo emanda dagoen esaten digu.",
     "Horregatik <em>forma</em>ren kontua da, ez edukiarena: ez du begiratzen premisak egiazkoak diren, baizik eta, onartuta, ondorioak ere egiazkoa izan beharko lukeen.",
     "Argudio baliozko batean <strong>ezin da gertatu</strong> premisak egiazkoak izatea eta ondorioa faltsua izatea: ondorioa nahitaez ateratzen da haietatik, egiazkoak izan nahiz ez."
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
     "Gogoratu gaiaren bereizketa: baliozkotasunak <em>forma</em> begiratzen du; egiak, berriz, premisek gauzak nolakoak diren ondo deskribatzen duten. Bi gauza desberdin dira.",
     "Horregatik baliozkotasuna bakarrik ez da nahikoa: premisetatik ondoriorako jauzia bermatzen du, baina ez premisa egiazkoetatik abiatu garenik.",
     "Ondorioa <em>bermatzeko</em> bi gauzak batera behar dira: argudioa baliozkoa izatea eta bere premisa guztiak egiazkoak izatea. Horrek izen berezi bat dauka.",
     "Irudikatu makina bat bezala: premisetatik egia sartzen bada eta forma baliozkoa bada, ondoriotik egia ateratzen da; zerbait faltsua sartzen bada, jada ez du ezer bermatzen. Baliozkotasuna eta premisa egiazkoak biltzen dituen argudioari <strong>sendoa</strong> deitzen zaio."
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
  "lede": "Zoriontasunaren eta erdibidearen etika. Eskatu behar dituzun pistak bakarrik.",
  "ciclos": [
   {
    "fase": "1. fasea · Berreskuratzea",
    "etiqueta": "Hasierako galdera",
    "pregunta": "Zer da bertutea Aristotelesentzat?",
    "intro": [
     "Pentsatu pertsona ausart batean. Zerk bereizten du koldar batengandik… eta ausarkeriaz jokatzen duen batengandik?"
    ],
    "pistas": [
     "Kokatzeko: giza bizitzaren helburua, Aristotelesentzat, zoriontasuna da (<em>eudaimonía</em>); ez plazer-une bat, baizik eta oso-osoan ondo bizitako bizitza.",
     "Bizitza ondo lortu horretara <em>bertutea</em> garatuz iristen da; eta bertutea ez da jaiotzetik datorren dohain bat, ikasten den zerbait baizik.",
     "Nolakoa da bertute hori? Ez datza nork bere burua hestutzean, ezta arauei obeditzean ere: ezaugarri bakoitzean <em>gabeziazko</em> bizio bat eta <em>gehiegizko</em> beste bat daude, eta asmatzea ez pasatzea eta ez gutxiegi geratzea da.",
     "Bertutea bi mutur horien arteko <strong>erdibidea</strong> da, arrazoiak seinalatua eta ohiturak finkatua: ez gutxiegi ez gehiegi, baizik eta neurri egokia."
    ],
    "comprobacion": {
     "pregunta": "Definizio hauetatik, zein dago bertute aristotelikotik hurbilen?",
     "opciones": [
      [
       "Bi muturren arteko erdibidea aukeratzeko ohitura, arrazoiak gidatua.",
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
     "ok": "Ondo: ohitura, erdibidea eta arrazoia dira hiru gakoak.",
     "mal": "Oraindik ez."
    },
    "rescate": [
     {
      "boton": "Adibideak ikusi behar ditut",
      "etiqueta": "Adibideak",
      "titulo": "Gabezia, erdibidea eta gehiegikeria",
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
       "pregunta": "Zein da zekenkeriaren eta xahutzearen arteko erdibidea?",
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
         "Erdibidea ez da kontu matematiko bat: kasu bakoitzean egokia dena da."
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
       "<strong>Bertutea</strong> (<em>areté</em>) bi bizioren arteko erdibidea aukeratzeko joera egonkorra da: bizio bat gabeziaz eta bestea gehiegikeriaz.",
       "Erdibideko hori ez da matematikoa: <strong>arrazoimen praktikoak</strong> (zuhurtziak) zehazten du egoera bakoitzean.",
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
     "Kokatzeko: egiten dugun guztiak helmugaren bat bilatzen du, eta zoriontasuna <em>azken helburua</em> da, bere buruarengatik nahi duguna eta ez beste zerbaitetarako bitarteko gisa.",
     "Horrek galdera aldatzen du: ez da kontua bertutetsua izatea zoriontasuna izeneko sari bat aparte <em>irabazteko</em>, baizik eta zoriontasun hori zertan datzan ikustea.",
     "Nola erantzuten zaio? Izaki bakoitzak berea betetzen du bere eginkizun propioa ondo betetzen duenean; gizakiarena arrazoiaren arabera bizitzea da, eta horrela bizitzea bertutez bizitzea da.",
     "Horregatik bertutea ez da zoriontasunerako bidea, baizik eta zoriontasuna bera martxan: zoriontsu izatea bertutez bizitzean <strong>datza</strong>, ez da gero iristen den sari bat."
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
    "Bertutea bi bizioren arteko erdibidea aukeratzeko ohitura da, arrazoimen praktikoak gidatua. Horrela bizitzea da zoriontasuna: bere osotasunean ondo betetako bizitza.",
    "Jarraitzeko: alderatu Epikurorekin (plazera minik eza gisa) eta Kantekin (betebeharra)."
   ]
  }
 },
 {
  "id": "fil-contrato",
  "subject": "fil",
  "tema": "6. gaia · Gizarteko bizitza",
  "unidad": "fil-t6",
  "materia": "Filosofia 1. · Politika",
  "titulo": "Zer da gizarte-kontratua?",
  "lede": "Zergatik obeditzen diogu Estatuari? Eskatu behar dituzun pistak bakarrik.",
  "ciclos": [
   {
    "fase": "1. fasea · Berreskuratzea",
    "etiqueta": "Hasierako galdera",
    "pregunta": "Zer da gizarte-kontratua?",
    "intro": [
     "Imajinatu ez dagoela inolako gobernurik, ez legerik, ez poliziarik. Zergatik onartuko genuke norbaitek agintzea?"
    ],
    "pistas": [
     "Kokatzeko: kontraktualistek ez dute Estatua gauza natural edo betiko gisa ikusten, baizik eta <em>artifizio</em> gisa, gizakiok fabrikatu dugun zerbait.",
     "Horrek galdera aldatzen du: guk egin badugu, bere boterea ez da besterik gabe agintzen; obeditzen dutenen aurrean justifikatu behar da.",
     "Nola justifikatzen dute? Ez historiako egun batean sinatutako dokumentu bati deituz, baizik eta botere politikorik gabeko bizitza nolakoa litzatekeen irudikatuz (<em>naturazko egoera</em>) eta handik ateratzeko <strong>akordio</strong> bat.",
     "Gizarte-kontratua irudikatutako itun hori da: denok ados jarriko bagina bezala, denon artean, gero agintzen digun boterea sortzeko."
    ],
    "comprobacion": {
     "pregunta": "Zer da gizarte-kontratua?",
     "opciones": [
      [
       "Pertsonek naturazko egoeratik ateratzeko botere politikoa sortzen duten akordio imajinatua.",
       true
      ],
      [
       "Historiako data jakin batean sinatutako dokumentu bat.",
       false,
       "Ez da gertaera historiko bat: boterea zergatik den legitimoa pentsatzeko hipotesi bat da."
      ],
      [
       "Enpresen eta langileen arteko lan-kontratu bat.",
       false,
       "Hemen «kontratua» Estatuaren jatorriari dagokio, ez lan-akordio bati."
      ],
      [
       "Boterea Jainkoarengandik datorrela dioen ideia.",
       false,
       "Justu kontrakoa: kontratuak giza akordioan oinarritzen du boterea."
      ]
     ],
     "ok": "Ondo. Botere politikoa akordio batetik sortzen da, ez naturatik ezta Jainkoarengandik ere.",
     "mal": "Oraindik ez."
    },
    "rescate": [
     {
      "boton": "Azalpen bat behar dut",
      "etiqueta": "Teoriaren piezak",
      "titulo": "Naturazko egoera, ituna eta Estatua",
      "definicion": [
       "<strong>Naturazko egoera</strong>: nolakoa litzatekeen giza bizitza botere politikorik gabe.",
       "<strong>Ituna</strong>: egoera horretatik ateratzeko akordioa; zerbait lagatzen da (boterea, eskubideak) zerbaiten truke (segurtasuna, babesa, askatasuna).",
       "<strong>Estatua</strong>: itunetik sortzen den botere politikoa; legitimoa da adostasunetik sortzen delako."
      ],
      "parrafos": [
       "Kontuz: inork ez du uste hau benetan gertatu zenik. Boterearen oinarriak pentsatzeko hipotesi bat da."
      ],
      "comprobacion": {
       "etiqueta": "Egiaztapena",
       "pregunta": "Zergatik imajinatzen dute kontraktualistek naturazko egoera bat?",
       "opciones": [
        [
         "Hartatik ateratzea eta Estatua sortzea zergatik komeni den justifikatzeko.",
         true
        ],
        [
         "Historiaurrean bere horretan existitu zela uste dutelako.",
         false,
         "Ez da gertaera historiko bat, pentsamendu-esperimentu bat baizik."
        ],
        [
         "Legerik gabe bizi gaitezen defendatzeko.",
         false,
         "Alderantziz: botere politiko bat zergatik behar dugun erakusteko balio du."
        ],
        [
         "Animalien bizitza aztertzeko.",
         false,
         "Gobernurik gabeko gizakiez ari da, ez biologiaz."
        ]
       ],
       "ok": "Zuzen. Naturazko egoera argudioaren abiapuntua da.",
       "mal": "Irakurri berriro.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Definizioa",
      "titulo": "Kontratu soziala",
      "definicion": [
       "<strong>Gizarte-kontratua</strong> akordio hipotetikoa da, gizakiek botere politikoa sortzeko egiten dutena.",
       "Horrela, Estatua <strong>artifizio</strong> bat da: haren legitimitatea ez dator naturatik ezta Jainkoarengandik ere, osatzen dutenen <strong>adostasunetik</strong> baizik.",
       "Egile bakoitzak naturazko egoera ezberdin bat imajinatzen du, eta horregatik Estatu ezberdin batera iristen da."
      ],
      "comprobacion": {
       "boton": "Ulermena egiaztatu",
       "etiqueta": "Azken egiaztapena",
       "pregunta": "Kontraktualismoaren arabera, nondik dator Estatuaren legitimitatea?",
       "opciones": [
        [
         "Osatzen dutenen adostasunetik.",
         true
        ],
        [
         "Gobernatzen duenaren indarretik.",
         false,
         "Indarrak ez du legitimitaterik ematen: kontratuak boterea justifikatu nahi du."
        ],
        [
         "Jainkoaren borondatetik.",
         false,
         "Hori jainkozko zuzenbidearen teoria da, kontraktualismoak ordezkatzen duena."
        ],
        [
         "Tradiziotik: beti izan da horrela.",
         false,
         "Zerbait zaharra izateak ez du legitimo bihurtzen."
        ]
       ],
       "ok": "Zuzen: boterea legitimoa da hala adostu dugulako.",
       "mal": "Oraindik ez."
      }
     }
    ]
   },
   {
    "fase": "2. fasea · Sakontzea",
    "etiqueta": "Galdera berria",
    "pregunta": "Zergatik iristen dira Hobbes eta Locke hain Estatu ezberdinetara?",
    "intro": [
     "Biak dira kontraktualistak, baina Hobbesek botere absolutua defendatzen du eta Lockek botere mugatua. Gakoa abiapuntua nola imajinatzen duten da."
    ],
    "pistas": [
     "Kokatzeko: biak irudikatutako naturazko egoera batetik eta handik ateratzeko itun batetik abiatzen dira. Aldea ez dago herrialdean, ezta garaian ere, baizik eta abiapuntu horretan.",
     "Bilatzen duzuna palanka bat da: Estaturik gabeko bizitza zenbat eta okerrago margotu, orduan eta botere gehiago lagatzeko prest gaude hartatik ihes egiteko.",
     "Hala, abiapuntua arrisku jasanezin gisa irudikatzen duenak botere <em>guztia</em> ematea justifikatzen du; jasangarri baina ez-seguru gisa irudikatzen duenak zati bat bakarrik lagatzea eta eskubideak gordetzea justifikatzen du.",
     "Horregatik itun beretik Estatu kontrajarriak ateratzen dira: botere absolutu bat beldurrak dena tindatzen badu, botere mugatu bat konfiantzazko epaile bat bakarrik falta bada."
    ],
    "comprobacion": {
     "pregunta": "Zerk azaltzen du hobekien Hobbesen eta Lockeren arteko aldea?",
     "opciones": [
      [
       "Naturazko egoera ezberdinak imajinatzen dituzte, eta horregatik gauza ezberdinak ituntzen dituzte.",
       true
      ],
      [
       "Hobbes ez da kontraktualista.",
       false,
       "Bai, hala da: Leviatana itun batetik sortzen da."
      ],
      [
       "Lockek monarkia absolutua nahiago du.",
       false,
       "Alderantziz da: Lockek botere mugatua eta botere-banaketa defendatzen ditu."
      ],
      [
       "Herrialde ezberdinetan bizi izan ziren.",
       false,
       "Testuinguruak eragina du, baina arrazoi filosofikoa naturazko egoerari buruz duten ideian dago."
      ]
     ],
     "ok": "Hala da. Abiapuntuak erabakitzen du Estatu mota.",
     "mal": "Ez zehazki."
    },
    "rescate": [
     {
      "boton": "Taula erakutsi",
      "etiqueta": "Hiru kontraktualista",
      "titulo": "Naturazko egoeratik Estatura",
      "definicion": [
       "<strong>Hobbes</strong>: «denak denen aurkako gerra» («gizakia otso da gizakiarentzat») → beldurragatik, denek beren boterea subirano bati lagatzen diote → monarkia absolutua (Leviatana).",
       "<strong>Locke</strong>: bake ez-segurua, eskubide naturalekin (bizitza, askatasuna, jabetza) → itun mugatua → Estatu liberala, botere-banaketarekin eta tiranoaren aurka matxinatzeko eskubidearekin.",
       "<strong>Rousseau</strong>: «basati ona» aske eta berdin da; gizarteak usteltzen du → itun bat, non bakoitza borondate orokorraren mende jartzen den → demokrazia."
      ],
      "comprobacion": {
       "boton": "Egiaztatuz amaitu",
       "pregunta": "Zein egilek defendatzen du gobernu tiraniko baten aurka matxinatzeko eskubidea?",
       "opciones": [
        [
         "Locke.",
         true
        ],
        [
         "Hobbes.",
         false,
         "Hobbesek botere absolutua ematen dio subiranoari, hain zuzen ere kaosa saihesteko."
        ],
        [
         "Haietako batek ere ez.",
         false,
         "Batek bai: irakurri berriro Estatu liberalaren errenkada."
        ],
        [
         "Kontraktualista guztiek berdin.",
         false,
         "Ez: itunean zer laga den araberakoa da."
        ]
       ],
       "ok": "Zuzen: gobernuak ituna hausten badu, herriak bere adostasuna ken diezaioke.",
       "mal": "Irakurri berriro taula."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Ulertzen duzu dagoeneko gizarte-kontratua",
   "parrafos": [
    "Gizarte-kontratua Estatua sortzeko akordio hipotetikoa da: haren legitimitatea adostasunetik dator. Naturazko egoera nola imajinatzen den, itunak Estatu absolutua (Hobbes), liberala (Locke) edo demokratikoa (Rousseau) ematen du.",
    "Pentsatzeko: zer lagako zenuke zuk seguru bizitzeko? Ba al dago inoiz lagako ez zenukeen ezer?"
   ]
  }
 }
];
