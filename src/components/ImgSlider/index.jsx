import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import SliderIndicator from '../SliderIndicator';
const Index = ({ childComp }) => {
    return (
        <Carousel
            swipeable
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            emulateTouch
            autoPlay
            interval={15000}
            swipeScrollTolerance={1}
            preventMovementUntilSwipeScrollTolerance
            infiniteLoop
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                return <SliderIndicator onClickHandler={onClickHandler} isSelected={isSelected} index={index} label={label} />;
            }}>
            {childComp}
        </Carousel>
    );
};
export default Index;
