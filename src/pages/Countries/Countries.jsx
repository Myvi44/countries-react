import { useEffect, useState } from "react"
import { sendRequest } from "../../services/sendRequest"

import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { AboutUs } from "./components/AboutUs"
import { MainPage } from "./components/MainPage"
import { Contacts } from "./components/Contacts"

export const Countries = ({ className }) => {
    

    const [currentBody, setCurrentBody] = useState("main");
    const [ response,setResponse] = useState([])

useEffect(
    () => sendRequest(setResponse),[currentBody]
)

    let currentBodyElement;

    switch (currentBody) {
        case "main":
            currentBodyElement = <MainPage />;
            break;
        case "countries":      
            currentBodyElement = <Body response={response}/>;
            break;
        case "aboutUS":
            currentBodyElement = <AboutUs />;
            break;
        case "contacts":
            currentBodyElement = <Contacts />;
            break;
    }

    return (
        <div className={className}>
            <Header setCurrentBody={setCurrentBody} />
            {currentBodyElement}
        </div>
    )
}
