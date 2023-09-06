import { Link } from "react-router-dom"
import { Routes } from "../../../../../../../../constants/Routes"

import { parseLanguagesToString } from "../../../../../../../../utility/parseLanguagesToString"

import "./style.sass"

export const Country = ({ currentCountry }) => {

    return (
        <div className="country">
            <h3 className="country__name">
                <Link to={Routes.CurrentCountry(currentCountry?.cca3)}>
                    {currentCountry?.name?.official}
                </Link>
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
                    <span className="country__params">
                        <span className="param-unit">Population: </span>  {currentCountry?.population}.
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
                    currentCountry?.area &&
                    <span className="country__params">
                        <span className="param-unit">Area: </span> {currentCountry?.area} km².
                    </span>
                }
            </p>
        </div>
    )
}