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
 * @typedef {object} Options
 * @prop {Sorting} sorting
 * @prop {string} search
 * @prop {'all' | Continent} continent
 */

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

const elements = {
  list: document.querySelector("#list"),
  search: document.querySelector("#search"),
  continent: document.querySelector("#continent"),
  sorting: document.querySelector("#sorting"),
};

const animate = (callback) => {
  if (!document.startViewTransition) return callback();
  document.startViewTransition(callback);
};

const getOptions = () => {
  return {
    sorting: elements.sorting.value,
    search: elements.search.value,
    continent: elements.continent.value,
  };
};

const render = () => {
  const { sorting, continent, search } = getOptions();

  const filtered = data.filter((country) => {
    if (
      search !== "" &&
      !country.name
        .toLowerCase()
        .includes(search.toLowerCase())
    ) {
      return false;
    }

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

  animate(() => {
    list.innerHTML = sorted
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
  });
};

render();

elements.sorting.addEventListener("change", render);
elements.search.addEventListener("input", render);
elements.continent.addEventListener("change", render);
