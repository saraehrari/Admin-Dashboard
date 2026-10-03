import { Routes, Route } from "react-router-dom";
import Image from "./assets/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2g.jpg";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import CoursesData from "./Data/Courses";
import Profile from "./Pages/Profile";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidbar";
import CoursesDetails from "./Pages/CoursesDetalis";
import "./App.css";
import Searchbar from "./Components/Searchbar";
import Aboutus from "./Pages/Aboutus";
import SignOut from "./Pages/SignOut";


function App() {

  return (
    <div className="app">

      <Navbar> 
     <Searchbar/>
      </Navbar>
  
      
      

      <Sidebar />

    
      <main className="main-content">
        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/courses"
            element={<Courses courses={CoursesData} />}
          />

          <Route
            path="/courses/:id"
            element={<CoursesDetails />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />


          <Route
            path="/aboutus"
            element={<Aboutus />}
          />

          <Route
            path="/signout"
            element={<SignOut />}
          />

        </Routes>
      </main>

<div className="container-fluid py-4">

  {/* About Us */}
  <div className="mb-5">
    <Aboutus
      image={Image}
      title="About Us"
      description="Welcome to our Admin Dashboard, a simple and modern platform designed to make managing students, courses, teachers, and other important information easier. Our goal is to provide a clean, organized, and user-friendly experience that helps administrators manage their daily tasks efficiently."
      title2="Our Features"
    />
  </div>


  {/* Feature Cards */}
  <div className="row g-4">

    <div className="col-12 col-md-6 col-lg-3">
      <Aboutus
        cardTitle="Attendance Tracking"
        cardDescription="Manage student information, profiles, and activities."
      />
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <Aboutus
        cardTitle="Class Scheduling"
        cardDescription="Manage course information, schedules, and enrollments."
      />
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <Aboutus
        cardTitle="Course Planning"
        cardDescription="Manage teacher information, profiles, and assignments."
      />
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <Aboutus
        cardTitle="Reports & Analytics"
        cardDescription="Generate reports and analyze data for better decision-making."
      />
    </div>

  </div>

</div>

</div>
  );
}

export default App;