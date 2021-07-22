import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";
import db from "./firebase";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user.uid);
        // db.collection("users");

        setUserPassword(Math.floor(Math.random() * 10000000));
        setUserName(result.user.email);

        db.collection("users").add({
          username: result.user.email,
          userid: result.user.uid,
          userpassword: Math.floor(Math.random() * 10000000),
          userphoto: result.user?.photoURL,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h1>Sign in to chatsapp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
