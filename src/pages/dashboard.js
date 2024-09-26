import React from "react";
import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";
import PieChart from "../components/pieChart";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-10 w-full bg-gray-300 text-[#424242]">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <div className="chart-container bg-gray p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105 w-96">
          <PieChart />
        </div>
        <div className="chart-container bg-gray p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105 w-96">
          <LineChart />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-6 justify-items-center">
        <div className="chart-container bg-gray p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
