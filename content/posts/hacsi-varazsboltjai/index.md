---
date: '2026-10-22T20:04:18+02:00'
draft: false
title: 'Hacsi Varázsboltjai'
author: 'Pacsek Antal'
tags:
  - RPG
  - D&D
  - AI

keywords:
  - rpg
  - dnd
  - d&d
  - AI
  - magic shop
  - Hacsi

cover:
  image: 'magic-shop.png'
  alt: 'Varázsboltok'
---


Valamikor 2026 éve eleje környékén merült fel bennem, hogy szükségem lenne egy jó varázstárgy bolt generátorra ezért aztán körül néztem a neten, mert gyanúsnak tűnt, hogy ez a gondolat nem az én fejemben született meg először. És tényleg nem. Egészen ügyes generátorokat találtam, de valahogy egyiknél sem volt meg az _"AHA"_ érzés. Valamelyik túl egyszerű volt, volt ahol a reklámok voltak túl tolakodó helyen - igen tudom, hogy az üzemeltetés árát senkinek nem a legyek hordják össze, de néha egészen használhatatlan az oldal az advertikumok miatt, akkor meg mi értelme? - és így tovább. Szóval semmi nem felelt meg a kényes ízlésemnek.

![Statler és Waldorf](Statler_Waldorf.jpg)

Megkérdeztem persze az [lfg.hu](https://lfg.hu) táborát is, akik természetesen próbáltak segíteni, de az áhított magic shop generátorhoz nem kerültem közelebb. Mondtam, hogy finnyás vagyok ... (3 pont, hogy nyomatékosítsam és plusz rejtett jelentést is adjak a mondatnak, ezt nem régen tanultam).

Természetesen létezhet az álmaim magic shop alkalmazása valahol az interneten, de nem találtam meg. A google nagy erőket fektet abba, hogy a keresőjével ne találja meg az ember amit keres ... áh régen minden jobb volt.

Ott tartottam, hogy kell nekem egy D&D 2024 magic shop valmami, de nincs.

## Random táblázat baszkurálodás - Magic Shop vol 1

Ahogy a mondás tartja, segíts magadon akkor a random táblázat is megsegít.  
Tapasztalt szerepjátékos vagyok, aki nem riad vissza a random tábláktól, bátran nézek farkasszmet a ToAD-nal is, hát ide nekem a világot, majd csinálok ilyen kockadobálós izét én magam.  
Csináltam is. Na jó, elkezdtem aztán valahol a 6. oldal környékén elkapott a WTF érzés.

### Elvárások

Az elvárások természetesen ahogy neki kezdtem, rögtön növekedni kezdtek, mint a fejlesztési projekteknél általban, ahol a megrendelő folyamatosan mozgó célvonallal szórakoztatja az egybegyűlteket.

* vegyük figyelembe a világ/környék mennyire bővelkedik mágiában
* település mérete
* tárgyak gyakorisága (nyilván)
* ár módosító körülmények
* ha nincs a boltban a kívánt varázstárgy, akkor milyen a beszerezhetősége
* beszerzési idő
* beszerzési bónusz felár
* macska színe a boltban
* stb.

Kezdett kicsit bonyolult lenni ahhoz játék közben csak úgy előrántsam. Jobban belegondolva ahhoz is elég bonyolult lett hogy játékra készüléskor elővegyem.  

Némi töprengés után úgy döntöttem, hogy bár menő ez a táblázatos, randomos szütymörgés, azért ez nem az amire vágyom.

## Fejlesszünk rá alkalmazást - Magic Shop vol 2

A dolog úgy adná magát elvégre programozók lennénk vagy mi. Amúgy vagy mi, csak ezt átalában nem értik az emberek. Próbáltam elmagyarázni párszor, de az üveges tekinteteket látva végül mindig oda jutottam, ki, hogy jó akkor programozó vagyok. Ettől megnyugova bólintanak.

Szóval írjuk alkalmazást akkor. Jó de azért ez nem két perc és amúgyis egésznap valami hasonlót csinálok, az úgy eltudja venni az ízét a hobbi projekteknek. El is napoltam a magic shopot pár hónapra. Míg nem ...

### Az AI elveszi a munkánkat

Hát igen. A programozók a 21. század páncélkovácsai, jön az AI és elveszi mindenkinek a munkáját. Elsőként a fejlesztőkét - legalábbis ezt mondják. Azért van benne valami ... (3 pont lásd fentebb)

Na mindegy, mielőtt elveszi a munkámat úgy gondoltam, hogy csináltatok vele egy magic shopot.  

És megcsinálta, de tényleg. Jó nem mindent proptoltam be a követelményeim közül, de a shop az speciel működik.

* multi user
* multi shop
* SRD tárgy katalógus (D&D 2024)
* helyben eltároja a shopokat
* google bejelentkezve a firestorban is
* local és felhő között másolható a shop és tárgy lista
* random tárgy feltöltés a shopba mindenféle paraméter szerint
* egyedi varázstárgyak felvitele
* egyedi árak
* némi rpg támogató elemek

Persze nem csak D&D 2024 -hez használható, azt lehet beletölteni amit csak akarunk. Oké ebben nincs benne a tárgy beszerzéssel kapcsolatos dolgok. Még. De úgy érzem benne lesz.

Anélkül, hogy egyetlen sor kódot írtam volna, csináltam - vagy is az AI csinálta, illetve nem tudom, hogy ilyenkor ki csinálta - egy magic shopot. A neve hihetetlen kreatív módon a **Hacsi's magic shops** lett. Nem volt nagy brainstorming a név kitalálásánál ezt elismerem. Egészen pofás - nem csak ahhoz képest, hogy én mennyire mérhetetlenül béna vagyok minden design területén.

Szóval: [Hacsi's magic shops](https://savingthrow.hu/magic-shop/)

Szerintem meg is fogom osztani a közöséggel, legalább kiderül, hogy kibír-e az ingyenes firestore egynél több felhasználót.
