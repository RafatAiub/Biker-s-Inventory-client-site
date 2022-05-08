import React from 'react';

const BikeDetails = ({ bike }) => {
    const { name, supplier, price, img } = bike;

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
            <div><button className='btn btn-outline-danger'>Delete</button></div>
        </div>
    );
};

export default BikeDetails;