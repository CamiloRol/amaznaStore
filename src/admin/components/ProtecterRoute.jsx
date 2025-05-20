import { Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";

export const ProtecterRoute = ({user, children}) => {
    if(!user){
        return <Navigate to={<Home/>} />
    }

  return children
}
