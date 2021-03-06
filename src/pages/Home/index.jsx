import React, { useState } from 'react';
import { BOX_IC, DOC_IC, DOWN_ARROW_IC, RIGHT_ARROW_IC, SEARCH_IC, BG_1, BG_2, BG_3, BG_4, BG_5, BG_6, BG_7 } from '../../assets';
import "./home.css";
import UpcomingList from '../../components/UpcomingList';
import { SearchInput } from '../../common/styles';
import { ContactCard, ImgSlider, NewsCard, ProductAdCard, SliderIndicator } from '../../components';
import { Carousel } from 'react-responsive-carousel';
import { adArray, contactArr, newsArr, orderArr, productAdData, shipmentsArr } from '../../utils/Constants';
import AliceCarousel from 'react-alice-carousel';


import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const Index = () => {
    const [search, setSearch] = useState("");
    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    const responsive = {
        0: { items: 2 },
        568: { items: 2 },
        1024: { items: 2 },
    };

    return (
        <div className="home-container">
            <div className="user-info">
                <p className='wel-text'>Welcome,</p>
                <p className='username-text'>Ratan Kalwa</p>
                <DOWN_ARROW_IC />
            </div>
            <BG_1 className='bg-1' />
            <BG_2 className='bg-2' />
            <BG_3 className='bg-3' />
            <BG_4 className='bg-4' />
            <BG_5 className='bg-5' />
            <BG_6 className='bg-6' />
            <BG_7 className='bg-7' />

            <SearchInput
                fullWidth
                id="outlined-search"
                className="search-input"
                value={search}
                onChange={handleChange}
                startAdornment={<SEARCH_IC style={{ marginRight: 10 }} />}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'search' }}
                placeholder="Search products, quotes, shipments, news"
            />

            <ImgSlider childComp={adArray.map((item, index) => {
                return (
                    <div className="ad-slider">
                        <img src={item.image} alt="ad" key={index} className="ad-img" />
                    </div>
                );
            })} />

            <p className='title-text'>Latest Product</p>
            <Carousel
                swipeable
                className="latest-product-slder"
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                emulateTouch
                autoPlay
                infiniteLoop
                interval={15000}
                swipeScrollTolerance={1}
                preventMovementUntilSwipeScrollTolerance
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    return (
                        <SliderIndicator
                            onClickHandler={onClickHandler}
                            isSelected={isSelected}
                            index={index}
                            label={label}
                        />
                    );
                }}>
                {productAdData.map((item, index) => {
                    return (
                        <ProductAdCard
                            image={item?.image}
                            bg={item.bg}
                            title={item?.title}
                            description={item.description}
                            val={item.value}
                            price={item.price}
                        />
                    );
                })}
            </Carousel>

            <p className='LatestNews-title'>Latest News</p>
            <AliceCarousel
                items={newsArr.map((item, index) => {
                    return (
                        <NewsCard item={item} index={index} data={newsArr} />
                    );
                })}
                mouseTracking
                disableDotsControls
                responsive={responsive}
                swipeExtraPadding="20px"
                renderNextButton={() => <div className="next-btn"><RIGHT_ARROW_IC /></div>}
                //renderPrevButton={() => <div className="prev-btn"><RIGHT_ARROW_IC style={{ transform: "rotate(180deg)" }} /></div>}
                renderPrevButton={() => <></>}
            />

            <UpcomingList title="Upcoming Orders" subtitle="Next 3 Upcoming Orders" icon={<DOC_IC />} data={orderArr} />

            <UpcomingList title="Upcoming Shipments" subtitle="Next 3 Upcoming Shipments" icon={<BOX_IC />} data={shipmentsArr} />

            <ContactCard data={contactArr} />

        </div >);
};
export default Index;
