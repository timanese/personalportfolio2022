import "./App.css";
import React from "react";
import { NavBar } from "../src/components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsNew } from "./components/WhatsNew";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <WhatsNew />
      {/* <GithubCal /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
