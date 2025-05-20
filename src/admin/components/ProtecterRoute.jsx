import { Navigate } from "react-router-dom";

export const ProtecterRoute = ({user, children}) => {
    if(!user){
        return <Navigate to="/" />
    }

  return children
}
