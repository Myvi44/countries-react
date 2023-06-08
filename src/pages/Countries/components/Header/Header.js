import {menus} from "../../../../constants/menus"

import { Title } from "./components/Title/Title";
import { Menus } from "./components/Menus";

import "./style.css";

export const Header = ({setCurrentBody}) => {
    return (
        <>
            <Title />
            <Menus setCurrentBody={setCurrentBody} menus = {menus}/>
            <hr className="hr-header"/>
        </>
    )
}