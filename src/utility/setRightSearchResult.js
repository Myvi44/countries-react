export const setRightSearchResult = (currentArray, searchResult) => {

    if (searchResult === "") return currentArray;

    let resultArray = [];
    let arrayStartsWith = currentArray
        ?.filter(
            (country) => {
                return country?.params?.name?.official?.toLowerCase()?.startsWith(searchResult?.toLowerCase())
            }
        );
    let arrayIncludes = currentArray
        ?.filter(
            (country) => {
                return country?.params?.name?.official?.toLowerCase()?.includes(searchResult?.toLowerCase())
            }
        );
    let arrayCapitalIncludes = currentArray
        ?.filter(
            (country) => {
                return country?.params?.capital && country?.params?.capital[0]?.toLowerCase()?.includes(searchResult?.toLowerCase())
            }
        );
    let arrayCapitalStartsWith = currentArray
        ?.filter(
            (country) => {
                return country?.params?.capital && country?.params?.capital[0]?.toLowerCase()?.startsWith(searchResult?.toLowerCase())
            }
        );

    resultArray = [...new Set([...arrayStartsWith, ...arrayIncludes, ...arrayCapitalIncludes, ...arrayCapitalStartsWith])]

    return resultArray;
}