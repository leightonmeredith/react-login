import { useNavigate } from "react-router";
import { useAuth } from "./context/useAuth";

export default function Home() {
  const navigate = useNavigate();
  const { email, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div>
      {email ? (
        <>
          LOGGED IN as <strong>{email}</strong>
          <div className="button">
            <button onClick={handleLogout}>LogOut</button>
          </div>
        </>
      ) : (
        <>
          LOGGED OUT:
          <div className="button">
            <button>Login</button>
          </div>
        </>
      )}
    </div>
  );
}
