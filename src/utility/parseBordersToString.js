import { Link } from "react-router-dom";

import { Routes } from "../constants/Routes";

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
            <Link className="border-link" to={Routes.CurrentCountry(currentBorder?.id)}>
                {
                    currentBorder?.params?.name?.official + currentSymbol
                }
            </Link>
        )
    }

    return resultArray;
}