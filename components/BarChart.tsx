"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Record {
  date: string;
  amount: number;
}

const BarChart = ({ records }: { records: Record[] }) => {
  const goodSleepColor = "rgba(99, 102, 241, 0.8)"; // Indigo-500 with opacity
  const poorSleepColor = "rgba(236, 72, 153, 0.8)"; // Pink-500 with opacity
  const borderGoodColor = "rgba(79, 70, 229, 1)"; // Indigo-600
  const borderPoorColor = "rgba(219, 39, 119, 1)"; // Pink-600
  const textColor = "#374151"; // Gray-700
  const gridColor = "#e5e7eb"; // Gray-200
  const tickColor = "#6b7280"; // Gray-500

  const data = {
    labels: records.map((record) =>
      new Date(record.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    ),
    datasets: [
      {
        data: records.map((record) => record.amount),
        backgroundColor: records.map((record) =>
          record.amount < 7 ? poorSleepColor : goodSleepColor
        ),
        borderColor: records.map((record) =>
          record.amount < 7 ? borderPoorColor : borderGoodColor
        ),
        borderWidth: 1,
        borderRadius: 6, // rounded bars  
        borderSkipped: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#f9fafb",
        bodyColor: "#f9fafb",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y} hours`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: { size: 13, weight: 500 },
          color: textColor,
        },
        ticks: { font: { size: 12 }, color: tickColor },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: "Hours Slept",
          font: { size: 13, weight: 500 },
          color: textColor,
        },
        ticks: {
          stepSize: 1,
          font: { size: 12 },
          color: tickColor,
          callback: (value) => `${value}h`,
        },
        grid: { color: gridColor },
        min: 0,
        max: 12,
      },
    },
  };

  return (
    <div className="h-64 w-full">
      <Bar data={data} options={options} className="w-full h-full" />
    </div>
  );
};

export default BarChart;
