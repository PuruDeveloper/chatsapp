import React, { useState, useEffect } from "react";
import "./AddNewMember.css";
import { useParams } from "react-router-dom";
import db from "../../firebase";

function AddNewMember() {
  const { roomName } = useParams();
  const { roomId } = useParams();
  const [users, setUsers] = useState([]);
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

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
  }, []);

  return (
    <div className="addnewmember">
      {roommates ? (
        <ul>
          {users.map((user) =>
            roommates.map(
              (roommate) =>
                roommate.data.useremail !== user.data.useremail && (
                  <li>{user.data.useremail}</li>
                )
            )
          )}
        </ul>
      ) : (
        <ul>
          {users.map((user) => (
            <li>{user.data.useremail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddNewMember;
