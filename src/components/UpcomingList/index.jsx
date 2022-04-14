import React from 'react';
import { DOC_IC, RIGHT_ARROW_IC } from '../../assets';
import "./upcomingList.css";
const Index = ({ title, subtitle, icon, data }) => {
    return (
        <>
            <p className='title-text'>{title}</p>
            <p className='subtitle-text'>{subtitle}</p>
            <div className="main-container">
                {data?.map((item, index) => {
                    return (<>
                        <div className="sub-container">
                            <div className="product-card-container">
                                {icon ? icon : <DOC_IC />}
                                <p className="id-text">{item?.id}</p>
                            </div>

                            <div className="tag">
                                <p className="tag-txt">{item?.tag}</p>
                            </div>
                        </div>
                        <p className="card-title">{item?.title}</p>
                        <div className="product-card-container">
                            <p className="dispatch-text">Dispatch : </p>
                            <p className="dispatch-date-text">{item?.dispatchDate}</p>
                        </div>
                        {data?.length - 1 !== index && <div className="dark-line" />}
                    </>);
                })}
            </div>
            <div className="view-btn">
                <p className="view-btn-text">View More</p>
                <RIGHT_ARROW_IC />
            </div>
        </>
    );
};
export default Index;
