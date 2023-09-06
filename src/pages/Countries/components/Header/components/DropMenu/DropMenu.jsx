import { useState } from "react"
import {Link} from "react-router-dom"

import "./style.sass";

import MenuIcon from '@mui/icons-material/Menu';

export const DropMenu = ({ menus }) => {

    let [dropMenuHidden, setDropMenuHidden] = useState(true);

    let switcherOnClick = () => {
        setDropMenuHidden(!dropMenuHidden)
    }

    let menuObject = document.querySelector(".menu")

    if(dropMenuHidden){
        menuObject?.classList?.add("menu-wrapped")
    }
    else{
        menuObject?.classList?.remove("menu-wrapped")
    }


    return (
        <div className="drop-menu">
            <div onClick={switcherOnClick} className="drop-menu__switcher">
                <MenuIcon fontSize="large" />
            </div>
            {
                <div className="menu">
                    {
                        menus && menus.map(
                            menu =>
                                <div id={menu[1]} key={menu[0]} className="drop-menu__item">
                                    <Link to={menu[0]}>
                                        {menu[1]}
                                    </Link>
                                </div>
                        )
                    }
                </div>
            }
        </div >
    )
}