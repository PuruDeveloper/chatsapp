import React from "react";
import { useStateValue } from "../StateProvider";
import "./AccountDetails.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./ChatDetails.css";

function AccountDetails() {
  const [{ userName, userEmail, uid, photoURL }, dispatch] = useStateValue();
  return (
    <div class="accountdetails">
      <Link to="/">
        <Button>
          <i class="fas fa-arrow-left"></i>
        </Button>
      </Link>
      <div class="user__image">
        <img src={photoURL} alt="my-image" />
      </div>
      <h1>{userName}</h1>
      <h1>{userEmail}</h1>
      <h1>{uid}</h1>
    </div>
  );
}

export default AccountDetails;
