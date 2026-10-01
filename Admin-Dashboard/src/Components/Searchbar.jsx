import { useState } from "react";
import Students from "../Data/Students";
export default function Searchbar() {
  const [searchItem, setSearchItem] = useState("");
  const filteredStudents = Students.filter((student) =>
    student.name.toLowerCase().includes(searchItem.toLowerCase())
  );


  const handleSearch =()=>{
    setSearchItem('')
  }

  if(!filteredStudents.length && searchItem){
    alert("Student not found");
  }
  return (
    <div>
        {searchItem && 
          filteredStudents.map((student) => (
            <div key={student.id}>
              <p>{student.name}</p>
            </div>
          ))
        }
      <input
        type="text"
        placeholder="Search Students..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
       
      />

      
      <button onClick={handleSearch}>Search</button>

     
    </div>
  );
}