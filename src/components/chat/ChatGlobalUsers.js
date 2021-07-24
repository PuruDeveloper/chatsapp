import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChatGlobalUsers.css";
import AccountDetails from "../account/AccountDetails";
import { Link } from "react-router-dom";

function ChatGlobalUsers({ id, uid, userphoto, useremail }) {
  return (
    <Link to={`/user/${useremail}`}>
      <div className="chatglobalusers">
        <Avatar src={userphoto} alt="" />
        <h5>{useremail}</h5>
      </div>
    </Link>
  );
}

export default ChatGlobalUsers;
