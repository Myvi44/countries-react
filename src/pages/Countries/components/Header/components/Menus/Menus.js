import "./style.css";

export const Menus = ({menus, setCurrentBody}) =>{
    return(
        <div className="menus-container">
            {menus && menus.map( menu => <div id={menu[1]} key={menu[0]} className="menus-item" onClick={() => setCurrentBody(menu[0])}> {menu[1]} </div>)}
        </div>
    )
}