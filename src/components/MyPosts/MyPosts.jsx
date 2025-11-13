import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [myCrops, setMyCrops] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/products?ownerEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setMyCrops(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  // 
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (confirm.isConfirmed) {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
      });
      setMyCrops(myCrops.filter(crop => crop._id !== id));
      Swal.fire("Deleted!", "Your crop post has been deleted.", "success");
    }
  };

  
  const handleEdit = async (id) => {
    const crop = myCrops.find(c => c._id === id);

    const { value: formValues } = await Swal.fire({
      title: 'Edit Crop Info',
      html: `
        <input id="swal-name" class="swal2-input" value="${crop.title}" placeholder="Title">
        <input id="swal-price" class="swal2-input" value="${crop.price}" placeholder="Price">
      `,
      focusConfirm: false,
      preConfirm: () => ({
        title: document.getElementById('swal-name').value,
        price: document.getElementById('swal-price').value
      })
    });

    if (formValues) {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues)
      });
      Swal.fire("Updated!", "Your crop info has been updated.", "success");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6 text-center">My Crop Posts</h2>

      {myCrops.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myCrops.map(crop => (
            <div key={crop._id} className="p-4 border rounded-lg shadow bg-white">
              <img src={crop.image} alt={crop.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-bold mt-2">{crop.title}</h3>
              <p>Price: {crop.price} / {crop.unit}</p>
              <p>Quantity: {crop.quantity}</p>
              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleEdit(crop._id)}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(crop._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
