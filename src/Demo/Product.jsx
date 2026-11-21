
import { useEffect } from "react";

export default function Product() {

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <>
    {console.log("render")}
  <h2>Product Component</h2>;
  </>
  )
}