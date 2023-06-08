export const Country = ({currentCountry}) => {
    return (
        <div>
            <h3>{currentCountry.name}</h3>
            <p>{currentCountry.official}</p>
            <p>{currentCountry.capital}</p>
            <p>{currentCountry.region}</p>
            <p>{currentCountry.languages}</p>
            <p>{currentCountry.flag}</p>
            <p>{currentCountry.maps}</p>
            <p>{currentCountry.openStreetMaps}</p>
            <p>{currentCountry.population}</p>
            <p>{currentCountry.flags}</p>
        </div>
    )
}