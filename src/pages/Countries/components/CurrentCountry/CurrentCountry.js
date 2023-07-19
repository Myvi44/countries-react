import "./style.css"

export const CurrentCountry = ({ currentCountry }) => {
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

        </div>
    )
}