import React from "react";
import { Bar } from "react-chartjs-2"; // Mengimpor Bar chart dari react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi plugin Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Dataset untuk grafik expensesStatistics
export const expensesStatistics = {
  dataKey: "date",
  series: [
    { dataKey: "amountThisWeek", label: "This Week", color: "#E8E8E8" },
    { dataKey: "amountLastWeek", label: "Last Week", color: "#299D91" },
  ],
  data: [
    {
      id: 1,
      date: "17 Sun",
      amountThisWeek: 25000,
      amountLastWeek: 50000,
    },
    {
      id: 2,
      date: "18 Mon",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 3,
      date: "19 Tue",
      amountThisWeek: 10000,
      amountLastWeek: 50000,
    },
    {
      id: 4,
      date: "20 Wed",
      amountThisWeek: 50000,
      amountLastWeek: 50000,
    },
    {
      id: 5,
      date: "21 Thu",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 6,
      date: "22 Fri",
      amountThisWeek: 25000,
      amountLastWeek: 10000,
    },
    {
      id: 7,
      date: "23 Sat",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
  ],
};

// Konfigurasi data untuk Chart.js
const chartData = {
  labels: expensesStatistics.data.map((data) => data.date),
  datasets: expensesStatistics.series.map((serie) => ({
    label: serie.label,
    data: expensesStatistics.data.map((data) => data[serie.dataKey]),
    backgroundColor: serie.color,
  })),
};

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Expenses Statistics",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.dataset.label + ": " + tooltipItem.raw + " IDR";
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Days",
      },
    },
    y: {
      title: {
        display: true,
        text: "Amount (IDR)",
      },
      beginAtZero: true,
    },
  },
};

// CardStatistic component
const CardStatistic = () => {
  return (
    <div className="card">
      <h3>Statistics</h3>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CardStatistic;
