# Kurs: Javascript ramverk - React

## Utbildning till Frontend Developer på Medieinstitutet

Detta är en kursuppgift i React - en webbaserad jobbsökningsapplikation som använder Arbetsförmedlingens öppna data. Projektet är byggt med React, TypeScript, Vite och Arbetsförmedlingens designsystem.

## Gruppmedlemmar
- [Marie Lenvik](https://github.com/M-Lenvik)
- [Frida Nordenlöw](https://github.com/fridanordenlow)
- [Oskar Lundberg](https://github.com/Osklundev)

**Live demo:** https://m-lenvik.github.io/Javascript-ramverk-React-techReq/

## Innehållsförteckning

1. [Beskrivning av projektet](#-beskrivning-av-projektet--tech-recruitments)
2. [Uppgiftsbeskrivning](#uppgiftsbeskrivning)
3. [Kom igång med projektet](#kom-igång-med-projektet)
   1. [Installera genom följande](#installera-genom-följande)
4. [Tekniker som använts](#tekniker-som-använts)
5. [Projektbeskrivning](#projektbeskrivning)
   1. [Syfte och målgrupp](#syfte-och-målgrupp)
   2. [Funktionalitet](#funktionalitet)
   3. [Arkitektur](#arkitektur)
6. [Betygskriterier](#betygskriterier)

## 🔍 Beskrivning av projektet 📚 Tech Recruitments

Tech Recruitments är en webbaserad jobbsökningsapplikation designad för att hjälpa användare att enkelt söka och utforska lediga jobb inom IT och mjukvaruutveckling. Applikationen använder Arbetsförmedlingens öppna data via JobTech Search API för att presentera aktuella jobbannonser på ett strukturerat och användarvänligt sätt.

Applikationen erbjuder fritextsökning, visar de senaste jobben på startsidan, presenterar detaljerad information om varje annons och inkluderar en grafisk visualisering som visar var flest jobb finns per kommun. Genom att använda Arbetsförmedlingens designsystem med ett eget tema, säkerställer applikationen en professionell och tillgänglig användarupplevelse.

## Uppgiftsbeskrivning

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6VsM7MHT)

# Skapa en egen Platsbanken för ert drömscenario

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen

- [Övergripande dokumentation API:etJobSearch](https://jobtechdev.se/sv/components/jobsearch)
- [Kom-igång guide](https://gitlab.com/arbetsformedlingen/education/education-api/-/blob/main/GETTING_STARTED.md)

## Prova att utforska datan med vår interaktiva tjänst

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads](https://jobsearch.api.jobtechdev.se/swagger/index.html)

## Uppgift

Använd endpoint https://jobsearch.api.jobtechdev.se/ för att använda/söka bland befintliga annonser. Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads](https://jobsearch.api.jobtechdev.se/historical/search)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

## Designsystem

Arbetsförmedlingens designsystem är öppen källkod och går att använda för att snabbt komma igång med utvecklingen av e-tjänster/applikationer till slutanvändare. Perfekt om man vill spara mycket tid och få ett mer enhetligt användarinteraktion. Finns support för ex react, angular och plain vanilla javascript.

Designsystemet består av två delar. Den viktigaste delen är alla vi, människorna, som delar en gemensam filosofi om att vi vill samarbeta och tillsammans ta fram bästa tänkbara tjänster och produkter för våra användare. Den andra delen är hur vi ska göra detta. Själva verktygslådan. Designsystemet som byggsten samlar återanvändbara verktyg, processer och riktlinjer på ett ställe. När vi både har en gemensam samarbetsmodell och konkret verktygslåda kan vi alla bidra till att hela tiden förbättra både designsystemet och våra produkter.

https://designsystem.arbetsformedlingen.se/

**Observera**  
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom.

## Kom igång med projektet

**🛠️ Installera genom följande:**

1. **Kloning av projektet**
   ```bash
   git clone https://github.com/M-Lenvik/Javascript-ramverk-React-techReq.git
   cd Javascript-ramverk-React-techReq
   ```

2. **Installera alla beroenden**
   Projektet är ett Vite-projekt. Kör följande kommando för att installera alla nödvändiga paket enligt package.json:

```shell
npm install
```

3. **Starta localhost**
   Projektet kör nu lokalt på localhost:5173 (eller annan port om 5173 är upptagen). Navigera till projektets rotmapp och kör:

```shell
npm run dev
```

💡 **Tips:** Se till att du har Node.js och npm installerat innan du börjar.

4. **Bygga för produktion**
   För att bygga projektet för produktion:

```shell
npm run build
```

5. **Förhandsgranska produktionsbygg**
   För att förhandsgranska produktionsversionen:

```shell
npm run preview
```

## 💻 Teknikstack

```
┌─────────────────────────────────────────────────┐
│   💼 Tech Recruitments Tech Stack 💼           │
├─────────────────────────────────────────────────┤
│                                                 │
│   ⚛️  React 19  │  📘 TypeScript  │  ⚡ Vite   │
│                                                 │
│  🎨 Styled Components  │  🗺️  React Router    │
│                                                 │
│  📊 Recharts  │  🎯 Digi Design System         │
│                                                 │
│  🚀 GitHub Pages  │  📡 JobTech Search API     │
│                                                 │
└─────────────────────────────────────────────────┘
```

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

**Tekniska val och motiveringar:**

**React 19:** Valdes för dess komponentbaserade arkitektur med funktionella komponenter och hooks, vilket uppmuntrar återanvändbar kod och tydlig separation of concerns. React 19 används med funktionella komponenter och hooks för state management.

**TypeScript:** Lägger till kompileringstid-typsäkerhet, fångar fel under utveckling snarare än i produktion och förbättrar utvecklarupplevelsen. Alla komponenter, services och models är fullt typade.

**Vite:** Fungerar som byggverktyg och utvecklingsserver, erbjuder betydligt snabbare start och hot module replacement jämfört med äldre bundlers. Konfigurerad för React med TypeScript.

**React Router:** Client-side routing hanteras med `createBrowserRouter`, vilket möjliggör en flersidig upplevelse inom en single-page application-arkitektur. Routing konfigurerad med basename för GitHub Pages deployment.

**Context API:** State management förlitar sig på Reacts Context API med en dedikerad AdContext. Detta tillvägagångssätt ger en tydlig och skalbar statestruktur, håller arkitekturen enkel och lämplig för projektets omfattning.

**Styled Components:** Används för styling med tematisering av Arbetsförmedlingens designsystem. Detta möjliggör anpassning av designsystemet med eget tema utan att behöva använda Arbetsförmedlingens logga eller färger.

**Recharts:** Används för grafisk visualisering av data. En stapeldiagram visar antal jobb per kommun baserat på sökresultat.

**Arbetsförmedlingens designsystem (@digi/arbetsformedlingen):** Används för att snabbt komma igång med utvecklingen och säkerställa en professionell och tillgänglig användarupplevelse. Designsystemet är tematiserat med eget färgschema.

**GitHub Pages:** Deployment hanteras via GitHub Pages för statisk hosting, med GitHub Actions som automatiserar deployment vid pushes till main branch.

**JobTech Search API:** Används för att hämta jobbannonser från Arbetsförmedlingens öppna data. API:et filtrerar på yrkesgrupp (IT och mjukvaruutveckling) och stödjer fritextsökning.

## Projektbeskrivning

### Syfte och målgrupp

Tech Recruitments är designad för att förenkla jobbsökning inom IT och mjukvaruutveckling. Applikationen riktar sig till jobbsökande som vill ha en enkel och strukturerad sökning utan irrelevanta träffar.

**Målgrupp:**
Den primära målgruppen består av:
- IT-professionella som söker nya möjligheter
- Mjukvaruutvecklare som vill utforska lediga positioner
- Personer som vill se var flest jobb finns geografiskt
- Användare som vill snabbt se de senaste jobbannonserna

Applikationen är designad med mobilanvändning i åtanke, vilket gör det möjligt för användare att söka jobb på alla enheter. Responsiv design säkerställer att verktyget fungerar bra på alla skärmstorlekar, från mobila enheter till stationära datorer.

### Funktionalitet

**Startsida:**
Användare börjar på startsidan där syftet med applikationen presenteras. Här visas de tio senast inkomna jobbannonserna, vilket gör det enkelt att vara första kandidat att söka nyutlagda jobb.

**Jobbsökning:**
På söksidan kan användare fritextsöka för att hitta annonser som matchar deras intressen och ort. Sökfunktionen stödjer sökning på ett eller flera ord och visar relevanta resultat.

**Jobbannonser:**
Varje jobbannons kan klickas för att se detaljerad information inklusive:
- Jobbtitel och arbetsgivare
- Beskrivning och krav
- Plats och anställningsform
- Publiceringsdatum

**Grafisk visualisering:**
En stapeldiagram visar var flest jobb inom det sökta yrkesområdet finns per kommun. Detta ger användare en översikt över geografisk fördelning av jobb.

**Pagination:**
Sökresultat är uppdelade i sidor med pagination för att enkelt navigera mellan resultat.

**Responsiv design:**
Applikationen är fullt responsiv och anpassar sig till olika skärmstorlekar för optimal användarupplevelse på alla enheter.

### Arkitektur

Applikationen följer en tydlig separation of concerns med följande struktur:

**Services (src/services/)**
Ansvarar för att hämta data från JobTech Search API. `adService.ts` innehåller funktioner för att hämta jobbannonser, specifika annonser och de senaste annonserna. `serviceBase.ts` innehåller basfunktionalitet för API-anrop med fetch.

**Models (src/models/)**
TypeScript-typer och interfaces för API-svar och annonsdata:
- `Ad.ts` - Grundläggande annonsmodell
- `AdExt.ts` - Utökad annonsmodell med detaljerad information
- `APIResponse.ts` - API-svarsmodell

**Context (src/contexts/)**
Global state management via Context API:
- `AdContext.ts` - Context-definition med typer
- `AdProvider.tsx` - Context provider som hanterar state för annonser, sökningar, loading och fel

**Loaders (src/loaders/)**
React Router loaders för datahämtning vid routing:
- `adLoader.ts` - Hämtar specifik annons
- `adsLoader.ts` - Hämtar sökresultat
- `latestAdsLoader.ts` - Hämtar senaste annonserna

**Components (src/components/)**
Återanvändbara komponenter:
- `Header.tsx` - Sidhuvud med navigation
- `Footer.tsx` - Sidfot
- `Welcome.tsx` - Välkomstmeddelande
- `SearchForm.tsx` - Sökformulär
- `AdsPresentation.tsx` - Lista över jobbannonser
- `AdDetailsPresentation.tsx` - Detaljerad vy av en annons
- `LatestAdsPresentation.tsx` - Presentation av senaste annonserna
- `AdsPagination.tsx` - Pagination-komponent
- `BarChart.tsx` - Grafisk visualisering med Recharts
- `styled/` - Styled components för tematisering

**Pages (src/pages/)**
Routade sidor:
- `Home.tsx` - Startsida
- `Ads.tsx` - Söksida med resultat
- `AdDetails.tsx` - Detaljsida för specifik annons
- `Layout.tsx` - Layout-komponent med header och footer
- `Error.tsx` - Felsida

**Hooks (src/hooks/)**
Custom hooks:
- `useAdContext.ts` - Hook för att använda AdContext
- `useMediaQuery.ts` - Hook för responsiv design

**Helpers (src/helpers/)**
Hjälpfunktioner:
- `countJobsPerMunicipality.tsx` - Räknar jobb per kommun för visualisering

**Applikationswrapper-struktur:**
```
AdProvider → Router → Layout → Pages
```

Layout innehåller:
- Header och navigation
- `<Outlet />` för routade sidor
- Footer

**Dataflöde i applikationen:**
1. Pages använder loaders för att hämta data vid routing
2. Pages läser och uppdaterar global state via AdContext
3. Användaråtgärder (sökningar) uppdaterar context state
4. Stateändringar triggar omrendering av komponenter
5. API-anrop hanteras via services med felhantering

**Styling-struktur:**
- Styled Components används för tematisering av designsystemet
- Globala stilar i `index.css`
- Komponent-specifik styling via styled components

## Betygskriterier

### Need-to-have (G)

- ✅ **Strukturerad datahämtning:** Data hämtas strukturerat med fetch via `serviceBase.ts` och `adService.ts`
- ✅ **Tjänst för datahämtning:** En dedikerad tjänst (`adService.ts`) används för att hämta data från API:et
- ✅ **React-koncept:** React-koncept används korrekt:
  - Context API för global state management (`AdContext`, `AdProvider`)
  - React Router med `createBrowserRouter` för routing
  - Loaders för datahämtning vid routing
  - Custom hooks (`useAdContext`, `useMediaQuery`)
- ✅ **Syntax och namngivning:** Konsekvent TypeScript-syntax, namngivningsstandard och skrivsätt
- ✅ **Designsystem:** Arbetsförmedlingens designsystem används genomgående med eget tema (utan AF:s logga eller färger)

### Nice-to-have (Extra bonus)

- ✅ **Styled Components:** Styled components används för tematisering av designsystemet
- ✅ **Grafisk presentation:** Grafisk visualisering med Recharts (stapeldiagram över jobb per kommun)
- ✅ **Custom hooks:** Custom hooks implementerade (`useAdContext`, `useMediaQuery`)

## Deployment

Projektet är deployat på GitHub Pages och är tillgängligt på:
**https://m-lenvik.github.io/Javascript-ramverk-React-techReq/**

Deployment hanteras automatiskt via GitHub Actions vid push till main branch.

## Licens

Detta projekt är en kursuppgift och använder Arbetsförmedlingens öppna data enligt deras licensvillkor.
