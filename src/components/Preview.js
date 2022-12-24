import React from "react";
import ReactMarkdown from "react-markdown";
function Preview({ textValue }) {
  return (
    <div className="showarea">
      <ReactMarkdown>{textValue}</ReactMarkdown>
    </div>
  );
}
export default Preview;
