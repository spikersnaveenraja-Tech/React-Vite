import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    console.log("Component Mounted");

    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer Cleared");
    };
  }, []);

  return (
    <h3 className="text-success">
      Timer Component Active
    </h3>
  );
}