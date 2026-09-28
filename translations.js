/* ==============================================================
   Sur Hotel — all site text, in one place.
   Same pattern as the Escape to Nature site: every language uses
   identical keys, so a missing translation quietly falls back to
   English (see app.js -> t()) instead of breaking the page.
   Dropcap headings take { script, rest, full } — script+rest for
   Latin-script languages, full (plain string) for Arabic & Chinese.
   ============================================================== */
const STRINGS = {

en: {
  dir:"ltr",
  meta_title:"Sur Hotel — Sur, Oman",
  nav:{ home:"Home", about:"About", rooms:"Rooms", explore:"Explore Sur", contact:"Contact", reserve:"Reserve Now" },
  hero:{
    year:"2026",
    tagline:"A budget-friendly base in the heart of Sur, minutes from the souk, the beach, and Oman’s dhow-building harbour.",
    location:"Sur · Oman",
    cta:"See the Rooms"
  },
  about:{
    eyebrow:"About the hotel",
    statement:{ script:"W", rest:"e're a simple, well-placed hotel in the middle of Sur, built for travellers who'd rather spend their time on the coast than in the room.", full:"We're a simple, well-placed hotel in the middle of Sur, built for travellers who'd rather spend their time on the coast than in the room." },
    p1:"Every room is air-conditioned with a private bathroom, a shower, carpeted floors and a TV — comfortable and uncomplicated, looked after by a team our guests keep coming back for.",
    p2:"Sur Beach is a six-minute walk away, the souk is at the door, and breakfast — continental, Italian, vegetarian or Asian — is served in your room each morning.",
    cta:"See the rooms →"
  },
  rooms:{
    eyebrow:"Where you'll stay",
    heading:{ script:"S", rest:"imple, Comfortable Rooms", full:"Simple, Comfortable Rooms" },
    intro:"Three room types, each air-conditioned with a private bathroom — choose the one that fits how many of you are travelling.",
    cta:"Check Availability",
    items:[
      {name:"Single Room", meta:"1 single bed · for 1 guest", desc:"A comfortable, efficient room for one guest in central Sur."},
      {name:"Double Room", meta:"1 double bed · for 2 guests", desc:"A comfortable double room close to Sur Souq and the corniche."},
      {name:"Twin Room", meta:"2 single beds · for 2 guests", desc:"Two separate beds with the essentials for a comfortable stay in Sur."}
    ]
  },
  explore:{
    eyebrow:"Beyond the hotel",
    heading:{ script:"E", rest:"xplore Sur", full:"Explore Sur" },
    intro:"Sur has been Oman’s dhow-building capital for centuries, and it's the gateway to some of the Sharqiyah coast's best-known day trips.",
    tags:["Heritage","Adventure","Nature"],
    badge_title:"Wadi Shab",
    badge_meta:"About 45 minutes by car",
    badge_cta:"View on Map",
    captions:{
      bimmah:{name:"Bimmah Sinkhole", meta:"30 min drive"},
      turtles:{name:"Ras Al Jinz Turtle Reserve", meta:"1 hr drive"},
      dhow:{name:"Dhow Building Yard", meta:"5 min walk"},
      lighthouse:{name:"Al Ayjah Lighthouse", meta:"Water taxi across the inlet"},
      souq:{name:"Sur Souq", meta:"At the hotel's door"}
    }
  },
  testimonials:{
    eyebrow:"What guests say",
    heading:{ script:"R", rest:"ated Very Good", full:"Rated Very Good" },
    score_value:"8.0",
    score_label:"Very Good · 581 reviews",
    bars:[ {label:"Staff", value:95}, {label:"Location", value:87}, {label:"Value for Money", value:86}, {label:"Cleanliness", value:83} ],
    items:[
      {quote:"Room was very comfortable and the welcome at check-in was really great — staff were friendly and helpful. Location was good and close to all the main attractions in Sur.", name:"Justin", meta:"South Africa"},
      {quote:"Nasser and his team did a great job. Neat, no-frills hotel in the middle of Sur. Great value for money. Will come again.", name:"Nick", meta:"United States"},
      {quote:"Very friendly and accommodating staff. They will go the extra mile for you. Close to the market, and near various attractions in Sur.", name:"Naim", meta:"Germany"}
    ],
    source_note:"Guest reviews via Booking.com"
  },
  info:{
    checkin:{label:"Check-in", value:"3:00 PM – 7:00 PM"},
    checkout:{label:"Check-out", value:"6:00 AM – 11:00 AM"},
    beach:{label:"To the beach", value:"6-minute walk"},
    payment:{label:"Payment", value:"Cash only"}
  },
  ctaFooter:{
    statement:{ script:"R", rest:"eady to explore Sur?", full:"Ready to explore Sur?" },
    body:"Reserve directly through Booking.com — full rates, dates and cancellation terms shown at checkout."
  },
  footer:{
    links:["House Rules","Privacy Policy","Contact"],
    rights:"© 2026 Sur Hotel. All rights reserved.",
    note:"Sur, Oman · Cash payments accepted"
  },
  alts:{
    hero:"Al Ayjah lighthouse across the inlet from Sur, Oman",
    dhow:"Traditional wooden dhow boats under construction at Sur's dhow yard",
    city:"Rooftop view over the city of Sur, Oman",
    creek:"Al Ayjah creek and footbridge in Sur, Oman",
    wadiShab:"Turquoise pools and canyon walls at Wadi Shab, Oman",
    bimmah:"Turquoise water inside the Bimmah Sinkhole, Oman",
    turtles:"A green turtle on the beach at Ras Al Jinz, Oman",
    lighthouse:"The white lighthouse of Al Ayjah, Sur",
    souq:"Vendors and shoppers at the fish souq in Sur, Oman",
    exterior:"The Sur Hotel building with its street-level entrance and shops, Sur, Oman"
  }
},

de: {
  dir:"ltr",
  meta_title:"Sur Hotel — Sur, Oman",
  nav:{ home:"Start", about:"Über uns", rooms:"Zimmer", explore:"Sur entdecken", contact:"Kontakt", reserve:"Jetzt reservieren" },
  hero:{
    year:"2026",
    tagline:"Eine preiswerte Basis mitten in Sur, nur Minuten vom Souk, dem Strand und Omans Dhau-Werften entfernt.",
    location:"Sur · Oman",
    cta:"Zimmer ansehen"
  },
  about:{
    eyebrow:"Über das Hotel",
    statement:{ script:"W", rest:"ir sind ein einfaches, gut gelegenes Hotel mitten in Sur — für Reisende, die ihre Zeit lieber an der Küste verbringen als im Zimmer.", full:"Wir sind ein einfaches, gut gelegenes Hotel mitten in Sur — für Reisende, die ihre Zeit lieber an der Küste verbringen als im Zimmer." },
    p1:"Jedes Zimmer ist klimatisiert, mit eigenem Bad, Dusche, Teppichboden und TV — komfortabel und unkompliziert, betreut von einem Team, zu dem unsere Gäste gerne zurückkehren.",
    p2:"Der Strand von Sur ist sechs Gehminuten entfernt, der Souk liegt direkt vor der Tür, und das Frühstück — kontinental, italienisch, vegetarisch oder asiatisch — wird jeden Morgen aufs Zimmer serviert.",
    cta:"Zimmer ansehen →"
  },
  rooms:{
    eyebrow:"Ihre Unterkunft",
    heading:{ script:"S", rest:"chlicht, komfortabel wohnen", full:"Schlicht, komfortabel wohnen" },
    intro:"Drei Zimmertypen, jedes klimatisiert und mit eigenem Bad — wählen Sie, was zu Ihrer Reisegruppe passt.",
    cta:"Verfügbarkeit prüfen",
    items:[
      {name:"Einzelzimmer", meta:"1 Einzelbett · für 1 Gast", desc:"Ein komfortables, unkompliziertes Zimmer für einen Gast im Zentrum von Sur."},
      {name:"Doppelzimmer", meta:"1 Doppelbett · für 2 Gäste", desc:"Ein komfortables Doppelzimmer nahe dem Souk von Sur und der Corniche."},
      {name:"Zweibettzimmer", meta:"2 Einzelbetten · für 2 Gäste", desc:"Zwei getrennte Betten mit allem Nötigen für einen komfortablen Aufenthalt in Sur."}
    ]
  },
  explore:{
    eyebrow:"Jenseits des Hotels",
    heading:{ script:"E", rest:"ntdecken Sie Sur", full:"Entdecken Sie Sur" },
    intro:"Sur ist seit Jahrhunderten Omans Hauptstadt des Dhau-Baus — und das Tor zu einigen der bekanntesten Tagesausflüge der Küste Sharqiyah.",
    tags:["Erbe","Abenteuer","Natur"],
    badge_title:"Wadi Shab",
    badge_meta:"Etwa 45 Minuten mit dem Auto",
    badge_cta:"Auf der Karte ansehen",
    captions:{
      bimmah:{name:"Bimmah-Sinkhole", meta:"30 Min. Fahrt"},
      turtles:{name:"Ras-al-Jinz-Schildkrötenreservat", meta:"1 Std. Fahrt"},
      dhow:{name:"Dhau-Werft", meta:"5 Min. zu Fuß"},
      lighthouse:{name:"Leuchtturm von Al Ayjah", meta:"Wassertaxi über die Bucht"},
      souq:{name:"Souk von Sur", meta:"Direkt vor der Tür"}
    }
  },
  testimonials:{
    eyebrow:"Was Gäste sagen",
    heading:{ script:"S", rest:"ehr gut bewertet", full:"Sehr gut bewertet" },
    score_value:"8.0",
    score_label:"Sehr gut · 581 Bewertungen",
    bars:[ {label:"Personal", value:95}, {label:"Lage", value:87}, {label:"Preis-Leistung", value:86}, {label:"Sauberkeit", value:83} ],
    items:[
      {quote:"Das Zimmer war sehr komfortabel und der Empfang beim Check-in war wirklich großartig — das Personal war freundlich und hilfsbereit. Die Lage war gut und nah an den wichtigsten Sehenswürdigkeiten von Sur.", name:"Justin", meta:"Südafrika"},
      {quote:"Nasser und sein Team haben großartige Arbeit geleistet. Schlicht, unkompliziert, mitten in Sur. Sehr gutes Preis-Leistungs-Verhältnis. Komme gerne wieder.", name:"Nick", meta:"USA"},
      {quote:"Sehr freundliches und entgegenkommendes Personal. Man geht hier wirklich die Extrameile für die Gäste. Nah am Markt und in der Nähe verschiedener Sehenswürdigkeiten von Sur.", name:"Naim", meta:"Deutschland"}
    ],
    source_note:"Gästebewertungen via Booking.com"
  },
  info:{
    checkin:{label:"Check-in", value:"15:00 – 19:00 Uhr"},
    checkout:{label:"Check-out", value:"6:00 – 11:00 Uhr"},
    beach:{label:"Zum Strand", value:"6 Gehminuten"},
    payment:{label:"Zahlung", value:"Nur Barzahlung"}
  },
  ctaFooter:{
    statement:{ script:"B", rest:"ereit, Sur zu entdecken?", full:"Bereit, Sur zu entdecken?" },
    body:"Reservieren Sie direkt über Booking.com — Preise, Termine und Stornobedingungen werden beim Checkout angezeigt."
  },
  footer:{
    links:["Hausordnung","Datenschutz","Kontakt"],
    rights:"© 2026 Sur Hotel. Alle Rechte vorbehalten.",
    note:"Sur, Oman · Nur Barzahlung möglich"
  },
  alts:{
    hero:"Leuchtturm von Al Ayjah auf der anderen Seite der Bucht von Sur, Oman",
    dhow:"Traditionelle Holz-Dhaus im Bau in der Werft von Sur",
    city:"Blick über die Dächer der Stadt Sur, Oman",
    creek:"Bucht und Fußgängerbrücke von Al Ayjah in Sur",
    wadiShab:"Türkisfarbene Becken und Schluchtwände im Wadi Shab, Oman",
    bimmah:"Türkisfarbenes Wasser im Bimmah-Sinkhole, Oman",
    turtles:"Eine Grüne Meeresschildkröte am Strand von Ras al-Jinz, Oman",
    lighthouse:"Der weiße Leuchtturm von Al Ayjah, Sur",
    souq:"Händler und Kunden auf dem Fischsouk in Sur, Oman",
    exterior:"Das Gebäude des Sur Hotel mit Eingang und Geschäften im Erdgeschoss, Sur, Oman"
  }
},

it: {
  dir:"ltr",
  meta_title:"Sur Hotel — Sur, Oman",
  nav:{ home:"Home", about:"Chi siamo", rooms:"Camere", explore:"Scopri Sur", contact:"Contatti", reserve:"Prenota ora" },
  hero:{
    year:"2026",
    tagline:"Una base economica nel cuore di Sur, a pochi minuti dal souk, dalla spiaggia e dal cantiere dei dhow dell’Oman.",
    location:"Sur · Oman",
    cta:"Vedi le camere"
  },
  about:{
    eyebrow:"Sull'hotel",
    statement:{ script:"S", rest:"iamo un hotel semplice e ben posizionato nel cuore di Sur, pensato per chi preferisce passare il tempo sulla costa piuttosto che in camera.", full:"Siamo un hotel semplice e ben posizionato nel cuore di Sur, pensato per chi preferisce passare il tempo sulla costa piuttosto che in camera." },
    p1:"Ogni camera ha aria condizionata, bagno privato, doccia, pavimento in moquette e TV: comoda e senza fronzoli, curata da uno staff per cui i nostri ospiti tornano volentieri.",
    p2:"La spiaggia di Sur è a sei minuti a piedi, il souk è proprio all'uscita, e la colazione — continentale, italiana, vegetariana o asiatica — viene servita in camera ogni mattina.",
    cta:"Vedi le camere →"
  },
  rooms:{
    eyebrow:"Dove soggiornerai",
    heading:{ script:"S", rest:"emplice, comoda, ospitale", full:"Semplice, comoda, ospitale" },
    intro:"Tre tipologie di camera, tutte con aria condizionata e bagno privato: scegli quella adatta al tuo gruppo.",
    cta:"Verifica disponibilità",
    items:[
      {name:"Camera Singola", meta:"1 letto singolo · per 1 ospite", desc:"Una camera comoda ed essenziale per un ospite, nel cuore di Sur."},
      {name:"Camera Doppia", meta:"1 letto matrimoniale · per 2 ospiti", desc:"Una comoda camera doppia vicino al souk di Sur e alla corniche."},
      {name:"Camera Twin", meta:"2 letti singoli · per 2 ospiti", desc:"Due letti separati con tutto il necessario per un soggiorno confortevole a Sur."}
    ]
  },
  explore:{
    eyebrow:"Oltre l'hotel",
    heading:{ script:"S", rest:"copri Sur", full:"Scopri Sur" },
    intro:"Sur è da secoli la capitale omanita della costruzione dei dhow, ed è la porta d'accesso ad alcune delle gite più note della costa dello Sharqiyah.",
    tags:["Patrimonio","Avventura","Natura"],
    badge_title:"Wadi Shab",
    badge_meta:"Circa 45 minuti in auto",
    badge_cta:"Vedi sulla mappa",
    captions:{
      bimmah:{name:"Bimmah Sinkhole", meta:"30 min in auto"},
      turtles:{name:"Riserva delle tartarughe di Ras al-Jinz", meta:"1 ora in auto"},
      dhow:{name:"Cantiere dei dhow", meta:"5 min a piedi"},
      lighthouse:{name:"Faro di Al Ayjah", meta:"Taxi d'acqua attraverso l'insenatura"},
      souq:{name:"Souk di Sur", meta:"Proprio all'uscita dell'hotel"}
    }
  },
  testimonials:{
    eyebrow:"Cosa dicono gli ospiti",
    heading:{ script:"V", rest:"alutazione: Molto Buono", full:"Valutazione: Molto Buono" },
    score_value:"8.0",
    score_label:"Molto buono · 581 recensioni",
    bars:[ {label:"Staff", value:95}, {label:"Posizione", value:87}, {label:"Rapporto qualità-prezzo", value:86}, {label:"Pulizia", value:83} ],
    items:[
      {quote:"La camera era molto comoda e l'accoglienza al check-in davvero ottima — lo staff era gentile e disponibile. La posizione era buona e vicina alle principali attrazioni di Sur.", name:"Justin", meta:"Sudafrica"},
      {quote:"Nasser e il suo team hanno fatto un ottimo lavoro. Hotel semplice, senza fronzoli, nel cuore di Sur. Ottimo rapporto qualità-prezzo. Tornerò volentieri.", name:"Nick", meta:"Stati Uniti"},
      {quote:"Staff molto cordiale e disponibile. Fanno davvero di tutto per gli ospiti. Vicino al mercato e a diverse attrazioni di Sur.", name:"Naim", meta:"Germania"}
    ],
    source_note:"Recensioni degli ospiti via Booking.com"
  },
  info:{
    checkin:{label:"Check-in", value:"15:00 – 19:00"},
    checkout:{label:"Check-out", value:"6:00 – 11:00"},
    beach:{label:"Alla spiaggia", value:"6 minuti a piedi"},
    payment:{label:"Pagamento", value:"Solo contanti"}
  },
  ctaFooter:{
    statement:{ script:"P", rest:"ronti a scoprire Sur?", full:"Pronti a scoprire Sur?" },
    body:"Prenota direttamente su Booking.com: tariffe, date e condizioni di cancellazione sono indicate al momento del pagamento."
  },
  footer:{
    links:["Regolamento","Privacy","Contatti"],
    rights:"© 2026 Sur Hotel. Tutti i diritti riservati.",
    note:"Sur, Oman · Pagamento in contanti accettato"
  },
  alts:{
    hero:"Faro di Al Ayjah visto dall'altra parte dell'insenatura di Sur, Oman",
    dhow:"Dhow tradizionali in legno in costruzione nel cantiere di Sur",
    city:"Vista sui tetti della città di Sur, Oman",
    creek:"Insenatura e passerella di Al Ayjah a Sur",
    wadiShab:"Piscine turchesi e pareti del canyon a Wadi Shab, Oman",
    bimmah:"Acqua turchese all'interno del Bimmah Sinkhole, Oman",
    turtles:"Una tartaruga verde sulla spiaggia di Ras al-Jinz, Oman",
    lighthouse:"Il faro bianco di Al Ayjah, Sur",
    souq:"Venditori e clienti al souk del pesce di Sur, Oman",
    exterior:"L'edificio del Sur Hotel con l'ingresso e i negozi al piano terra, Sur, Oman"
  }
},

ar: {
  dir:"rtl",
  meta_title:"فندق صور — صور، عُمان",
  nav:{ home:"الرئيسية", about:"من نحن", rooms:"الغرف", explore:"استكشف صور", contact:"تواصل معنا", reserve:"احجز الآن" },
  hero:{
    year:"2026",
    tagline:"مقر اقتصادي في قلب مدينة صور، على بعد دقائق من السوق والشاطئ وميناء بناء السفن الشراعية في عُمان.",
    location:"صور · عُمان",
    cta:"شاهد الغرف"
  },
  about:{
    eyebrow:"عن الفندق",
    statement:{ full:"نحن فندق بسيط وجيد الموقع في قلب مدينة صور، صُمّم للمسافرين الذين يفضّلون قضاء وقتهم على الساحل بدلاً من الغرفة." },
    p1:"كل غرفة مكيفة، مع حمام خاص، دش وأرضية موكيتة وتلفاز — مريحة وبسيطة، يعتني بها فريق يجعل ضيوفنا يعودون دائمًا.",
    p2:"شاطئ صور يبعد ست دقائق سيرًا على الأقدام، والسوق على الباب، ويُقدّم الإفطار — قاري أو إيطالي أو نباتي أو آسيوي — في الغرفة كل صباح.",
    cta:"شاهد الغرف ←"
  },
  rooms:{
    eyebrow:"أين ستقيم",
    heading:{ full:"غرف بسيطة ومريحة" },
    intro:"ثلاثة أنواع من الغرف، كل منها مكيف ومع حمام خاص — اختر ما يناسب عدد أفراد مجموعتك.",
    cta:"تحقق من التوفر",
    items:[
      {name:"غرفة فردية", meta:"سرير مفرد واحد · لنزيل واحد", desc:"غرفة مريحة وعملية لنزيل واحد في قلب مدينة صور."},
      {name:"غرفة مزدوجة", meta:"سرير مزدوج واحد · لنزيلين", desc:"غرفة مزدوجة مريحة بالقرب من سوق صور والكورنيش."},
      {name:"غرفة توأم", meta:"سريران مفردان · لنزيلين", desc:"سريران منفصلان مع كل ما يلزم لإقامة مريحة في صور."}
    ]
  },
  explore:{
    eyebrow:"خارج الفندق",
    heading:{ full:"استكشف صور" },
    intro:"ظلت صور عاصمة بناء السفن الشراعية في عُمان لقرون، وهي بوابة العبور إلى بعض أشهر رحلات اليوم الواحد على ساحل الشرقية.",
    tags:["تراث","مغامرة","طبيعة"],
    badge_title:"وادي الشاب",
    badge_meta:"حوالي 45 دقيقة بالسيارة",
    badge_cta:"العرض على الخريطة",
    captions:{
      bimmah:{name:"بئر بيمة", meta:"30 دقيقة بالسيارة"},
      turtles:{name:"محمية رأس الجنز للسلاحف", meta:"ساعة بالسيارة"},
      dhow:{name:"مصنع بناء السفن", meta:"5 دقائق مشيًا"},
      lighthouse:{name:"منارة العيجة", meta:"قارب مائي عبر الخور"},
      souq:{name:"سوق صور", meta:"على باب الفندق"}
    }
  },
  testimonials:{
    eyebrow:"ما يقوله النزلاء",
    heading:{ full:"تقييم جيد جدًا" },
    score_value:"8.0",
    score_label:"جيد جدًا · 581 تقييمًا",
    bars:[ {label:"الطاقم", value:95}, {label:"الموقع", value:87}, {label:"القيمة مقابل السعر", value:86}, {label:"النظافة", value:83} ],
    items:[
      {quote:"كانت الغرفة مريحة جدًا وكان الاستقبال عند التسجيل رائعًا حقًا — كان الطاقم ودودًا ومتعاونًا. الموقع كان جيدًا وقريبًا من أهم معالم صور.", name:"جاستن", meta:"جنوب أفريقيا"},
      {quote:"قام ناصر وفريقه بعمل رائع. فندق بسيط وبلا تكلف في قلب صور. قيمة رائعة مقابل السعر. سأعود مجددًا.", name:"نيك", meta:"الولايات المتحدة"},
      {quote:"طاقم ودود جدًا ومتعاون. يبذلون جهدًا إضافيًا من أجلك. قريب من السوق ومن معالم مختلفة في صور.", name:"نعيم", meta:"ألمانيا"}
    ],
    source_note:"آراء النزلاء عبر Booking.com"
  },
  info:{
    checkin:{label:"تسجيل الوصول", value:"3:00 – 7:00 مساءً"},
    checkout:{label:"تسجيل المغادرة", value:"6:00 – 11:00 صباحًا"},
    beach:{label:"إلى الشاطئ", value:"6 دقائق مشيًا"},
    payment:{label:"الدفع", value:"نقدًا فقط"}
  },
  ctaFooter:{
    statement:{ full:"هل أنت مستعد لاستكشاف صور؟" },
    body:"احجز مباشرة عبر Booking.com — وتظهر الأسعار والتواريخ وشروط الإلغاء عند إتمام الحجز."
  },
  footer:{
    links:["قواعد المنزل","سياسة الخصوصية","تواصل معنا"],
    rights:"© 2026 Sur Hotel. جميع الحقوق محفوظة.",
    note:"صور، عُمان · يُقبل الدفع نقدًا فقط"
  },
  alts:{
    hero:"منارة العيجة عبر الخور من صور، عُمان",
    dhow:"قوارب خشبية تقليدية قيد البناء في مصنع السفن بصور",
    city:"إطلالة على أسطح مدينة صور، عُمان",
    creek:"خور وجسر العيجة في صور",
    wadiShab:"برك مياه فيروزية وجدران الوادي في وادي الشاب، عُمان",
    bimmah:"مياه فيروزية داخل بئر بيمة، عُمان",
    turtles:"سلحفاة خضراء على شاطئ رأس الجنز، عُمان",
    lighthouse:"منارة العيجة البيضاء في صور",
    souq:"باعة ومتسوقون في سوق السمك في صور، عُمان",
    exterior:"مبنى فندق صور بمدخله ومحلاته التجارية في الطابق الأرضي، صور، عُمان"
  }
},

zh: {
  dir:"ltr",
  meta_title:"苏尔酒店 — 阿曼苏尔",
  nav:{ home:"首页", about:"关于我们", rooms:"客房", explore:"探索苏尔", contact:"联系我们", reserve:"立即预订" },
  hero:{
    year:"2026",
    tagline:"位于苏尔市中心的实惠住宿，步行可达集市、海滩与阿曼传统造船港。",
    location:"苏尔 · 阿曼",
    cta:"查看客房"
  },
  about:{
    eyebrow:"酒店介绍",
    statement:{ full:"我们是一家位置绝佳、简单舒适的酒店，位于苏尔市中心，专为那些更想把时间留给海岸而非客房的旅人而建。" },
    p1:"每间客房均配有空调、独立卫浴、淋浴与电视，舒适不繁琐，并由一支让客人乐于再次光临的团队精心照料。",
    p2:"步行至苏尔海滩只需六分钟，集市就在门口，早餐（西式、意大利、素食或亚洲风味）每日送至客房。",
    cta:"查看客房 →"
  },
  rooms:{
    eyebrow:"下榻之处",
    heading:{ full:"简单舒适的客房" },
    intro:"三种客房类型，均配有空调与独立卫浴——选择适合您出行人数的一间。",
    cta:"查看空房",
    items:[
      {name:"单人房", meta:"1张单人床 · 可住1人", desc:"舒适实用的单人房，地处苏尔市中心。"},
      {name:"双人房", meta:"1张大床 · 可住2人", desc:"舒适的双人房，靠近苏尔集市与海滨大道。"},
      {name:"双床房", meta:"2张单人床 · 可住2人", desc:"两张独立床铺，配备舒适苏尔之旅所需的一切。"}
    ]
  },
  explore:{
    eyebrow:"酒店之外",
    heading:{ full:"探索苏尔" },
    intro:"数个世纪以来，苏尔一直是阿曼的传统造船之都，也是前往东部沿海地区许多知名一日游景点的门户。",
    tags:["文化遗产","户外冒险","自然风光"],
    badge_title:"瓦迪·沙布",
    badge_meta:"驾车约 45 分钟",
    badge_cta:"在地图上查看",
    captions:{
      bimmah:{name:"比马天坑", meta:"驾车 30 分钟"},
      turtles:{name:"拉斯·金兹海龟保护区", meta:"驾车 1 小时"},
      dhow:{name:"传统造船厂", meta:"步行 5 分钟"},
      lighthouse:{name:"艾伊吉亚灯塔", meta:"摆渡水道的水上出租车"},
      souq:{name:"苏尔集市", meta:"酒店门口"}
    }
  },
  testimonials:{
    eyebrow:"客人评价",
    heading:{ full:"“很棒”评级" },
    score_value:"8.0",
    score_label:"很棒 · 581条点评",
    bars:[ {label:"服务", value:95}, {label:"位置", value:87}, {label:"性价比", value:86}, {label:"整洁度", value:83} ],
    items:[
      {quote:"房间非常舒适，入住登记时的接待也很棒——员工友好且乐于助人。位置很好，靠近苏尔的主要景点。", name:"Justin", meta:"南非"},
      {quote:"Nasser和他的团队做得很棒。酒店简洁朴实，位于苏尔市中心，性价比很高，会再次入住。", name:"Nick", meta:"美国"},
      {quote:"员工非常友好且乐于助人，会为客人多付出一分。靠近市集，离苏尔的各个景点也很近。", name:"Naim", meta:"德国"}
    ],
    source_note:"客人评价来自 Booking.com"
  },
  info:{
    checkin:{label:"入住时间", value:"下午3:00 – 晚上7:00"},
    checkout:{label:"退房时间", value:"上午6:00 – 11:00"},
    beach:{label:"至海滩", value:"步行6分钟"},
    payment:{label:"支付方式", value:"仅收现金"}
  },
  ctaFooter:{
    statement:{ full:"准备好探索苏尔了吗？" },
    body:"通过 Booking.com 直接预订——完整价格、日期与取消政策将在结账时显示。"
  },
  footer:{
    links:["入住须知","隐私政策","联系我们"],
    rights:"© 2026 Sur Hotel. 保留所有权利。",
    note:"苏尔，阿曼 · 仅接受现金支付"
  },
  alts:{
    hero:"隔水相望的苏尔艾伊吉亚灯塔，阿曼",
    dhow:"苏尔造船厂内正在建造的传统木质帆船",
    city:"阿曼苏尔城屋顶景观",
    creek:"苏尔艾伊吉亚湾及人行桥",
    wadiShab:"阿曼瓦迪·沙布的青绿色水池与峡谷岩壁",
    bimmah:"阿曼比马天坑内的青绿色湖水",
    turtles:"阿曼拉斯·金兹海滩上的绿海龟",
    lighthouse:"苏尔艾伊吉亚白色灯塔",
    souq:"阿曼苏尔鱼市上的摊贩与顾客",
    exterior:"苏尔酒店大楼，可见临街入口与底层商铺，阿曼苏尔"
  }
},

nl: {
  dir:"ltr",
  meta_title:"Sur Hotel — Sur, Oman",
  nav:{ home:"Home", about:"Over ons", rooms:"Kamers", explore:"Ontdek Sur", contact:"Contact", reserve:"Nu reserveren" },
  hero:{
    year:"2026",
    tagline:"Een voordelige uitvalsbasis in het hart van Sur, op minuten van de soek, het strand en Omans dhow-scheepswerf.",
    location:"Sur · Oman",
    cta:"Bekijk de kamers"
  },
  about:{
    eyebrow:"Over het hotel",
    statement:{ script:"W", rest:"e zijn een eenvoudig, goed gelegen hotel midden in Sur, gebouwd voor reizigers die hun tijd liever aan de kust doorbrengen dan op de kamer.", full:"We zijn een eenvoudig, goed gelegen hotel midden in Sur, gebouwd voor reizigers die hun tijd liever aan de kust doorbrengen dan op de kamer." },
    p1:"Elke kamer heeft airconditioning, een eigen badkamer met douche, vloerbedekking en tv — comfortabel en ongecompliceerd, verzorgd door een team waar onze gasten graag voor terugkomen.",
    p2:"Het strand van Sur ligt op zes minuten lopen, de soek voor de deur, en het ontbijt — continentaal, Italiaans, vegetarisch of Aziatisch — wordt elke ochtend op de kamer geserveerd.",
    cta:"Bekijk de kamers →"
  },
  rooms:{
    eyebrow:"Waar u verblijft",
    heading:{ script:"E", rest:"envoudige, comfortabele kamers", full:"Eenvoudige, comfortabele kamers" },
    intro:"Drie kamertypes, elk met airconditioning en een eigen badkamer — kies wat past bij uw reisgezelschap.",
    cta:"Beschikbaarheid controleren",
    items:[
      {name:"Eenpersoonskamer", meta:"1 eenpersoonsbed · voor 1 gast", desc:"Een comfortabele, praktische kamer voor één gast in het centrum van Sur."},
      {name:"Tweepersoonskamer", meta:"1 tweepersoonsbed · voor 2 gasten", desc:"Een comfortabele tweepersoonskamer dicht bij de soek van Sur en de boulevard."},
      {name:"Twinkamer", meta:"2 eenpersoonsbedden · voor 2 gasten", desc:"Twee aparte bedden met alles wat nodig is voor een comfortabel verblijf in Sur."}
    ]
  },
  explore:{
    eyebrow:"Buiten het hotel",
    heading:{ script:"O", rest:"ntdek Sur", full:"Ontdek Sur" },
    intro:"Sur is al eeuwenlang Omans hoofdstad van de dhow-bouw, en de poort naar enkele van de bekendste dagtochten aan de Sharqiyah-kust.",
    tags:["Erfgoed","Avontuur","Natuur"],
    badge_title:"Wadi Shab",
    badge_meta:"Ongeveer 45 minuten met de auto",
    badge_cta:"Bekijk op de kaart",
    captions:{
      bimmah:{name:"Bimmah-sinkhole", meta:"30 min rijden"},
      turtles:{name:"Schildpaddenreservaat Ras Al Jinz", meta:"1 uur rijden"},
      dhow:{name:"Dhow-scheepswerf", meta:"5 min lopen"},
      lighthouse:{name:"Vuurtoren van Al Ayjah", meta:"Watertaxi over de inham"},
      souq:{name:"Soek van Sur", meta:"Voor de deur van het hotel"}
    }
  },
  testimonials:{
    eyebrow:"Wat gasten zeggen",
    heading:{ script:"Z", rest:"eer goed beoordeeld", full:"Zeer goed beoordeeld" },
    score_value:"8.0",
    score_label:"Zeer goed · 581 beoordelingen",
    bars:[ {label:"Personeel", value:95}, {label:"Locatie", value:87}, {label:"Prijs-kwaliteit", value:86}, {label:"Netheid", value:83} ],
    items:[
      {quote:"De kamer was erg comfortabel en de ontvangst bij het inchecken was echt geweldig — het personeel was vriendelijk en behulpzaam. De locatie was goed en dicht bij de belangrijkste bezienswaardigheden van Sur.", name:"Justin", meta:"Zuid-Afrika"},
      {quote:"Nasser en zijn team hebben geweldig werk geleverd. Eenvoudig, no-nonsense hotel midden in Sur. Uitstekende prijs-kwaliteitverhouding. Kom graag terug.", name:"Nick", meta:"Verenigde Staten"},
      {quote:"Zeer vriendelijk en behulpzaam personeel. Ze doen echt een stap extra voor je. Dicht bij de markt en verschillende bezienswaardigheden in Sur.", name:"Naim", meta:"Duitsland"}
    ],
    source_note:"Beoordelingen van gasten via Booking.com"
  },
  info:{
    checkin:{label:"Inchecken", value:"15:00 – 19:00 uur"},
    checkout:{label:"Uitchecken", value:"6:00 – 11:00 uur"},
    beach:{label:"Naar het strand", value:"6 minuten lopen"},
    payment:{label:"Betaling", value:"Alleen contant"}
  },
  ctaFooter:{
    statement:{ script:"K", rest:"laar om Sur te ontdekken?", full:"Klaar om Sur te ontdekken?" },
    body:"Reserveer rechtstreeks via Booking.com — volledige tarieven, data en annuleringsvoorwaarden worden bij het afrekenen getoond."
  },
  footer:{
    links:["Huisregels","Privacybeleid","Contact"],
    rights:"© 2026 Sur Hotel. Alle rechten voorbehouden.",
    note:"Sur, Oman · Alleen contante betaling"
  },
  alts:{
    hero:"Vuurtoren van Al Ayjah aan de overkant van de inham vanuit Sur, Oman",
    dhow:"Traditionele houten dhows in aanbouw op de scheepswerf van Sur",
    city:"Uitzicht over de daken van de stad Sur, Oman",
    creek:"Inham en voetgangersbrug van Al Ayjah in Sur, Oman",
    wadiShab:"Turkooizen poelen en kloofwanden bij Wadi Shab, Oman",
    bimmah:"Turkoois water in de Bimmah-sinkhole, Oman",
    turtles:"Een groene zeeschildpad op het strand van Ras Al Jinz, Oman",
    lighthouse:"De witte vuurtoren van Al Ayjah, Sur",
    souq:"Verkopers en klanten op de vismarkt (soek) van Sur, Oman",
    exterior:"Het gebouw van Sur Hotel met de ingang en winkels op de begane grond, Sur, Oman"
  }
},

fr: {
  dir:"ltr",
  meta_title:"Sur Hotel — Sour, Oman",
  nav:{ home:"Accueil", about:"À propos", rooms:"Chambres", explore:"Découvrir Sour", contact:"Contact", reserve:"Réserver" },
  hero:{
    year:"2026",
    tagline:"Une base abordable au cœur de Sour, à quelques minutes du souk, de la plage et du chantier de boutres d'Oman.",
    location:"Sour · Oman",
    cta:"Voir les chambres"
  },
  about:{
    eyebrow:"À propos de l'hôtel",
    statement:{ script:"N", rest:"ous sommes un hôtel simple et bien situé au cœur de Sour, pensé pour les voyageurs qui préfèrent passer leur temps sur la côte plutôt que dans leur chambre.", full:"Nous sommes un hôtel simple et bien situé au cœur de Sour, pensé pour les voyageurs qui préfèrent passer leur temps sur la côte plutôt que dans leur chambre." },
    p1:"Chaque chambre est climatisée, avec salle de bains privative, douche, moquette et télévision — confortable et sans chichis, entretenue par une équipe que nos clients aiment retrouver.",
    p2:"La plage de Sour est à six minutes à pied, le souk est à la porte, et le petit-déjeuner — continental, italien, végétarien ou asiatique — est servi en chambre chaque matin.",
    cta:"Voir les chambres →"
  },
  rooms:{
    eyebrow:"Où vous séjournerez",
    heading:{ script:"D", rest:"es chambres simples et confortables", full:"Des chambres simples et confortables" },
    intro:"Trois types de chambres, toutes climatisées avec salle de bains privative — choisissez celle qui convient à votre groupe.",
    cta:"Vérifier les disponibilités",
    items:[
      {name:"Chambre simple", meta:"1 lit simple · pour 1 personne", desc:"Une chambre confortable et pratique pour une personne, au cœur de Sour."},
      {name:"Chambre double", meta:"1 grand lit · pour 2 personnes", desc:"Une chambre double confortable, proche du souk de Sour et de la corniche."},
      {name:"Chambre twin", meta:"2 lits simples · pour 2 personnes", desc:"Deux lits séparés avec tout le nécessaire pour un séjour confortable à Sour."}
    ]
  },
  explore:{
    eyebrow:"Au-delà de l'hôtel",
    heading:{ script:"D", rest:"écouvrir Sour", full:"Découvrir Sour" },
    intro:"Sour est depuis des siècles la capitale omanaise de la construction de boutres, et la porte d'entrée vers certaines des excursions d'une journée les plus réputées de la côte du Sharqiyah.",
    tags:["Patrimoine","Aventure","Nature"],
    badge_title:"Wadi Shab",
    badge_meta:"Environ 45 minutes en voiture",
    badge_cta:"Voir sur la carte",
    captions:{
      bimmah:{name:"Gouffre de Bimmah", meta:"30 min en voiture"},
      turtles:{name:"Réserve de tortues de Ras Al Jinz", meta:"1 h en voiture"},
      dhow:{name:"Chantier de construction de boutres", meta:"5 min à pied"},
      lighthouse:{name:"Phare d'Al Ayjah", meta:"Taxi-bateau à travers la crique"},
      souq:{name:"Souk de Sour", meta:"À la porte de l'hôtel"}
    }
  },
  testimonials:{
    eyebrow:"Avis des clients",
    heading:{ script:"T", rest:"rès bien noté", full:"Très bien noté" },
    score_value:"8.0",
    score_label:"Très bien · 581 avis",
    bars:[ {label:"Personnel", value:95}, {label:"Emplacement", value:87}, {label:"Rapport qualité-prix", value:86}, {label:"Propreté", value:83} ],
    items:[
      {quote:"La chambre était très confortable et l'accueil à l'arrivée vraiment excellent — le personnel était sympathique et serviable. L'emplacement était bon, proche des principaux sites de Sour.", name:"Justin", meta:"Afrique du Sud"},
      {quote:"Nasser et son équipe ont fait un excellent travail. Hôtel simple et sans chichis, au cœur de Sour. Excellent rapport qualité-prix. Je reviendrai avec plaisir.", name:"Nick", meta:"États-Unis"},
      {quote:"Personnel très sympathique et serviable. Ils vont vraiment plus loin pour vous. Proche du marché et de plusieurs sites de Sour.", name:"Naim", meta:"Allemagne"}
    ],
    source_note:"Avis des clients via Booking.com"
  },
  info:{
    checkin:{label:"Arrivée", value:"15h00 – 19h00"},
    checkout:{label:"Départ", value:"6h00 – 11h00"},
    beach:{label:"Jusqu'à la plage", value:"6 minutes à pied"},
    payment:{label:"Paiement", value:"Espèces uniquement"}
  },
  ctaFooter:{
    statement:{ script:"P", rest:"rêt à découvrir Sour ?", full:"Prêt à découvrir Sour ?" },
    body:"Réservez directement via Booking.com — tarifs complets, dates et conditions d'annulation affichés au moment du paiement."
  },
  footer:{
    links:["Règlement intérieur","Politique de confidentialité","Contact"],
    rights:"© 2026 Sur Hotel. Tous droits réservés.",
    note:"Sour, Oman · Paiement en espèces accepté"
  },
  alts:{
    hero:"Le phare d'Al Ayjah de l'autre côté de la crique, vu de Sour, Oman",
    dhow:"Boutres traditionnels en bois en construction au chantier naval de Sour",
    city:"Vue sur les toits de la ville de Sour, Oman",
    creek:"Crique et passerelle d'Al Ayjah à Sour, Oman",
    wadiShab:"Bassins turquoise et parois du canyon à Wadi Shab, Oman",
    bimmah:"Eau turquoise à l'intérieur du gouffre de Bimmah, Oman",
    turtles:"Une tortue verte sur la plage de Ras Al Jinz, Oman",
    lighthouse:"Le phare blanc d'Al Ayjah, Sour",
    souq:"Vendeurs et clients au souk aux poissons de Sour, Oman",
    exterior:"Le bâtiment du Sur Hotel avec son entrée et ses commerces au rez-de-chaussée, Sour, Oman"
  }
},

pt: {
  dir:"ltr",
  meta_title:"Sur Hotel — Sur, Omã",
  nav:{ home:"Início", about:"Sobre nós", rooms:"Quartos", explore:"Explorar Sur", contact:"Contacto", reserve:"Reservar agora" },
  hero:{
    year:"2026",
    tagline:"Uma base económica no coração de Sur, a poucos minutos do souk, da praia e do estaleiro de dhows de Omã.",
    location:"Sur · Omã",
    cta:"Ver os quartos"
  },
  about:{
    eyebrow:"Sobre o hotel",
    statement:{ script:"S", rest:"omos um hotel simples e bem localizado no coração de Sur, feito para viajantes que preferem passar o tempo na costa em vez de no quarto.", full:"Somos um hotel simples e bem localizado no coração de Sur, feito para viajantes que preferem passar o tempo na costa em vez de no quarto." },
    p1:"Todos os quartos têm ar-condicionado, casa de banho privativa com duche, piso alcatifado e TV — confortáveis e sem complicações, cuidados por uma equipa à qual os nossos hóspedes voltam sempre.",
    p2:"A praia de Sur fica a seis minutos a pé, o souk fica à porta, e o pequeno-almoço — continental, italiano, vegetariano ou asiático — é servido no quarto todas as manhãs.",
    cta:"Ver os quartos →"
  },
  rooms:{
    eyebrow:"Onde vai ficar",
    heading:{ script:"Q", rest:"uartos simples e confortáveis", full:"Quartos simples e confortáveis" },
    intro:"Três tipos de quarto, todos com ar-condicionado e casa de banho privativa — escolha o que combina com o seu grupo.",
    cta:"Verificar disponibilidade",
    items:[
      {name:"Quarto Individual", meta:"1 cama de solteiro · para 1 hóspede", desc:"Um quarto confortável e prático para um hóspede, no centro de Sur."},
      {name:"Quarto Duplo", meta:"1 cama de casal · para 2 hóspedes", desc:"Um quarto duplo confortável perto do souk de Sur e da marginal."},
      {name:"Quarto Twin", meta:"2 camas de solteiro · para 2 hóspedes", desc:"Duas camas separadas com tudo o que é preciso para uma estadia confortável em Sur."}
    ]
  },
  explore:{
    eyebrow:"Além do hotel",
    heading:{ script:"E", rest:"xplorar Sur", full:"Explorar Sur" },
    intro:"Sur é há séculos a capital omanense da construção de dhows, e é a porta de entrada para alguns dos passeios de um dia mais conhecidos da costa de Sharqiyah.",
    tags:["Património","Aventura","Natureza"],
    badge_title:"Wadi Shab",
    badge_meta:"Cerca de 45 minutos de carro",
    badge_cta:"Ver no mapa",
    captions:{
      bimmah:{name:"Dolina de Bimmah", meta:"30 min de carro"},
      turtles:{name:"Reserva de Tartarugas de Ras Al Jinz", meta:"1 h de carro"},
      dhow:{name:"Estaleiro de Dhows", meta:"5 min a pé"},
      lighthouse:{name:"Farol de Al Ayjah", meta:"Táxi aquático a atravessar a enseada"},
      souq:{name:"Souk de Sur", meta:"À porta do hotel"}
    }
  },
  testimonials:{
    eyebrow:"O que dizem os hóspedes",
    heading:{ script:"M", rest:"uito bem avaliado", full:"Muito bem avaliado" },
    score_value:"8.0",
    score_label:"Muito bom · 581 avaliações",
    bars:[ {label:"Funcionários", value:95}, {label:"Localização", value:87}, {label:"Relação qualidade-preço", value:86}, {label:"Limpeza", value:83} ],
    items:[
      {quote:"O quarto era muito confortável e a receção no check-in foi realmente ótima — a equipa foi simpática e prestável. A localização era boa e perto das principais atrações de Sur.", name:"Justin", meta:"África do Sul"},
      {quote:"Nasser e a sua equipa fizeram um ótimo trabalho. Hotel simples e sem luxos, no coração de Sur. Ótima relação qualidade-preço. Voltarei com certeza.", name:"Nick", meta:"Estados Unidos"},
      {quote:"Equipa muito simpática e prestável. Fazem sempre um esforço extra por si. Perto do mercado e de vários pontos turísticos de Sur.", name:"Naim", meta:"Alemanha"}
    ],
    source_note:"Avaliações de hóspedes via Booking.com"
  },
  info:{
    checkin:{label:"Check-in", value:"15h00 – 19h00"},
    checkout:{label:"Check-out", value:"6h00 – 11h00"},
    beach:{label:"Até à praia", value:"6 minutos a pé"},
    payment:{label:"Pagamento", value:"Apenas dinheiro"}
  },
  ctaFooter:{
    statement:{ script:"P", rest:"ronto para explorar Sur?", full:"Pronto para explorar Sur?" },
    body:"Reserve diretamente através do Booking.com — tarifas completas, datas e condições de cancelamento apresentadas no checkout."
  },
  footer:{
    links:["Regras da Casa","Política de Privacidade","Contacto"],
    rights:"© 2026 Sur Hotel. Todos os direitos reservados.",
    note:"Sur, Omã · Pagamento em dinheiro aceite"
  },
  alts:{
    hero:"Farol de Al Ayjah do outro lado da enseada, visto de Sur, Omã",
    dhow:"Dhows tradicionais de madeira em construção no estaleiro de Sur",
    city:"Vista dos telhados da cidade de Sur, Omã",
    creek:"Enseada e passadiço de Al Ayjah em Sur, Omã",
    wadiShab:"Piscinas turquesa e paredes do desfiladeiro em Wadi Shab, Omã",
    bimmah:"Água turquesa dentro da Dolina de Bimmah, Omã",
    turtles:"Uma tartaruga verde na praia de Ras Al Jinz, Omã",
    lighthouse:"O farol branco de Al Ayjah, Sur",
    souq:"Vendedores e clientes no souk de peixe de Sur, Omã",
    exterior:"O edifício do Sur Hotel com a entrada e as lojas no piso térreo, Sur, Omã"
  }
},

ru: {
  dir:"ltr",
  meta_title:"Отель Сур — Сур, Оман",
  nav:{ home:"Главная", about:"О нас", rooms:"Номера", explore:"Исследуйте Сур", contact:"Контакты", reserve:"Забронировать" },
  hero:{
    year:"2026",
    tagline:"Бюджетная база в самом центре Сура, в нескольких минутах от рынка, пляжа и оманской верфи традиционных доу.",
    location:"Сур · Оман",
    cta:"Смотреть номера"
  },
  about:{
    eyebrow:"Об отеле",
    statement:{ full:"Мы — простой, удачно расположенный отель в центре Сура, созданный для путешественников, которые предпочитают проводить время на побережье, а не в номере." },
    p1:"В каждом номере есть кондиционер, собственная ванная комната с душем, ковровое покрытие и телевизор — комфортно и без лишнего, а заботится обо всём команда, к которой наши гости с удовольствием возвращаются.",
    p2:"Пляж Сура находится в шести минутах ходьбы, рынок — у порога, а завтрак — континентальный, итальянский, вегетарианский или азиатский — подаётся в номер каждое утро.",
    cta:"Смотреть номера →"
  },
  rooms:{
    eyebrow:"Где вы остановитесь",
    heading:{ full:"Простые, комфортные номера" },
    intro:"Три типа номеров, в каждом кондиционер и собственная ванная комната — выберите вариант, который подходит именно вам.",
    cta:"Проверить наличие",
    items:[
      {name:"Одноместный номер", meta:"1 односпальная кровать · на 1 гостя", desc:"Комфортный и практичный номер для одного гостя в центре Сура."},
      {name:"Двухместный номер", meta:"1 двуспальная кровать · на 2 гостей", desc:"Комфортный номер с двуспальной кроватью рядом с рынком Сура и набережной."},
      {name:"Номер с двумя кроватями", meta:"2 односпальные кровати · на 2 гостей", desc:"Две отдельные кровати и всё необходимое для комфортного пребывания в Суре."}
    ]
  },
  explore:{
    eyebrow:"За пределами отеля",
    heading:{ full:"Исследуйте Сур" },
    intro:"Сур веками был оманской столицей судостроения доу, а сегодня это ворота к самым известным однодневным поездкам побережья Эш-Шаркия.",
    tags:["Наследие","Приключения","Природа"],
    badge_title:"Вади-Шаб",
    badge_meta:"Около 45 минут на машине",
    badge_cta:"Смотреть на карте",
    captions:{
      bimmah:{name:"Провал Бимма", meta:"30 мин на машине"},
      turtles:{name:"Заповедник черепах Рас-эль-Джинз", meta:"1 ч на машине"},
      dhow:{name:"Верфь доу", meta:"5 мин пешком"},
      lighthouse:{name:"Маяк Эль-Айджа", meta:"Водное такси через залив"},
      souq:{name:"Рынок Сура", meta:"У порога отеля"}
    }
  },
  testimonials:{
    eyebrow:"Отзывы гостей",
    heading:{ full:"Рейтинг «Очень хорошо»" },
    score_value:"8.0",
    score_label:"Очень хорошо · 581 отзыв",
    bars:[ {label:"Персонал", value:95}, {label:"Расположение", value:87}, {label:"Цена/качество", value:86}, {label:"Чистота", value:83} ],
    items:[
      {quote:"Номер был очень комфортным, а приём при заселении — просто отличным: персонал дружелюбный и отзывчивый. Расположение хорошее, рядом с главными достопримечательностями Сура.", name:"Джастин", meta:"ЮАР"},
      {quote:"Насер и его команда отлично поработали. Простой отель без лишнего в центре Сура. Отличное соотношение цены и качества. Вернусь снова.", name:"Ник", meta:"США"},
      {quote:"Очень дружелюбный и отзывчивый персонал. Всегда готовы сделать больше для гостя. Рядом с рынком и разными достопримечательностями Сура.", name:"Наим", meta:"Германия"}
    ],
    source_note:"Отзывы гостей через Booking.com"
  },
  info:{
    checkin:{label:"Заезд", value:"15:00 – 19:00"},
    checkout:{label:"Выезд", value:"6:00 – 11:00"},
    beach:{label:"До пляжа", value:"6 минут пешком"},
    payment:{label:"Оплата", value:"Только наличные"}
  },
  ctaFooter:{
    statement:{ full:"Готовы исследовать Сур?" },
    body:"Бронируйте напрямую через Booking.com — полные тарифы, даты и условия отмены отображаются при оформлении."
  },
  footer:{
    links:["Правила проживания","Политика конфиденциальности","Контакты"],
    rights:"© 2026 Sur Hotel. Все права защищены.",
    note:"Сур, Оман · Принимается оплата наличными"
  },
  alts:{
    hero:"Маяк Эль-Айджа через залив от Сура, Оман",
    dhow:"Традиционные деревянные доу строятся на верфи Сура",
    city:"Вид на крыши города Сур, Оман",
    creek:"Залив и пешеходный мост Эль-Айджа в Суре",
    wadiShab:"Бирюзовые водоёмы и стены каньона в Вади-Шаб, Оман",
    bimmah:"Бирюзовая вода внутри провала Бимма, Оман",
    turtles:"Зелёная черепаха на пляже Рас-эль-Джинз, Оман",
    lighthouse:"Белый маяк Эль-Айджа, Сур",
    souq:"Продавцы и покупатели на рыбном рынке Сура, Оман",
    exterior:"Здание отеля Sur Hotel со входом и магазинами на первом этаже, Сур, Оман"
  }
},

es: {
  dir:"ltr",
  meta_title:"Sur Hotel — Sur, Omán",
  nav:{ home:"Inicio", about:"Sobre nosotros", rooms:"Habitaciones", explore:"Explorar Sur", contact:"Contacto", reserve:"Reservar ahora" },
  hero:{
    year:"2026",
    tagline:"Una base económica en el corazón de Sur, a minutos del zoco, la playa y el astillero de dhows de Omán.",
    location:"Sur · Omán",
    cta:"Ver las habitaciones"
  },
  about:{
    eyebrow:"Sobre el hotel",
    statement:{ script:"S", rest:"omos un hotel sencillo y bien ubicado en el centro de Sur, pensado para viajeros que prefieren pasar el tiempo en la costa antes que en la habitación.", full:"Somos un hotel sencillo y bien ubicado en el centro de Sur, pensado para viajeros que prefieren pasar el tiempo en la costa antes que en la habitación." },
    p1:"Todas las habitaciones tienen aire acondicionado, baño privado con ducha, suelo enmoquetado y televisión — cómodas y sin complicaciones, cuidadas por un equipo al que nuestros huéspedes vuelven con gusto.",
    p2:"La playa de Sur está a seis minutos a pie, el zoco está en la puerta, y el desayuno — continental, italiano, vegetariano o asiático — se sirve en la habitación cada mañana.",
    cta:"Ver las habitaciones →"
  },
  rooms:{
    eyebrow:"Dónde te alojarás",
    heading:{ script:"H", rest:"abitaciones sencillas y cómodas", full:"Habitaciones sencillas y cómodas" },
    intro:"Tres tipos de habitación, todas con aire acondicionado y baño privado — elige la que se ajuste a tu grupo.",
    cta:"Comprobar disponibilidad",
    items:[
      {name:"Habitación Individual", meta:"1 cama individual · para 1 huésped", desc:"Una habitación cómoda y práctica para un huésped en el centro de Sur."},
      {name:"Habitación Doble", meta:"1 cama de matrimonio · para 2 huéspedes", desc:"Una cómoda habitación doble cerca del zoco de Sur y el paseo marítimo."},
      {name:"Habitación Twin", meta:"2 camas individuales · para 2 huéspedes", desc:"Dos camas separadas con todo lo necesario para una estancia cómoda en Sur."}
    ]
  },
  explore:{
    eyebrow:"Más allá del hotel",
    heading:{ script:"E", rest:"xplorar Sur", full:"Explorar Sur" },
    intro:"Sur ha sido durante siglos la capital omaní de la construcción de dhows, y es la puerta de entrada a algunas de las excursiones de un día más conocidas de la costa de Sharqiyah.",
    tags:["Patrimonio","Aventura","Naturaleza"],
    badge_title:"Wadi Shab",
    badge_meta:"Unos 45 minutos en coche",
    badge_cta:"Ver en el mapa",
    captions:{
      bimmah:{name:"Dolina de Bimmah", meta:"30 min en coche"},
      turtles:{name:"Reserva de Tortugas de Ras Al Jinz", meta:"1 h en coche"},
      dhow:{name:"Astillero de Dhows", meta:"5 min a pie"},
      lighthouse:{name:"Faro de Al Ayjah", meta:"Taxi acuático cruzando la ensenada"},
      souq:{name:"Zoco de Sur", meta:"En la puerta del hotel"}
    }
  },
  testimonials:{
    eyebrow:"Lo que dicen los huéspedes",
    heading:{ script:"M", rest:"uy buena valoración", full:"Muy buena valoración" },
    score_value:"8.0",
    score_label:"Muy bien · 581 opiniones",
    bars:[ {label:"Personal", value:95}, {label:"Ubicación", value:87}, {label:"Relación calidad-precio", value:86}, {label:"Limpieza", value:83} ],
    items:[
      {quote:"La habitación era muy cómoda y la acogida en el check-in fue realmente excelente: el personal fue amable y servicial. La ubicación era buena y cercana a las principales atracciones de Sur.", name:"Justin", meta:"Sudáfrica"},
      {quote:"Nasser y su equipo hicieron un gran trabajo. Hotel sencillo y sin lujos, en el centro de Sur. Muy buena relación calidad-precio. Volveré encantado.", name:"Nick", meta:"Estados Unidos"},
      {quote:"Personal muy amable y servicial. Se esfuerzan de verdad por ayudarte. Cerca del mercado y de varias atracciones de Sur.", name:"Naim", meta:"Alemania"}
    ],
    source_note:"Opiniones de huéspedes vía Booking.com"
  },
  info:{
    checkin:{label:"Entrada", value:"15:00 – 19:00"},
    checkout:{label:"Salida", value:"6:00 – 11:00"},
    beach:{label:"Hasta la playa", value:"6 minutos a pie"},
    payment:{label:"Pago", value:"Solo efectivo"}
  },
  ctaFooter:{
    statement:{ script:"¿", rest:"Listo para explorar Sur?", full:"¿Listo para explorar Sur?" },
    body:"Reserva directamente a través de Booking.com — tarifas completas, fechas y condiciones de cancelación se muestran al finalizar la reserva."
  },
  footer:{
    links:["Normas de la Casa","Política de Privacidad","Contacto"],
    rights:"© 2026 Sur Hotel. Todos los derechos reservados.",
    note:"Sur, Omán · Se acepta pago en efectivo"
  },
  alts:{
    hero:"Faro de Al Ayjah al otro lado de la ensenada desde Sur, Omán",
    dhow:"Dhows tradicionales de madera en construcción en el astillero de Sur",
    city:"Vista de los tejados de la ciudad de Sur, Omán",
    creek:"Ensenada y pasarela de Al Ayjah en Sur, Omán",
    wadiShab:"Piscinas turquesas y paredes del cañón en Wadi Shab, Omán",
    bimmah:"Agua turquesa dentro de la Dolina de Bimmah, Omán",
    turtles:"Una tortuga verde en la playa de Ras Al Jinz, Omán",
    lighthouse:"El faro blanco de Al Ayjah, Sur",
    souq:"Vendedores y compradores en el zoco de pescado de Sur, Omán",
    exterior:"El edificio del Sur Hotel con su entrada y tiendas en la planta baja, Sur, Omán"
  }
}

};
