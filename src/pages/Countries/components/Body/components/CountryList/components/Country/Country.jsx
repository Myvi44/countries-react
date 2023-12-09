import { Link } from "react-router-dom"
import { Routes } from "../../../../../../../../constants/Routes"

import "./style.sass"

export const Country = ({ currentCountry }) => {

    return (
        <div className="country">
            <div
                className="background"
                style={{ backgroundImage: `url(${currentCountry?.flags?.png})` }}
                id={`${currentCountry?.cca3}BG`}
            >
                <div className="background-filter" >
                    <div className="hidden-info">
                        <div className="country__capital">
                            Capital:
                            {
                                currentCountry?.capital
                            }
                        </div>

                    </div>
                    <h3 className="country__name">
                        <Link to={Routes.CurrentCountry(currentCountry?.cca3)}>
                            {currentCountry?.name?.official}
                        </Link>
                    </h3>
                </div>
            </div>
        </div >
    )
}