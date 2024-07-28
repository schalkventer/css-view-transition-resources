import fs from "fs";

/**
 * @typedef {'asia' | 'north-america' | 'europe' | 'africa' | 'south-america'} Continent
 */

/**
 * @typedef {'alphabetical' | 'alphabetical-reversed' | 'population' | 'population-reversed'} Sorting
 */

/**
 * @typedef {object} Country
 * @prop {string} id
 * @prop {string} flag
 * @prop {string} name
 * @prop {number} population
 * @prop {Continent} continent
 */

/**
 * @typedef {object} Options
 * @prop {Sorting} sorting
 * @prop {'all' | Continent} continent
 */

/**
 * @type {object}
 * @prop {Sorting[]} sorting
 * @prop {('all' | Continent)[]} continents
 */
const arrays = {
  continents: [
    "all",
    "asia",
    "north-america",
    "south-america",
    "europe",
    "africa",
  ],
  sorting: [
    "alphabetical",
    "alphabetical-reversed",
    "population",
    "population-reversed",
  ],
};

/**
 * @type {Country[]}
 */
const data = [
  {
    id: "bd",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bd.svg",
    name: "Bangladesh",
    population: 168000000,
    continent: "asia",
  },
  {
    id: "br",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/br.svg",
    name: "Brazil",
    population: 214000000,
    continent: "south-america",
  },
  {
    id: "cn",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cn.svg",
    name: "China",
    population: 1410000000,
    continent: "asia",
  },
  {
    id: "cd",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/cd.svg",
    name: "Democratic Republic of the Congo",
    population: 96000000,
    continent: "africa",
  },
  {
    id: "eg",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/eg.svg",
    name: "Egypt",
    population: 109000000,
    continent: "africa",
  },
  {
    id: "et",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/et.svg",
    name: "Ethiopia",
    population: 117000000,
    continent: "africa",
  },
  {
    id: "de",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/de.svg",
    name: "Germany",
    population: 84000000,
    continent: "europe",
  },
  {
    id: "in",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/in.svg",
    name: "India",
    population: 1370000000,
    continent: "asia",
  },
  {
    id: "id",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/id.svg",
    name: "Indonesia",
    population: 276000000,
    continent: "asia",
  },
  {
    id: "ir",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ir.svg",
    name: "Iran",
    population: 85000000,
    continent: "asia",
  },
  {
    id: "jp",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jp.svg",
    name: "Japan",
    population: 125000000,
    continent: "asia",
  },
  {
    id: "mx",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/mx.svg",
    name: "Mexico",
    population: 126000000,
    continent: "north-america",
  },
  {
    id: "ng",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ng.svg",
    name: "Nigeria",
    population: 211000000,
    continent: "africa",
  },
  {
    id: "pk",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/pk.svg",
    name: "Pakistan",
    population: 229000000,
    continent: "asia",
  },
  {
    id: "ph",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ph.svg",
    name: "Philippines",
    population: 113000000,
    continent: "asia",
  },
  {
    id: "ru",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ru.svg",
    name: "Russia",
    population: 146000000,
    continent: "europe",
  },
  {
    id: "th",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/th.svg",
    name: "Thailand",
    population: 70000000,
    continent: "asia",
  },
  {
    id: "tr",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tr.svg",
    name: "Turkey",
    population: 86000000,
    continent: "europe",
  },
  {
    id: "us",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg",
    name: "United States",
    population: 332000000,
    continent: "north-america",
  },
  {
    id: "vn",
    flag: "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vn.svg",
    name: "Vietnam",
    population: 99000000,
    continent: "asia",
  },
];

/**
 *
 * @param {Options} options
 * @returns {string}
 */
const createHtml = (options) => {
  const { continent, sorting } = options;

  const filtered = data.filter((country) => {
    if (
      continent !== "all" &&
      country.continent !== continent
    ) {
      return false;
    }

    return true;
  });

  const sorted = filtered.sort((a, b) => {
    if (sorting === "alphabetical") {
      return a.name.localeCompare(b.name);
    }

    if (sorting === "alphabetical-reversed") {
      return b.name.localeCompare(a.name);
    }

    if (sorting === "population") {
      return a.population - b.population;
    }

    if (sorting === "population-reversed") {
      return b.population - a.population;
    }

    return 0;
  });

  const list = sorted
    .map(({ id, flag, name }) => {
      return `
        <li style="view-transition-name: ${id}">
          <img
            src="${flag}"
            alt="United States Flag"
            width="20"
            height="15"
          />
          <span>${name}</span>
        </li>
    `;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="stylesheet" href="./style.css" />
        <script src="./script.js" defer></script>
      </head>
      <body>
          <div>Continent</div>
          <a href="./all-${sorting}.html">all</a>
          <a href="./asia-${sorting}.html">asia</a>
          <a href="./africa-${sorting}.html">africa</a>
          <a href="./north-america-${sorting}.html">north-america</a>
          <a href="./south-america-${sorting}.html">south-america</a>
          <a href="./europe-${sorting}.html">europe</a>
    
          <div>Sorting</div>
          <a href="./${continent}-alphabetical.html">Alphabetical</a>
          <a href="./${continent}-alphabetical-reversed.html">Alphabetical (Reversed)</a>
          <a href="./${continent}-population.html">Population</a>
          <a href="./${continent}-population-reversed.html">Population  (Reversed)</a>

        <ul>
          ${list}
        </ul>
      </body>
    </html>  
  `;
};

arrays.continents.forEach((continent) => {
  arrays.sorting.forEach((sorting) => {
    fs.writeFileSync(
      `./${continent}-${sorting}.html`,
      createHtml({ continent, sorting })
    );
  });
});

fs.writeFileSync(
  "./index.html",
  createHtml({ continent: "all", sorting: "alphabetical" })
);
