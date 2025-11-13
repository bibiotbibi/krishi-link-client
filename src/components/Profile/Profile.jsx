import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [profile, setProfile] = useState({ name: '', email: '' });
    const [editing, setEditing] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        if (user) {
            setProfile({
                name: user.displayName || '',
                email: user.email || '',
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        updateUserProfile(profile.name, profile.email)
            .then(() => {
                setSuccessMsg('Profile updated successfully!');
                setEditing(false);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

                <div className="flex flex-col gap-4">

                    <div>
                        <label className="text-gray-700 font-semibold">Name</label>
                        <input
                            type="text" name="name" value={profile.name}
                            onChange={handleChange}
                            className={`input w-full rounded-md p-2 mt-1 border ${editing ? 'border-gray-300' : 'border-transparent bg-gray-100'}`}
                            readOnly={!editing}
                        />
                    </div>


                    <div>
                        <label className="text-gray-700 font-semibold">Email</label>
                        <input type="email" name="email" value={profile.email}
                            onChange={handleChange}
                            className={`input w-full rounded-md p-2 mt-1 border  
                                'border-gray-300'
                                 : 
                                 'border-transparent bg-gray-100'}`}
                            readOnly={!editing}
                        />
                    </div>


                    <div className="flex justify-between mt-4">
                        {!editing ? (
                            <button onClick={() => setEditing(true)}
                                className="btn btn-secondary bg-primary text-white font-semibold rounded-md p-2 hover:bg-blue-600"
                            >
                                Edit
                            </button>
                        ) : (
                            <button onClick={handleSave}
                                className="btn btn-primary  bg-primary text-white font-semibold rounded-md p-2 hover:bg-secondary"
                            >
                                Save
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
