import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Profile = () => {
  const auth = getAuth();
  const storage = getStorage();

  const [user, setUser] = useState(auth.currentUser);
  const [name, setName] = useState("");
  const [photo, ] = useState(null);
  const [ setPreview] = useState(
    "https://i.ibb.co/2kR5zq0/default-avatar.png"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
        setPreview(currentUser.photoURL || "https://i.ibb.co/2kR5zq0/default-avatar.png");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleUpdateProfile = async () => {
    if (!user) return setError("User not logged in");
    if (!name && !photo) return setError("Please enter a name or select a photo");

    try {
      setLoading(true);
      setError("");
      setSuccessMsg("");

      let photoURL = user.photoURL;

      // Upload photo to Firebase Storage if selected
      if (photo) {
        const storageRef = ref(storage, `profile-images/${user.uid}_${Date.now()}`);
        await uploadBytes(storageRef, photo);
        photoURL = await getDownloadURL(storageRef);
      }

      // Update Firebase Auth profile
      await updateProfile(user, { displayName: name, photoURL });

      // Update backend user record
      await fetch(`https://krishi-link-server-flax.vercel.app/users/${user.uid}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName: name, photoURL }),
      });

      // Update local state
      const updatedUser = auth.currentUser;
      setUser(updatedUser);
      setPreview(updatedUser.photoURL);

      setSuccessMsg("Profile updated successfully ✅");
    } catch (err) {
      console.error(err);
      setError("Failed to update profile ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        {successMsg && <p className="text-green-500 text-center mb-2">{successMsg}</p>}

        <div className="flex flex-col items-center">
          

          {/* Email */}
          <p className="mt-3 text-sm text-gray-600">{user?.email}</p>

          {/* Form */}
          <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

        
          </div>

          {/* Update Button */}
          <div className="flex justify-end w-full mt-6">
            <button
              onClick={handleUpdateProfile}
              disabled={loading}
              className="bg-primary px-10 py-2 rounded-lg text-white font-semibold hover:bg-lime-700"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
