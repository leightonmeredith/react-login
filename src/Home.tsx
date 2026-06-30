import { useAuth } from "./context/useAuth";

export default function Home() {
  const { email } = useAuth();
  return (
    <div>
      HOME
      {email ? "LOGGED IN" : "LOGGED OUT"}
    </div>
  );
}
