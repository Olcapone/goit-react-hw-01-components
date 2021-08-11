import "./App.css";
import PaintProfile from "./components/PaintProfile/PaintProfile";
import userData from "./user.json";
import statisticalData from "./statisticsData.json";

export default function App() {
  return <PaintProfile {...userData} />; //посмотреть как добавить
}
