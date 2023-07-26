import {menus} from "../../../../constants/menus"

import { Title } from "./components/Title/Title";
import { Menus } from "./components/Menus";

import "./style.sass";

export const Header = () => {
    return (
        <>
            <Title />
            <Menus menus = {menus}/>
            <hr className="hr-header"/>
        </>
    )
}