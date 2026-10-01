export default function Profile() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">

          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-5">

              {/* Profile Header */}
              <div className="text-center mb-4">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "90px", height: "90px", fontSize: "32px" }}
                >
                  SE
                </div>

                <h1 className="fw-bold mb-1">Sara Ehrari</h1>
                <p className="text-primary fw-semibold mb-0" style={{ color:"#F78D60" }}>
                  Software Engineer
                </p>
              </div>

              <hr />

              {/* About Me */}
              <div className="mb-4">
                <h4 className="fw-bold mb-3">About Me</h4>

                <p className="text-muted lh-lg">
                  I am a passionate React Developer who enjoys building
                  modern, responsive, and user-friendly web applications.
                  I have experience working with HTML, CSS, Bootstrap,
                  JavaScript, React, and React Router. I enjoy learning new
                  technologies, improving my coding skills, and creating
                  clean and practical interfaces.
                </p>
              </div>

              {/* Personal Information */}
              <div className="mb-4">
                <h4 className="fw-bold mb-3">Personal Information</h4>

                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="bg-light rounded-3 p-3">
                      <small className="text-muted">Location</small>
                      <p className="fw-semibold mb-0">
                        Herat, Afghanistan
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="bg-light rounded-3 p-3">
                      <small className="text-muted">Email</small>
                      <p className="fw-semibold mb-0">
                        sara.ehrari@gmail.com
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="fw-bold mb-3">Skills</h4>

                <span className="badge bg-primary me-2 mb-2 p-2">
                  HTML
                </span>

                <span className="badge bg-primary me-2 mb-2 p-2">
                  CSS
                </span>

                <span className="badge bg-primary me-2 mb-2 p-2">
                  Bootstrap
                </span>

                <span className="badge bg-primary me-2 mb-2 p-2">
                  JavaScript
                </span>

                <span className="badge bg-primary me-2 mb-2 p-2">
                  React
                </span>

                <span className="badge bg-primary me-2 mb-2 p-2">
                  React Router
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}