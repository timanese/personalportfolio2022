import './App.css';
import React  from 'react';
import {NavBar} from '../src/components/NavBar'
import {Banner} from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
