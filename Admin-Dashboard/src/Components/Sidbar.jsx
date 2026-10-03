import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar d-flex flex-column">
      <h3 className="pb-4" style={({color:"white"})}>Dashboard</h3>
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

      {/* Bottom links */}
      <div className="mt-auto">

        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            `d-block text-decoration-none p-2 mb-2 rounded ${
              isActive ? "bg-primary text-white" : "text-white"
            }`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/signout"
          className={({ isActive }) =>
            `d-block text-decoration-none p-2 mb-2 rounded ${
              isActive ? "bg-primary text-white" : "text-white"
            }`
          }
        >
          Sign Out
        </NavLink>

      </div>

    </nav>
  );
}