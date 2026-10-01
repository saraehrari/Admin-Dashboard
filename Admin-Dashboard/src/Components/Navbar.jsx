import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

  const navigation = () => {
    navigate("/profile");
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-4 rounded-4">
      <div className="container-fluid">
        <h4 className="mb-0">Dashboard</h4>

        <div className="d-flex align-items-center gap-3">
         <i className="bi bi-bell fs-3"></i>
         <i
            className="bi bi-person-circle fs-3"
            onClick={navigation}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </nav>
  );
}
