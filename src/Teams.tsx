import { Link } from "react-router";
import { useAuth } from "./context/useAuth";
import { useEffect, useRef, useState } from "react";

const teams = [
  { id: 1, name: "Man Utd", position: 1 },
  { id: 2, name: "Chelsea", position: 2 },
  { id: 3, name: "Arsenal", position: 3 },
  { id: 4, name: "Man City", position: 4 },
];

export default function Teams() {
  const { email } = useAuth();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(
    teams[0]?.id || null,
  );
  const [teamMessage, setTeamMessage] = useState<string>("");
  const renderCount = useRef(0);

  // 1. No dependency array: runs after every render.
  // Cleanup runs before the effect runs again and when the component unmounts.
  useEffect(() => {
    renderCount.current += 1;
    console.log(`Teams component rendered ${renderCount.current} times`);
    return () => {
      console.log(`CLeanup after ${renderCount.current} renders`);
    };
  });

  // 2. Empty dependency array: runs once when the component mounts.
  // Practical scenario: subscribe to browser online/offline events.
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // 3. Dependency array: runs when selectedTeamId changes.
  // Practical scenario: simulate loading data for the selected team.
  useEffect(() => {
    //Can't use async function directly in useEffect, so we can use setTimeout to simulate data loading
    // setTeamMessage(
    //   `Loading data for ${selectedTeam?.name || "unknown team"}...`,
    // );

    const selectedTeam = teams.find((team) => team.id === selectedTeamId);
    if (!selectedTeam) {
      return;
    }

    const timer = setTimeout(() => {
      setTeamMessage(
        `Data loaded for ${selectedTeam?.name || "unknown team"}.`,
      );
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [selectedTeamId]);

  return (
    <>
      <p>Network Status: {isOnline ? "Online" : "Offline"}</p>
      {email ? (
        <>
          <Link to="/">Back to Home</Link>
          <h2>Teams</h2>
          <ul>
            {teams.map((team) => (
              <li key={team.id}>
                <button
                  onClick={() => setSelectedTeamId(team.id)}
                  disabled={selectedTeamId === team.id}
                >
                  {team.name} - Position: {team.position}
                </button>
              </li>
            ))}
          </ul>
          <p>{teamMessage}</p>
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