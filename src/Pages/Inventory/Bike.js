import React from 'react';
import './Bike.css';
import { useNavigate } from 'react-router-dom';

const Bike = ({ bike }) => {
    const { name, description, price, img, _id } = bike;
    const navigate = useNavigate();
    const navigateToUpdate = _id => {
        navigate(`/inventory/${_id}`);

    }
    return (
        <div>
            <div>
                <div className='bike shadow-lg'>
                    <img width='420px' src={img} alt="" />
                    <h2>{name}</h2>
                    <p>Price: <span className='fw-bolder'>{price}</span> Tk</p>
                    <p className='fs-2 container-fluid'><small>{description}</small></p>
                    <button onClick={() => navigateToUpdate(_id)} className='btn rounded fw-bolder btn-outline-info fs-5'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Bike;