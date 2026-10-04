import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import CoursesDetails from "./Pages/CoursesDetalis";
import Profile from "./Pages/Profile";
import Aboutus from "./Pages/Aboutus";
import SignOut from "./Pages/SignOut";

// Data
import CoursesData from "./Data/Courses";

// Components
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidbar";
import Searchbar from "./Components/Searchbar";

// CSS
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <Navbar>
        <Searchbar />
      </Navbar>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        <Routes>

          {/* Dashboard */}
          <Route
            path="/"
            element={<Dashboard />}
          />

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
            element={<SignOut />}
          />


         {/* Login */}
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </main>

    </div>
  );
}

export default App;