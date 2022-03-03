import React from "react";
import { Route } from "react-router-dom";
import Chats from "./pages/Chats";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/chats" component={Chats} />
    </div>
  );
};

export default App;
