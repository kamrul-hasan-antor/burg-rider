import React, { useContext, useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // google sign in//////
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  // facebook sign in/////
  const handleFacebookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  // form validation////
  const handleOnBlur = (e) => {
    let isFieldValid = true;

    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      console.log(newUserInfo);
    }
  };

  // user account create from here////
  const handleCreateAccount = (e) => {
    if (newUser && user.name && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    // created user log in from here////
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  return (
    <div>
      <div className="row d-flex justify-content-center p-5">
        <form
          autoComplete="off"
          className="loginForm col-sm-12 col-md-6"
          onSubmit={handleCreateAccount}
        >
          <h3 className="d-flex justify-content-center">
            {newUser ? "Create an account" : "Sign In"}
          </h3>
          {newUser && (
            <input
              className="loginData"
              autoComplete="false"
              onBlur={handleOnBlur}
              placeholder="User name"
              type="text"
              name="name"
              required
            />
          )}
          <br />

          <input
            className="loginData"
            autoComplete="false"
            onBlur={handleOnBlur}
            placeholder="Email"
            type="text"
            name="email"
            required
          />
          <br />

          <input
            className="loginData"
            autoComplete="false"
            onBlur={handleOnBlur}
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            required
          />
          <br />
          {newUser ? (
            <input
              className="submitBtn"
              type="submit"
              name="submit"
              value="Create an account"
            />
          ) : (
            <input
              className="submitBtn"
              type="submit"
              name="submit"
              value="Log in"
            />
          )}
          {user.error && (
            <p
              style={{
                textAlign: "center",
                color: "red",
                backgroundColor: "white",
                fontSize: "15px",
                width: "74%",
                marginLeft: "13%",
              }}
            >
              {user.error}
            </p>
          )}

          {user.success && (
            <p
              style={{
                color: "green",
                backgroundColor: "white",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              Account {newUser ? "created" : "logged in"} successfully
            </p>
          )}

          <p
            className="logInAlready"
            style={{ textAlign: "center", fontSize: "16px" }}
          >
            {newUser ? "Already have an account" : "Don't have an account?"}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setNewUser(!newUser)}
              className="logInLink"
            >
              {newUser ? "Login" : "Create an account"}
            </span>
          </p>
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
