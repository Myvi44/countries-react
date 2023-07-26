import { useContext } from "react";
import { RestCountriesContext } from "../../../../Countries";

import { Country } from "./components/Country"

import "./style.sass"

export const CountryList = () => {

    let countryList = useContext(RestCountriesContext);

    console.log(countryList);

    return (
        <div className="country-list">
            {Array.isArray(countryList) && countryList.map(country => <Country key={country?.id} currentCountry={country?.params} /> )}
        </div>
    )

} 