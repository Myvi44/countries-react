import { parseLanguagesToString } from "../../../../../../../../utility/parseLanguagesToString"

import "./style.sass"

export const Country = ({ currentCountry, setCurrentElement }) => {

    return (
        <div className="country">
            <h3 className="country__name" onClick={()=>setCurrentElement(currentCountry?.name?.official) }>
                {currentCountry?.name?.official}
            </h3>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png} alt={currentCountry?.flags?.alt} />
            </div>
            <p className="capital">
                {currentCountry?.capital?.length > 0 && "Capital: " + currentCountry?.capital[0] + "."}
            </p>
            <p className="languages">
                {currentCountry?.languages && "Languages: " + parseLanguagesToString(currentCountry?.languages)}
            </p>
            <p className="timezones">
                {currentCountry?.timezones?.length > 0 && "Timezones:  " + currentCountry?.timezones[0] + "."}
            </p>
            <p className="population">
                {currentCountry?.population && "Population: " + currentCountry?.population}
            </p>
            <p className="status">
                {currentCountry?.status && "Status: " + currentCountry?.status}
            </p>
            <p className="region">
                {currentCountry?.region && "Region: " + currentCountry?.region}
            </p>
            <p className="startOfWeek">
                {currentCountry?.startOfWeek && "StartOfWeek: " + currentCountry?.startOfWeek}
            </p>
        </div>
    )
}