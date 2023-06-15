import { parseLanguagesToString } from "../../../../../../../../utility/parseLanguagesToString"

import "./style.css"

export const Country = ({ currentCountry }) => {

    return (
        <div className="country">
            <h3 className="country__name">
                {currentCountry?.name?.official}
            </h3>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png} alt={currentCountry?.flags?.alt} />
            </div>
            <p>
                {currentCountry?.capital?.length > 0 && "Capital:" + currentCountry?.capital[0] + "."}
            </p>
            <p>
                {currentCountry?.languages && "Languages:" + parseLanguagesToString(currentCountry?.languages)}
            </p>
        </div>
    )
}