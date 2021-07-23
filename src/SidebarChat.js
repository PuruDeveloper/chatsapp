import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function SidebarChat({ addNewChat, id, name }) {
  const [{ user }, dispatch] = useStateValue();
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roommates, setRoommates] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    db.collection("rooms")
      .doc(roomId)
      .collection("roommates")
      .onSnapshot((snapshot) =>
        setRoommates(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter room name");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });

      // db.collection("rooms").doc(roomId).collection("roommates").add({
      //   username: user.email,
      //   useremail: user.email,
      // });
      // console.log(user);
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${name}/${seed}/${id}`}>
      <div className="sidebarChat">
        <div>
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        </div>
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
