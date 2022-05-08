import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { _id } = useParams();
    const [bike, setBike] = useState([]);
    const { img, name, price, description, quantity, supplier } = bike;

    const uri = `http://localhost:5000/bikes/${_id}`;
    fetch(uri)
        .then(res => res.json())
        .then(data => setBike(data))


    return (
        <div className='m-2 shadow-lg p-2'>
            <div className='d-flex'>
                <div>
                    <img className='container-fluid' src={img} alt="" />
                </div>
                <div className='ms-5'>
                    <h3>Brand [ {name} ]</h3>
                    <h5>{price}/-TK</h5>
                    <h4>Total reserve amount[{quantity}]</h4>
                    <p className='fst-italic'>{supplier}</p>
                    <p className='fw-bolder'>{description}</p>
                    <button className='btn btn-outline-success'>Delivered</button>
                </div>
            </div>



        </div>
    );
};

export default Inventory;