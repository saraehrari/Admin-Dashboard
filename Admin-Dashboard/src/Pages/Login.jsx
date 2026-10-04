
import { useNavigate } from "react-router-dom";

export default function Login({setIsAuth}) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
        navigate("/");
        
  };

  return (
    <div className="container-fluid py-4">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

