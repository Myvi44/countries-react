import { Filters } from "./components/Filters";
import { Search } from "./components/Search"
import { CountryList } from "./components/CountryList";

export const Body = () => {
    return (
        <>
            <Search />
            <Filters />
            <CountryList countryList={[{
                name: "Украина",
                population: "568sdvdsv",
                age: "32",
                official: "jfj",
                capital: "55",
                languages: "ghgh",
                flag: "jgt",
                maps: "jgjg",
                openStreetMaps: "jfjfj",
                flags: "gjg",
            },
            {
                name: "  Бельгия",
                population: "563543",
                age: "154"
            }]} />
        </>
    )
}