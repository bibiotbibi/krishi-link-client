import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const AddCrops = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleAddCrop = async (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        const form = e.target;
        const cropData = {
            title: form.title.value,
            category: form.category.value,
            price: Number(form.price.value),
            unit: form.unit.value,
            quantity: Number(form.quantity.value),
            description: form.description.value,
            location: form.location.value,
            image: form.image.value,
            owner: {
                ownerEmail: user.email,
                ownerName: user.displayName || 'Anonymous'
            }
        };

        try {
            const res = await fetch('https://krishi-link-server-flax.vercel.app/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cropData)
            });

            if (!res.ok) throw new Error('Failed to add crop');

            setSuccess('Crop added successfully!');
            form.reset();

            setTimeout(() => navigate('/myposts'), 1500);
            Swal.fire({
                title: "Success!",
                text: "Crop added successfully!",
                icon: "success",
                confirmButtonText: "Go to My Posts"
            }).then(() => {
                navigate('/myposts');
            });

        } catch (err) {
            setError(err.message);
        }
    };



    return (
        <div className="max-w-2xl mx-auto p-5">
            <h2 className="text-2xl font-bold mb-4">Add New Crop</h2>
            <form onSubmit={handleAddCrop} className="flex flex-col gap-3">
                <input type="text" name="title" placeholder="Crop Title" className="input input-bordered w-full" required />
                <select name="category" className="input input-bordered w-full" required>
                    <option value="">Select category</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Grain">Grain</option>
                </select>
                <input type="number" name="price" placeholder="Price " className="input input-bordered w-full" required />
                <input type="text" name="unit" placeholder="Unit (kg, ton, bag)" className="input input-bordered w-full" required />
                <input type="number" name="quantity" placeholder="Estimated Quantity" className="input input-bordered w-full" required />
                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />

                <button type="submit" className="btn btn-primary mt-2">Add Crop</button>

                {success && <p className="text-green-500 mt-2">{success}</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default AddCrops;
