import React, { useState } from "react";
import codeImg from "../assets/code.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id & UserName is required");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="mainLogo" src={codeImg} alt="codelogo" />
        <h4 className="mainLabel">Paste invitation Room ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room Id"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
        </div>

        <span className="createInfo">
          Don't have an invite? Create &nbsp;
          <a onClick={createNewRoom} href="" className="createNewBtn">
            New Room
          </a>
        </span>
      </div>
      <footer>
        <h4>
          Built with 💛 by &nbsp;
          <a href="https://github.com/priyanshi-pusan">Priyanshi</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
