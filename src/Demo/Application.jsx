import { useState } from "react";
import Product from "./Product";

export default function Application() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button
        className="btn btn-dark"
        onClick={() => setShow(!show)}
      >
        Toggle Component
      </button>

      {show && <Product />}
    </>
  );
}