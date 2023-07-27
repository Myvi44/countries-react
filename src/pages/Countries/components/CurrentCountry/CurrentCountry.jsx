import { useContext } from "react"
import { RestCountriesContext } from "../../Countries"
import { useParams } from "react-router";

import "./style.sass"

export const CurrentCountry = () => {

    let countryList = useContext(RestCountriesContext);
    let { currentCountryID } = useParams();

    let currentCountry = countryList.find(country => country?.id === currentCountryID)?.params;

    return (
        <div className="current-country">
            <div className="name">
                {currentCountry?.name?.official}
            </div>
            <div className="content">
                <div className="left-side">
                    <div className="flags">
                        <div className="flag">
                            <img src={currentCountry?.flags?.png} />
                        </div>
                        <div className="coat-of-arms">
                            <img src={currentCountry?.coatOfArms?.png} />
                        </div>
                    </div>
                </div>
                <div className="right-side">

                </div>
            </div>
            <p >
                    {currentCountry?.capital?.length > 0 && "Capital:" + currentCountry?.capital[0] + "."}
            </p>
            <p>
                {currentCountry?.languages && "Languages:" + currentCountry?.languages}
            </p>
            <p>
                {currentCountry?.timezones?.length > 0 && "Timezones:" + currentCountry?.timezones[0] + "."}
            </p>
            <p>
                {currentCountry?.population && "Population:"+ currentCountry?.population}
            </p>
            <p>
                {currentCountry?.status && "Status:" + currentCountry?.status}
            </p>
            <p>
                {currentCountry?.region && "Region:" + currentCountry?.region}
            </p>
            <p>
                {currentCountry?.startOfWeek && "StartOfWeek:" + currentCountry?.startOfWeek}
            </p>
            <p>
                {currentCountry?.car && "Car:" + currentCountry?.car.side}
            </p>

            <p>
                {currentCountry?.currencies && "Currencies:" + currentCountry?.currencies.pen}
            </p>
        </div>
    )
}