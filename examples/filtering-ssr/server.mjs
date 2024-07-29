import http from "http";
import url from "url";

const alphabeticalHTML = /* html */ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <ul>
        <li><a href="./alphabetical.html">Alphabetical</a></li>
        <li><a href="./alphabetical-reversed.html">Alphabetical (Reverse)</a></li>
        <li><a href="./population.html">Population</a></li>
        <li><a href="./population-reversed.html">Population (Reversed)</a></li>
        </ul>
        <ul>

        <li style="view-transition-name: bd">
            <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/bd.svg" alt="Bangladesh Flag" width="20" height="15" />
            <span>Bangladesh (168M)</span>
        </li>
        </ul>
    </body>
    </html>
`;

const populationReversedHTML = /* html */ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <ul>
        <li><a href="./alphabetical.html">Alphabetical</a></li>
        <li><a href="./alphabetical-reversed.html">Alphabetical (Reverse)</a></li>
        <li><a href="./population.html">Population</a></li>
        <li><a href="./population-reversed.html">Population (Reversed)</a></li>
        </ul>
        <ul>
        <li style="view-transition-name: th">
            <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/th.svg" alt="Thailand Flag" width="20" height="15" />
            <span>Thailand (70M)</span>
        </li>
        </ul>
    </body>
    </html>
`;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.writeHead(200, { "Content-Type": "text/html" });

  if (parsedUrl.pathname === "/population-reversed.html") {
    res.end(populationReversedHTML);
  } else {
    res.end(alphabeticalHTML);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
