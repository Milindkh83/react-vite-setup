import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>
        Home - {user?.firstName || "User"} {user?.lastName || ""}
      </h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
