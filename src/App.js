  import React from 'react'
  import './App.css';
  import Textform from './components/Textform';
  
 
  import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Greet from './components/Greet';


  function App() {
    return (
      <>
      <Greet/>
     <Textform/>
      </>
      );
  }

  export default App;

