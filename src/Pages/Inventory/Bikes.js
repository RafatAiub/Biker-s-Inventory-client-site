import React, { useEffect, useState } from 'react';
import Bike from './Bike';
import './Bikes.css'

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data));

    }, [])
    return (
        <div id='bike' className='container'>
            <div className="row">
                <h1 className='text-center p-5 fw-bold'>Provided<span className='text-danger'>bikes</span></h1>
                <div className="bikes-container">
                    {

                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        >
                        </Bike>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bikes;