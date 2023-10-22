export const setRightFilterResult = (countryList, filterResult) => {

    let filteredArray = countryList?.filter(
        country => {
            let timezones = country?.params?.timezones;
            let isValid = false;

            timezones?.map(
                timezone => {

                    let currentTimezone = timezone?.length > 3
                        ? (timezone[3] === "-" ? -1 : 1) * parseInt(timezone.substring(4, 6))
                        : 0;

                    if (currentTimezone <= filterResult?.timezones?.max
                        &&
                        currentTimezone >= filterResult?.timezones?.min) {
                        isValid = true;
                    }
                }
            )

            return isValid;
        }
    )

    filteredArray = filteredArray.filter(
        country => {
            let carside = country?.params?.car?.side;
            return filterResult?.car[carside];
        }
    )

    filteredArray = filteredArray.filter(
        country => {
            let continent = country?.params?.continents[0];
            return filterResult?.continents[continent];
        }
    )

    return filteredArray;
}