import "./style.css"

export const Country = ({ currentCountry }) => {
    return (
        <div className="country">
            <h3>{currentCountry?.name?.official}</h3>
            <div><img src={currentCountry?.flags?.png} alt={currentCountry?.flags?.alt} /></div>
        </div>
    )
}