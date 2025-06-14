import { useState } from "react";
import { DashboradPage } from "./admin/pages/DashboradPage";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ProtecterRoute } from "./admin/components/ProtecterRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const user = localStorage.getItem("userEmail"); // Obtengo el email
  const avatarPicture = localStorage.getItem("avatarPicture");

  console.log("Valor user :V: ", user, avatarPicture);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtecterRoute>
              <DashboradPage />
            </ProtecterRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
