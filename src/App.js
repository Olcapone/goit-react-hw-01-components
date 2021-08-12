import React, { Fragment } from "react";

import "./App.css";
import PaintProfile from "./components/PaintProfile/PaintProfile";
import userData from "./user.json";
import Statistic from "./components/Statistic/Statistic";
import statisticlData from "./statisticsData.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./friends.json";

export default function App() {
  return (
    <Fragment>
      <PaintProfile {...userData} />
      <Statistic options={statisticlData} />
      <FriendList friends={friendsData} />
    </Fragment>
  );
}