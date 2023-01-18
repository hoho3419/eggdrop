import React, { useEffect } from "react";
import Media from "../components/Media";
import MenuList from "../components/MenuList";
import { ITEMS, MENU_HEADER } from "../util/itemlist";
import { scrollToTop } from "../App";
const Menu = () =>{
    useEffect(() =>{
        scrollToTop()
    },[])
    return (
        <div className="menu">
            <Media />
            <MenuList header={MENU_HEADER} items={ITEMS} />
        </div>
    )
}
export default Menu;