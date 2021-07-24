import { Button } from "@material-ui/core";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ChatDetails.css";

function ChatDetails() {
  const { seed } = useParams();
  const { roomId } = useParams();
  const { roomName } = useParams();
  return (
    <div>
      <Link to={`/rooms/${roomName}/${seed}/${roomId}`}>
        <Button>
          <i class="fas fa-arrow-left"></i>
        </Button>
      </Link>

      <h2>{roomId}</h2>
      <h2>{roomName}</h2>
    </div>
  );
}

export default ChatDetails;
