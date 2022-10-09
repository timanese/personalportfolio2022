import "./App.css";
import React from "react";
import { NavBar } from "../src/components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import {Projects} from "./components/Projects"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
