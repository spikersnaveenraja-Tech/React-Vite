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
       {show ? 'Hide Component' : 'Show Component' }
      </button>

      {show && <Product />}
    </>
  );
}