import React, { useState } from 'react';

const Employees = () =>{
    const [name, setName] = useState("Suraj");
    const [info, setInfo] = useState("");
    return (
        <div>
          <h1>{name}</h1>
          <h4>{info}</h4>
          <button style={{ marginRight: "2%" }} onClick={() => setName("Suraj Madde")}>
            Username
          </button>
          <button
            onClick={() =>
              setInfo(`This is Employee test component`)
            }
          >
            info
          </button>
        </div>
      );
    }
    export default Employees;
    