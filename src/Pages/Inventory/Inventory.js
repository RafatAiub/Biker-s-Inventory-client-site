import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { _id } = useParams();

    return (
        <div>
            {_id}
        </div>
    );
};

export default Inventory;