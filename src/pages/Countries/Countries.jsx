import { createContext, useEffect, useState } from "react"
import { sendRequest } from "../../services/sendRequest"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./components/Header"
import { CountryList } from "./components/Body/components/CountryList"
import { CurrentCountry } from "./components/CurrentCountry"
import { Body } from "./components/Body"
import { AboutUs } from "./components/AboutUs"
import { MainPage } from "./components/MainPage"
import { Contacts } from "./components/Contacts"

export let RestCountriesContext = createContext([]);

let router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/countries",
        element: <Body />,
        children: [
            {
                path: "/countries/all",
                element: <CountryList />
            },
            {
                path: "/countries/:currentCountryID",
                element: <CurrentCountry />
            }
        ]
    },
    {
        path: "/aboutUS",
        element: <AboutUs />
    },
    {
        path: "/contacts",
        element: <Contacts />
    }
])

export const Countries = ({ className }) => {

    const [response, setResponse] = useState([])

    useEffect(
        () => sendRequest(setResponse), []
    )

    return (
        <div className={className}>
            <Header />

            <RestCountriesContext.Provider value={response}>
                <RouterProvider router={router} />
            </RestCountriesContext.Provider>
        </div>
    )
}