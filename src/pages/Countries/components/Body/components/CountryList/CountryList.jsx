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

    return (
        <div>
            <Search searchResult={searchResult} setSearchResult={setSearchResult} />
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