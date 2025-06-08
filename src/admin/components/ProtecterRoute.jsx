import { Navigate } from "react-router-dom";

export const ProtecterRoute = ({ children }) => {
  // Obtener el email del usuario desde localStorage
  const userEmail = localStorage.getItem("userEmail");

  // Verificar si el email contiene "admin"
  if (!userEmail || !userEmail.includes("admin")) {
    return <Navigate to="/login" />;
  }

  // Si cumple la condición, renderiza los hijos
  return children;
};