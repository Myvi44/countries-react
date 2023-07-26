import { ApiConnect } from "./ApiConnect"

export const sendRequest = (setResponse) => {
    ApiConnect.sendRequest().then((response) => {
        let resultResponse = response.response.map(
            country => {
                return {
                    id: country?.cca3,
                    params: country
                }
            }
        );
        setResponse(resultResponse);
    });
}