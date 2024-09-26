import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Website Traffic",
        data: [1500, 2000, 1800, 2200, 2400, 2600],
        backgroundColor: "#48CFCB",
        borderColor: "#229799",
        borderWidth: 3,
        pointBackgroundColor: "#424242",
        fill: true,
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
          // color: '#fff',
        },
      },
      title: {
        display: true,
        text: "Line Chart - Website Traffic",
        font: { size: 18, color: '#fff' },
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
