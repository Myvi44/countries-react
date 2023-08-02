export const parseBordersToString = (bordersArray, countryList) => {
    let resultArray = [];

    for (let i = 0; i < bordersArray?.length; i++) {

        let currentBorder = countryList?.find(
            (country) => {
                if (country?.id === bordersArray[i]) {
                    return country?.params?.name?.official
                }
            }
        )

        let currentSymbol = i < bordersArray?.length - 1 ? ", " : "."
        resultArray?.push(
            <a className="border-link" href={`/countries-react/countries/${currentBorder?.id}`}>
                {
                    currentBorder?.params?.name?.official + currentSymbol
                }
            </a>
        )
    }

    return resultArray;
}