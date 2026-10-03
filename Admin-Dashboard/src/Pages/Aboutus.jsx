 
import Image from "../assets/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgknkql2g.jpg";

export default function Aboutus() {
  return (
    <div className="container-fluid py-4">

      {/* Hero Section */}
      <div className="row align-items-center g-4 mb-5">

        <div className="col-md-6">
          <h1 className="fw-bold display-5">
            About Us
          </h1>

          <p className="text-muted lead mt-3">
            Welcome to our Admin Dashboard, a simple and modern platform
            designed to make managing students, courses, teachers, and other
            important information easier. Our goal is to provide a clean,
            organized, and user-friendly experience that helps administrators
            manage their daily tasks efficiently.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={Image}
            alt="About Us"
            className="img-fluid rounded-4 shadow"
            style={{
              maxHeight: "350px",
              objectFit: "cover",
            }}
          />
        </div>

      </div>

      {/* Features Title */}
      <h3 className="fw-bold mb-4 pt-5">
        Our Features
      </h3>

      {/* Feature Cards */}
      <div className="row g-4">

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">
                Attendance Tracking
              </h4>

              <p className="text-muted mb-0">
                Track student attendance and daily activities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">
                Class Scheduling
              </h4>

              <p className="text-muted mb-0">
                Organize classes, schedules, and activities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">
                Course Planning
              </h4>

              <p className="text-muted mb-0">
                Plan and organize courses and learning content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">
                Reports & Analytics
              </h4>

              <p className="text-muted mb-0">
                View important data and generate useful reports.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}