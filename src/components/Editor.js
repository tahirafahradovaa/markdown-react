import { React } from "react";
import "./Md.css";

function Editor({ setTextValue }) {
  return (
    <>
      <div>
        <textarea
          rows={50}
          cols={80}
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}

export default Editor;
