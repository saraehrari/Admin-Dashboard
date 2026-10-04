
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import CoursesDetails from "./Pages/CoursesDetalis";
import Profile from "./Pages/Profile";
import Aboutus from "./Pages/Aboutus";
import SignOut from "./Pages/SignOut";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

// Components
import DashboardLayout from "./Components/DashboardLayout";

// Data
import CoursesData from "./Data/Courses";

// CSS
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      {/* ================= LOGIN ================= */}
      <Route
        path="/login"
        element={<Login setIsAuth={setIsAuth} />}
      />

      {/* ================= PROTECTED ROUTES ================= */}
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        
        {/* Dashboard Layout */}
        <Route element={<DashboardLayout />}>

          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Courses */}
          <Route
            path="/courses"
            element={<Courses courses={CoursesData} />}
          />

          {/* Course Details */}
          <Route
            path="/courses/:id"
            element={<CoursesDetails />}
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={<Profile />}
          />

          {/* About Us */}
          <Route
            path="/aboutus"
            element={<Aboutus />}
          />

          {/* Sign Out */}
         <Route
         path="/signout"
         element={<SignOut setIsAuth={setIsAuth} />}
             
        />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;

