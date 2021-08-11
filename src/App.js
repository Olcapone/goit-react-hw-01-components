import "./App.css";
import PaintProfile from "./components/PaintProfile/PaintProfile";
import Statistic from "./components/Statistic/Statistic";
import userData from "./user.json";
import statisticalData from "./statisticsData.json";

export default function App() {
  return (
    <div>
      <PaintProfile {...userData} />
      <Statistic options={statisticalData} />
    </div>
  );
}
