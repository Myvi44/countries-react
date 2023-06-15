export const parseLanguagesToString = (languagesObject) => {
    let languagesString = "";

    let languagesArray = typeof languagesObject == "object" ? Object.values(languagesObject) : [];

    for (let i in languagesArray) {
        if (i == languagesArray?.length - 1)
            languagesString += languagesArray[i] + "."
        else
            languagesString += languagesArray[i] + ","
    }
    return languagesString;
}