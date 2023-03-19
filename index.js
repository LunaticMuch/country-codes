import {countries} from './country-codes.js'


export default countries

export function countryByISO(country) {
  // Given it could be provided as number, it casts to String anyway
  let code = country.toString()

  // Test for 2-byte alphanumeric code
  if (code.length == 2) {
    return countries.find(({iso}) => iso.alpha2 == code.toUpperCase())
  }

  // Test for 3-byte alphanumeric code
  if (code.length == 3) {
    if (code.match(/\D+/)) {
      return countries.find(({iso}) => iso.alpha3 == code.toUpperCase())
    } else {
      // Assumes it's a numeric ISO code
      console.log('numeric')
      return countries.find(({iso}) => iso.numeric == code)
    }
  }
}

