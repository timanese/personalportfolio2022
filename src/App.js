import "./App.css";
import React from "react";
import { NavBar } from "../src/components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
