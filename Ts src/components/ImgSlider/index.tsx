import React, { ReactChild } from 'react';
import { Carousel } from 'react-responsive-carousel';
import SliderIndicator from '../SliderIndicator';

interface Props {
    childComp: ReactChild[] | undefined;
}

const Index = ({ childComp }: Props) => {
    return (
        <Carousel
            swipeable
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            emulateTouch
            autoPlay
            infiniteLoop
            interval={10000}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                return <SliderIndicator onClickHandler={onClickHandler} isSelected={isSelected} index={index} label={label} />
            }}
        >
            {childComp}
        </Carousel>
    )
}

export default Index;