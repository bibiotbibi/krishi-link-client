import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Chart from "../../components/Dashboard/DashboardHome/Chart";
import BarChart from "../../components/Dashboard/DashboardHome/BarChart";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [myCrops, setMyCrops] = useState([]);
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        const fetchData = async () => {
            try {
                const [cropsRes, ordersRes] = await Promise.all([
                    fetch(`https://krishi-link-server-flax.vercel.app/products?email=${user.email}`),
                    fetch(`https://krishi-link-server-flax.vercel.app/interest?email=${user.email}`)
                ]);

                const cropsData = await cropsRes.json();
                const ordersData = await ordersRes.json();

                setMyCrops(cropsData);
                setMyOrders(ordersData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    if (loading) {
        return <p className="text-center mt-20">Loading dashboard...</p>;
    }

    return (
        <div className="p-6 space-y-6">

            {/* Welcome Banner */}
            <div className="bg-primary text-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold">Welcome back, {user.displayName || "User"} </h2>
                <p className="mt-1 text-sm opacity-90">Here’s a quick overview of your dashboard</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="My Crops" value={myCrops.length} color="bg-green-500" />
                <StatCard title="My Orders" value={myOrders.length} color="bg-blue-500" />
                <StatCard title="Messages" value={myOrders.filter(o => o.message).length} color="bg-purple-500" />
            </div>

            {/* Charts Section (placeholders) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BarChart></BarChart>
                <Chart />
            </div>

            {/* Recent Activities Table */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Crops</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-2">SL No</th>
                                <th className="text-left px-4 py-2">Item</th>
                                <th className="text-left px-4 py-2">Quantity</th>
                                <th className="text-left px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCrops.slice(0, 5).map((crop, index) => (
                                <tr key={crop._id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{crop.name}</td>
                                    <td className="px-4 py-2">{crop.quantity || crop.price}</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2 py-1 rounded-full text-sm ${crop.status === "accepted" ? "bg-green-200" :
                                            crop.status === "rejected" ? "bg-red-200" : "bg-yellow-200"
                                            }`}>
                                            {crop.status || "Pending"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {myCrops.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="px-4 py-2 text-center text-gray-500">
                                        You haven't added any crops yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Reusable components
const StatCard = ({ title, value, color }) => (
    <div className={`p-6 rounded-xl shadow-lg text-white ${color} flex flex-col justify-between`}>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
);



export default Dashboard;
