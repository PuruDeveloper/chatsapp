import { Button } from "@material-ui/core";
import React from "react";
import "./IndividualInvite.css";
import db from "../../firebase";

function IndividualInvite({
  userid,
  useremail,
  roomid,
  roomname,
  roommembers,
}) {
  const sendInvite = (e) => {
    e.preventDefault();
    db.collection("users").doc(userid).collection("roominvites").add({
      roomid: roomid,
      roomname: roomname,
      roommembers: roommembers,
    });
  };
  return (
    <div className="individualinvite">
      <div className="individual">
        <h3>{useremail}</h3>
        <Button onClick={(e) => sendInvite(e, userid)}>SEND INVITE</Button>
      </div>
    </div>
  );
}

export default IndividualInvite;
