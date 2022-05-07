import React from 'react';
import Bikes from '../../Inventory/Bikes';

import Banner from '../Banner/Banner';


const HomeView = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
        </div>
    );
};

export default HomeView;