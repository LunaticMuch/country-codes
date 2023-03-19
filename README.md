# Country Codes

This package is perhaps the most comprehensive list of country codes. It includes information from [ISO](https://iso.org), from [UN](https://www.un.org/en/) and other agencies.

## Information includes

The list of information included is extensive. The following are included:

- ISO Codes: the ISO code for each country as defined in [ISO 3166-1](https://www.iso.org/obp/ui/#iso:pub:PUB500001:en)
- FIFA country code provided by the [Fédération internationale de football association]
- Dial prefix and country code  assigned by [International Telecommunication Union (ITU)](https://itu.int)
- MARC Code as defined by [International Federation of Library Associations and Institutions (IFLA)](https://www.ifla.org)
- GAUL code, acronym of Global Administrative Unit Layers, defined by [Food and Agriculture Organization of the United Nations (FAO)](https://fao.org)
- FIPS code as defined by Federal Information Processing Standards (FIPS)
- WMO code as defined by [World Meteorological Organization (WMO)](https://wmo.int)
- IOC code assigned by [International Olympic Committee (IOC)](https://olympics.com/IOC)
- M49 code or Standard Country or Area Codes for Statistical Use (Series M, No. 49) defined by the United Nations
- UNTERM country names assigned by [United Nations Multilingual Terminology Database](http://unterm.un.org/). UNTERM country names are provided in one of the six official United Nations languages (Arabic, Chinese, English, French, Russian and Spanish) and have both a short and format name
- Geoscheme codes defined by the United Nations Organization. These include the definition of region, subregions and intermediate regions
- Currency codes that matches the official currency in a given country. These are sourced by the ISO 4217-1 standard. They include the name, alphanumeric and numeric code, minor units and country name
- Additional statistical information provided by the United Nations as if the country is a considered as developed country, small island, landlocked, etc.
- Capital name of the country
- Geoname identifier for a country provided by [GeoNames geographical database](https://www.geonames.org/) 
- Top-level domain of the country
- CLDR country name as defined in the [Unicode Common Locale Data Repository (CLDR)](https://cldr.unicode.org)
- Languages adopted in the country, defined either in a local format, e.g. `en-US` or ISO 639 format, eg. `zh` or `hak`
- EDGAR country code maintained by the [Securities and Exchange Commission](https://www.sec.gov)

## Usage

The package can be imported as entire database

```js
import countries from '@lunaticmuch/country-codes'
```

It also offers few helps which can be imported as

```js
import {countryByISO} from '@lunaticmuch/country-codes'
```

### countryByISO(country)

Return a country given an ISO code. The code can be either a 2-byte alphanumeric code, or a 3-byte alphanumeric or numeric code.
If no code is provided, the function returns `undefined`

## Data quality

Given the large amount of in this database and the different sources, not always aligned and harmonized, the data provided in this library cannot be considered to have the highest quality and standard that it should have.

## Contribution

Everybody is welcome to contribute to this library. Any pull request will be welcome.