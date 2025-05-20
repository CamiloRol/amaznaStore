import { Navigate } from "react-router-dom";
import { Aside } from "../components/Aside";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Home from "../../pages/Home/Home";

export const DashboradPage = () => {

  return (
    <>
      <Header />
      <Content />
      <Aside />
      <Footer />
    </>
  );
};
