import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-5 w-full">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
