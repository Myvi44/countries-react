import { createContext, useEffect, useState } from "react"
import { sendRequest } from "../../services/sendRequest"

import { Header } from "./components/Header"
import { Outlet } from "react-router";

import "./style.sass"

export let RestCountriesContext = createContext([]);

export const Countries = () => {

    const [response, setResponse] = useState([])

    useEffect(
        () => sendRequest(setResponse), []
    )

    return (
        <div className="countries">
            <Header />

            <RestCountriesContext.Provider value={response}>
                <Outlet />
            </RestCountriesContext.Provider>
        </div>
    )
}
