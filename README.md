# Uppgift för utvecklare på BNU
News aggregator API with Swedish news sources.

## Table of Contents

- [Getting started with development](#getting-started-with-development)
- [Using the API](#using-the-api)
  - [Overview of available routes](#overview-of-available-routes)
- [Example API response](#example-api-response)
- [Roadmap](#roadmap)
- [Known Issues](#known-issues)

## Getting started with development
```
git clone https://github.com/oskarssylwan/developer-assessment.git
cd developer-assessment
npm install
npm run install:packages
npm start
```

## Using the API
The API do not require authentication and only serves JSON responses.

### Overview of available routes
| Http Method | Route | Description |
| ---------|---------------| -----------:|
| GET | / | links to api endpoints |
| GET | /news | aggregated list of news articles |
| GET | /status | check to se if the server is live |

## Example API response
```
GET /news
```
```
// Response
[
  {
      "id": "https://www.dn.se/sport/romaledare-intensivvardas-efter-krasch/",
      "title": "Romaledare intensivvårdas efter krasch",
      "link": "https://www.dn.se/sport/romaledare-intensivvardas-efter-krasch/",
      "publicationDate": "Wed, 6 Jan 2021 14:42:39 +0100"
  },
  {
      "id": "https://www.dn.se/sport/karlsson-funderar-pa-att-hoppa-av-har-ingen-kraft-i-benet/",
      "title": "Karlsson funderar på att hoppa av: ”Har ingen kraft i benet”",
      "link": "https://www.dn.se/sport/karlsson-funderar-pa-att-hoppa-av-har-ingen-kraft-i-benet/",
      "publicationDate": "Wed, 6 Jan 2021 14:41:39 +0100"
  }
]
```

## Roadmap
- All news sources uses the same generic transformer to normalise the data structure.
This works at the moment. But when a source is added that do not follow the same structure, developers
need to have the ability to add custom transformers for a specific source.

- To be able to handle large loads of traffic to the API a cacheing layer in the
form of a key value store will be added. The caching layer will only cache the response for a short time, for example a minute.

## Known Issues
- **Linting:** Eslint do not recognise TypeScript keywords (interface, type)
- **Linting:** Husky do not run linting script on git commit hook.
