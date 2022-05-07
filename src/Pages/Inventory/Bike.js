import React from 'react';
import './Bike.css';
import { useNavigate } from 'react-router-dom';

const Bike = ({ bike }) => {
    const { name, description, price, img } = bike;
    const navigate = useNavigate();
    const navigateToServiceDetail = name => {
        navigate(`/bikes/${name}`);

    }
    return (
        <div>
            <div>
                <div className='bike shadow-lg'>
                    <img width='420px' src={img} alt="" />
                    <h2>{name}</h2>
                    <p>Price: <span className='fw-bolder'>{price}</span> Tk</p>
                    <p className='fs-2 container-fluid'><small>{description}</small></p>
                    <button onClick={() => navigateToServiceDetail(name)} className='btn rounded fw-bolder btn-outline-info fs-5'>Book for {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Bike;