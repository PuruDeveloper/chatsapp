import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";
import db from "./firebase";

function Login() {
  const [{ user, userName, userEmail }, dispatch] = useStateValue();
  const [userPassword, setUserPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [uid, setUid] = useState("");
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

  const userHexcodeCheck = () => {
    setTimeout(() => {
      console.log(userName);
    }, 5000);
    const hexcode = Math.random(Math.floor() * 10000);
    {
      users.map((user) => {
        for (let i = 0; i < users.length; i++) {
          if (user.data.uid === uid) {
            testValue = 1;
          }
          break;
        }
      });
    }

    console.log(userName);
    console.log(testValue);
  };

  async function googleSignUp() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.uid);
        setUid(result.user.uid);
        // db.collection("users");
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
          userName: result.user.displayName,
          userEmail: result.user.email,
        });

        setUserPassword(Math.floor(Math.random() * 10000000));
        userHexcodeCheck();

        // {
        //   users.map((user) => {
        //     // if (user.data.useremail === userEmail) {
        //     //   testValue++;
        //     // }
        //     console.log(user.data.useremail);
        //   });
        // }
        if (testValue === 0) {
          db.collection("users").add({
            uid: result.user.uid,
            username: result.user.displayName,
            useremail: result.user.email,
            userpassword: Math.floor(Math.random() * 10000000),
            userphoto: result.user?.photoURL,
          });

          alert("Welcome to the chatsapp");
        } else if (testValue > 0) {
          alert("We are glad you came back");
          testValue = 0;
        }
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h1>Sign up to chatsapp</h1>
        </div>

        <Button onClick={googleSignUp}>Sign In With Google</Button>
        <Button>Sign In Manually</Button>
      </div>
    </div>
  );
}

export default Login;
