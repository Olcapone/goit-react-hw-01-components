import React, { Fragment } from "react";

import "./App.css";
import PaintProfile from "./components/PaintProfile/PaintProfile";
import user from "./user.json";
import Statistic from "./components/Statistic/Statistic";
import statisticlData from "./statisticsData.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactionsData from "./transactions.json";

export default function App() {
  return (
    <Fragment>
      <PaintProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticlData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </Fragment>
  );
}
