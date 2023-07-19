import { Country } from "./components/Country"

import "./style.sass"

export const CountryList = ({ countryList, setCurrentElement}) => {

    console.log(countryList);

    return (
        <div className="country-list">
            {Array.isArray(countryList) && countryList.map(country => <Country key={country.name.official} setCurrentElement = {setCurrentElement} currentCountry={country} /> )}
        </div>
    )

} 