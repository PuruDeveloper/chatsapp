import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./AccountDetails.css";
import db from "../../firebase";
import { actionTypes } from "../../Reducer";
import { useStateValue } from "../../StateProvider";

function AccountDetails({
  photoURL,
  id,
  uid,
  description,
  username,
  useremail,
  userpassword,
}) {
  const [{ user }, dispatch] = useStateValue();
  const [roominvites, setRoominvites] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  let usernameError = false;

  const deleteInvite = (e, inviteid, roomid) => {
    e.preventDefault();
    db.collection("roominvites").doc(inviteid).delete();
  };

  const acceptInvite = (e, inviteid, roomid) => {
    e.preventDefault();
    db.collection("roominvites").doc(inviteid).delete();
    db.collection("rooms").doc(roomid).collection("roommates").add({
      uid: uid,
      useremail: useremail,
    });

    {
      rooms.map(
        (room) =>
          room.id === roomid &&
          db
            .collection("rooms")
            .doc(roomid)
            .update({
              members: room.data.members + 1,
            })
      );
    }

    // db.collection("rooms")
    //   .doc(roomid)
    //   .update({
    //     members: roommembers + 1,
    //   });
  };

  const userExists = (newusername) => {
    usernameError = false;
    {
      users.map(
        (user) => user.data.username === newusername && (usernameError = true)
      );
    }
  };

  const updateRoomAdmin = (newusername) => {
    {
      rooms.map(
        (room) =>
          room.data.chatadmin === username &&
          db.collection("rooms").doc(room.id).update({
            chatadmin: newusername,
          })
      );
    }
    db.collection("users").doc(id).update({
      username: newusername,
    });
    dispatch({
      type: actionTypes.SET_USER,
      user: "old",
      userName: newusername,
      userEmail: useremail,
      uid: uid,
      photoURL: photoURL,
    });
  };

  const changeUsername = (e, username) => {
    e.preventDefault();
    const newusername = prompt("Please enter room name");
    if (newusername) {
      db.collection("users").onSnapshot((snapshot) =>
        setUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

      userExists(newusername);

      if (usernameError) {
        alert("Username already exists");
      } else {
        updateRoomAdmin(newusername);

        console.log("Now that is a new user name!!");
      }
    } else {
      alert("You need to put some username befor submitting man!");
    }
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

    const unsubscribe = db
      .collection("rooms")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return () => {
      unsubscribe();
    };
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

          <Button onClick={(e) => changeUsername(e)}>
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
          {roominvites.map(
            (roominvite) =>
              roominvite.data.useremail === useremail && (
                <div className="roominvites">
                  <h4>{roominvite.data.roomname}</h4>
                  <div className="invitebuttons">
                    <Button
                      onClick={(e) =>
                        deleteInvite(e, roominvite.id, roominvite.data.roomid)
                      }
                    >
                      Delete Invite
                    </Button>
                    <Button
                      onClick={(e) =>
                        acceptInvite(e, roominvite.id, roominvite.data.roomid)
                      }
                    >
                      Accept Invite
                    </Button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
