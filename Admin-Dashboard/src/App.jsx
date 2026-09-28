import {Routes , Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Courses from './Pages/Courses';
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar';
import Sidbar from './Components/Sidbar';
import StudentCards from './Components/StudentCards';


function App(){


    return(
  

        <div>

          <Navbar/>
          <Sidbar/>
         <StudentCards 
  
/>
         <Routes>
            <Route>
              <Route path='/' element={<Dashboard/>}
              
              title="Students"
              number="120"

              />
              <Route path='/courses' element={<Courses/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
         </Routes>


        </div>

    )
}

export default App;