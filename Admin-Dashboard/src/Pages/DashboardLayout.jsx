import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />

      <div className="d-flex ">
        <Sidebar />

        <main className="flex-grow-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}