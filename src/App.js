import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TinderCards from "./TinderCards/TinderCards";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import Messages from "./Messages/Messages";
import MessagePage from "./Messages/MessagePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/messages/:person">
            <Header backButton="/messages" />
            <MessagePage />
          </Route>
          <Route path="/messages">
            <Header backButton="/" />
            <Messages />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
