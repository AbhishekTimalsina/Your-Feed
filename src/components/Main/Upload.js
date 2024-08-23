import React, { useContext } from "react";
import { User, VideoCamera, Image } from "phosphor-react";
import { CreatePost } from "./CreatePost.js";
import { ItemBar } from "../ItemBar";
import { ModeContext } from "../../layouts/RootLayout.js";

export const Upload = ({ newPostHandler }) => {
  const [mode, setMode] = useContext(ModeContext);

  function changeModeEdit() {
    setMode("create");
  }

  return (
    <>
      {(mode == "create" || mode == "edit") && (
        <CreatePost newPostHandler={newPostHandler} />
      )}
      <div className="container">
        <div className="upload-area">
          <span className="user-icon">
            <User size="40px" color="white" weight="fill" />
          </span>
          <div className="content-input" onClick={changeModeEdit}>
            Share your thoughts...
          </div>
        </div>
        <div className="upload-action_area">
          <ItemBar name="Live Video" type="upload" event={changeModeEdit}>
            <VideoCamera size="24px" color="white" weight="fill" />
          </ItemBar>

          <ItemBar name="Upload Photo" type="upload" event={changeModeEdit}>
            <Image size="24px" color="red" weight="fill" />
          </ItemBar>
        </div>
      </div>
    </>
  );
};
