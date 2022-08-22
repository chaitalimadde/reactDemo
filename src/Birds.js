import React from "react";
import { useState } from "react";

function Birds(props) {
  const [name, setName] = useState("Sparrow");
  const [info, setInfo] = useState("");

  return (
    <div>
      <h1>{name}</h1>
      <h4>{info}</h4>
      <button style={{ marginRight: "2%" }} onClick={() => setName(props.name)}>
        name
      </button>
      <button
        onClick={() =>
          setInfo(props.info)
        }
      >
        info
      </button>
    </div>
  );
}
export default Birds;
