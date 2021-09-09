//import Header from "./components/Header";
//import Footer from "./components/Footer";
import React from "react";
import "./App.css";
import Home from "./Home";
import Navigator from "./NavigationBar";
import About from "./About";
import UploadForm from "./FileUpload";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navigator />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/FileUpload" component={UploadForm}></Route>
            <Route path="/About" component={About}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
