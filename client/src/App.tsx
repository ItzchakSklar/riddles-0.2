import "./App.css";
import { Enter } from "./comps/Enter.tsx";
// import {Admin} from "./comps/Admin.tsx";
import { Riddles } from "./comps/Riddles.tsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("enter");

  let content;
  switch (page) {
    case "enter":
      content = <Enter setPage={setPage} />;
      break;
    case "riddles":
      content = <Riddles setPage={setPage} />;
      break;
    case "Admin":
      content = (
        <>
          <p>not redy</p>
          <button className="back" onClick={() => setPage("enter")}>
            back to menu
          </button>
        </>
      );
      break;
    default:
      content = <p>404 – page not found</p>;
  }

  return (
    <div id="main-card">
      <h2>Riddles game</h2>
      {content}
    </div>
  );
}

export default App;
