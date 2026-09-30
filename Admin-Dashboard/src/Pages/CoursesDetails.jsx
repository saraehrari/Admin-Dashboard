import { useParams } from "react-router-dom";

export default function CoursesDetails(){
    const [id] = useParams();
    const course = CoursesDetails.find((p) => p.id === id);
    if (!course) {
    return <h2 className="text-center mt-5">Course not found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="card border-0 shadow rounded-4">
        <div className="card-body p-5">

          {/* Category & Status */}
          <div className="d-flex justify-content-between align-items-center mb-4">

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
          <h1 className="fw-bold mb-3">
            {course.title}
          </h1>

          {/* Description */}
          <p className="text-muted fs-5 mb-4">
            {course.description}
          </p>

          <hr />

          {/* Course Information */}
          <div className="row g-4 mt-2">

            <div className="col-md-6">
              <strong>Instructor</strong>
              <p className="text-muted mb-0">
                {course.instructor}
              </p>
            </div>

            <div className="col-md-6">
              <strong>Level</strong>
              <p className="text-muted mb-0">
                {course.level}
              </p>
            </div>

            <div className="col-md-6">
              <strong>Duration</strong>
              <p className="text-muted mb-0">
                {course.duration}
              </p>
            </div>

            <div className="col-md-6">
              <strong>Students</strong>
              <p className="text-muted mb-0">
                {course.students}
              </p>
            </div>

            <div className="col-md-6">
              <strong>Lessons</strong>
              <p className="text-muted mb-0">
                {course.lessons}
              </p>
            </div>

          </div>

          <button className="btn btn-primary mt-5 px-4">
            Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
}
