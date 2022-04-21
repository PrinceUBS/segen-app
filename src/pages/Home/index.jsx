import React from 'react';
import { BOX_IC, DOC_IC, BG_1, BG_2, BG_3, BG_4, BG_5, BG_6, BG_7 } from '../../assets';
import "./home.css";
import { ContactCard } from '../../components';
import { contactArr, orderArr, shipmentsArr } from '../../utils/Constants';
import UpcomingList from '../../components/UpcomingList';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const Index = () => {
    return (
        <div className="home-container">
            <BG_1 className='bg-1' />
            <BG_2 className='bg-2' />
            <BG_3 className='bg-3' />
            <BG_4 className='bg-4' />
            <BG_5 className='bg-5' />
            <BG_6 className='bg-6' />
            <BG_7 className='bg-7' />

            <UpcomingList title="Upcoming Orders" subtitle="Next 3 Upcoming Orders" icon={<DOC_IC />} data={orderArr} />

            <UpcomingList title="Upcoming Shipments" subtitle="Next 3 Upcoming Shipments" icon={<BOX_IC />} data={shipmentsArr} />

            <ContactCard data={contactArr} />

        </div>);
};
export default Index;
