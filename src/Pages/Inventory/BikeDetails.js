import React, { useEffect, useState } from 'react';

const BikeDetails = ({ bike }) => {
    const { name, supplier, price, img } = bike;
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://nameless-bayou-34637.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])
    const handleBikeDelete = id => {

        const proceed = window.confirm('are you really want to delete this bike???')
        if (proceed) {
            console.log(id);
            const url = `https://nameless-bayou-34637.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleted > 0) {
                        console.log('deleted');
                        const remaining = bikes.filter(bike._id !== id);
                        setBikes(remaining);

                    }
                })
        }
    }

    return (
        <div className='d-flex justify-content-around w-75 mx-auto align-items-center text-center shadow-lg m-5 rounded fw-bold'>
            <div>
                <img width={200} src={img} alt="" />
            </div>
            <div>
                <span>Brand</span>:{name}
                <br />
                <span>Price</span>:{price}
                <br />
                <span>Supplier</span>:{supplier}
            </div>
            <div><button onClick={() => { handleBikeDelete(bike._id) }} className='btn btn-outline-danger'>Delete</button></div>
        </div>
    );
};

export default BikeDetails;