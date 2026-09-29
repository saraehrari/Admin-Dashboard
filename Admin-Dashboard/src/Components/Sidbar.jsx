import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav
      className="bg-dark p-3"
      style={{
        width: "220px",
        height: "400px",
        flexShrink:0,
      
      }}
    >
      <h4 className="text-white mb-4">Dashboard</h4>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `d-block text-decoration-none p-2 mb-2 rounded ${
            isActive ? "bg-primary text-white" : "text-white"
          }`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `d-block text-decoration-none p-2 mb-2 rounded ${
            isActive ? "bg-primary text-white" : "text-white"
          }`
        }
      >
        Courses
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `d-block text-decoration-none p-2 mb-2 rounded ${
            isActive ? "bg-primary text-white" : "text-white"
          }`
        }
      >
        Profile
      </NavLink>
    </nav>
  );
}