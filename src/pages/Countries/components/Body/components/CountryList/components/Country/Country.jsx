import { Link } from "react-router-dom"
import { Routes } from "../../../../../../../../constants/Routes"

import { parseLanguagesToString } from "../../../../../../../../utility/parseLanguagesToString"

import "./style.sass"

export const Country = ({ currentCountry }) => {

    return (
        <div className="country">
            {/* <h3 className="country__name">
                <Link to={Routes.CurrentCountry(currentCountry?.cca3)}>
                    {currentCountry?.name?.official}
                </Link>
            </h3> */}
            <div className="country__flag">
                <img src={currentCountry?.flags?.png} alt={currentCountry?.flags?.alt} />
            </div>
            
        </div>
    )
}