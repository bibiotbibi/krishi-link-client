import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const MyIntests = () => {
    const { user } = use(AuthContext);
    const [intarests, setInterests] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/interest?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setInterests(data)
                })
        }
    }, [user?.email])
    return (
        <div>
            <h3 className=' font-bold text-xl m-5'>My Intests: {intarests.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th>
                                SL No
                            </th>
                            <th> Crop Name</th>
                            <th>Owner of the crop</th>
                            <th>Quantity</th>
                            <th>User’s message</th>
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            intarests.map((intarest, index) => <tr key={intarest._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>

                                            <div className="font-bold">{intarest?.title?.toString()}</div>


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{intarest?.ownerName}</span>


                                </td>
                                <td>{intarest.quantity}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{intarest.message}</button>
                                </th>
                                <th>
                                    <button className={`badge ${intarest.status === 'pending' ? 'badge-warning' : intarest.status === 'accepted' ? 'badge-success' : 'badge-error'}`}>
                                        {intarest.status}
                                    </button>

                                </th>
                            </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyIntests;