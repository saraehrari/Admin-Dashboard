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


       <div className="about-page">
       <Aboutus 
        image={Image}
        title="About Us" 
        description="Welcome to our Admin Dashboard, a simple and modern platform designed to make managing students, courses, teachers, and other important information easier. Our goal is to provide a clean, organized, and user-friendly experience that helps administrators manage their daily tasks efficiently."
        
      />

</div>

<div>

     <Aboutus
     
      cardTitle="Student Management"
         cardDescription=
         'Manage student information, profiles, and activities.'
     />


       <Aboutus 
        
         cardTitle="Course Management"
         cardDescription=
         'Manage course information, schedules, and enrollments.'
      />



       <Aboutus 
        
         cardTitle="Teacher Management"
         cardDescription=
         'Manage teacher information, profiles, and assignments.'
      />



       <Aboutus 
        
         cardTitle="Reports & Analytics"
         cardDescription=
         'Generate reports and analyze data for better decision-making.'
      />
</div>




    </div>
  );
}

export default App;