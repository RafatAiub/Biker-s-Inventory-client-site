import React from 'react';
import { Link } from 'react-router-dom';
import Bikes from '../../Inventory/Bikes';

import Banner from '../Banner/Banner';


const HomeView = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>

            <div className='mx-auto text-center m-5'>
                <button className='btn btn-outline-dark text-white'><Link className='text-danger fw-bolder' to='/inventory/manage'> Manage Inventory </Link></button>
            </div>
        </div>
    );
};

export default HomeView;