import { Avatar, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import "./ChatDetails.css";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import ChatGlobalUsers from "./ChatGlobalUsers";

function ChatDetails() {
  const { seed } = useParams();
  const { roomId } = useParams();
  const { roomName } = useParams();
  const [{ userEmail }, dispatch] = useStateValue();
  const history = useHistory();
  const [roomAdmin, setRoomAdmin] = useState("");
  let roomAdminPhoto = "";
  let roomAdminUid = "";
  let roomAdminId = "";
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .collection("roommates")
      .onSnapshot((snapshot) =>
        setRoommates(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    //Storing all the rooms data in rooms[]
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    //Accepting the rooms admin email id in roomAdmin
    {
      rooms.map(
        (room, key = room.id) =>
          room.id === roomId && setRoomAdmin(room.data.chatadmin)
      );
    }
  }, []);

  const addRoommate = (e) => {
    e.preventDefault();
  };

  const deleteRoom = (e) => {
    e.preventDefault();

    {
      rooms.map(
        (room, key = room.id) =>
          room.id === roomId &&
          room.data.chatadmin === userEmail &&
          db.collection("rooms").doc(roomId).delete() &&
          history.push(`/`)
      );
    }
  };
  return (
    <div className="chatdetails">
      <div className="chatdetails__header">
        <div className="chatdetails__header__1">
          <Link to={`/rooms/${roomName}/${seed}/${roomId}`}>
            <Button>
              <i class="fas fa-arrow-left"></i>
            </Button>
          </Link>
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <h3>{roomName}</h3>
        </div>

        <div className="chatdetails__header__2">
          <Button onClick={(e) => addRoommate(e)}>Add Roommate</Button>
        </div>
      </div>
      <div className="chatdetails__body">
        <div className="chat__members">
          <h4>Room Members</h4>
          {rooms.map(
            (room, key = room.id) =>
              room.id === roomId && (
                <div>
                  <p>{room.data.chatadmin}</p>
                </div>
              )
          )}
          {roommates.map((roommate) => (
            <p>{roommate.data.useremail}</p>
          ))}
        </div>
        <div className="chat__users">
          <h4>Global Users</h4>
          {users.map((user, key = user.id) => (
            <ChatGlobalUsers
              id={user.id}
              uid={user.data.uid}
              userphoto={user.data.userphoto}
              useremail={user.data.useremail}
            />
          ))}
        </div>
      </div>
      <div className="chatdetails__footer">
        <Button onClick={(e) => deleteRoom(e)}>Delete Room</Button>
      </div>
    </div>
  );
}

export default ChatDetails;
