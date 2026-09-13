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

Viszont most itt az AI korában nincs rá mentség, hogy ne csináljak a segítségével valami igazán jót, megismételhetetlent, egyedit és mindenki által csodált játékot. Ezért úgy döntöttem, hogy első lépésben az Arnhem-et fogom C# -ban reimplementálni. Friss és újszerű gondolat, nem?  
Természetesen nincs kedvem, se a Spectrumos, se a DOS-os  - vagy bármilyen más verziót - visszafejteni (magyarul reverse-engineering). Erre van az AI, meg arra, hogy ha visszafejtette, akkor csinálja is meg nekem a modern implementációját - nekem nem is kell dolgoznom vele, csak megmondom, hogy mit csináljon odaadom az EXE neki és kész. Mint egy úr. Hát nem pont ...

### Első próbálkozás

Egy 48KB-os méretű programról van szó, ami packelve biztosan van (csak így tudományosan), egyéb védelemre nem igazán számítok.
