import React, { useContext } from "react";
import { ShortCutBar } from "../../components/Shortcuts/Shortcuts.js";
import { Main } from "../../components/Main/Main.js";
import { FriendList } from "../../components/FriendList/FriendList.js";
import "../../App.css";

import { ModeContext } from "../../layouts/RootLayout.js";

export const Home = () => {
  const [mode, setMode] = useContext(ModeContext);

  return (
    <>
      <section className={`section-bottom ${mode}`}>
        <ShortCutBar />
        <Main />
        <FriendList />
      </section>
    </>
  );
};
