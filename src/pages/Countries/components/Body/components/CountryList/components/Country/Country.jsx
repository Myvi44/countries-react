import { parseLanguagesToString } from "../../../../../../../../utility/parseLanguagesToString"

import "./style.sass"

export const Country = ({ currentCountry }) => {

    return (
        <div className="country">
            <h3 className="country__name">
                <a href={currentCountry?.cca3}>
                    {currentCountry?.name?.official}
                </a>
            </h3>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png} alt={currentCountry?.flags?.alt} />
            </div>
            <p >
                {
                    currentCountry?.capital?.length > 0 &&
                    <span className="country__params">
                        <span className="param-unit">Capital: </span> {currentCountry?.capital[0]}.
                    </span>
                }
            </p>
            <p>
                {
                    currentCountry?.languages &&
                    <span className="country__params">
                        <span className="param-unit">Languages: </span> {parseLanguagesToString(currentCountry?.languages)}
                    </span>
                }
            </p>
            <p>
                {
                    currentCountry?.timezones?.length > 0 &&
                    <span className="country__params">
                        <span className="param-unit">Timezones: </span> {currentCountry?.timezones}.
                    </span>
                }
            </p>
            <p>
                {
                    <span className="country__params">
                        <span className="param-unit">Population: </span>  {currentCountry?.population}.
                    </span>
                }
            </p>
            <p>
                {
                    currentCountry?.status &&
                    <span className="country__params">
                        <span className="param-unit">Status: </span>  {currentCountry?.status}.
                    </span>
                }
            </p>
            <p>
                {
                    currentCountry?.region &&
                    <span className="country__params">
                        <span className="param-unit">Continent: </span> {currentCountry?.continents[0]}.
                    </span>
                }
            </p>
            <p>
                {
                    currentCountry?.startOfWeek &&
                    <span className="country__params">
                        <span className="param-unit">StartOfWeek: </span> {currentCountry?.startOfWeek}.
                    </span>
                }
            </p>
            <p>
                {
                    currentCountry?.area &&
                    <span className="country__params">
                        <span className="param-unit">Area: </span> {currentCountry?.area} km².
                    </span>
                }
            </p>
        </div>
    )
}