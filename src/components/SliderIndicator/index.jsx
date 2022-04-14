import React from 'react';
import "../../pages/Home/home.css";

const Index = ({ onClickHandler, isSelected, index, label }) => {
    const indicatorStyles = {
        background: '#D6D6D6',
        width: 8,
        height: 8,
        display: 'inline-block',
        borderRadius: '50%',
    };
    if (isSelected) {
        return (
            <li
                style={{ ...indicatorStyles, background: '#F49600' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
                className="latest-product-slder-indicator"
            />);
    }
    return (
        <li
            className="latest-product-slder-indicator"
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
        />);
};
export default Index;
