export const Routes = {
    Home: "/countries-react",
    Countries: "/countries-react/countries/all",
    AboutUs: "/countries-react/aboutUS",
    Contacts: "/countries-react/contacts",

    CurrentCountry(countryID) {
        return `/countries-react/countries/${countryID}`
    }
}