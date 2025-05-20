import { useState } from "react";
import { DashboradPage } from "./admin/pages/DashboradPage";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ProtecterRoute } from "./admin/components/ProtecterRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    // Peticion al backend real
    setUser({
      id: 1,
      name: "Manu",
      rol:"admin"
    })
  };

  const logout = () => setUser(null);

  return (
    <>

     {
      user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}> Login</button>
      )
     }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={
          <ProtecterRoute user={user}>
            <DashboradPage/>
          </ProtecterRoute>
          } />
      </Routes>
    </>
  );
}

export default App;
