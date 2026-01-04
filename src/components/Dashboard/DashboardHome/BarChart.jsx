// src/components/Dashboard/DashboardHome/BarChart.jsx
import React, { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const { user } = useContext(AuthContext);
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://krishi-link-server-flax.vercel.app/products?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        // Prepare data for Bar chart
        const chartData = {
          labels: data.map(item => item.name), // Crop names
          datasets: [
            {
              label: "Price (৳)",
              data: data.map(item => item.price),
              backgroundColor: "#3B82F6", // blue
            },
          ],
        };

        setBarData(chartData);
      });
  }, [user]);

  if (!barData) {
    return <p className="text-center text-gray-500">Loading Bar chart...</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-64">
      <h4 className="text-gray-700 font-semibold mb-2">Sales Overview</h4>
      <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </div>
  );
};

export default BarChart;
