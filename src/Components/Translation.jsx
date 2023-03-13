import React, { useState } from "react";
import OptionSelection from "./OptionSelection";

export default function Translation({ doTask, setInput, result }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setInput("");
    await doTask();
    setIsLoading(false);
  };
  return (
    <div>
      <h1>Solve your problem within a second</h1>
      <div className="area-section">
        <textarea
          className="text-area"
          cols={55}
          rows={5}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button
          className={`action-btn ${isLoading ? "loading" : ""}`}
          onClick={handleClick}
        >
          <span>{isLoading ? "Loading..." : "Do Your Task"}</span>
        </button>
      </div>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
