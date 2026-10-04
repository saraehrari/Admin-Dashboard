
import Navbar from "./Navbar";
import Sidebar from "./Sidbar";
import Searchbar from "./Searchbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="app">

      {/* Navbar */}
      <Navbar>
        <Searchbar />
      </Navbar>

      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <main className="main-content">
        <Outlet />
      </main>

    </div>
  );
}

