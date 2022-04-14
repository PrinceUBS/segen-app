import React from 'react';
import { ProductAdCardComp } from '../../common/styles';
import "./productCard.css";
const Index = ({ title, val, image, description, bg, price }) => {
    return (
        <div style={{ paddingBottom: 40, marginTop: 12 }}>
            <ProductAdCardComp $bg={bg}>
                <div className="product-card-container">
                    <img className="product-card-img" src={require("../../assets/img1.png")} alt="product" />
                    <div className="product-card-info">
                        <p className="product-card-title">{title}</p>
                        <p className="product-card-description">{description}</p>
                    </div>
                </div>
                <div className="wLine" />

                <div className="bottom-div">
                    <div className="product-card-container">
                        <p className="price-text">{price}</p>
                        <p className="value-text">/ {val}</p>
                    </div>

                    <button className="product-btn">
                        <p className="product-btn-txt">View Product</p>
                    </button>
                </div>
            </ProductAdCardComp>
        </div>
    );
};
export default Index;
