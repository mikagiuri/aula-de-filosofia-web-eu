// Generado por web_i18n/i18n_rebuild.js (eu) a partir de web/js/esquemas_fil.js. No editar a mano: editar la memoria tm/eu.json y regenerar.
const ESQUEMAS_FIL = {
 "FIL-T1-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 1. gaia",
  "title": "Zer da filosofia?",
  "mermaid": "flowchart TD\n  center[\"ZER DA FILOSOFIA?\"]:::axis\n  origen[\"mitotik logosera\"]:::key\n  mito[\"mitoa: jainkoen bidezko azalpena\"]\n  logos[\"logosa: azalpen arrazionala\"]\n  carac[\"ezaugarriak\"]:::key\n  c1[\"arrazionala (arrazoiak ematen ditu)\"]\n  c2[\"kritikoa (ez du onartzen aztertu gabe)\"]\n  c3[\"erradikala (erroraino doa)\"]\n  c4[\"unibertsala (dena pentsa daiteke)\"]\n  saber[\"bigarren mailako jakintza: oinarriak galdegiten ditu\"]:::key\n  center -->|\"sortzen da\"| origen\n  origen --> mito\n  origen -->|\"igarotzen da\"| logos\n  center -->|\"jakintza bat da\"| carac\n  carac --> c1\n  carac --> c2\n  carac --> c3\n  carac --> c4\n  center -->|\"horregatik da\"| saber\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer jakintza mota da filosofia, eta zertan bereizten da besteetatik?",
   "raiz": "FILOSOFIA",
   "raiz_d": "Philía (maitasuna) + sophía (jakinduria): jakinduriarekiko maitasuna. Filosofatzen duenak ez du egia bere esku: desiratu eta bilatu egiten du.",
   "ramas": [
    {
     "rel": "honetatik sortzen da",
     "t": "Harridura",
     "a": "Platon, Aristoteles",
     "d": "Besteei begi-bistakoa iruditzen zaienaren aurrean harritzea; jakin-minarekin eta zalantzarekin batera.",
     "c": [
      {
       "rel": "hau onartuz hasten da",
       "t": "Norberaren ezjakintasuna",
       "a": "Sokrates",
       "d": "«Ez dakidala baino ez dakit»: ez dakidala jakitea da ikasteko lehen urratsa."
      }
     ]
    },
    {
     "rel": "urrats honekin sortzen da",
     "t": "Mitotik logosera",
     "k": true,
     "a": "Tales Miletokoa",
     "d": "Grezia, K.a. VI. mendea: jainkoei buruzko kontakizunetatik arrazoiak ematen dituzten azalpenetara.",
     "c": [
      {
       "rel": "atzean uzten du",
       "t": "Mitoa",
       "d": "Kontakizun tradizional eta dogmatikoa: dena jainkoen borondate kapritxosoaren ondorioz gertatzen da."
      },
      {
       "rel": "bere egiten du",
       "t": "Logosa",
       "d": "Kausa naturalak (arkhe) bilatzen ditu, edonork eztabaida ditzakeen argudioekin."
      }
     ]
    },
    {
     "rel": "honela bereizten da",
     "t": "Azken kausen jakintza",
     "k": true,
     "d": "Jakintza arruntaren (berezkoa) eta zientifikoaren (partziala) aldean, errealitatea bere osotasunean ulertu nahi du.",
     "c": [
      {
       "rel": "bere metodoagatik",
       "t": "Arrazionala eta kritikoa",
       "k": true,
       "d": "Argudioetan oinarritzen da, ez autoritatean, eta ez du ezer onartzen «besterik gabe», ezta norberarena ere."
      },
      {
       "rel": "bere irismenagatik",
       "t": "Erradikala eta unibertsala",
       "d": "Arazoen errora joaten da eta errealitate osoaz arduratzen da."
      },
      {
       "rel": "bere helburuagatik",
       "t": "Praktikoa",
       "d": "Nola bizi ere pentsatzen du: hortik sortzen dira etika eta filosofia politikoa."
      }
     ]
    },
    {
     "rel": "gaur egun honetarako balio du",
     "t": "Haren funtzioak",
     "c": [
      {
       "rel": "irakasten du",
       "t": "Funtzio kritikoa",
       "d": "Norberak pentsatzea eta manipulazioaz eta propagandaz babestea."
      },
      {
       "rel": "eskaintzen du",
       "t": "Orientazioa eta zentzua",
       "d": "Nola bizi erabakitzen eta nor garen ulertzen laguntzen du."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Funtzio kritikoa",
     "rel": "honen jarrera praktikan jartzen du",
     "a": "Arrazionala eta kritikoa"
    }
   ],
   "idea": "«Sapere aude (ausartu jakitera): izan ezazu zeure arrazoiaz baliatzeko adorea» (Kant). Filosofatzea egia argudioekin bilatzea da, harridura galdu gabe."
  }
 },
 "FIL-T1-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 1. gaia",
  "title": "Filosofiaren adarrak",
  "mermaid": "flowchart TD\n  fil[\"FILOSOFIA\"]:::axis\n  q1[\"zer da errealitatea?\"]\n  met[\"Metafisika eta Ontologia\"]:::key\n  q2[\"zer ezagut dezakegu?\"]\n  epi[\"Epistemologia\"]:::key\n  q3[\"nola jokatu behar dugu?\"]\n  eti[\"Etika\"]:::key\n  q4[\"nola antolatu bizikidetza?\"]\n  pol[\"Filosofia politikoa\"]:::key\n  q5[\"zer dira edertasuna eta artea?\"]\n  est[\"Estetika\"]:::key\n  q6[\"nola arrazoitu zuzen?\"]\n  log[\"Logika\"]:::key\n  fil --> q1 --> met\n  fil --> q2 --> epi\n  fil --> q3 --> eti\n  fil --> q4 --> pol\n  fil --> q5 --> est\n  fil --> q6 --> log\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Filosofiaren adar bakoitzak zer galdera handiri erantzuten dio?",
   "raiz": "FILOSOFIAREN ADARRAK",
   "raiz_d": "Bere objektua errealitate osoa denez, filosofia diziplinatan banatzen da, eta bakoitza galdera mota batean zentratzen da.",
   "ramas": [
    {
     "rel": "zer dago eta zer dakigu?",
     "t": "Filosofia teorikoa",
     "k": true,
     "c": [
      {
       "rel": "zer da errealitatea?",
       "t": "Metafisika",
       "d": "Zer esan nahi duen «izateak», zer existitzen den eta zein diren gauzen azken propietateak."
      },
      {
       "rel": "zer ezagut dezakegu?",
       "t": "Ezagutzaren teoria",
       "d": "Epistemologia edo gnoseologia ere deitua: ezagutzaren jatorria eta mugak, eta zer den egia."
      },
      {
       "rel": "nola arrazoitu ondo?",
       "t": "Logika",
       "d": "Arrazoibideen forma aztertzen du, baliozkoak ez direnetatik bereizteko."
      }
     ]
    },
    {
     "rel": "nola bizi behar dugu?",
     "t": "Filosofia praktikoa",
     "k": true,
     "c": [
      {
       "rel": "nola jokatu behar dut?",
       "t": "Etika",
       "d": "Ongia eta gaizkia, eta arau moralen oinarria."
      },
      {
       "rel": "nola bizi elkarrekin?",
       "t": "Filosofia politikoa",
       "d": "Bizitza komunitatean: boterea, justizia eta gobernu-formak."
      }
     ]
    },
    {
     "rel": "zer gara eta zerk hunkitzen gaitu?",
     "t": "Gizakia eta haren esperientzia",
     "k": true,
     "c": [
      {
       "rel": "zer da gizakia?",
       "t": "Antropologia filosofikoa",
       "d": "Gu definitzen gaituena, alderdi biologiko, sozial eta kulturaletik begiratuta."
      },
      {
       "rel": "zer da ederra?",
       "t": "Estetika",
       "d": "Edertasuna eta artea, eta zertan oinarritzen diren ederrari, itsusiari edo sublimoari buruzko gure judizioak."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Antropologia filosofikoa",
     "rel": "zer garen galdetzen du, honen aurretik",
     "a": "Etika"
    }
   ],
   "idea": "Adar bakoitza galdera handi batetik sortzen da. Ikasturtean: antropologia (2. gaia), ezagutza (3), logika (4), etika (5), politika (6) eta estetika (7)."
  }
 },
 "FIL-T2-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 2. gaia",
  "title": "Natura eta kultura gizakiarengan",
  "mermaid": "flowchart TD\n  center[\"GIZAKIA\"]:::axis\n  bio[\"dimentsio biologikoa\"]:::key\n  hom[\"hominizazioa: gorputzaren eboluzioa\"]\n  ev[\"hominidoak, bipedismoa, eskua, entzefaloa\"]\n  cul[\"dimentsio kulturala\"]:::key\n  hum[\"humanizazioa: ikaskuntza soziala\"]\n  simb[\"animalia sinbolikoa: hizkuntza, teknika, kultura\"]\n  sintesis[\"natura eta kultura elkarlotu egiten dira\"]:::key\n  center --> bio\n  bio --> hom --> ev\n  center --> cul\n  cul --> hum --> simb\n  bio -->|\"hemen konbinatzen dira\"| sintesis\n  cul -->|\"hemen konbinatzen dira\"| sintesis\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Biologiaren ala kulturaren emaitza gara?",
   "raiz": "NATURA ETA KULTURA",
   "raiz_d": "Gizakia, aldi berean, eboluzio biologikoaren eta gizartean bizitzean ikasten duenaren emaitza da.",
   "ramas": [
    {
     "rel": "heredatu egiten da",
     "t": "Natura (biologikoa)",
     "k": true,
     "d": "Jaiotzean dakarguna: gorputza, garuna eta gaitasunak. Espezie osoak partekatzen du.",
     "c": [
      {
       "rel": "honen bidez azaltzen da",
       "t": "Eboluzioa",
       "a": "Darwin, Wallace",
       "d": "Espezieak hautespen naturalaren bidez aldatzen dira: hobekien egokitutakoek bizirik irauten dute eta gehiago ugaltzen dira."
      },
      {
       "rel": "gure espeziean",
       "t": "Hominizazioa",
       "k": true,
       "d": "Homo sapiens-era arteko prozesu biologikoa: ibilera bipedoa, entzefalizazioa, hatz lodi aurkagarria duen eskua."
      }
     ]
    },
    {
     "rel": "ikasi egiten da",
     "t": "Kultura (ikasia)",
     "k": true,
     "a": "Tylor",
     "d": "Gizarte bateko kide gisa eskuratzen diren ezagutzak, sinesmenak, morala eta ohiturak; herri batetik bestera aldatzen da.",
     "c": [
      {
       "rel": "gizaki egiten gaitu",
       "t": "Humanizazioa",
       "k": true,
       "d": "Guztiz gizaki izatera iristea suari, tresnei, nekazaritzari eta gizarte-antolaketari esker."
      },
      {
       "rel": "honen bidez transmititzen da",
       "t": "Sozializazioa",
       "d": "Familia, eskola, lagunak, hedabideak, hizkuntza: horrela eratzen ditugu identitate pertsonala eta kolektiboa."
      }
     ]
    },
    {
     "rel": "honetan gurutzatzen dira",
     "t": "Natura-kultura dialektika",
     "d": "Ez dira kontrajartzen: elkar behar dute. Bi gauzak gara aldi berean.",
     "c": [
      {
       "rel": "honela jaiotzen garelako",
       "t": "Biologikoki «amaitu gabe»",
       "d": "Sen murriztuekin eta eraikitzeko mundu ireki batekin: kultura «bigarren umetoki» bat da."
      },
      {
       "rel": "biak lotzen ditu",
       "t": "Hizkuntza",
       "d": "Bi prozesuen arteko gontza da: ikasitakoa belaunaldi batetik bestera transmititzea ahalbidetzen du."
      },
      {
       "rel": "eztabaida gainditzen du",
       "t": "Innatismoa ala anbientalismoa",
       "d": "Ez du heredatutakoak bakarrik erabakitzen, ezta ingurunetik ikasitakoak bakarrik ere."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Hominizazioa",
     "rel": "haren gainean eraikitzen da",
     "a": "Humanizazioa"
    }
   ],
   "idea": "Ez gara txinpantzetik jaitsi: arbaso komun bat dugu harekin. Biologiak posible egiten gaitu; kulturak amaitzen du gu gizaki bihurtzeko lana."
  }
 },
 "FIL-T2-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 2. gaia",
  "title": "Gogo-gorputz arazoa",
  "mermaid": "flowchart TD\n  q[\"GORPUTZA ETA GOGOA?\"]:::axis\n  dual[\"Dualismoa\"]:::key\n  d1[\"bi errealitate ezberdin: arima eta gorputza (Platon, Descartes)\"]\n  mon[\"Monismoa\"]:::key\n  m1[\"errealitate bakarra\"]\n  mat[\"materialismoa: dena materia da\"]\n  emer[\"emergentismoa: gogoa garunetik sortzen da\"]\n  q --> dual --> d1\n  q --> mon --> m1\n  m1 --> mat\n  m1 --> emer\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Gorputz bat gara, arima bat, ala biak batera?",
   "raiz": "GOGAMEN-GORPUTZ ARAZOA",
   "raiz_d": "Zerez eginda gaude: errealitate bakar batez ala biz? Erantzunak bi jarrera handitan eta bitarteko bide batean biltzen dira.",
   "ramas": [
    {
     "rel": "bi errealitate",
     "t": "Dualismoa",
     "k": true,
     "d": "Gorputz materiala eta arima edo gogamen ez-materiala; arima da goi-mailakoa, eta gorputzik gabe existitu daiteke.",
     "c": [
      {
       "rel": "antzinako bertsioa",
       "t": "Gorputza, arimaren kartzela",
       "a": "Platon",
       "d": "Arima hilezkorra da eta hiru zati ditu: arrazionala, suminkorra eta gutiziatsua (gurdi hegaldunaren mitoa)."
      },
      {
       "rel": "bertsio modernoa",
       "t": "Res cogitans eta res extensa",
       "a": "Descartes",
       "d": "Bi substantzia: «gauza pentsatzailea» (gogoa) eta «gauza hedatua» (gorputza, ia makina bat)."
      }
     ]
    },
    {
     "rel": "errealitate bakarra",
     "t": "Monismo materialista",
     "k": true,
     "a": "Demokrito, Hume, Marx",
     "d": "Gorputza gara: gogoa ez da aparteko substantzia bat, gorputzaren jarduera baizik, batez ere garunarena.",
     "c": [
      {
       "rel": "gaur egun berresten du",
       "t": "Neurozientzia",
       "d": "Gaur egungo zientziaren zati handi batentzat, buruko jarduera garunaren mende dago."
      },
      {
       "rel": "beraz",
       "t": "Ez dago arima banangarririk",
       "d": "Gorputza hiltzean, dena amaitzen da."
      }
     ]
    },
    {
     "rel": "tarteko jarrera",
     "t": "Arima, gorputzaren forma",
     "k": true,
     "a": "Aristoteles",
     "d": "Arima gorputzaren bizi-printzipioa da, eta ezin da hura gabe existitu.",
     "c": [
      {
       "rel": "bereizten ditu",
       "t": "Arima begetatiboa, sentikorra eta arrazionala"
      },
      {
       "rel": "gaur egun honetaz hitz egiten da",
       "t": "Egitura psikosomatikoa",
       "d": "Psikikoa (psique) eta gorputzekoa (soma), osotasun bakar gisa ulertuta."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Monismo materialista",
     "rel": "ukatu egiten du honek defendatzen duen hilezkortasuna",
     "a": "Dualismoa"
    },
    {
     "de": "Arima, gorputzaren forma",
     "rel": "ez ditu bereizten, honek egiten duen bezala",
     "a": "Dualismoa"
    }
   ],
   "idea": "Dualismoak arima eta gorputza bereizten ditu; monismoak gogoa gorputzera murrizten du; Aristotelesek biak batzen ditu. Gaur egun batasun psikosomatiko gisa ikusteko joera dugu."
  }
 },
 "FIL-T3-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 3. gaia",
  "title": "Arrazionalismoa, enpirismoa eta Kant",
  "mermaid": "flowchart TD\n  con[\"EZAGUTZA\"]:::axis\n  fuente[\"zein da bere iturria?\"]:::key\n  rac[\"Arrazionalismoa\"]:::key\n  r1[\"arrazoia; jaiotzetiko ideiak (Descartes)\"]\n  emp[\"Enpirismoa\"]:::key\n  e1[\"esperientzia; gogoa tabula rasa gisa (Locke, Hume)\"]\n  kant[\"Kant: sintesi kritikoa\"]:::key\n  k1[\"fenomenoak ezagutzen ditugu: esperientzia + a priori formak\"]\n  con --> fuente\n  fuente --> rac --> r1\n  fuente --> emp --> e1\n  rac -->|\"biltzen ditu\"| kant\n  emp -->|\"biltzen ditu\"| kant\n  kant --> k1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nondik dator gure ezagutza, eta noraino iristen da?",
   "raiz": "EZAGUTZAREN JATORRIA",
   "raiz_d": "Aro Modernoan, hiru erantzun galdera bakarrari: arrazoia, esperientzia ala biak?",
   "ramas": [
    {
     "rel": "lehen erantzuna",
     "t": "Arrazionalismoa",
     "k": true,
     "a": "Descartes",
     "d": "Ezagutza ziurraren iturria arrazoia da.",
     "c": [
      {
       "rel": "zeren",
       "t": "Jaiotzetiko ideiak badaude",
       "d": "Gogoak jaiotzetik dakartza zentzumenetatik ez datozen ideiak."
      },
      {
       "rel": "ez da fidatzen",
       "t": "Zentzumenak",
       "d": "Engainatu egiten dute: ez dira egiaren iturri ziurra."
      },
      {
       "rel": "muga",
       "t": "Ondo erabilitako arrazoia errealitatera iristen da"
      }
     ]
    },
    {
     "rel": "bigarren erantzuna",
     "t": "Enpirismoa",
     "k": true,
     "a": "Locke, Hume",
     "d": "Ezagutza oro zentzumenen esperientziatik dator.",
     "c": [
      {
       "rel": "zeren",
       "t": "Gogoa orri zuri bat da",
       "d": "Ez dago jaiotzetiko ideiarik: dakigun guztia zentzumenetatik sartu da."
      },
      {
       "rel": "muga",
       "t": "Ezin gara esperientziaz haratago joan"
      }
     ]
    },
    {
     "rel": "sintesia",
     "t": "Kritizismoa",
     "k": true,
     "a": "Kant",
     "d": "Bi iturriek elkar behar dute eta elkar osatzen dute.",
     "c": [
      {
       "rel": "zentzumenek ematen dute",
       "t": "Edukia",
       "d": "Jasotzen ditugun inpresioak."
      },
      {
       "rel": "adimenak ematen ditu",
       "t": "Formak eta kategoriak",
       "d": "Inpresio horiek ordenatzen dituzte."
      },
      {
       "rel": "muga",
       "t": "Gauzak agertzen zaizkigun bezala soilik ezagutzen ditugu",
       "d": "Ez gauzak «beren baitan»."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Kritizismoa",
     "rel": "neurri batean arrazoia ematen dio honi",
     "a": "Arrazionalismoa"
    },
    {
     "de": "Kritizismoa",
     "rel": "neurri batean arrazoia ematen dio honi",
     "a": "Enpirismoa"
    }
   ],
   "idea": "«Edukirik gabeko pentsamenduak hutsak dira; kontzepturik gabeko intuizioak, itsuak» (Kant): esperientzia eta arrazoia uztartuz ezagutzen dugu."
  }
 },
 "FIL-T3-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 3. gaia",
  "title": "Zientzia eta bere metodoa",
  "mermaid": "flowchart TD\n  ci[\"ZIENTZIA\"]:::axis\n  met[\"metodo hipotetiko-deduktiboa\"]:::key\n  h[\"arazoa, hipotesia, kontrastazioa, legea\"]\n  pop[\"Popper: faltsazionismoa\"]:::key\n  p1[\"teoria bat zientifikoa da errefusa badaiteke\"]\n  kuhn[\"Kuhn: paradigmak\"]:::key\n  ku[\"zientzia normala, krisia, iraultza, paradigma berria\"]\n  ci --> met --> h\n  ci --> pop --> p1\n  ci --> kuhn --> ku\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola egiten du lan zientziak, eta nola egiten du aurrera?",
   "raiz": "JAKINTZA ZIENTIFIKOA",
   "raiz_d": "Ezagutza arrazionala, objektiboa, sistematikoa, metodikoa eta egiaztagarria.",
   "ramas": [
    {
     "rel": "hauetan banatzen da",
     "t": "Zientzia motak",
     "c": [
      {
       "rel": "koherentziaz frogatzen dute",
       "t": "Zientzia formalak",
       "d": "Logika eta matematika: forma eta harreman abstraktuak aztertzen dituzte, esperimenturik gabe."
      },
      {
       "rel": "esperientziarekin alderatzen dute",
       "t": "Zientzia enpirikoak",
       "d": "Naturalak (fisika, kimika, biologia) eta sozialak (historia, ekonomia, soziologia)."
      }
     ]
    },
    {
     "rel": "honekin jarduten du",
     "t": "Metodoa",
     "c": [
      {
       "rel": "orokortu egiten du",
       "t": "Metodo induktiboa",
       "d": "Kasu partikular askotatik lege orokor batera; inoiz ez dira kasu guztiak behatzen, beraz ondorio probableak baino ez ditu ematen."
      },
      {
       "rel": "honek hobetzen du",
       "t": "Metodo hipotetiko-deduktiboa",
       "k": true,
       "a": "Galileo",
       "d": "Arazoa, hipotesia, deduzitutako ondorioak eta egiaztapen esperimentala; baieztatzen badira, lege."
      }
     ]
    },
    {
     "rel": "Popperren arabera, honen bidez egiten du aurrera",
     "t": "Faltsabilitatea",
     "k": true,
     "a": "Popper",
     "d": "Teoria bat zientifikoa da hura gezurta dezakeen esperimentu bat pentsa badaiteke.",
     "c": [
      {
       "rel": "hortik",
       "t": "Aieruak eta errefutazioak",
       "d": "Teoria bat ere ez da erabat frogatzen: errefutatzeko saiakerei eusten die soilik (saiakera eta errorea)."
      }
     ]
    },
    {
     "rel": "Kuhnen arabera, honen bidez egiten du aurrera",
     "t": "Paradigmak",
     "k": true,
     "a": "Kuhn",
     "d": "Zientzialariek denbora luzez barruan lan egiten duten esparru partekatua.",
     "c": [
      {
       "rel": "anomaliak metatzen badira",
       "t": "Iraultza zientifikoa",
       "d": "Paradigma batek beste bat ordezten du, Einsteinen fisikak Newtonena bezala."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Zientzia enpirikoak",
     "rel": "batez ere hau erabiltzen dute",
     "a": "Metodo hipotetiko-deduktiboa"
    },
    {
     "de": "Metodo induktiboa",
     "rel": "ez du inoiz erabat frogatzen: hortik dator",
     "a": "Faltsabilitatea"
    }
   ],
   "idea": "Zientziak ez du behin betiko egiarik lortzen: hipotesiak proposatzen ditu, probatzen ditu eta esparruz aldatzen da anomaliak metatzen direnean."
  }
 },
 "FIL-T5-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 5. gaia",
  "title": "Etika eta morala: teoria motak",
  "mermaid": "flowchart TD\n  center[\"ETIKA\"]:::axis\n  moral[\"MORALAZ hausnartzen du\"]:::key\n  m1[\"komunitate baten arauak eta balioak\"]\n  tipos[\"etika-teoria motak\"]:::key\n  mat[\"materialak: ongia edo helburua zein den esaten dute\"]:::key\n  form[\"formalak: betebeharraren forma ematen dute, ez edukia\"]:::key\n  tele[\"teleologikoak: helburuari eta ondorioei begiratzen diete\"]\n  deon[\"deontologikoak: betebeharrari berari begiratzen diote\"]\n  center -->|\"honetaz hausnartzen du\"| moral --> m1\n  center --> tipos\n  tipos --> mat\n  tipos --> form\n  mat -->|\"izan ohi dira\"| tele\n  form -->|\"izan ohi dira\"| deon\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zer alde dago moralaren eta etikaren artean, eta nola sailkatzen dira teoria etikoak?",
   "raiz": "ETIKA ETA MORALA",
   "raiz_d": "Sokratesen galderatik abiatzen dira, «nola bizi behar dugu?»: ez da galdera teknikoa, helburuei buruzko galdera baizik.",
   "ramas": [
    {
     "rel": "bizi dena",
     "t": "Morala",
     "d": "Komunitate batean egitez indarrean dauden arauak eta balioak."
    },
    {
     "rel": "pentsatzen dena",
     "t": "Etika",
     "k": true,
     "d": "Moralari buruzko hausnarketa filosofikoa: bere arauak onak eta justifikatuak diren galdetzen du."
    },
    {
     "rel": "aurresuposatzen dute",
     "t": "Askatasuna",
     "c": [
      {
       "rel": "ahalbidetzen du",
       "t": "Erantzukizun morala",
       "d": "Dena determinatuta balego, ezingo genuke ez goretsi ez gaitzetsi."
      },
      {
       "rel": "lege propioa",
       "t": "Autonomia",
       "k": true,
       "a": "Kant",
       "d": "Norberak bere buruari lege morala ematea, bere arrazoiaz."
      },
      {
       "rel": "kanpoko legea",
       "t": "Heteronomia",
       "d": "Araua kanpotik jasotzea: beldurra, ohitura, agintea."
      }
     ]
    },
    {
     "rel": "zerk egiten du ona ekintza bat?",
     "t": "Teoria etiko motak",
     "c": [
      {
       "rel": "helburu bat finkatzen dute",
       "t": "Etika materialak",
       "k": true,
       "d": "Bilatu beharreko ongia zein den esaten dute: zoriontasuna, plazera, erabilgarritasuna.",
       "c": [
        {
         "rel": "izan ohi dira",
         "t": "Teleologikoak",
         "a": "Aristoteles, Epikuro, utilitarismoa",
         "d": "Telos-etik (helburua): ekintza bere ondorioen arabera epaitzen dute."
        }
       ]
      },
      {
       "rel": "forma bat finkatzen dute",
       "t": "Etika formalak",
       "k": true,
       "d": "Ez dute esaten zer egin, arau moral orok izan behar duen forma baizik.",
       "c": [
        {
         "rel": "izan ohi dira",
         "t": "Deontologikoak",
         "a": "Kant",
         "d": "Déon-etik (betebeharra): ekintza betebeharraren eta asmoaren arabera epaitzen dute, ez emaitzen arabera."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Etika",
     "rel": "aztertu eta justifikatzen du (edo kritikatzen)",
     "a": "Morala"
    },
    {
     "de": "Autonomia",
     "rel": "hauen oinarria da",
     "a": "Etika formalak"
    }
   ],
   "idea": "Morala bizi egiten da; etikak pentsatu egiten du. Ekintza baten aurrean, etika materialek helburuari eta ondorioei begiratzen diete; formalek, betebeharrari eta asmoari."
  }
 },
 "FIL-T5-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 5. gaia",
  "title": "Etika-teoria handiak",
  "mermaid": "flowchart TD\n  et[\"ETIKA-TEORIAK\"]:::axis\n  ar[\"Eudaimonismoa (Aristoteles)\"]:::key\n  a1[\"helburua: zoriontasuna (eudaimonia) bertutearen bidez\"]\n  ep[\"Hedonismoa eta Utilitarismoa (Epikuro, Mill)\"]:::key\n  e1[\"helburua: plazera, edo zoriontasunik handiena ahalik eta gehienentzat\"]\n  ka[\"Deontologia (Kant)\"]:::key\n  k1[\"betebeharra legearen errespetuagatik: inperatibo kategorikoa\"]\n  em[\"Emotibismoa (Hume)\"]:::key\n  h1[\"judizio moralek sentimenduak adierazten dituzte\"]\n  et --> ar --> a1\n  et --> ep --> e1\n  et --> ka --> k1\n  et --> em --> h1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zerk egiten du ona ekintza bat: bilatzen duen helburuak, betebeharrak ala sentimenduak?",
   "raiz": "TEORIA ETIKO NAGUSIAK",
   "raiz_d": "Hiru erantzun nagusi: ongia helburu gisa (etika materialak), betebehar gisa (Kant) edo sentimendu gisa (Hume).",
   "ramas": [
    {
     "rel": "ongia helburu bat da",
     "t": "Etika materialak",
     "d": "Ekintza lortzen duen helburuaren arabera epaitzen dute: teleologikoak dira.",
     "c": [
      {
       "rel": "helburua hau da",
       "t": "Zoriontasuna (eudaimonia)",
       "k": true,
       "a": "Aristoteles",
       "d": "Bere osotasunean lortutako bizitza, ez plazer-une bat.",
       "c": [
        {
         "rel": "honen bidez lortzen da",
         "t": "Bertutea, erdibide gisa",
         "d": "Bi muturren artean, arrazoiak eta ohiturak gidatua: ausardia, koldarkeriaren eta ausarkeriaren artean."
        }
       ]
      },
      {
       "rel": "helburua hau da",
       "t": "Plazer lasaia (ataraxia)",
       "a": "Epikuro",
       "d": "Minik eta asaldurarik eza: bizitza lasaia, lagunekin eta jainkoen zein heriotzaren beldurrik gabe."
      },
      {
       "rel": "helburua hau da",
       "t": "Ahalik eta gehienen zoriontasunik handiena",
       "k": true,
       "a": "Bentham, Mill",
       "d": "Utilitarismoa: plazeraren irizpidea gizarteari aplikatua. Millek dio badirela goi-mailako plazerak."
      }
     ]
    },
    {
     "rel": "ongia betebeharra da",
     "t": "Etika formala",
     "a": "Kant",
     "d": "Ekintza bat morala da lege moralarekiko errespetuz egiten denean, ez bere ondorioengatik.",
     "c": [
      {
       "rel": "honetan adierazten da",
       "t": "Inperatibo kategorikoa",
       "k": true,
       "d": "Arrazoiaren agindu baldintzagabea: jokatu soilik lege unibertsal gisa nahi dezakezun maxima baten arabera."
      },
      {
       "rel": "pertsona honela tratatzeko agintzen du",
       "t": "Beti helburu gisa",
       "d": "Eta inoiz ez bitarteko soil gisa: giza duintasunaren oinarria."
      }
     ]
    },
    {
     "rel": "ongia sentitu egiten da",
     "t": "Emotibismoa",
     "k": true,
     "a": "Hume",
     "d": "Judizio moralak ez dira arrazoitik deduzitzen: onespen- edo gaitzespen-sentimenduak adierazten dituzte.",
     "c": [
      {
       "rel": "zeren",
       "t": "Arrazoia, grinen esklaboa",
       "d": "«Arrazoia grinen esklaboa da, eta soilik hori izan behar du» (Hume)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Etika formala",
     "rel": "ez du morala honetan oinarritu nahi",
     "a": "Zoriontasuna (eudaimonia)"
    },
    {
     "de": "Emotibismoa",
     "rel": "ukatu egiten du honen oinarri arrazionala",
     "a": "Inperatibo kategorikoa"
    }
   ],
   "idea": "Aristotelesek, Epikurok eta utilitarismoak helburuari begiratzen diote; Kantek, betebeharrari; Humek, sentimenduari. Gaur egungo etika aplikatuan galdera berak agertzen dira berriro."
  }
 },
 "FIL-T7-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 7. gaia",
  "title": "Zer da edertasuna?",
  "mermaid": "flowchart TD\n  bel[\"EDERTASUNA\"]:::axis\n  q[\"non dago?\"]:::key\n  obj[\"Objektibismoa: objektuan\"]:::key\n  o1[\"proportzioa eta harmonia (klasikoak)\"]\n  sub[\"Subjektibismoa: subjektuan\"]:::key\n  s1[\"gustuei buruz ez dago ezer idatzita\"]\n  jui[\"judizio estetikoa\"]:::key\n  j1[\"Kant: kontzepturik gabeko gustua, unibertsaltasun-asmoarekin\"]\n  bel --> q\n  q --> obj --> o1\n  q --> sub --> s1\n  bel -->|\"honek konpontzen du\"| jui --> j1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Edertasuna gauzetan dago ala begiratzen dienarengan?",
   "raiz": "EDERRA",
   "raiz_d": "Estetikak (aísthesis-etik, «sentsazioa») edertasuna, artea eta zerbait bere horretan kontenplatzearen esperientzia pentsatzen ditu.",
   "ramas": [
    {
     "rel": "objektuan dago",
     "t": "Edertasun objektiboa",
     "k": true,
     "a": "Pitagorikoak, Polikleto, Agustin, Tomas",
     "d": "Ikuskera klasikoa: ederra ondo proportzionatua dena da.",
     "c": [
      {
       "rel": "honetan datza",
       "t": "Proportzioa, harmonia eta neurria",
       "d": "Horregatik neur eta irakats daiteke: musika zenbaki gisa, gorputzaren Kanona."
      }
     ]
    },
    {
     "rel": "subjektuan dago",
     "t": "Edertasun subjektiboa",
     "k": true,
     "d": "Ikuskera modernoa: ederra zerbaiten aurrean sentitzen dugun plazera da.",
     "c": [
      {
       "rel": "bere arriskua",
       "t": "«Gustuei buruz ez dago ezer idatzita»",
       "d": "Dena begiratzen duenaren araberakoa bada, judizio bat ere ez litzateke beste bat baino hobea."
      }
     ]
    },
    {
     "rel": "guztientzat balio du?",
     "t": "Gustu-judizioa",
     "k": true,
     "d": "«Hau ederra da» esatea: «niri gustatzen zait» besterik ez da, ala besteen adostasuna eskatzen du?",
     "c": [
      {
       "rel": "honen bidez salbatzen du",
       "t": "Kritikari gaitua",
       "a": "Hume",
       "d": "Sentikortasuna, esperientzia, konparazioa eta aurreiritzirik eza: badago gustu ona."
      },
      {
       "rel": "honela definitzen du",
       "t": "Interesik gabea eta unibertsala kontzepturik gabe",
       "a": "Kant",
       "d": "Kontenplatu egiten dut, eduki edo erabili nahi gabe; guztien adostasuna eskatzen dut, baina ezin dut arauekin frogatu."
      }
     ]
    },
    {
     "rel": "ederraz haratago",
     "t": "Sublimea",
     "a": "Kant",
     "d": "Beldurra eta mirespena neurrigabearen edo boteretsuaren aurrean (ekaitz bat, itsasoa, kosmosa)."
    }
   ],
   "cruces": [
    {
     "de": "Kritikari gaitua",
     "rel": "ñabartu egiten du, ukatu gabe,",
     "a": "Edertasun subjektiboa"
    },
    {
     "de": "Interesik gabea eta unibertsala kontzepturik gabe",
     "rel": "adostasun unibertsala eskatzen du honentzat",
     "a": "Edertasun subjektiboa"
    }
   ],
   "idea": "Klasikoentzat edertasuna objektuan dago; modernoentzat, subjektuan. Humek eta Kantek bilatzen dute gustua, subjektiboa izanda ere, kapritxo hutsa ez izatea."
  }
 },
 "FIL-T7-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 7. gaia",
  "title": "Arteari buruzko teoriak",
  "mermaid": "flowchart TD\n  art[\"ZER DA ARTEA?\"]:::axis\n  mim[\"Mimesia: errealitatea imitatzea\"]:::key\n  exp[\"Adierazpena: emozioak komunikatzea\"]:::key\n  form[\"Formalismoa: forma da garrantzitsua (artea artearengatik)\"]:::key\n  inst[\"Teoria instituzionala: artea da arte-munduak aitortzen duena\"]:::key\n  fun[\"artearen funtzioak\"]:::key\n  f1[\"estetikoa, kognitiboa, soziala eta kritikoa\"]\n  art --> mim\n  art --> exp\n  art --> form\n  art --> inst\n  art -->|\"betetzen ditu\"| fun --> f1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zerk bihurtzen du zerbait artelan?",
   "raiz": "ARTEA",
   "raiz_d": "Zer dute komunean katedral batek, sinfonia batek eta Duchampek sinatutako pixatoki batek? Lau erantzun, bakoitza bere arazoarekin.",
   "ramas": [
    {
     "rel": "arteak imitatu egiten du",
     "t": "Mimesia",
     "k": true,
     "d": "Errealitatea irudikatzea; Greziatik Errenazimendura arte nagusi.",
     "c": [
      {
       "rel": "nekez azaltzen du",
       "t": "Musika eta arte abstraktua",
       "d": "Ez dute ezer imitatzen."
      }
     ]
    },
    {
     "rel": "arteak adierazi egiten du",
     "t": "Adierazpena",
     "k": true,
     "d": "Erromantizismotik aurrera: artistaren barne-mundua komunikatzea eta sentiaraztea.",
     "c": [
      {
       "rel": "nekez azaltzen du",
       "t": "Zergatik ez den arte negar bat",
       "d": "Negar batek edo oihu batek ere emozioak adierazten dituzte."
      }
     ]
    },
    {
     "rel": "artea forma da",
     "t": "Formalismoa",
     "k": true,
     "d": "Artistikoa forma da: konposizioa, kolorea, erritmoa, egitura.",
     "c": [
      {
       "rel": "nekez azaltzen du",
       "t": "Esanahia eta gaia"
      }
     ]
    },
    {
     "rel": "artea aitortua dena da",
     "t": "Teoria instituzionala",
     "k": true,
     "a": "Danto, Dickie",
     "d": "Artea da artearen munduak (museoek, kritikariek, arte-historiak) artetzat hartzen duena.",
     "c": [
      {
       "rel": "honi erantzuten dio",
       "t": "Ready-made",
       "a": "Duchamp",
       "d": "Sinatu eta erakutsitako objektu industriala: jada ez dute axola trebetasunak eta edertasunak."
      },
      {
       "rel": "bere arriskua",
       "t": "«Artea adituek diotena da»"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Formalismoa",
     "rel": "honi bai egiten dio lekua",
     "a": "Musika eta arte abstraktua"
    },
    {
     "de": "Ready-made",
     "rel": "honekin hausten du",
     "a": "Mimesia"
    }
   ],
   "idea": "Definizio batek ere ez du eztabaida ixten: teoria bakoitzak arte mota bat ondo azaltzen du eta beste batekin huts egiten du. Duchampez geroztik, artea galdera bat ere bada."
  }
 },
 "FIL-TA-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · Argudiaketa-tailerra",
  "title": "Argudioa: baliozkotasuna eta egia",
  "mermaid": "flowchart TD\n  arg[\"ARGUDIOA\"]:::axis\n  prem[\"premisak\"]:::key\n  conc[\"ondorioa\"]:::key\n  tipos[\"motak\"]:::key\n  ded[\"deduktiboa: ondorioa beharrez dator\"]\n  ind[\"induktiboa: ondorioa probablea baino ez da\"]\n  eval[\"ebaluazioa\"]:::key\n  val[\"baliozkotasuna: forma zuzena da\"]\n  ver[\"egia: premisak egiazkoak dira\"]\n  sol[\"sendoa: baliozkoa + premisa egiazkoak\"]:::key\n  arg --> prem\n  prem -->|\"hau babesten dute\"| conc\n  arg --> tipos\n  tipos --> ded\n  tipos --> ind\n  arg --> eval\n  eval --> val\n  eval --> ver\n  val -->|\"elkarrekin ematen dute\"| sol\n  ver -->|\"elkarrekin ematen dute\"| sol\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Noiz frogatzen du benetan argudio batek bere ondorioa?",
   "raiz": "ARGUDIOA",
   "raiz_d": "Argudiatzea arrazoiak ematea da: proposizio multzo bat, non batzuek, premisek, beste bati, ondorioari, eusten dioten.",
   "ramas": [
    {
     "rel": "honez osatuta dago",
     "t": "Premisak eta ondorioa",
     "d": "Premisak «zeren», «izan ere» ondoren joan ohi dira; ondorioa, «beraz», «hortaz» ondoren.",
     "c": [
      {
       "rel": "bakoitza hau da",
       "t": "Proposizioa",
       "d": "Egiazkoa edo faltsua dela esateak zentzua duen enuntziatua: «euria ari du», «7 zenbaki lehena da»."
      }
     ]
    },
    {
     "rel": "bi modutara arrazoitzen du",
     "t": "Dedukzioa eta indukzioa",
     "c": [
      {
       "rel": "ondorio beharrezkoa",
       "t": "Dedukzioa",
       "k": true,
       "d": "Premisak egiazkoak badira, ondorioa ezin da faltsua izan: «Gizaki guztiak hilkorrak dira…»."
      },
      {
       "rel": "ondorio probablea",
       "t": "Indukzioa",
       "d": "Kasu partikularretatik lege orokor batera: zisne zuri askok ez dute frogatzen denak zuriak direnik."
      }
     ]
    },
    {
     "rel": "honen arabera ebaluatzen da",
     "t": "Baliozkotasuna eta egia",
     "k": true,
     "d": "Independenteak dira: baliozkotasuna formari dagokio; egia, edukiari.",
     "c": [
      {
       "rel": "formaren propietatea",
       "t": "Baliozkotasuna",
       "d": "Ondorioa premisetatik zuzen ateratzen da.",
       "c": [
        {
         "rel": "premisa faltsuekin",
         "t": "Ez du ezer frogatzen",
         "d": "«Arrainek hegan egiten dute; Nemo arraina da; beraz, Nemok hegan egiten du»: forma baliozkoa, ondorio faltsua."
        }
       ]
      },
      {
       "rel": "edukiaren propietatea",
       "t": "Egia",
       "d": "Premisek gauzak egitez nolakoak diren esaten dute."
      },
      {
       "rel": "biak betetzen badira",
       "t": "Argudio sendoa",
       "k": true,
       "d": "Baliozkoa eta premisa egiazkoekin: ondorioa bermatuta dago."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Dedukzioa",
     "rel": "ondo eraikia, hau du",
     "a": "Baliozkotasuna"
    },
    {
     "de": "Proposizioa",
     "rel": "izan dezake edo ez",
     "a": "Egia"
    }
   ],
   "idea": "Argudio baliozkoa ez da nahikoa: bere ondorioa frogatzeko sendoa izan behar du, hau da, baliozkoa eta premisa egiazkoekin."
  }
 },
 "FIL-TA-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · Argudiaketa-tailerra",
  "title": "Faltsukeriak",
  "mermaid": "flowchart TD\n  fal[\"FALTSUKERIAK\"]:::axis\n  def[\"baliozkoak diruditen baina ez diren argudioak\"]\n  formal[\"formalak: hutsegitea egitura logikoan\"]:::key\n  inf[\"informalak: hutsegitea edukian edo hizkuntzan\"]:::key\n  ah[\"ad hominem: pertsonari erasotzea\"]\n  ap[\"ad populum: gehiengoari deia\"]\n  aver[\"ad verecundiam: autoritateari deia\"]\n  fc[\"kausa faltsua: korrelazioa kausarekin nahastea\"]\n  hp[\"lastozko gizona: aurkariaren tesia desitxuratzea\"]\n  fal --> def\n  fal --> formal\n  fal --> inf\n  inf --> ah\n  inf --> ap\n  inf --> aver\n  inf --> fc\n  inf --> hp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola ezagutu ona dirudien baina ez den arrazoibide bat?",
   "raiz": "FALTSUKERIAK",
   "raiz_d": "Baliozkoak diruditen baina ez diren argudioak. Formalak: formak huts egiten du. Informalak: edukiak edo hizkuntzak huts egiten du.",
   "ramas": [
    {
     "rel": "formak huts egiten du",
     "t": "Faltsukeria formalak",
     "k": true,
     "d": "Egitura logikoa okerra da, nahiz eta esaldi bakoitza egia izan daitekeen.",
     "c": [
      {
       "rel": "adibidez",
       "t": "Ondorengoa baieztatzea",
       "d": "«Euria ari badu, lurra bustitzen da; lurra bustita dago; beraz, euria egin du». Ur-mahuka bat izan zitekeen."
      }
     ]
    },
    {
     "rel": "informalak: nork dioen begiratzen dute",
     "t": "Pertsonetara jotzen dute",
     "d": "Arrazoien ordez, nork dioen edo zenbatek dioten jartzen dute.",
     "c": [
      {
       "rel": "pertsonari erasotzen dio",
       "t": "Ad hominem",
       "k": true,
       "d": "«Ezin duzu gerraz iritzirik eman: ez duzu soldadutzarik egin». Nork hitz egiten duen jakiteak ez du ezeztatzen zer dioen."
      },
      {
       "rel": "autoritate ez-egokia",
       "t": "Ad verecundiam",
       "d": "«Fisikako Nobel sari batek dio homeopatiak funtzionatzen duela»: ez da medikuntzan aditua."
      },
      {
       "rel": "gehiengoari dei egiten dio",
       "t": "Ad populum",
       "d": "«Nire lagun guztiek marka hau erosten dute; onena izango da»: zerbait ezaguna izateak ez du egiazko bihurtzen."
      }
     ]
    },
    {
     "rel": "informalak: desitxuratu egiten dute",
     "t": "Desitxuratu edo puztu egiten dute",
     "d": "Esandakoaren bertsio faltsu edo puztu batekin eztabaidatzen dute.",
     "c": [
      {
       "rel": "aurkaria karikaturizatzen du",
       "t": "Lastozko gizona",
       "k": true,
       "d": "«Sare sozialak arautu nahi dituzu? Hau da, dena zentsuratu nahi duzu?». Arautzea ez da dena zentsuratzea."
      },
      {
       "rel": "gaitzak kateatzen ditu frogarik gabe",
       "t": "Aldapa irristakorra",
       "d": "«Jolas-orduan mugikorra uzten badugu, gero klasean erabiliko dute eta azkenean inork ez du ikasiko»."
      }
     ]
    },
    {
     "rel": "informalak: oinarririk gabe jauzi egiten dute",
     "t": "Oinarri nahikorik gabe ondorioztatzen dute",
     "d": "Datuek ahalbidetzen ez dituzten ondorioak ateratzen dituzte.",
     "c": [
      {
       "rel": "korrelazioa ez da kausa",
       "t": "Kausa faltsua",
       "k": true,
       "d": "«Alderdi hau gobernatzen hasi zenetik langabezia igo da; beraz, hark eragin du»: beste kausa batzuk egon daitezke."
      },
      {
       "rel": "kasu gutxi",
       "t": "Orokorpen presatua",
       "d": "«Irakasle horrek bi lagun suspenditu zituen: denak suspenditzen ditu». Bi kasu ez dira nahikoa."
      }
     ]
    }
   ],
   "idea": "Edozein argudioren aurrean, galdetu: benetan ateratzen da ondorioa?, zer axola du nork dioen?, hori al da esandakoa?, badago froga nahikorik?"
  }
 },
 "FIL-T6-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 6. gaia",
  "title": "Estatuaren jatorria: natura ala kontratua?",
  "mermaid": "flowchart TD\n  est[\"ESTATUAREN JATORRIA\"]:::axis\n  nat[\"Natura? (Aristoteles)\"]:::key\n  n1[\"gizakia zoon politikón da: polis-a naturala da\"]\n  con[\"Kontratua? (modernoak)\"]:::key\n  c1[\"Estatua artifizio bat da: naturazko egoeratik ateratzeko ituna\"]\n  ho[\"Hobbes\"]:::key\n  h1[\"guztien gerra guztien aurka → subirano absolutua (Leviatana)\"]\n  lo[\"Locke\"]:::key\n  l1[\"eskubide naturalak → Estatu liberala eta botere-banaketa\"]\n  ro[\"Rousseau\"]:::key\n  r1[\"borondate orokorra → herri-subiranotasuna\"]\n  est --> nat --> n1\n  est --> con --> c1\n  con --> ho --> h1\n  con --> lo --> l1\n  con --> ro --> r1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zergatik existitzen da Estatua: gure izaeratik sortzen da ala itun baten bidez sortzen dugu?",
   "raiz": "ESTATUAREN JATORRIA",
   "raiz_d": "Aristoteles: naturala da. Kontraktualistak: artifizio bat da, naturazko egoeratik ateratzeko itun bat (hipotesi bat, ez gertaera bat).",
   "ramas": [
    {
     "rel": "antzinako erantzuna",
     "t": "Jatorri naturala",
     "k": true,
     "a": "Aristoteles",
     "d": "Gizakia zoon politikon da, animalia politikoa: komunitatea gure izaera sozialetik sortzen da.",
     "c": [
      {
       "rel": "bakarrik bizi dena",
       "t": "«Piztia bat da edo jainko bat»",
       "d": "Polisetik kanpo inor ez da guztiz gizaki izatera iristen."
      }
     ]
    },
    {
     "rel": "beldurragatiko ituna",
     "t": "Subirano absolutua",
     "k": true,
     "a": "Hobbes",
     "d": "Denek beren boterea bakar bati ematen diote, Leviatanari, eta hark bakea bermatzen du.",
     "c": [
      {
       "rel": "honetatik irteteko",
       "t": "Denak denen aurkako gerra",
       "d": "«Gizakia otsoa da gizakiarentzat»: beldurra eta segurtasunik eza dira nagusi."
      }
     ]
    },
    {
     "rel": "itun mugatua",
     "t": "Estatu liberala",
     "k": true,
     "a": "Locke",
     "d": "Botere mugatua, botere-banaketa eta tiranoaren aurka matxinatzeko eskubidea.",
     "c": [
      {
       "rel": "hauek babesteko",
       "t": "Eskubide naturalak",
       "d": "Bizia, askatasuna eta jabetza: Estaturik gabe ere badira, baina epaile inpartzial bat falta da."
      }
     ]
    },
    {
     "rel": "bakoitzak guztiekin egindako ituna",
     "t": "Herri-subiranotasuna",
     "k": true,
     "a": "Rousseau",
     "d": "Herriak bere burua gobernatzen du: demokrazia modernoaren sustraia.",
     "c": [
      {
       "rel": "bakoitzak hau obeditzen du",
       "t": "Borondate orokorra",
       "d": "Ongi komuna, ez interes partikularra."
      },
      {
       "rel": "hemendik abiatzen da",
       "t": "Basati ona",
       "d": "Libre eta berdina; gizarteak ustelten du desberdintasunaz eta jabetzaz."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Estatu liberala",
     "rel": "mugatu egiten du honek biltzen duen boterea",
     "a": "Subirano absolutua"
    },
    {
     "de": "Herri-subiranotasuna",
     "rel": "herriari ematen dio honen boterea",
     "a": "Subirano absolutua"
    }
   ],
   "idea": "Aristotelesentzat Estatua naturala da; modernoentzat, itun bat. Estaturik gabeko bizitza irudikatzeko moduaren arabera, Hobbes, Locke eta Rousseau oso Estatu desberdinetara iristen dira."
  }
 },
 "FIL-T6-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 6. gaia",
  "title": "Justizia, boterea eta gobernu-formak",
  "mermaid": "flowchart TD\n  pol[\"BIZITZA POLITIKOA\"]:::axis\n  jus[\"Justizia\"]:::key\n  j1[\"Platon: zati bakoitzak bere funtzioa betetzen du · Rawls: ezjakintasunaren beloa\"]\n  leg[\"Boterea eta legitimitatea (Weber)\"]:::key\n  le1[\"tradizioa · karisma · legaltasun arrazionala\"]\n  gob[\"Gobernu-formak\"]:::key\n  g1[\"bat (monarkia) · gutxi batzuk (aristokrazia) · asko (demokrazia)\"]\n  dem[\"Demokrazia\"]:::key\n  d1[\"herri-subiranotasuna, askatasunak eta botere-banaketa; etsaiak: manipulazioa eta desberdintasuna\"]\n  dh[\"Giza eskubideak eta zuzenbide-estatua\"]:::key\n  dh1[\"inongo boterek gainditu ezin duen muga (Arendt: totalitarismoaren aurka)\"]\n  pol --> jus --> j1\n  pol --> leg --> le1\n  pol --> gob --> g1\n  gob --> dem --> d1\n  pol --> dh --> dh1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zerk egiten du legitimo botere bat eta justu gizarte bat?",
   "raiz": "JUSTIZIA, BOTEREA ETA DEMOKRAZIA",
   "raiz_d": "Filosofia politikoak ez du deskribatzen gizarteak nolakoak diren, nolakoak izan beharko luketen baizik.",
   "ramas": [
    {
     "rel": "zergatik obeditzen dugu?",
     "t": "Legitimitatea",
     "k": true,
     "a": "Weber",
     "d": "Boterea besteak obeditzera eramatea da; legitimitatea, justutzat aitortzen den agintzeko eskubidea.",
     "c": [
      {
       "rel": "hiru iturri",
       "t": "Tradizioa, karisma eta legezkotasuna",
       "d": "«Beti horrela egin da»; buruzagi baten indarra; legeak obeditzea, ez pertsonak (Estatu modernoa)."
      }
     ]
    },
    {
     "rel": "zer banaketa da justua?",
     "t": "Justizia",
     "k": true,
     "d": "Bakoitzari dagokiona ematea eta kargak eta onurak ekitatez banatzea.",
     "c": [
      {
       "rel": "Platonen arabera",
       "t": "Zati bakoitzak bere funtzioa betetzen du",
       "d": "Errepublikako hiri justua: bere zatiak harmonian bizi dira."
      },
      {
       "rel": "Rawlsen arabera",
       "t": "Ezjakintasunaren estalkia",
       "d": "Arauak aukeratzea zer leku izango duzun jakin gabe: askatasun berdinak, eta gutxien dutenei laguntzen dieten desberdintasunak soilik."
      }
     ]
    },
    {
     "rel": "nork agintzen du?",
     "t": "Gobernu-formak",
     "d": "Batek (monarkia), gutxik (aristokrazia) edo askok (demokrazia); tirania, oligarkia eta demagogia bihurtuta endekatzen dira.",
     "c": [
      {
       "rel": "herriaren gobernua",
       "t": "Demokrazia",
       "k": true,
       "d": "Herri-subiranotasuna, parte-hartzea, legearen aurreko berdintasuna, pluralismoa eta botere-banaketa.",
       "c": [
        {
         "rel": "bere etsaiak",
         "t": "Manipulazioa, desberdintasuna eta apatia"
        }
       ]
      }
     ]
    },
    {
     "rel": "zer muga du botereak?",
     "t": "Giza eskubideak",
     "k": true,
     "d": "Pertsona orok, pertsona izate hutsagatik, dituen gutxieneko eskakizunak (Adierazpen Unibertsala, 1948).",
     "c": [
      {
       "rel": "honek bermatzen ditu",
       "t": "Zuzenbide-estatua",
       "d": "Gobernua ere legearen menpe dago."
      },
      {
       "rel": "honek deuseztatzen ditu",
       "t": "Totalitarismoa",
       "a": "Arendt",
       "d": "Askatasuna, aniztasuna eta bizitza publikoa ezabatzen dituen boterea."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Zuzenbide-estatua",
     "rel": "honen baldintza da",
     "a": "Demokrazia"
    },
    {
     "de": "Tradizioa, karisma eta legezkotasuna",
     "rel": "legezkotasuna honen oinarria da",
     "a": "Zuzenbide-estatua"
    }
   ],
   "idea": "Botere bat legitimoa da obeditzen dutenek justutzat aitortzen dutenean; demokrazian, botere hori legeak eta giza eskubideek mugatzen dute."
  }
 },
 "FIL-T4-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · 4. gaia",
  "title": "Logika formala: konektiboak, egia-taulak eta Boole",
  "mermaid": "flowchart TD\n  log[\"LOGIKA FORMALA\"]:::axis\n  con[\"Konektiboak\"]:::key\n  c1[\"¬ ez · ∧ eta · ∨ edo · → baldin...orduan · ↔ baldin eta soilik baldin\"]\n  tv[\"Egia-taulak\"]:::key\n  t1[\"formula bat egiazkoa ala faltsua den ebaluatzen dute, bere zatien arabera\"]\n  bo[\"Booleren aljebra\"]:::key\n  b1[\"egiazkoa eta faltsua 1 eta 0 gisa\"]\n  pu[\"Ate logikoak (Shannon)\"]:::key\n  p1[\"AND (∧), OR (∨), NOT (¬): elektrizitate bihurtutako logika → ordenagailua\"]\n  log --> con --> c1\n  log --> tv --> t1\n  log --> bo --> b1\n  bo --> pu --> p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola kalkulatzen da formula bat egiazkoa den, eta zer lotura du horrek ordenagailu batekin?",
   "raiz": "LOGIKA FORMALA",
   "raiz_d": "Ikurren hizkuntza bat, hizkuntza arruntaren anbiguotasunik gabe, arrazoibideen forma aztertzeko.",
   "ramas": [
    {
     "rel": "proposizioak hauekin lotzen ditu",
     "t": "Konektiboak",
     "k": true,
     "d": "Multzoaren egia-balioa (V edo F) bere zatien balioaren araberakoa da soilik.",
     "c": [
      {
       "rel": "balioa alderantzikatzen du",
       "t": "Ukapena ¬p («ez p»)",
       "d": "Egiazkoa p faltsua bada; faltsua p egiazkoa bada."
      },
      {
       "rel": "biak eskatzen ditu",
       "t": "Konjuntzioa p ∧ q («p eta q»)",
       "d": "Egiazkoa soilik p eta q egiazkoak badira."
      },
      {
       "rel": "bat nahikoa da",
       "t": "Disjuntzioa p ∨ q («p edo q»)",
       "d": "Egiazkoa gutxienez bat egiazkoa bada; faltsua soilik biak faltsuak badira."
      },
      {
       "rel": "kasu bakarrean huts egiten du",
       "t": "Baldintzazkoa p → q («baldin p, orduan q»)",
       "d": "Faltsua soilik p egiazkoa eta q faltsua direnean; beste hiru kasuetan, egiazkoa."
      }
     ]
    },
    {
     "rel": "hauekin kalkulatzen dira",
     "t": "Egia-taulak",
     "k": true,
     "d": "Proposizioen V eta F konbinazio posible guztiak aztertzen dituzte.",
     "c": [
      {
       "rel": "baliozkoa da ez badago",
       "t": "Premisak V eta ondorioa F dituen lerroa",
       "d": "Premisak egiazkoak eta ondorioa faltsua dituen lerrorik ez badago, arrazoibidea baliozkoa da."
      },
      {
       "rel": "egiazkoa lerro guztietan",
       "t": "Tautologia"
      },
      {
       "rel": "faltsua lerro guztietan",
       "t": "Kontraesana"
      }
     ]
    },
    {
     "rel": "kalkulu bihurtzen da hemen",
     "t": "Booleren aljebra",
     "k": true,
     "a": "George Boole (1854)",
     "d": "1 = egiazkoa eta 0 = faltsua: konjuntzioak biderketa gisa funtzionatzen du; disjuntzioak, batuketa gisa (1 + 1 = 1).",
     "c": [
      {
       "rel": "honekin eraikitzen da",
       "t": "Ate logikoak",
       "a": "Claude Shannon (1938)",
       "d": "AND, OR eta NOT zirkuituak: AND ateak 1 ematen du soilik bere bi sarrerak 1 direnean, konjuntzioak bezala.",
       "c": [
        {
         "rel": "honen oinarria dira",
         "t": "Ordenagailuak",
         "d": "Prozesadore baten eragiketa bakoitza, funtsean, logika da."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ate logikoak",
     "rel": "elektrizitatearekin erreproduzitzen dituzte",
     "a": "Konektiboak"
    }
   ],
   "idea": "Konektiboekin eta haien egia-taulekin egiaztatzen da arrazoibide bat baliozkoa den. Boolek eta Shannonek kalkulu hori ordenagailu guztien zirkuitu bihurtu zuten."
  }
 },
 "FIL-PRE-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · Presokratikoak",
  "title": "Presokratikoak: arkhearen bilaketa",
  "mermaid": "flowchart TD\n  pre[\"PRESOKRATIKOAK\"]:::axis\n  ml[\"Mitotik logosera: natura arrazoiaren bidez azaltzea\"]\n  arc[\"ARKHEA bilatzen dute: guztiaren printzipioa\"]:::key\n  mil[\"Miletoarrak\"]:::key\n  ta[\"Tales: ura\"]\n  an[\"Anaximandro: apeirona (zehaztugabea)\"]\n  ax[\"Anaximenes: airea\"]\n  je[\"Xenofanes: jainko antropomorfikoen kritika\"]:::key\n  pi[\"Pitagoras: zenbakia\"]:::key\n  par[\"Parmenides: izatea bakarra eta higiezina da (aldaketa, ilusioa)\"]:::key\n  her[\"Heraklito: dena jariatzen da, logosak gobernatuta\"]:::key\n  pre --> ml\n  pre --> arc\n  arc --> mil\n  mil --> ta\n  mil --> an\n  mil --> ax\n  arc --> pi\n  pre --> je\n  pre --> par\n  pre --> her\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Zerez dago egina mundua, eta zergatik aldatzen da?",
   "raiz": "PRESOKRATIKOAK",
   "raiz_d": "Lehen pentsalari greziarrak (K.a. VII-V. mendeak), «fisikoak» deituak: arkhea bilatzen dute, naturaren (physis) printzipio komuna.",
   "ramas": [
    {
     "rel": "arkhe material bat",
     "t": "Miletoarrak",
     "k": true,
     "d": "Mileto, K.a. VI. mendea: «Hesiodoren aurka» pentsatzen dute, esperientziatik abiatuta eta ez jainkoengandik.",
     "c": [
      {
       "rel": "Talesen arabera",
       "t": "Ura",
       "d": "Printzipio behagarri bat, Homeroren Ozeano-jainkoaren aurrean."
      },
      {
       "rel": "Anaximandroren arabera",
       "t": "Apeirona",
       "d": "Mugagabea eta zehaztugabea: printzipioa ezin da elementu konkretu bat izan."
      },
      {
       "rel": "Anaximenesen arabera",
       "t": "Airea",
       "d": "Bakantzearen (beroa) eta kondentsazioaren (hotza) bidez gauza guztiak sortzen ditu."
      }
     ]
    },
    {
     "rel": "mitoa kritikatzen du",
     "t": "Jainko antropomorfoen aurka",
     "a": "Xenofanes",
     "d": "Idiek margotzeko gai balira, idi-itxurako jainkoak margotuko lituzkete.",
     "c": [
      {
       "rel": "proposatzen du",
       "t": "Jainko Bakar bat",
       "d": "Esferikoa eta higiezina, «osotasuna besarkatzen duena»."
      }
     ]
    },
    {
     "rel": "arkhe adigarri bat",
     "t": "Zenbakia",
     "k": true,
     "a": "Pitagoras",
     "d": "Unibertsoa harmoniatsua eta musikala da: haren esentzia matematikoa da.",
     "c": [
      {
       "rel": "arima, hilezkorra,",
       "t": "Berraragitu egiten da (metenpsikosia)",
       "d": "Zientziaren eta bizitza kontenplatiboaren bidez garbitzen da; Platongan eragina izango du."
      }
     ]
    },
    {
     "rel": "arrazoiak soilik atzematen du",
     "t": "Izatea",
     "k": true,
     "a": "Parmenides",
     "d": "Pentsatzea eta izatea gauza bera dira: izatea betierekoa eta aldaezina da.",
     "c": [
      {
       "rel": "erakusten du",
       "t": "Egiaren bidea (arrazoia)",
       "d": "Adigarria: izatea, aldaketarik gabe."
      },
      {
       "rel": "honen aurka dago",
       "t": "Iritziaren bidea (zentzumenak)",
       "d": "Zentzumenek mundu aldakor bat erakusten digute."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Iritziaren bidea (zentzumenak)",
     "rel": "honen esperientziaz mesfidatzen da",
     "a": "Miletoarrak"
    },
    {
     "de": "Zenbakia",
     "rel": "honen printzipio materiala atzean uzten du",
     "a": "Miletoarrak"
    }
   ],
   "idea": "Presokratikoek galdera aldatzen dute: jada ez zer jainkok egin zuen mundua, baizik eta zer printzipioz dagoen egina. Batzuek esperientzian bilatzen dute; Parmenidesek, arrazoian soilik."
  }
 },
 "FIL-HEL-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofia · Helenismoa",
  "title": "Eskola helenistikoak: zoriontasunerako bideak",
  "mermaid": "flowchart TD\n  hel[\"NOLA IRITSI ZORIONTASUNERA?\"]:::axis\n  ep[\"Epikureoak (Epikuro)\"]:::key\n  e1[\"plazer lasaia eta minik eza: ataraxia\"]\n  es[\"Estoikoak (Zenon, Seneka)\"]:::key\n  s1[\"arrazoiaren arabera bizitzea; nire esku ez dagoena onartzea (apatheia)\"]\n  ci[\"Zinikoak (Diogenes)\"]:::key\n  c1[\"autarkia: norbere buruarekin aski izatea, konbentziorik gabe\"]\n  esc[\"Eszeptikoak (Pirron)\"]:::key\n  x1[\"judizioa etetea (epokhe): lasaitasuna\"]\n  hel --> ep --> e1\n  hel --> es --> s1\n  hel --> ci --> c1\n  hel --> esc --> x1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Nola lortzen da zoriontasuna?",
   "raiz": "ESKOLA HELENISTIKOAK",
   "raiz_d": "Aristotelesen eta Alexandroren konkisten ondoren, polisak bere autonomia galtzen du eta filosofia bizitza pertsonalera itzultzen da.",
   "ramas": [
    {
     "rel": "uneko plazera",
     "t": "Hedonismoa",
     "a": "Aristipo Zirenekoa",
     "d": "Plazera da ongi gorena eta bizitzaren helburua.",
     "c": [
      {
       "rel": "honen bidez lortzen da",
       "t": "Carpe diem",
       "d": "Berehalako plazeraz gozatzea: janaria, atsedena, eguneroko plazerak."
      }
     ]
    },
    {
     "rel": "plazer neurritsua",
     "t": "Epikureismoa",
     "k": true,
     "a": "Epikuro",
     "d": "Plazera ez dago gehiegikerian, neurrian baizik.",
     "c": [
      {
       "rel": "honen bidez lortzen da",
       "t": "Ataraxia",
       "k": true,
       "d": "Arimaren bakea: mina saihestea eta heriotzaren eta jainkoen beldurra ezabatzea."
      }
     ]
    },
    {
     "rel": "bertutea eta arrazoia",
     "t": "Estoizismoa",
     "k": true,
     "a": "Zenon Zitiokoa, Seneka",
     "d": "Ez dugu kontrolatzen gertatzen dena, baina bai gure erreakzioa.",
     "c": [
      {
       "rel": "honen bidez lortzen da",
       "t": "Autokontrola (apatheia)",
       "k": true,
       "d": "Naturarekin bat bizitzea, patua onartzea eta grinak menderatzea."
      }
     ]
    },
    {
     "rel": "ahalik eta gutxien behar izatea",
     "t": "Zinismoa",
     "a": "Diogenes Sinopekoa",
     "d": "«Zenbat eta gutxiago behar izan, orduan eta zoriontsuagoa naiz».",
     "c": [
      {
       "rel": "honen bidez lortzen da",
       "t": "Autoaskitasuna",
       "d": "Bizitza austeroa, ondasun materialik gabe eta arau sozialak zalantzan jarriz."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Epikureismoa",
     "rel": "honek bilatzen duen plazera neurritzen du",
     "a": "Hedonismoa"
    },
    {
     "de": "Autokontrola (apatheia)",
     "rel": "lasaitasuna ere bilatzen du, honek bezala",
     "a": "Ataraxia"
    }
   ],
   "idea": "Galdera bera, lau erantzun: unean gozatzea, neurriz gozatzea, nire esku ez dagoena onartzea edo ahalik eta gutxien behar izatea."
  }
 }
};
