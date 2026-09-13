---
date: '2026-09-12T21:35:21+02:00'
draft: true
title: 'AI Arnhem'
tags:
  - wargame
  - AI
---

Az első programomat valamikor 9-10 éves korom körül írhattam ZX Spectrum 48K -ra. Itt most nem valami nagy dologra kell gondolni, valami képernyőre rajzolgatás BASIC-ben. Nem mondom, hogy töretlen volt a kapcsolatom a programozással, de már régóta mint fejlesztő dolgozok.  
Egy ideje igazából architect, de ezt senki nem érti, így általában ha kérdezik, hogy mivel foglalkozok azt mondom, hogy programozó vagy fejlesztő vagyok. Ezzel kikerülöm az üveges tekinteteket és a magyarázkodást, aminek az a vége, hogy _"szóval olyan programozó izé"_.

Mivel sok ideig nem találtam olyan stratégiai programot, amely az  - egyesek szerint finnyás - ízlésemet kielégítené adná magát, hogy írok egyet. Adná, de annyira mégsem. A játék fejlesztés nálam nem akadt be hiába szerettem a játékokat és hiába szerettem a programozást a kettő együtt nem hoz lázba.  
Persze hazudnék, hogy azt mondanám, hogy soha nem próbáltam meg. Még Delphiben, C++ Builderben és Visual C-ben neki álltam egy Panzer General grafikájú, de működésében inkább az _Arnhem-Vulcan_ vonalat képviselő ( <a href='/posts/arnhem' target='_blank'>Lásd Arnhem és társai</a> ) játéknak.  
Kibányásztam a Panzer Generalból a grafikákat, írtam egység és térkép szerkesztőt valamennyit még az egység kezelő motorból is elkészítettem (stack, egyesítés, stb), aztán az idő hiánya elmosta a projektet és azóta sem tértem vissza hozzá. A felhasznált eszközökből lehet sejteni, hogy ez még az özönvíz előtt lehetett.

## AI új lehetőségek

Viszont most itt az AI korában nincs rá mentség, hogy ne csináljak a segítségével valami igazán jót, megismételhetetlent, egyedit és mindenki által csodált játékot, amivel a világ nagytőkései közé emelkedem. Ezért úgy döntöttem, hogy első lépésben az Arnhem-et fogom C# -ban reimplementálni. Friss és újszerű gondolat, nem?  
Természetesen nincs kedvem, se a Spectrumos, se a DOS-os  - vagy bármilyen más verziót - visszafejteni (magyarul reverse-engineering). Erre van az AI, meg arra, hogy ha visszafejtette, akkor csinálja is meg nekem a modern implementációját - nekem nem is kell dolgoznom vele, csak megmondom, hogy mit csináljon odaadom az EXE neki és kész. Mint egy úr. Hát nem pont ...

### Első próbálkozás

Egy 48Kb-os méretű programról van szó, ami packelve biztosan van (csak így tudományosan), de egyéb védelemre nem igazán számítok. Fogtam hát az ARNHEM.exe-t, ami bárki számára elérhető némi googlizást követően - elviekben törvényesen - és feltöltöttem a ChatGPT-nek, hogy akkor pikk meg pakk készítsen nekem ebből egy .NET10 C# alkalmazást. Nem nagy cucc, 40 éves programot csak kiráz a kisujjából is.  
Ki is rázta. Létrehozott pár C# fájlt üres osztályokkal, hogy na akkor majd ezekbe kell beletenni a kódot. Úgy éreztem ezzel még nem fogunk tarolni a piacon.

48K ide vagy oda valami azt súgta, hogy a reimplementálás nem a chat felületen fog megtörténni.

### Ad Astra azaz a második próbálkozás

Másodjara fogtam a VSCode Codex plugint és az Astranak írtam egy egyszerű promptot, hogy na akkor tessék itt ez a régi Spectrumos program DOS verziója tessék nekem ebből egy működő .NET alkalmazást gyártani. Csak semmi cécó, nálam a prompt! Az Astra a csúcs model, az AI fejlődés Mount Everestje ki más csinálja meg ha nem ő?  

Elkezdte visszafejteni az exe-t. Biztatóan kiírta, hogy **Thinking** én pedig tervezgetni kezdtem, hogy a nyakamba szakadó hírnevet milyen yachton fogom feldolgozni.  
Oké egy menetben nem sikerült neki, semmi baj - bár a világ legokosabb gépi intelligenciájától azért többet vártam volna, elvégre nem az egyesített kozmológiai elmélet kidolgozásáról volt szó .. Na mindegy, némi barkóba következett, pár újabb prompt, de reménytelenül eltévedt - ha junior fejlesztő lenne javasoltam volna neki, hogy tanuljon ki valami más szakmát, mert az AI az ő munkáját biztosan el fogja venni.

Megértettem, hogy 48K ide Astra oda jobban részletezni kell mit is akarunk, ha a világ legjobb Arnhem verzióját akarjuk a publikum elé tárni. Azaz olyan tűpontos, részletes igényt kell elé tárnunk, mint azt a legtöbb programozó megszokta az üzlet/ügyfél felől ... vagy talán egy hajszálnyival pontosabbat. Aki dolgozott már 150 karakter hosszú specifikációval tudja miről beszélek.

Megjegyzem továbbra sem tartom agysebészetnek a dolgot - egy junior fejlesztő már értené mit akarok.

### Csináljuk tudományosan

Az Every-nek van egy compund engineering pluginje, ami mindenféle skill-t tartalmaz. Lehet vele brainstormingolni, plant készíteni, van implementációs skill szóval ezzel már nem hibázhatunk. Fejlesztéshez sokszor használtam már. Brainstormingolunk, tervezünk, implementálunk, elégedetten hátradőlünk. Egyszerű ez, mint a 2x2. A tokent eszi rendesen, mintha nem lenne holnap (vagy heti keret), cserébe tényleg hatékony folyamat. 
Úgy gondoltam, ha már ennyire benne vagyunk a tudományban, akkor megdumálom a jövővel, hogy a játék színei a Spectrumos verzió színei legyenek. Később kiderült, hogy ez hülye ötlet volt.  

Itt már olyan tudományos voltam, hogy váltogattam a modellkeket a braibstorming-plan-work fázisokban. Astra-Sol-Terra. Gondolatban veregettem is a válam, hogy na így kell ezt.

Azért az implementáció során kiderült, hogy úgy rácuppant a spectrumos vonalra, hogy beszerezte magának a tzx fájlt a netről és azt futtatgatta magának. Írt hozzá Spectrum memória szimulációt, az erőforrásokat kibányászta majd a WPF alkalmazásba ezeke a Spectrumos részeket kezdte beépítgetni. Olybá tűnt, hogy a megjelenítést leszámítva a spectrumos kódot akarja futtatni és C#-al akarja ösdzekötni a WPF felülettel.  
Hááát ez nem éppen az, amit akarok. Kísérletnek érdekes, de ilyet csináljon az, aki szerint ez tényleg érdekes.

Némi töprengés után arra jutottam, hogy ebből se lesz nekem .NET Arnhem.

### Tervezzük meg a ChatGPT-vel

Kicsit unom már, hogy nem sikerül egy 48K-s DOS programból .NET-est készíteni úgy, hogy a háttérben a világ legnagyobb processzor és memoria farmja feszít milliárd dolláros költségekkel, de neki futok mégegyszer.

Arra gondoltam most majd jól megtervezzük együtt a ChatGPT-vel. Ha a ChatGPT velem, akkor ki ellene, ugye?  
Előnye a módszernek, hogy nem fogyaszt tokent. Hátránya, hogy nincs benne a fejlesztési kontextusban, de hát a 48K méretű exe-t odaadom neki, aztán majd kitalálja ami neki kell.

A ChatGPT fázisokra bontja a dolgot (Phase 1, 2 stb), ami tetszik. Olyan menően szakszerű meg minden. Írt saját Agent-et is a projekthez, kész őrület milyen jót szakmázunk a ChatGPT meg én. Elkezdtük a reverse engineeringet - oké ilyen eddig is volt, de ez most más. Érzem a csontjaimban.




