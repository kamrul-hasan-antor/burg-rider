import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  initializeSignIn,
  googleSignIn,
  facebookSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./signingMethods";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

const Login = () => {
  initializeSignIn();
  const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    signedIn: false,
    userName: "",
    email: "",
    password: "",
    imgSrc: "",
    error: "",
    success: false,
  });

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, redirect) => {
    setUser(res);
    SetLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (event) => {
    let fieldValid;
    if (event.target.name === "name") {
      fieldValid = event.target.value > 4;
    }
    if (event.target.name === "email") {
      fieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const passwordValid = event.target.value > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      fieldValid = passwordValid && passwordHasNumber;
    }
    if (fieldValid) {
      const newUsers = { ...user };
      newUsers[event.target.name] = event.target.value;
      setUser(newUsers);
    }
  };

  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email && user.password).then((res) => {
        handleResponse(res, true);
        SetLoggedInUser(res, true);
      });
    }
    event.preventDefault();
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      handleResponse(res, true);
      SetLoggedInUser(res, true);
    });
  };
  const handleFacebookSignIn = () => {
    facebookSignIn().then((res) => {
      handleResponse(res, true);
      SetLoggedInUser(res, true);
    });
  };
  return (
    <div>
      <div className="row d-flex justify-content-center p-5">
        <form onSubmit={handleSubmit} className="loginForm col-sm-12 col-md-6">
          <h3 className="d-flex justify-content-center">
            {newUser ? "Create an account" : "Sign In"}
          </h3>
          {newUser && (
            <input
              className="loginData"
              type="text"
              onBlur={handleBlur}
              name="name"
              id=""
              placeholder="User Name"
              required
            />
          )}
          <br />
          <input
            className="loginData"
            type="email"
            onBlur={handleBlur}
            name="email"
            id=""
            placeholder="Email Address"
            required
          />

          <input
            className="loginData"
            type="password"
            onBlur={handleBlur}
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <br />
          {newUser && (
            <input
              className="loginData"
              type="password"
              onBlur={handleBlur}
              name="oldUser"
              id=""
              placeholder="Confirm Password"
              required
            />
          )}

          <br />
          <input
            className="submitBtn"
            type="submit"
            value="Create an account"
          />
          <h6 className="logInAlready"> Already have an account?</h6>

          <a
            onClick={() => setNewUser(!newUser)}
            name="oldUser"
            className="logInLink"
            to="#login"
          >
            Login
          </a>
          <label htmlFor="oldUser"></label>
        </form>

        <div className="socialLogin col-sm-12 col-md-7">
          <h6 className="or">Or</h6>
          <button onClick={handleFacebookSignIn} className="socialBtn ">
            <FontAwesomeIcon icon={faFacebook} /> Continue With Facebook
          </button>
          <br />
          <button onClick={handleGoogleSignIn} className="socialBtn ">
            <FontAwesomeIcon icon={faGoogle} /> Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
