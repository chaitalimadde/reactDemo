import React from "react";
import { useState } from "react";

function Birds() {
  const [name, setName] = useState("Sparrow");
  const [info, setInfo] = useState("");

  return (
    <div>
      <h1>{name}</h1>
      <h4>{info}</h4>
      <button style={{ marginRight: "2%" }} onClick={() => setName("Peacock")}>
        name
      </button>
      <button
        onClick={() =>
          setInfo(`This is Birds test component`)
        }
      >
        info
      </button>
    </div>
  );
}
export default Birds;
