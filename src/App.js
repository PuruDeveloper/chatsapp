import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user, userEmail, userName }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!userName ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomName/:seed/:roomId">
                <Chat />
              </Route>
              <Route path="/">{/* <Chat /> */}</Route>
            </Switch>
          </Router>
          {/* Chat */}
        </div>
      )}
    </div>
  );
}

export default App;
