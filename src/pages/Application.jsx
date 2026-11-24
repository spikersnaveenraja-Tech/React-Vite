import { useState } from "react";
import Product from "./Product";


export default function Application() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(false)}>
        Hide Product
      </button>

      {show && <Product />}
    </>
  );
}