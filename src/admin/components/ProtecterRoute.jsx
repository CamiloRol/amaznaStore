import { Navigate } from "react-router-dom";

export const ProtecterRoute = ({ user, children }) => {
  if (!user || user.rolId !== 3) {
    return <Navigate to="/login" />;
  }

  return children;
};
