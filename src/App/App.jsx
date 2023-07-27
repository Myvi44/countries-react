import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Countries } from "../pages/Countries";
import { CountryList } from "../pages/Countries/components/Body/components/CountryList"
import { CurrentCountry } from "../pages/Countries/components/CurrentCountry"
import { Body } from "../pages/Countries/components/Body"
import { AboutUs } from "../pages/Countries/components/AboutUs"
import { MainPage } from "../pages/Countries/components/MainPage"
import { Contacts } from "../pages/Countries/components/Contacts"

import './App.sass';

let router = createBrowserRouter([
  {
    path: "/countries-react",
    element: <Countries />,
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "countries",
        element: <Body />,
        children: [
          {
            path: "all",
            element: <CountryList />
          },
          {
            path: ":currentCountryID",
            element: <CurrentCountry />
          }
        ]
      },
      {
        path: "aboutUS",
        element: <AboutUs />
      },
      {
        path: "contacts",
        element: <Contacts />
      }
    ]
  }

])

export const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}