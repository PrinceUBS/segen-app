import React from "react";
import { ACCOUNT_IC, BASKET_IC, CLOSE_IC, LOGO_IC, MENU_IC } from "../../assets";
import { MenuButton } from "../../common/styles";
import "./header.scss";
const Index = ({ onC, DrawerOpened }) => {
    return (
        <div className="container">
            <LOGO_IC />
            <div className="menuBar">
                <MenuButton className="menu-btn" style={{  paddingBottom: 0 }}>
                    <ACCOUNT_IC />
                    <p className='btn-text'>Account</p>
                </MenuButton>
                <MenuButton className="menu-btn" style={{ marginLeft: 8, paddingBottom: 0 }}>
                    <BASKET_IC />
                    <p className='btn-text'>Basket</p>
                    <div className="badge">2</div>
                </MenuButton>
                <MenuButton onClick={onC} className="menu-btn" style={{ marginLeft: 5, paddingBottom: 0 }}>
                    {DrawerOpened ? <CLOSE_IC /> : <MENU_IC />}
                    <p className='btn-text'>Menu</p>
                </MenuButton>
            </div>
        </div>
    );
};
export default Index;
