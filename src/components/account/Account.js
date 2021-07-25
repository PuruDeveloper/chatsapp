import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "./Account.css";
import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import db from "../../firebase";
import AccountDetails from "./AccountDetails";

function Account() {
  const [{ userName, uid, photoURL }, dispatch] = useStateValue();
  const { userEmail } = useParams();
  const [users, setUsers] = useState([]);
  let username = "";
  let useremail = "";
  let userpassword = "";

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    {
      users.map((user) => {
        for (let i = 0; i < users.length; i++) {
          if (user.data.useremail === userEmail) {
            username = user.data.username;
            useremail = user.data.useremail;
            userpassword = user.data.userpassword;
          }
          break;
        }
      });
    }
  }, [userpassword, username]);
  return (
    <div class="account">
      <Link to="/">
        <Button>
          <i class="fas fa-arrow-left"></i>
        </Button>
      </Link>

      <div>
        {users.map(
          (user) =>
            user.data.useremail === userEmail && (
              <AccountDetails
                photoURL={user.data.userphoto}
                id={user.id}
                description={user.data.description}
                username={user.data.username}
                useremail={user.data.useremail}
                userpassword={user.data.userpassword}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Account;
