import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignOut({ setIsAuth }) {
    const navigate = useNavigate();
    useEffect(() => {
    setIsAuth(false);
    navigate("/login");
 }, 

 [setIsAuth, navigate]);
  return ;
 }
