export const languageData = {
  pl: {
    // header
    darkMode: "tryb ciemny",
    lightMode: "tryb jasny",

    // main section
    theBrightFutureOfWeb3: "Świetlana przyszłość Web 3.0?",
    weDiveIntoTheNextEvolutionOfTheWeb:
      "Zanurzamy się w kolejną ewolucję sieci, która twierdzi, że moc platform z powrotem odda się w ręce ludzi. Ale czy naprawdę spełnia swoją obietnicę?",
    readMore: "Czytaj więcej",

    // news section
    new: "nowość",
    hydrogenVsElectricCars: "Samochody elektryczne VS na wodór",
    willHydrogenFueledCarsEverCatchUpToEVs:
      "Czy samochody napędzane wodorem kiedykolwiek dogonią pojazdy elektryczne?",
    theDownsidesOfAiArtistry: "Wady artyzmu AI",
    whatAreThePossibleAdverseEffectsOfOnDemandAiImageGeneration:
      "Jakie są możliwe negatywne skutki generowania obrazu AI na żądanie?",
    isVCFundingDryingUp: "Czy finansowanie VC kończy się?",
    privateFundingByVCFirmsIsDown50YOYWeTakeALookAtWhatThatMeans:
      "Finansowanie prywatne przez firmy VC spadło o 50% rok do roku. Sprawdzamy, co to oznacza.",

    // articles section
    revivingRetroPCs: "Ożywienie komputerów retro",
    whatHappensWhenOldPCsAreGivenModernUpgrades:
      "Co się stanie, gdy stare komputery otrzymają nowoczesne aktualizacje?",
    top10LaptopsOf2022: "Top 10 laptopów 2022 roku",
    ourBestPicksForVariousNeedsAndBudgets:
      "Nasze najlepsze typy dla różnych potrzeb i budżetów.",
    theGrowthOfGaming: "Rozwój gier",
    howThePandemicHasSparkedFreshOpportunities:
      "Jak pandemia stworzyła nowe możliwości.",
  },

  en: {
    // header
    darkMode: "dark mode",
    lightMode: "light mode",

    // main section
    theBrightFutureOfWeb3: "The Bright Future of Web 3.0?",
    weDiveIntoTheNextEvolutionOfTheWeb:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    readMore: "Read more",

    // news section
    new: "new",
    hydrogenVsElectricCars: "Hydrogen VS Electric Cars",
    willHydrogenFueledCarsEverCatchUpToEVs:
      "Will hydrogen-fueled cars ever catch up to EVs?",
    theDownsidesOfAiArtistry: "The Downsides of AI Artistry",
    whatAreThePossibleAdverseEffectsOfOnDemandAiImageGeneration:
      "What are the possible adverse effects of on-demand AI image generation?",
    isVCFundingDryingUp: "Is VC Funding Drying Up",
    privateFundingByVCFirmsIsDown50YOYWeTakeALookAtWhatThatMeans:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",

    // articles section
    revivingRetroPCs: "Reviving Retro PCs",
    whatHappensWhenOldPCsAreGivenModernUpgrades:
      "What happens when old PCs are given modern upgrades?",
    top10LaptopsOf2022: "Top 10 Laptops of 2022",
    ourBestPicksForVariousNeedsAndBudgets:
      "Our best picks for various needs and budgets.",
    theGrowthOfGaming: "The Growth of Gaming",
    howThePandemicHasSparkedFreshOpportunities:
      "How the pandemic has sparked fresh opportunities.",
  },
};

// wykorzystanie, np:
// languageData[currentLanguage].darkMode
// gdzie 'currentLanguage' to albo 'pl' albo 'en' - wartość z contextu

// podobny przykład:

// const person = {
//   name: "Andrzej",
// };

// person['name'] // Adnrzej

// news:

// import languageData from '../';

// <h2>{languageData[currentLanguage].new}</h2>
