import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Header/Header";
import Booking from "./components/Booking/Booking";

export const UserContext = createContext();

function App() {
  const [loggedInUser, SetLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute to="/booking/:id">
            <Booking />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
