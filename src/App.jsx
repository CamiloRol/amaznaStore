import { DashboradPage } from "./admin/pages/DashboradPage";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboradPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        
      </Routes>
    </>
  );
}

export default App;
