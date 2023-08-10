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

    resultArray = [...new Set([...arrayStartsWith, ...arrayIncludes])]

    return resultArray;
}