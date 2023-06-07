import { Country } from "./components/Country"

export const CountryList = ({ countryList }) => {
    return (
        <>
            {countryList && countryList.map(country =>  <Country currentCountry={country} />)}
        </>
    )

} 