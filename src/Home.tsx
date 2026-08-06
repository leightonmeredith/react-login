import { Link, useNavigate } from "react-router";
import { useAuth } from "./context/useAuth";

export default function Home() {
  const navigate = useNavigate();
  const { email, logoutUser } = useAuth();

  const handleLoginRedirect = () => {
    if (email !== "") {
      logoutUser();
    }
    navigate("/login");
  };

  return (
    <div>
      {email ? (
        <>
          LOGGED IN as <strong>{email}</strong>
          <div className="button">
            <button onClick={handleLoginRedirect}>LogOut</button>
          </div>
          <Link to="/teams">Go to Teams</Link>
        </>
      ) : (
        <>
          LOGGED OUT:
          <div className="button">
            <button onClick={handleLoginRedirect}>Login</button>
          </div>
        </>
      )}
    </div>
  );
}
