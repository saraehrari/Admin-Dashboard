import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../Components/Searchbar";

export default function Courses({ courses }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const searchText = search.toLowerCase();

    return (
      course.title.toLowerCase().includes(searchText) ||
      course.category.toLowerCase().includes(searchText) ||
      course.instructor.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold">Our Courses</h1>
        <p className="text-muted mb-3">
          Explore our courses and start learning something new.
        </p>

        {/* Search */}
        <Searchbar onSearch={setSearch} />
      </div>

      {/* Course Cards */}
      <div className="row g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="col-12 col-md-6 col-xl-4" key={course.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">

                  {/* Category & Status */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2">
                      {course.category}
                    </span>

                    <span
                      className={`badge px-3 py-2 ${
                        course.status === "Active"
                          ? "bg-success-subtle text-success"
                          : "bg-warning-subtle text-warning"
                      }`}
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
                  <button
                    onClick={() => navigate(`/courses/${course.id}`)}
                    className="btn btn-primary w-100 mt-4"
                  >
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="text-center py-5">
              <h5 className="text-muted">No courses found</h5>
              <p className="text-muted">
                Try searching for another course.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}