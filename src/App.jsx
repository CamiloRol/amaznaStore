import { useState } from "react";
import { DashboradPage } from "./admin/pages/DashboradPage";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ProtecterRoute } from "./admin/components/ProtecterRoute";

function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    // Peticion al backend real
    setUser({
      id: 1,
      name: "Manu"
    })
  };

  const logout = () => setUser(null);

  return (
    <>

    {
      user? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )
    }

      <Routes>
        <Route path="/" element={<Home />} />
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
