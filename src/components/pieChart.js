import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const data = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Sales Distribution",
        data: [55, 25, 20],
        backgroundColor: ["#48CFCB", "#229799", "#424242"],
        borderColor: "#F5F5F5",
        borderWidth: 1,
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
        dataset: {
          color:"#000"
        }
      },
      title: {
        display: true,
        text: "Pie Chart - Sales Distribution",
        font: { size: 18, color: '#fff' },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
