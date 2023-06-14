import { useState } from "react";
import { sendRequest } from "../../../../services/sendRequest";

import { Filters } from "./components/Filters";
import { Search } from "./components/Search"
import { CountryList } from "./components/CountryList";

export const Body = () => {

    const [response, setResponse] = useState([]);

    const getResponse = () => {
        sendRequest(setResponse)
    };
  
    console.log(response);

    return (
        <>
            <button className="refresher" onClick={getResponse}>Refresh</button>
            <Search />
            <Filters />
            <CountryList countryList={response} />
        </>
    )
}