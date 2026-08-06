import { Link } from "react-router";
import { useAuth } from "./context/useAuth";

export default function Teams() {
  const { email } = useAuth();
  const teams = [
    { id: 1, name: "Man Utd", position: 1 },
    { id: 2, name: "Chelsea", position: 2 },
    { id: 3, name: "Arsenal", position: 3 },
    { id: 4, name: "Man City", position: 4 },
  ];
  return (
    <>
        {email ? (
        <>
            <Link to="/">Back to Home</Link>
            <h2>Teams</h2><ul>
                {teams.map((team) => (
                    <li key={team.id}>{team.name} - Position: {team.position}</li>
                ))}
            </ul>
        </>
        ) : (
            <>
                <Link to="/login">Login</Link>
                <p>Please log in to view the teams.</p>
            </>
        )}
    </>
  );
}