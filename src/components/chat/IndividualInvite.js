import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./IndividualInvite.css";
import db from "../../firebase";
import { useParams } from "react-router-dom";

function IndividualInvite({ userid, useremail, roomid, roomname }) {
  const [roominvites, setRoominvites] = useState([]);
  const { roomId } = useParams();

  const sendInvite = (e) => {
    e.preventDefault();
    db.collection("roominvites").add({
      roomid: roomid,
      roomname: roomname,
      userid: userid,
      useremail: useremail,
    });
  };

  useEffect(() => {
    db.collection("roominvites").onSnapshot((snapshot) =>
      setRoominvites(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

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
