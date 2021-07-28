import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./AccountDetails.css";
import db from "../../firebase";

function AccountDetails({
  photoURL,
  id,
  uid,
  description,
  username,
  useremail,
  userpassword,
}) {
  const [roominvites, setRoominvites] = useState([]);

  const acceptInvite = (e, roomid, roommembers) => {
    e.preventDefault();
    db.collection("rooms").doc(roomid).collection("roommates").add({
      uid: uid,
      useremail: useremail,
    });
    db.collection("rooms")
      .doc(roomid)
      .update({
        members: roommembers + 1,
      });
  };

  useEffect(() => {
    db.collection("users")
      .doc(id)
      .collection("roominvites")
      .onSnapshot((snapshot) =>
        setRoominvites(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

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
        <h1>Room Invites</h1>
        <div>
          {roominvites.map((roominvite) => (
            <div className="roominvites">
              <h4>{roominvite.data.roomname}</h4>
              <Button
                onClick={(e) =>
                  acceptInvite(
                    e,
                    roominvite.data.roomid,
                    roominvite.data.roommembers
                  )
                }
              >
                Accept Invite
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
