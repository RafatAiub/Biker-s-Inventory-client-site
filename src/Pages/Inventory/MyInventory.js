import React from 'react';
import ManageInventory from './ManageInventory';

const MyInventory = () => {
    return (
        <div>
            <h2 className='text-center text-danger fw-bolder mt-5 fs-3'>Welcome to my bikes Collection</h2>
            <ManageInventory></ManageInventory>
        </div>
    );
};

export default MyInventory;