export const parseCurrenciesToString = (currenciesObject) => {
    let currenciesString = "";

    let currenciesArray = typeof currenciesObject == "object" ? Object.values(currenciesObject) : [];

    for (let i in currenciesArray) {
        currenciesString += currenciesArray[i]?.name + "(" + currenciesArray[i]?.symbol + ")"

        if (i == currenciesArray?.length - 1)
            currenciesString += "."
        else
            currenciesString += ", "
    }
    return currenciesString;
}