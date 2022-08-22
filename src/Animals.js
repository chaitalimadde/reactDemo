import React from "react";
import { useState } from "react";

function Animals() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

  return (
    <div>
      <h1>{name}</h1>
      <h4>{info}</h4>
      <button style={{ marginRight: "2%" }} onClick={() => setName("Lion")}>
        name
      </button>
      <button
        onClick={() =>
          setInfo(`The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. 
        It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at 
        the end of its tail. It is sexually dimorphic;adult male lions are larger than females and
        have a prominent mane.`)
        }
      >
        info
      </button>
    </div>
  );
}
export default Animals;
