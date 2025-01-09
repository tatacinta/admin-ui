import { useState, useEffect } from "react";
import { goals } from "../../Data/goals";
import Card from "../../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrophy,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import { Doughnut } from "react-chartjs-2"; // Import Doughnut chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const CardGoal = () => {
  const [loading, setLoading] = useState(true); // Set loading state
  const [data, setData] = useState(null); // State for data

  useEffect(() => {
    // Simulate fetching data from the backend with a timeout
    setTimeout(() => {
      setData(goals); // Replace with actual backend data fetching
      setLoading(false); // Set loading to false when data is fetched
    }, 2000); // Simulate 2 seconds of loading
  }, []);

  if (loading) {
    // Render a loading animation while data is being fetched
    return (
      <div className="flex justify-center items-center h-full">
        <div className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  // Calculate Progress Percentage
  const progressPercentage = (data.presentAmount / data.targetAmount) * 100;
  const pointerValue = Math.min(Math.max(progressPercentage, 0), 100);

  const chartData = {
    datasets: [
      {
        data: [pointerValue, 100 - pointerValue], // Progress and remainder
        backgroundColor: ["#299D91", "#E8E8E8"], // Progress and remainder colors
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    rotation: -90, // Start the chart from the top (like a speedometer)
    circumference: 180, // Half-circle effect
    cutout: "80%", // Hollow center like a speedometer
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltip
      },
      legend: {
        display: false, // Disable legend
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Remove border from chart segments
      },
    },
  };

  return (
    <Card
      title="Goals"
      desc={
        <div className="p-4 space-y-4">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-4">
                ${data.presentAmount}
              </span>
              <div className="p-2 bg-gray-100 rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </div>
            <div className="text-gray-600">Nov, 2023</div>
          </div>

          <div className="border-b-2 my-4"></div>

          {/* Goal Progress Section */}
          <div className="flex justify-between">
            {/* Target and Achievement */}
            <div className="space-y-6">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faTrophy} className="text-xl" />
                <div className="ml-3">
                  <span className="text-gray-500">Target Achieved</span>
                  <br />
                  <span className="font-bold text-xl">
                    ${data.targetAmount}
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faBullseye} className="text-xl" />
                <div className="ml-3">
                  <span className="text-gray-500">This Month Target</span>
                  <br />
                  <span className="font-bold text-xl">
                    ${data.presentAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* Speedometer Chart Section */}
            <div className="flex flex-col items-center justify-center w-1/2 max-w-[200px]">
              <div className="text-center mb-2 text-gray-500">
                Target vs Achievement
              </div>
              <div className="w-full max-w-[200px]">
                <Doughnut data={chartData} options={chartOptions} />
              </div>
              <div className="flex justify-between w-full mt-2">
                <span className="text-gray-400">$0</span>
                <span className="font-bold text-2xl">12K</span>
                <span className="text-gray-400">$20K</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CardGoal;
