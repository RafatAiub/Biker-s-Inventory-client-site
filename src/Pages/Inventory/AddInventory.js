import React from 'react';

const AddInventory = () => {
    const handleAddBike = e => {
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const bike = { name, img, description, price, quantity, supplier }
        fetch('http://localhost:5000/bikes', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bike)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('New Bike Added successfully');
                e.target.reset();
            })
    }
    return (
        <div className='text-center shadow-lg w-75 mx-auto m-4 rounded'>
            <h1 className='text-warning'>Add New Bike Now</h1>
            <form onSubmit={handleAddBike}>
                <input className='p-1 m-2 rounded w-25 border-info fw-bolder' type="text" name='name' placeholder='Brand Name' />
                <br />
                <input className='p-1 m-2 rounded w-25 border-info fw-bolder' type="text" name='img' placeholder='image URL' />
                <br />
                <input className='p-1 m-2 rounded w-25 border-info fw-bolder' type="text" name='description' placeholder='Description' />
                <br />
                <input className='p-1 m-2 rounded w-25 border-info fw-bolder' type="text" name='price' placeholder='Price' />
                <br />
                <input className='p-1 m-2 rounded w-25 border-info fw-bolder' type="text" name='quantity' placeholder='Quantity' />
                <br />
                <input className='p-1 m-2 rounded w-25 border-info fw-bolder' type="text" name='supplier' placeholder='Supplier Name' />
                <br />
                <input className='p-1 m-2 rounded w-25 border-info fw-bolder text-warning' type="submit" value="Bike Added" />
            </form>
        </div>
    );
};

export default AddInventory;