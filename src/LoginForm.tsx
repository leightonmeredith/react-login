import { useState } from "react";
import "./styles.css";
import { login } from "./utils.tsx";

// ================ LOGIN FORM ====================
//
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  8* The login button should trigger the login() action imported above and pass required data to it.
//  8* Disable the Login button if email is blank OR if password is under 6 letters
//  8* Disable the Login button while login action is being performed
//  8* Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  8* Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await login({ email, password });
      alert("Login Successful");
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
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
