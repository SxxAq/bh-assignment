"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LineChart, Line } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const Dashboard = ({ isDarkMode }) => {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({ labels: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candlestickResponse = await axios.get(
          "http://localhost:8000/api/candlestick-data/"
        );
        setCandlestickData(candlestickResponse.data.data);

        const lineChartResponse = await axios.get(
          "http://localhost:8000/api/line-chart-data/"
        );
        setLineChartData(lineChartResponse.data);

        const barChartResponse = await axios.get(
          "http://localhost:8000/api/bar-chart-data/"
        );
        setBarChartData(barChartResponse.data);

        const pieChartResponse = await axios.get(
          "http://localhost:8000/api/pie-chart-data/"
        );
        setPieChartData(pieChartResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div
      className={`p-6 min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="shadow-md rounded-lg p-4"
          style={{ backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF" }}
        >
          <h2 className="text-2xl font-semibold mb-4">Candlestick Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={candlestickData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#4B5563" : "#E5E7EB"}
              />
              <XAxis dataKey="x" stroke={isDarkMode ? "#E5E7EB" : "#1F2937"} />
              <YAxis stroke={isDarkMode ? "#E5E7EB" : "#1F2937"} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="open" stroke="#A78BFA" />
              <Line type="monotone" dataKey="close" stroke="#34D399" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className="shadow-md rounded-lg p-4"
          style={{ backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF" }}
        >
          <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData.data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#4B5563" : "#E5E7EB"}
              />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? "#E5E7EB" : "#1F2937"}
              />
              <YAxis stroke={isDarkMode ? "#E5E7EB" : "#1F2937"} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#A78BFA" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className="shadow-md rounded-lg p-4"
          style={{ backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF" }}
        >
          <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData.data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#4B5563" : "#E5E7EB"}
              />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? "#E5E7EB" : "#1F2937"}
              />
              <YAxis stroke={isDarkMode ? "#E5E7EB" : "#1F2937"} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#A78BFA" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          className="shadow-md rounded-lg p-4"
          style={{ backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF" }}
        >
          <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#A78BFA"
                dataKey="value"
              >
                {pieChartData.data &&
                  pieChartData.data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
