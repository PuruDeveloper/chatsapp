import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./ChatGlobalUsers.css";
import AccountDetails from "../account/AccountDetails";
import { Link, useParams } from "react-router-dom";
import db from "../../firebase";

function ChatGlobalUsers({ id, uid, userphoto, useremail }) {
  const { roomId } = useParams();
  const { roomName } = useParams();
  const sendRequest = (e) => {
    e.preventDefault();
    console.log(id);
    db.collection("users").doc(id).collection("roominvites").add({
      roomname: roomName,
      roomid: roomId,
    });
  };
  return (
    // <Link to={`/user/${useremail}`}>
    <div className="chatglobalusers">
      <div className="chatglobalusers__left">
        <Avatar src={userphoto} alt="" />
        <h5>{useremail}</h5>
      </div>
      <div className="chatglobalusers__right">
        <Button onClick={(e) => sendRequest(e)}>Send Request</Button>
      </div>
    </div>
  );
}

export default ChatGlobalUsers;
