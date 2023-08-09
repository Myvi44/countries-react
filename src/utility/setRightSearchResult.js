export const setRightSearchResult = (currentArray, searchResult) => {

    if (searchResult === "") return currentArray;

    let resultArray = [];
    let arrayStartsWith = currentArray
        ?.filter(
            (country) => {
                return country?.params?.name?.official?.startsWith(searchResult)
            }
        );
    let arrayIncludes = currentArray
        ?.filter(
            (country) => {
                return country?.params?.name?.official?.includes(searchResult)
            }
        );

    resultArray = [...new Set([...arrayStartsWith, ...arrayIncludes])]

    return resultArray;
}