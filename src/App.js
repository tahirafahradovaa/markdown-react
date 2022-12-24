import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

import { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState("");
  return (
    <>
      <div className="nav">
        <li>
          <Link to="/"> Editor</Link>
        </li>
        <li>
          <Link to="/Preview"> Preview</Link>
        </li>
      </div>

      <Routes>
        <Route
          path="/"
          element={<Editor textValue={textValue} setTextValue={setTextValue} />}
        ></Route>
        <Route
          path="/Preview"
          element={
            <Preview textValue={textValue} setTextValue={setTextValue} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
