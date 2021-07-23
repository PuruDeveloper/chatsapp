import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";
import db from "./firebase";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [users, setUsers] = useState([]);
  let testValue = 0;
  useEffect(() => {
    const unsubscribe = db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const googleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.uid);
        // db.collection("users");

        setUserPassword(Math.floor(Math.random() * 10000000));

        {
          users.map((user) => {
            if (user.data.username === result.user.email) {
              testValue++;
            }
          });
        }
        if (testValue === 0) {
          db.collection("users").add({
            username: result.user.email,
            useremail: result.user.email,
            userpassword: Math.floor(Math.random() * 10000000),
            userphoto: result.user?.photoURL,
          });

          //
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
            userName: result.user.email,
            userEmail: result.user.email,
          });
          alert("Welcome to the chatsapp");
        } else if (testValue > 0) {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
            userName: result.user.email,
            userEmail: result.user.email,
          });
          alert("We are glad you came back");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h1>Sign in to chatsapp</h1>
        </div>

        <Button onClick={googleSignIn}>Sign In With Google</Button>
        <Button>Sign In Manually</Button>
      </div>
    </div>
  );
}

export default Login;
