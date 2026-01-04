// src/components/Dashboard/DashboardHome/Chart.jsx
import React, { useEffect, useState, useContext } from "react";
import { Pie } from "react-chartjs-2";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { user } = useContext(AuthContext);
  const [pieData, setPieData] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://krishi-link-server-flax.vercel.app/interest?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        // Count statuses
        const statusCounts = data.reduce((acc, item) => {
          acc[item.status] = (acc[item.status] || 0) + 1;
          return acc;
        }, {});

        // Prepare chart data
        const chartData = {
          labels: Object.keys(statusCounts),
          datasets: [
            {
              data: Object.values(statusCounts),
              backgroundColor: ["#FBBF24", "#34D399", "#F87171"], // yellow, green, red
            },
          ],
        };

        setPieData(chartData);
      });
  }, [user]);

  if (!pieData) {
    return <p className="text-center text-gray-500">Loading chart...</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center h-64">
      <h4 className="text-gray-700 font-semibold mb-2">Interests Status</h4>
      <Pie data={pieData} />
    </div>
  );
};

export default Chart;
