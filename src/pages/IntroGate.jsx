import { Navigate } from "react-router-dom";

export default function IntroGate({ children }) {
  const seen = sessionStorage.getItem("introSeen");

  if (!seen) {
    return <Navigate to="/intro" replace />;
  }

  return children;
}
