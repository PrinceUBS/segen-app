import React from "react";
import { ACCOUNT_IC, BASKET_IC, LOGO_IC, MENU_IC } from "../../assets";
import { MenuButton } from "../../common/styles";
import "./header.scss";

const Index = () => {
    return (
        <div className="container">
            <LOGO_IC />
            <div className="menuBar">
                <MenuButton className="menu-btn">
                    <ACCOUNT_IC />
                    <p className='btn-text'>Account</p>
                </MenuButton>
                <MenuButton className="menu-btn">
                    <BASKET_IC />
                    <p className='btn-text'>Basket</p>
                    <div className="badge">2</div>
                </MenuButton>
                <MenuButton className="menu-btn">
                    <MENU_IC />
                    <p className='btn-text'>Menu</p>
                </MenuButton>
            </div>
        </div>
    );
}

export default Index