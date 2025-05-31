import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); //

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  // Add new point every second
  useEffect(() => {
    socket.on("userCount", (count) => {
      setData((prev) => {
        const newPoint = {
          time: new Date().toLocaleTimeString(),
          users: count,
        };
        const updated = [...prev, newPoint];
        return updated.slice(-20); // last 20 data points
      });
    });
    
    return () => socket.disconnect();
  }, []);
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-5 w-full">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Outlet />
        <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Live Users on Site</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#007bff" />
      </LineChart>
    </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
