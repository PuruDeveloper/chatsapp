import React from "react";
import "./AccountDetails.css";

function AccountDetails({
  id,
  description,
  username,
  useremail,
  userpassword,
}) {
  return (
    <div className="accountdetails">
      <div className="user__detail">
        <h4>About User</h4>
        {description ? (
          <h2>description</h2>
        ) : (
          "You have not added any description"
        )}
      </div>
      <div className="user__detail">
        <h4>User Name :</h4>
        <h2>{username}</h2>
      </div>
      <div className="user__detail">
        <h4>User Email :</h4>
        <h2>{useremail}</h2>
      </div>
      <div className="user__detail">
        <h4>User Password :</h4>
        <h2>{userpassword}</h2>
      </div>
    </div>
  );
}

export default AccountDetails;
