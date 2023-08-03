import { useContext, useState } from "react";
import { RestCountriesContext } from "../../../../Countries";

import { Country } from "./components/Country"

import "./style.sass"

export const CountryList = () => {

    let countryList = useContext(RestCountriesContext);
    let [searchResult, setSearchResult] = useState("")

    console.log(countryList);

    let countryListAfterSearch = countryList
    .filter(country => country?.params?.name?.official.includes(searchResult))
    
    return (
        <div>
            <div className="search">
                <input
                    placeholder="Введите название страны которую ищете"
                    type="text"
                    value={searchResult}
                    onChange={
                        (event) => setSearchResult(event.target.value)
                    }
                />
            </div>
            <div className="country-list">
                {Array.isArray(countryListAfterSearch) &&
                    countryListAfterSearch.map(
                        country => <Country key={country?.id} currentCountry={country?.params} />
                    )
                }
            </div>
        </div>
    )

} 