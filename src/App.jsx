import { DashboradPage } from "./admin/pages/DashboradPage";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboradPage />} />
      </Routes>
    </>
  );
}

export default App;
