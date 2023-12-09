import { useContext, useState } from "react";

import { RestCountriesContext } from "../../../../Countries";
import { setRightSearchResult } from "../../../../../../utility/setRightSearchResult";
import { setRightFilterResult } from "../../../../../../utility/setRightFilterResult";

import { Search } from "./components/Search"
import { Country } from "./components/Country"
import { Filter } from "./components/Filter"

import "./style.sass"

export const CountryList = () => {

    let countryList = useContext(RestCountriesContext);

    const [searchResult, setSearchResult] = useState("");
    const [filterResult, setFilterResult] = useState({
        timezones: {
            min: -12,
            max: 14
        },
        car: {
            "left": true,
            "right": true
        },
        continents: {
            "Oceania": true,
            "South America": true,
            "Africa": true,
            "North America": true,
            "Europe": true,
            "Asia": true,
            "Antarctica": true
        }
    });


    let countryListAfterSearch = setRightSearchResult(countryList, searchResult);
    let countryListAfterFilter = setRightFilterResult(countryListAfterSearch, filterResult);
    console.log(countryListAfterFilter.map(
        (country)=>country.params
    ))
    return (
        <div>
            <Search searchResult={searchResult} setSearchResult={setSearchResult} />
            <Filter filterResult={filterResult} setFilterResult={setFilterResult} />
            <div className="country-list">
                {
                    Array.isArray(countryListAfterFilter) &&
                    countryListAfterFilter.map(
                        (country, index) => <Country key={country?.id} currentCountry={country?.params} />
                    )
                }
            </div>
        </div>
    )

} 