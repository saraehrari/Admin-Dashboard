import Students from "../Data/Students";

export default function Dashboard() {
  return (
    <div className="container py-4">

      <div className="text-center mb-3">
        <h1 className="fw-bold">Students Dashboard</h1>
        <p className="text-muted">
          Manage and view all registered students.
        </p>
      </div>

      <div className="row g-4">
        {Students.map((student) => (
          <div className="col-12 col-md-6 col-lg-4" key={student.id}>
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body p-4">

                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-primary text-white rounded-circle
                    d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {student.name.charAt(0)}
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">
                      {student.name}
                    </h5>

                    <small className="text-muted">
                      Student #{student.id}
                    </small>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Course</span>

                  <span className="badge bg-primary rounded-pill px-3 py-2">
                    {student.course}
                  </span>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}