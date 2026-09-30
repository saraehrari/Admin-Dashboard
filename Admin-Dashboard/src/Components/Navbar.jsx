

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-4 rounded-4">
      <div className="container-fluid">
        <h4 className="mb-0">Dashboard</h4>

        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-search fs-5"></i>
          <i className="bi bi-bell fs-5"></i>
          <i className="bi bi-person-circle fs-3"></i>
        </div>
      </div>
    </nav>
  );
}