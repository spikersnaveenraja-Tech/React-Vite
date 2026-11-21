import { useState } from "react";
import Timer from "./Timer";

export default function TimerApplication() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="container mt-3">
      <button
        className="btn btn-dark"
        onClick={() => setShowTimer(!showTimer)}
      >
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>

      <hr />

      {showTimer && <Timer />}
    </div>
  );
}