import { useState } from "react"

import "./style.sass";

import MenuIcon from '@mui/icons-material/Menu';

export const DropMenu = ({ menus }) => {

    let [dropMenuHidden, setDropMenuHidden] = useState(true);

    let switcherOnClick = () => {
        setDropMenuHidden(!dropMenuHidden)
    }

    return (
        <div className="drop-menu">
            <div onClick={switcherOnClick} className="drop-menu__switcher">
                <MenuIcon />
            </div>
            {
                !dropMenuHidden &&
                <div className="menu">
                    {
                        menus && menus.map(
                            menu =>
                                <div id={menu[1]} key={menu[0]} className="drop-menu__item">
                                    <a href={menu[0]}>
                                        {menu[1]}
                                    </a>
                                </div>
                        )
                    }
                </div>
            }
        </div >
    )
}