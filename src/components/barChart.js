import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [300, 400, 350, 500, 600, 700],
        backgroundColor: "#a16207",
        borderColor: "#000",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: "Bar Chart - Monthly Sales",
        font: { size: 18, color: '#fff' },
      },
    },
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
