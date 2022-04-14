import React from 'react';
import { RIGHT_ARROW_OUTLINE_IC } from '../../assets';
import { MenuButton } from '../../common/styles';
import "./newsCard.css";
const Index = ({ item }) => {
    return (
        <div className="news-container">
            <img src={item.img} alt="news" className="news-img" />
            <div className="news-info">
                <p className='news-title'>{item?.title}</p>
                <p className='news-subtitle'>{item?.description}</p>
                <div className="news-row">
                    <p className='news-date'>{item?.date}</p>

                    <MenuButton className="menu-btn">
                        <RIGHT_ARROW_OUTLINE_IC />
                    </MenuButton>
                </div>
            </div>
        </div>
    );
};
export default Index;
