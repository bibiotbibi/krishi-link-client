import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const MyInterests = () => {
    const { user } = useContext(AuthContext);
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://krishi-link-server-flax.vercel.app/interest?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setInterests(data);
                });
        }
    }, [user?.email]);

    return (
        <div className="p-4">
            <h3 className="font-bold text-xl mb-4">My Interests: {interests.length}</h3>

            {/* Responsive table container */}
            <div className="overflow-x-auto w-full rounded-lg shadow-md bg-white">
                <table className="table w-full min-w-[600px]">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>SL No</th>
                            <th>Crop Name</th>
                            <th>Owner</th>
                            <th>Quantity</th>
                            <th>User’s message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interests.map((interest, index) => (
                            <tr key={interest._id} className="hover:bg-gray-50">
                                <th>{index + 1}</th>
                                <td className="font-medium">{interest?.title}</td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{interest?.ownerName}</span>
                                </td>
                                <td>{interest.quantity}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">{interest.message}</button>
                                </td>
                                <td>
                                    <span
                                        className={`badge ${
                                            interest.status === 'pending'
                                                ? 'badge-warning'
                                                : interest.status === 'accepted'
                                                ? 'badge-success'
                                                : 'badge-error'
                                        }`}
                                    >
                                        {interest.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyInterests;
