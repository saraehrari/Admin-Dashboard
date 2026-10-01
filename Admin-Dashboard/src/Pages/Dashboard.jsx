import { useState } from "react";
import Students from "../Data/Students";
import Searchbar from "../Components/Searchbar";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredStudents = Students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())|| 
  student.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <Searchbar onSearch={setSearch} />

      <div className="row g-4">
        {filteredStudents.map((student) => (
          <div className="col-md-6 col-lg-4" key={student.id}>
            <div className="card shadow-sm p-3">
              <h5>{student.name}</h5>
              <p> Course: {student.course}</p>
               <p>Age: {student.age}</p>
              <span
                      className={`badge px-3 py-2 ${
                        student.status === "Active"
                          ? "bg-success-subtle text-success"
                          : "bg-warning-subtle text-warning"
                      }`}
                    >{student.status}</span>
              <p>ID #{student.id}</p>
            </div>
          </div>
          
        ))}
      </div>
    
            
  
    </div>
  );
}