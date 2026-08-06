import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home.tsx";
import LoginForm from "./LoginForm.tsx";
import { AuthProvider } from "./context/authProvider.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Teams from "./Teams.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorPage /> },
      { path: "teams", element: <Teams />, errorElement: <ErrorPage /> },
      { path: "login", element: <LoginForm />, errorElement: <ErrorPage /> },
      { path: "test", element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
