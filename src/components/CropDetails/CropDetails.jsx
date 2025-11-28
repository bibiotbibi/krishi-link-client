import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const CropDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const interestsModalRef = useRef(null);
  const cropId = id;

  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const [interests, setInterests] = useState([]);
  const [hasInterest, setHasInterest] = useState(false);

  
  const handleInterestsModalOpen = () => {
    if (user?.email === crop?.owner?.ownerEmail) {
      Swal.fire("You cannot place interest on your own crop");
      return;
    }
    if (hasInterest) {
      Swal.fire("You have already sent an interest for this crop");
      return;
    }
    interestsModalRef.current.showModal();

    const firstInput = interestsModalRef.current.querySelector(
      'input[name="name"], input, textarea, button'
    );
    firstInput?.focus();
  };

  
 const handleInterestUpdate = async (interestId, newStatus) => {
  try {
    const res = await fetch(`https://krishi-link-server-flax.vercel.app/interest/${interestId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    const data = await res.json();
    console.log("PATCH response:", data);

    if (!res.ok) throw new Error(data.message || "Failed to update interest status");

    setInterests(prev =>
      prev.map(i => (i._id === interestId ? { ...i, status: data.status ?? newStatus } : i))
    );

    Swal.fire({
      icon: "success",
      title: "Updated",
      text: `Interest ${newStatus}`,
      timer: 1500,
      showConfirmButton: false,
    });
  } catch (err) {
    console.error(err);
    setInterests(prev =>
      prev.map(i => (i._id === interestId ? { ...i, status: "pending" } : i))
    );
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Could not update interest status. Try again.",
    });
    
  }
};


  
  const handleInterestsSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const quantity = parseInt(e.target.Quantity.value);
    const message = e.target.Message.value;

    if (quantity < 1) {
      Swal.fire("Quantity must be at least 1");
      return;
    }

    const newInterest = {
      cropId: cropId,
      title: crop?.title,
      userName: name,
      userEmail: email,
      quantity,
      message,
      ownerName: crop.owner_name,
      ownerEmail: crop.owner_email,
      status: "pending",
    };

    fetch("https://krishi-link-server-flax.vercel.app/interest", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newInterest),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your interest has been placed",
          showConfirmButton: false,
          timer: 1500,
        });

        newInterest._id = data._id || data; 
        setInterests([...interests, newInterest]);
        setHasInterest(true);
        interestsModalRef.current.close();
      })
      .catch((err) => console.error(err));
  };

 
  useEffect(() => {
    if (!cropId) return;
    setLoading(true);
    fetch(`https://krishi-link-server-flax.vercel.app/products/${cropId}`)
      .then((res) => res.json())
      .then((res) => {
        setCrop(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load crop details");
        setLoading(false);
        console.log(error);
      });

    fetch(`https://krishi-link-server-flax.vercel.app/interest/crop/${cropId}`)
      .then((res) => res.json())
      .then((data) => {
        setInterests(data);
        if (user) {
          const sent = data.some((i) => i.userEmail === user.email);
          setHasInterest(sent);
        }
      });
  }, [cropId, user]);

  if (loading) return <p>Loading crop details...</p>;
  if (error) return <p>{error}</p>;
  if (!crop) return <p>Crop not found!</p>;

  return (
    <div>
     
      <div className="hero  min-h-screen w-8/12 bg-base-100 mx-auto">
      {/* <img className="w-full h-190" src="https://i.ibb.co.com/RGTG810w/100-Light-Backgrounds.jpg" alt="" /> */}
       
        <div className="hero-content flex-col lg:flex-row  rounded-2xl">
          <img
            src={crop?.image}
            className="max-w-sm  md:mb-50 rounded-lg shadow-2xl w-full h-110 object-cover"
            alt=""
          />
          <div className="mt-0 md:mt-100 shadow-2xl p-7 space-y-4  rounded-lg md:absolute md:ml-100 bg-white">
            <h1 className="text-5xl font-bold text-primary">{crop?.title}</h1>
            <p className="py-6">{crop?.description}</p>
            <p>Category: {crop?.category}</p>
            <p>Price: ${crop?.price}</p>
            <p>Quantity: {crop?.quantity}</p>
            <p>Location: {crop?.location}</p>
            <p>
              Owner: {crop?.owner_name} ({crop?.owner_email})
            </p>
            <button
              className="btn btn-primary mt-3"
              onClick={handleInterestsModalOpen}
            >
              I want to buy this crop
            </button>
          </div>
        </div>
      </div>

      
      <dialog
        ref={interestsModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <form className="modal-box" onSubmit={handleInterestsSubmit}>
          <h3 className="font-bold text-lg">Make an Offer </h3>
          <p className="py-2">Enter quantity and message to send your offer.</p>
          <fieldset className="flex flex-col gap-2">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              defaultValue={user?.userName || ""}
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              defaultValue={user?.email || ""}
              required
            />
            <label className="label">Quantity</label>
            <input
              type="number"
              name="Quantity"
              className="input input-bordered"
              placeholder="Quantity"
              required
              onChange={(e) => {
                const qty = parseInt(e.target.value) || 0;
                const price = Number(crop?.pricePerUnit || crop?.price || 0);
                setTotalPrice(qty * price);
              }}
            />
            <p className="mt-1 text-sm text-gray-700">
              Total Price:{" "}
              <span className="font-semibold text-green-700">
                {isNaN(totalPrice) ? 0 : totalPrice}
              </span>{" "}
              Tk
            </p>
            <label className="label">Message</label>
            <textarea
              name="Message"
              className="textarea textarea-bordered"
              placeholder="Message"
              required
            ></textarea>
            <button className="btn btn-primary mt-3" type="submit">
              Send Interest
            </button>
          </fieldset>
          <div className="modal-action flex - justify-between items-center">
             <img className="w-20 " src="https://i.ibb.co.com/WN2P5mhg/4-Bxuz-Ch-MMm-1.gif" alt="" />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => interestsModalRef.current.close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>

      
      {user?.email === crop?.owner?.ownerEmail && (
        <div className="mt-10 p-8 bg-white shadow-lg rounded-2xl">
          <h1 className="text-4xl my-6 text-center font-bold text-peimery">
            Interests for this Crop: <span>{interests.length}</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Received Interests
          </h2>
          {interests.length === 0 ? (
            <p className="text-center text-gray-500 py-6 text-lg">
              No interests received yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="bg-green-100 text-green-800 text-left">
                    <th className="px-6 py-3 font-semibold">Crop</th>
                    <th className="px-6 py-3 font-semibold">Owner</th>
                    <th className="px-6 py-3 font-semibold">Buyer Name</th>
                    <th className="px-6 py-3 font-semibold">Quantity</th>
                    <th className="px-6 py-3 font-semibold">Message</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                    <th className="px-6 py-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {interests.map((interest, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-green-50 transition-colors duration-200 border-b last:border-none"
                    >
                      <td className="px-6 py-3 text-gray-700">{crop?.title}</td>
                      <td className="px-6 py-3 text-gray-700">{crop?.owner_name}</td>
                      <td className="px-6 py-3 text-gray-700">{interest.userName}</td>
                      <td className="px-6 py-3 text-gray-700">{interest.quantity}</td>
                      <td className="px-6 py-3 text-gray-700">{interest.message}</td>
                      <td
                        className={`px-6 py-3 font-medium ${
                          interest.status === "accepted"
                            ? "text-primary"
                            : interest.status === "rejected"
                            ? "text-red-400"
                            : "text-yellow-600"
                        }`}
                      >
                        {interest.status}
                      </td>
                      <td className="px-6 py-3 flex gap-3">
                        {interest.status === "pending" && (
                          <>
                            <button
                              className="btn btn-sm bg-secondary hover:bg-green-600 text-white border-none"
                              onClick={() =>
                                handleInterestUpdate(interest._id, "accepted")
                              }
                            >
                              Accept
                            </button>
                            <button
                              className="btn btn-sm bg-red-400 hover:bg-red-600 text-white border-none"
                              onClick={() =>
                                handleInterestUpdate(interest._id, "rejected")
                              }
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CropDetails;
