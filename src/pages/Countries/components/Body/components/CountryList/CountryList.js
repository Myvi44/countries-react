import { Country } from "./components/Country"

export const CountryList = ({ countryList }) => {
    return (
        <div className="country-list">
            {countryList && countryList.map(country => <Country key={country.name.official} currentCountry={country} /> )}
        </div>
    )

} 