import React from "react";
import { createRoot } from "react-dom/client";
import LoginForm from "./LoginForm";

import "./index.css";
import { AuthProvider } from "./context/authProvider";

// Import your existing AuthProvider here if required.
// Example:
// import { AuthProvider } from "./context/userContext";

export interface LoginOptions {
  onSuccess?: () => void;
}

export function mountReactLogin(
  element: HTMLElement,
  options: LoginOptions = {}
): () => void {

  const root = createRoot(element);

  root.render(
    <React.StrictMode>
    <AuthProvider>
    <LoginForm onLoginSuccess={options.onSuccess} />
    </AuthProvider>
    </React.StrictMode>
  );

  return () => root.unmount();
}