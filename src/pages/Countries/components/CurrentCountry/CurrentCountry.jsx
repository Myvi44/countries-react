import { useContext } from "react"
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { RestCountriesContext } from "../../Countries"
import { parseLanguagesToString } from "../../../../utility/parseLanguagesToString";
import { parseCurrenciesToString } from "../../../../utility/parseCurrenciesToString";
import { parseBordersToString } from "../../../../utility/parseBordersToString";
import { setZoomScale } from "../../../../utility/setZoomScale";
import { Routes } from "../../../../constants/Routes";

import { GoogleMapCustom } from "../../../../components/GoogleMapCustom"

import "./style.sass"

export const CurrentCountry = () => {

    let countryList = useContext(RestCountriesContext);
    let { currentCountryID } = useParams();
    let currentIndex;
    let currentCountry = countryList.find(
        (country, index) => {
            currentIndex = index;
            if (country?.id === currentCountryID) return true;
        }
    )?.params;

    console.log(currentCountry)

    return (<>
        <div className="next-element__button">
            <Link to={
                currentIndex < countryList.length - 1
                    ? Routes.CurrentCountry(countryList[currentIndex + 1]?.id)
                    : Routes.CurrentCountry(countryList[0]?.id)
            }>
                <SkipNextIcon htmlColor="salmon" fontSize="large" />
            </Link>
        </div >
        <div className="prev-element__button">
            <Link to={
                currentIndex > 0
                    ? Routes.CurrentCountry(countryList[currentIndex - 1]?.id)
                    : Routes.CurrentCountry(countryList[countryList.length - 1]?.id)
            }>
                <SkipPreviousIcon htmlColor="salmon" fontSize="large" />
            </Link>
        </div>
        <div className="current-country">
            <div className="name">
                <b>
                    {currentCountry?.name?.official}
                </b>
            </div>
            <div className="content">
                <div className="left-side">
                    <div className="flags">
                        <div className="flag">
                            <img src={currentCountry?.flags?.png} />
                        </div>
                        {
                            currentCountry?.coatOfArms?.png &&
                            <div className="coat-of-arms">
                                <img src={currentCountry?.coatOfArms?.png} />
                            </div>
                        }
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
                                <span className="param-unit">Timezones: </span> {currentCountry?.timezones[0]}.
                            </span>
                        }
                    </p>
                    <p>
                        {
                            currentCountry?.population > 0 &&
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
                            currentCountry?.car &&
                            <span className="country__params">
                                <span className="param-unit">Car:</span> {currentCountry?.car.side}
                            </span>
                        }
                    </p>

                    <p>
                        {
                            currentCountry?.currencies &&
                            <span className="country__params">
                                <span className="param-unit"> Currencies: </span> {parseCurrenciesToString(currentCountry?.currencies)}
                            </span>
                        }
                    </p>
                    <p>
                        {
                            currentCountry?.borders &&
                            <span className="country__params">
                                <span className="param-unit">Borders:</span> {parseBordersToString(currentCountry?.borders, countryList)}
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
                <div className="right-side">
                    <div className="google-map">
                        <GoogleMapCustom currentZoom={setZoomScale(currentCountry?.area)} currentCenter={currentCountry?.latlng} />
                    </div>
                    <div className="OpenStreet">
                        OpenStreetMaps: <a href={currentCountry?.maps?.openStreetMaps}>{currentCountry?.maps?.openStreetMaps}</a>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}