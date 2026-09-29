import {Routes , Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Courses from './Pages/Courses';
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar';
import Sidbar from './Components/Sidbar';



function App(){


    return(
  

        <div>

          <Navbar/>
          <Sidbar/>
         <Routes>
            <Route>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/courses' element={<Courses
                Courses={Courses}
              />}/>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
         </Routes>


        </div>

    )
}

export default App;