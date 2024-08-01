import http from "http";
import url from "url";

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

const createHtml = (options) => {
  const { continent, sorting, search } = options;

  const filtered = data.filter((country) => {
    if (
      search !== "" &&
      !country.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    if (continent !== "all" && country.continent !== continent) {
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

  return /* html */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        
        <style>
          @view-transition {
            navigation: auto;
          }
          </style>
      </head>
      <body>
         <form method="GET">
          <label>
            <span>Search</span>
            <input type="text" name="search" value="${search}" />
          </label>

          <span>Continents</span>

          <select name="continent" value="${continent}">
            <option value="all">all</option>
            <option value="asia">asia</option>
            <option value="africa">africa</option>
            <option value="north-america">north-america</option>
            <option value="south-america">south-america</option>
            <option value="europe">europe</option>
          </select>

          <span>Sorting</span>

          <select name="sorting" value="${sorting}">
            <option value="alphabetical">alphabetical</option>

            <option value="alphabetical-reversed">
              alphabetical-reversed
            </option>

            <option value="population">population</option>

            <option value="population-reversed">
              population-reversed
            </option>
          </select>

          <button type="submit">Apply</button>
        </form>

        <ul>
          ${list}
        </ul>
      </body>
    </html>  
  `;
};

const server = http.createServer((req, res) => {
  const parsed = new URL(req.url, "http://localhost:3000/");

  const continent = parsed.searchParams.get("continent") || "all";
  const sorting = parsed.searchParams.get("sorting") || "alphabetical";
  const search = parsed.searchParams.get("search") || "";

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(createHtml({ continent, sorting, search }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
