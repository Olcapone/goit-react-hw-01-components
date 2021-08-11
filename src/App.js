import "./App.css";
import PaintProfile from "./components/PaintProfile/PaintProfile";
import userData from "./user.json";

export default function App() {
  return <PaintProfile {...userData} />;
}
