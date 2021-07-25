import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./AccountDetails.css";

function AccountDetails({
  photoURL,
  id,
  description,
  username,
  useremail,
  userpassword,
}) {
  return (
    <div className="accountdetails">
      <div className="accountdetails__left">
        <div className="user__details">
          <div class="user__image">
            <img src={photoURL} alt="my-image" />
          </div>
        </div>
        <div className="user__details">
          <div className="user__detail">
            <h4>About User</h4>
            <h2>
              {description
                ? { description }
                : "You have not added any description"}
            </h2>
          </div>
          <Button>
            <h4>Change Description</h4>
          </Button>
        </div>
        <div className="user__details">
          <div className="user__detail">
            <h4>User Name :</h4>
            <h2>{username}</h2>
          </div>
          <Button>
            <h4>Change UserName</h4>
          </Button>
        </div>
        <div className="user__details">
          <div className="user__detail">
            <h4>User Email :</h4>
            <h2>{useremail}</h2>
          </div>
        </div>
        <div className="user__details">
          <div className="user__detail">
            <h4>User Password :</h4>
            <h2>{userpassword}</h2>
          </div>
          <Button>
            <h4>Change Password</h4>
          </Button>
        </div>
      </div>
      <div className="accountdetails__right">
        <h3>Room Invites</h3>
      </div>
    </div>
  );
}

export default AccountDetails;
