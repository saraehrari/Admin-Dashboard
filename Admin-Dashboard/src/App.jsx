import { Routes, Route } from "react-router-dom";
 import Dashboard from "./Pages/Dashboard"; 
 import Courses from "./Pages/Courses"; 
 import CoursesData from "./Data/Courses"; 
 import Profile from "./Pages/Profile"; 
 import Navbar from "./Components/Navbar"; 
 import Sidbar from "./Components/Sidbar"; 
 import CoursesDetails from "./Pages/CoursesDetalis";




function App() {
  return (
    <div className="app">

      <Navbar />

      <Sidbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/courses"
            element={<Courses courses={CoursesData} />}
          />

          <Route
            path="/courses/:id"
            element={<CoursesDetails />}
          />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;