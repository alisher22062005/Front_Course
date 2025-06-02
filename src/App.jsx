import { useState } from "react";
import Menu from "./components/Menu/Menu";
import "./App.css";
import MenuDefault from "./components/MenuDefault/MenuDefault";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu></Menu>
    </>
  );
}

export default App;
