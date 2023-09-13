import { useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';

import "./style.sass";

export const DropMenu = ({ menus }) => {

    let [dropMenuHidden, setDropMenuHidden] = useState(true);

    let switcherOnClick = () => {
        setDropMenuHidden(!dropMenuHidden)
    }

    let menuObject = document.querySelector(".menu")
    if (menuObject) {
        if (!dropMenuHidden) {
            menuObject.style.transform = "translate(0%)"
        }
        else {
            menuObject.style.transform = "translate(-100%)"
        }
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