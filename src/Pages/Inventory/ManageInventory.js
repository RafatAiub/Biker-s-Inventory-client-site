
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BikeDetails from './BikeDetails';

const ManageInventory = () => {
    const [bikes, setBikes] = useState([]);
    const navigate = useNavigate();
    const navigateToAddBike = () => {
        navigate(`/inventory/added`);

    }
    useEffect(() => {
        // fetch('https://nameless-bayou-34637.herokuapp.com/bikes')
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));

    }, [])
    return (
        <div className='text-center mb-5'>
            {
                bikes.map(bike => <BikeDetails
                    key={bike._id}
                    bike={bike}
                ></BikeDetails>)


            }
            <div>
                <button onClick={navigateToAddBike} className='btn btn-outline-success' >Add new Bike</button>
            </div>
        </div>
    );
};

export default ManageInventory;