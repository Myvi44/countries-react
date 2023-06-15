import { Country } from "./components/Country"

import "./style.css"

export const CountryList = ({ countryList }) => {

    console.log(countryList);

    return (
        <div className="country-list">
            {Array.isArray(countryList) && countryList.map(country => <Country key={country.name.official} currentCountry={country} /> )}
        </div>
    )

} 