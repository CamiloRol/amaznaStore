import { Navigate } from "react-router-dom";

export const ProtecterRoute = ({user, children}) => {
    if(!user || user.rol !== "admin"){
        return <Navigate to="/login" />
    }

  return children
}
