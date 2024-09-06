'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({ labels: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candlestickResponse = await axios.get('http://localhost:8000/api/candlestick-data/');
        setCandlestickData(candlestickResponse.data.data);

        const lineChartResponse = await axios.get('http://localhost:8000/api/line-chart-data/');
        setLineChartData(lineChartResponse.data);

        const barChartResponse = await axios.get('http://localhost:8000/api/bar-chart-data/');
        setBarChartData(barChartResponse.data);

        const pieChartResponse = await axios.get('http://localhost:8000/api/pie-chart-data/');
        setPieChartData(pieChartResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="mb-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Candlestick Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={candlestickData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#8884d8" />
            <Line type="monotone" dataKey="close" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Line Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bar Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pie Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData.data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.data && pieChartData.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
