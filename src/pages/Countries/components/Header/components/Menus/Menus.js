import "./style.css";

export const Menus = ({menus}) =>{
    return(
        <div className="menus-container">
            {menus && menus.map( menu => <div id={menu} className="menus-item"> {menu} </div>)}
        </div>
    )
}