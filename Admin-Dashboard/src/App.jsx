import { Routes, Route } from "react-router-dom";

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

    </div>
  );
}

export default App;