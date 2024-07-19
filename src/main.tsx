import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Specialities from "./components/Specialities";
import AboutUs from "./components/AboutUS";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="min-h-screen h-auto">
      <Header />
      <Home />
      <Specialities />
      <AboutUs />
    </main>
  </React.StrictMode>
);
