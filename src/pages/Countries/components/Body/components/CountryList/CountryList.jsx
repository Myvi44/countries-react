import { useContext, useState } from "react";

import { RestCountriesContext } from "../../../../Countries";
import { setRightSearchResult } from "../../../../../../utility/setRightSearchResult";

import { Search } from "./components/Search"
import { Country } from "./components/Country"

import "./style.sass"

export const CountryList = () => {

    let countryList = useContext(RestCountriesContext);
    let [searchResult, setSearchResult] = useState("")

    console.log(countryList);

    let countryListAfterSearch = setRightSearchResult(countryList, searchResult);

    let timezones = []
    countryList.map(country => timezones.push(...country?.params?.continents))

    console.log([... new Set(timezones)])

    return (
        <div>
            <Search searchResult={searchResult} setSearchResult={setSearchResult} />

            <div className="country-list">
                {
                    Array.isArray(countryListAfterSearch) &&
                    countryListAfterSearch.map(
                        (country, index) => <Country key={country?.id} currentCountry={country?.params}  />
                    )
                }
            </div>
        </div>
    )

} 