import React, { useEffect, useState } from 'react';
import BikeDetails from './BikeDetails';

const ManageInventory = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        // fetch('https://nameless-bayou-34637.herokuapp.com/bikes')
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));

    }, [])
    return (
        <div>
            {
                bikes.map(bike => <BikeDetails
                    key={bike._id}
                    bike={bike}
                ></BikeDetails>)
            }
        </div>
    );
};

export default ManageInventory;