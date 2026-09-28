import { NavLink } from "react-router-dom";
export default function Sidbar(){
    return(
          <nav>
            
            <NavLink to ='/' className={({isActive})=> isActive ? 'active' : ""} >Dashboard</NavLink>
            <NavLink to ='/courses' className={({isActive})=> isActive ? 'active' : ""} >Courses</NavLink>
            <NavLink to ='/profile' className={({isActive})=> isActive ? 'active' : ""} >Profile</NavLink>
        </nav>
    )
}