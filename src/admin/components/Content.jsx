import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";

export const Content = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-gray-700">
        {/* Main Content */}
        <div id="content"></div>
        <div className="container mx-auto">
          {/* Page Heading */}
          <div className="flex sm:flex-row flex-col justify-between items-center mb-2 mt-2 ml-3">
            <h1 className="text-xl font-semibold text-gray-100">Dashboard</h1>
            <a
              href="#"
              className="hidden sm:inline-block btn btn-sm bg-blue-500 text-white shadow-sm px-3 py-2 rounded-md hover:bg-blue-600 transition mr-3"
            >
              <i className="fas fa-download fa-sm text-white opacity-50"></i>{" "}
              Generate Report
            </a>
          </div>

          {/* Aquí se supone que va el contenido del dashboard */}
        </div>
      </div>
    </>
  );
};
