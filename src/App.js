import React, { Fragment } from "react";

import "./App.css";
import PaintProfile from "./components/PaintProfile/PaintProfile";
import Statistic from "./components/Statistic/Statistic";
import userData from "./user.json";
import statisticalData from "./statisticsData.json";

export default function App() {
  return (
    <Fragment>
      <PaintProfile {...userData} />
      <Statistic options={statisticalData} />
    </Fragment>
  );
}
