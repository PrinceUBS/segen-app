import React from 'react';
import { CALL_IC } from '../../assets';
import "./contactCard.css";
const Index = ({ data }) => {
    return (<>
        {data?.map((item, index) => {
            return (
                <div className='contact-card'>
                    <div className="c-card-container">
                        <img className="c-cart-img" src={item.img} alt="product" />
                        <div className="main-row">
                            <p className="c-job">{item.job}</p>
                            <p className="c-title">{item.name}</p>

                            <div className="top-row">
                                <div className="c-card-container">
                                    <CALL_IC style={{ marginRight: 10 }} />
                                    <p className="value-text">{item.contact}</p>
                                </div>

                                <button className="c-product-btn">
                                    <p className="product-btn-txt">Contact Form</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="dark-line" style={{ marginTop: 20, width: "100%" }} />
                    <p className="c-job">{item.description}</p>
                </div>
            );
        })}
    </>);
};
export default Index;
