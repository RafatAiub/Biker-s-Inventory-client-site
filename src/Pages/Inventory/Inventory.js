import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { _id } = useParams();
    const [bike, setBike] = useState({});
    const { img, name, price, description, quantity, supplier } = bike;
    let amount = quantity;
    // console.log(typeof (amount));

    useEffect(() => {
        const uri = `http://localhost:5000/bikes/${_id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])

    const handleUpdateQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const updatedBike = { quantity };

        const url = `http://localhost:5000/bikes/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBike)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Alert('Quantity updated successfully');
                event.target.reset();
            })
            .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
    }
    const deliveredByOne = async () => {

        const quantity = parseInt(amount) - 1;
        console.log(quantity);
        const updatedBike = { quantity };

        const url = `http://localhost:5000/bikes/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedBike)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Alert('Quantity updated successfully');

            })
            .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });

    }
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
                    <button onClick={deliveredByOne} className='btn btn-outline-success'>Delivered</button>
                </div>


            </div>

            <form onSubmit={handleUpdateQuantity} className='mx-auto text-center p-5'>
                <input width={'300px'} type="text" name='quantity' placeholder='Update Quantity' className='p-2 me-2' />

                <input className='btn btn-outline-success' type="submit" value="Update" />
            </form>

        </div>
    );
};

export default Inventory;