import { useState } from "react";
import Menu from "./components/Menu/Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu></Menu>
    </>
  );
}

export default App;
