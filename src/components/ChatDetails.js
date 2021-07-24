import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ChatDetails.css";

function ChatDetails() {
  const { seed } = useParams();
  const { roomId } = useParams();
  const { roomName } = useParams();

  const addRoommate = (e) => {
    e.preventDefault();
  };

  const deleteRoom = (e) => {
    e.preventDefault();
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
      <div className="chatdetails__body"></div>
      <div className="chatdetails__footer">
        <Button onClick={(e) => deleteRoom(e)}>Delete Room</Button>
      </div>
    </div>
  );
}

export default ChatDetails;
