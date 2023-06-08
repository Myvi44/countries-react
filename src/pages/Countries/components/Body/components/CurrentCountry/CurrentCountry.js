export const CurrentCountry = ({currentCountry}) => {
    return (
        <>
            <h3>
                {currentCountry.name.common}
            </h3>
        </>
    )
}