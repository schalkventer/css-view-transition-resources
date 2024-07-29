import { useState } from "react";
import { flushSync } from "react-dom";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CssBaseline,
  Paper,
} from "@mui/material";

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

const animate = (callback) => {
  if (!document.startViewTransition) return callback();

  flushSync(() => {
    document.startViewTransition(callback);
  });
};

const styles = css`
  body {
    background: rgba(0, 0, 0, 0.01);
  }

  ::view-transition-group(.card) {
    animation-duration: 0.8s;
  }
`;

const Controls = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Item = styled.div`
  width: 18rem;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  max-width: 60rem;
  margin: 0 auto;
  padding: 0;
`;

const Block = styled.li`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  view-transition-class: card;
`;

const Image = styled.img`
  height: 5rem;
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
`;

const Label = styled.div`
  font-size: 1rem;
  flex-grow: 1;
  line-height: 1;
  padding-top: 1rem;
  font-size: 0.8rem;
`;

export const App = () => {
  const [sorting, setSorting] = useState("alphabetical");
  const [continent, setContinent] = useState("all");
  const [search, setSearch] = useState("");

  const handleSorting = (event) => {
    const { value } = event.target;
    animate(() => setSorting(value));
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    animate(() => setSearch(value || ""));
  };

  const handleContinent = (event) => {
    const { value } = event.target;
    animate(() => setContinent(value));
  };

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

  return (
    <CssBaseline>
      <Global styles={styles} />
      <Controls>
        <Item>
          <TextField
            fullWidth
            variant="filled"
            label="Search"
            value={search}
            onChange={handleSearch}
          />
        </Item>

        <Item>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="continent-label">
              Continent
            </InputLabel>

            <Select
              labelId="continent-label"
              id="continent"
              value={continent}
              label="Continent"
              onChange={handleContinent}
            >
              {arrays.continents.map((inner) => (
                <MenuItem value={inner} key={inner}>
                  {inner}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Item>

        <Item>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="sorting-label">
              Sorting
            </InputLabel>

            <Select
              labelId="sorting-label"
              id="sorting"
              value={sorting}
              label="Sorting"
              onChange={handleSorting}
            >
              {arrays.sorting.map((inner) => (
                <MenuItem value={inner} key={inner}>
                  {inner}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Item>
      </Controls>

      <List>
        {sorted.map(({ id, flag, name }) => {
          return (
            <Block
              as={Paper}
              key={id}
              style={{
                viewTransitionName: id,
              }}
            >
              <Image src={flag} />
              <Label>{name}</Label>
            </Block>
          );
        })}
      </List>
    </CssBaseline>
  );
};

export default App;
