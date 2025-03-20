import { Outlet } from "react-router-dom";
import SeekerSidebar from "../../components/SeekerSidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <SeekerSidebar />
      <div className="p-5 w-full">
        <h1 className="text-2xl font-bold">Job Seeker Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
