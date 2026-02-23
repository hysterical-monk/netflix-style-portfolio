import { Navigate } from "react-router-dom";

export default function AuthGate({ children }) {
  const introSeen = sessionStorage.getItem("introSeen");
  const loggedIn = localStorage.getItem("loggedIn");

  if (!introSeen) {
    return <Navigate to="/intro" replace />;
  }

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
