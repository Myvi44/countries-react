import { useState } from "react";

import { CurrentCountry } from "../CurrentCountry";
import { Filters } from "./components/Filters";
import { Search } from "./components/Search"
import { CountryList } from "./components/CountryList";


export const Body = ({ response }) => {
    const [currentElement, setCurrentElement] = useState("All")
    return (
        <>
            <Search />
            <Filters />
            {
                currentElement == "All" ?
                    <CountryList  setCurrentElement= {setCurrentElement} countryList={response} /> :
                    < CurrentCountry currentCountry={
                        response && response.filter(country => country?.name?.official == currentElement)[0]
                    } />
            }
        </>
    )
}