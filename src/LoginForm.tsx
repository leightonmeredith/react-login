import { useState } from "react";
import "./styles.css";
import { login } from "./utils.tsx";
import { useAuth } from "./context/useAuth.tsx";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { loginUser } = useAuth();

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await login({ email, password });
      loginUser({ email, user: "myUser" });
      alert("Login Successful");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const disableButton = password.length < 6 || !email || loading;

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input
          id={"password"}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="errorMessage">{error}</div>

      <div className="button">
        <button onClick={handleLogin} disabled={disableButton}>
          Login
        </button>
      </div>
    </div>
  );
}
