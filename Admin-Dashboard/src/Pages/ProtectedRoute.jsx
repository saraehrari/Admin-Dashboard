import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isAuth }) {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>;
}