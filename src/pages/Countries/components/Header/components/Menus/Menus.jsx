import "./style.sass";

export const Menus = ({ menus }) => {
    return (
        <div className="menus-container">
            {
                menus && menus.map(
                    menu =>
                        <div id={menu[1]} key={menu[0]} className="menus-item">
                            <a href={`/countries-react/${menu[0]}`}>
                                {menu[1]}
                            </a>
                        </div>
                )
            }
        </div>
    )
}