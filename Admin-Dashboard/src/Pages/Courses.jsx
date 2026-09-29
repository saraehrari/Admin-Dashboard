import { useNavigate } from "react-router-dom";

export default function Courses({ courses }) {
    const navigate= useNavigate()
  return (
    <div className="container-fluid py-4">
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold">Our Courses</h1>
        <p className="text-muted">
          Explore our courses and start learning something new.
        </p>
      </div>

      {/* Course Cards */}
      <div className="row g-4">
        {courses.map((course) => (
          <div className="col-12 col-md-6 col-xl-4" key={course.id}>
            
            <div className="card h-100 border-0 shadow-sm rounded-4">
              
              <div className="card-body p-4">

                {/* Category & Status */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  
                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    {course.category}
                  </span>

                  <span
                    className={
                      course.status === "Active"
                        ? "badge bg-success-subtle text-success px-3 py-2"
                        : "badge bg-warning-subtle text-warning px-3 py-2"
                    }
                  >
                    {course.status}
                  </span>

                </div>

                {/* Title */}
                <h4 className="card-title fw-bold mb-3">
                  {course.title}
                </h4>

                {/* Description */}
                <p className="card-text text-muted">
                  {course.description}
                </p>

                <hr />

                {/* Course Information */}
                <div className="small">

                  <div className="d-flex justify-content-between mb-2">
                    <strong>Instructor:</strong>
                    <span className="text-muted">
                      {course.instructor}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <strong>Level:</strong>
                    <span className="text-muted">
                      {course.level}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <strong>Duration:</strong>
                    <span className="text-muted">
                      {course.duration}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <strong>Students:</strong>
                    <span className="text-muted">
                      {course.students}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <strong>Lessons:</strong>
                    <span className="text-muted">
                      {course.lessons}
                    </span>
                  </div>

                </div>

                {/* Button */}
                <button onClick={() => {navigate(`/courses/${course.id}`)}} className="btn btn-primary w-100 mt-4">
                  View Course
                </button>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}